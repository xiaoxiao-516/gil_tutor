import svgPaths from "../../imports/svg-i8bsv8j0y1";
import svgEmptyState from "../../imports/svg-3r90azh3mw";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { CustomSelect } from "../components/CustomSelect";
import { showToast } from "../components/CustomToast";
import { HeaderDropdown } from "../components/HeaderDropdown";
import IcNavBack from "../../imports/IcNavBack";

/* ─── Data structures ─── */

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

interface LessonModule {
  type: "course" | "practice";
  title: string;
  duration: string;
  practiceTypes?: number;
  added: boolean;
  available?: boolean;
}

interface SectionCard {
  id: string;
  title: string;
  recommended: boolean;
  modules: LessonModule[];
}

/* ─── Subject labels ─── */
const subjectLabelMap: Record<string, string> = {
  math: "数学",
  chinese: "语文",
  english: "英语",
  physics: "物理",
  chemistry: "化学",
};

const subjectSelectOptions = [
  { label: "数学", value: "math" },
  { label: "语文", value: "chinese" },
  { label: "英语", value: "english" },
  { label: "物理", value: "physics" },
  { label: "化学", value: "chemistry" },
];

/* ─── Textbook options ─── */
const textbookOptionsBySubject: Record<string, Record<string, { label: string; value: string }[]>> = {
  high: {
    math: [
      { label: "高一·人教版必修1", value: "gao1-rj-bx1" },
      { label: "高一·人教版必修2", value: "gao1-rj-bx2" },
      { label: "高二·人教版选择性必修1", value: "gao2-rj-xxbx1" },
    ],
    chinese: [
      { label: "高一·人教版必修上", value: "chinese-gao1-bxs" },
      { label: "高一·人教版必修下", value: "chinese-gao1-bxx" },
    ],
    english: [
      { label: "高一·人教版必修1", value: "english-gao1-bx1" },
      { label: "高一·人教版必修2", value: "english-gao1-bx2" },
    ],
    physics: [
      { label: "高一·人教版必修1", value: "physics-gao1-bx1" },
      { label: "高一·人教版必修2", value: "physics-gao1-bx2" },
    ],
    chemistry: [
      { label: "高一·人教版必修1", value: "chemistry-gao1-bx1" },
      { label: "高一·人教版必修2", value: "chemistry-gao1-bx2" },
    ],
  },
  middle: {
    math: [
      { label: "七年级·人教版上册", value: "mid-math-7s" },
      { label: "七年级·人教版下册", value: "mid-math-7x" },
    ],
    chinese: [
      { label: "七年级·人教版上册", value: "mid-chinese-7s" },
    ],
    english: [
      { label: "七年级·人教版上册", value: "mid-english-7s" },
    ],
    physics: [
      { label: "八年级·人教版上册", value: "mid-physics-8s" },
    ],
    chemistry: [
      { label: "九年级·人教版上册", value: "mid-chemistry-9s" },
    ],
  },
};

/* ─── Tree data ─── */
const treeData: Record<string, TreeNode[]> = {
  "gao1-rj-bx1": [
    {
      id: "ch1",
      label: "集合与常用逻辑用语",
      children: [
        {
          id: "ch1-1",
          label: "集合",
          children: [
            { id: "ch1-1-1", label: "1.1.1 集合及表示方法" },
            { id: "ch1-1-2", label: "1.1.2 集合间的基本关系" },
            { id: "ch1-1-3", label: "1.1.3 集合的基本运算" },
          ],
        },
        {
          id: "ch1-2",
          label: "常用逻辑用语",
          children: [
            { id: "ch1-2-1", label: "1.2.1 充分条件与必要条件" },
            { id: "ch1-2-2", label: "1.2.2 全称量词与存在量词" },
          ],
        },
      ],
    },
    {
      id: "ch2",
      label: "函数",
      children: [
        {
          id: "ch2-1",
          label: "函数的概念与性质",
          children: [
            { id: "ch2-1-1", label: "2.1.1 函数的概念" },
            { id: "ch2-1-2", label: "2.1.2 函数的表示法" },
          ],
        },
      ],
    },
    { id: "ch3", label: "指数函数与对数函数" },
  ],
  "gao1-rj-bx2": [
    {
      id: "ch-b2-1",
      label: "空间向量",
      children: [
        {
          id: "ch-b2-1-1",
          label: "空间向量及其运算",
          children: [
            { id: "ch-b2-1-1-1", label: "空间向量及其线性运算" },
          ],
        },
        { id: "ch-b2-1-2", label: "空间向量基本定理" },
      ],
    },
    { id: "ch-b2-2", label: "直线和圆" },
  ],
  "gao2-rj-xxbx1": [
    {
      id: "ch-xxbx1-1",
      label: "计数原理",
      children: [
        { id: "ch-xxbx1-1-1", label: "分类加法计数原理" },
        { id: "ch-xxbx1-1-2", label: "分步乘法计数原理" },
      ],
    },
  ],
  "chinese-gao1-bxs": [
    {
      id: "chn-1",
      label: "青春岁月",
      children: [
        {
          id: "chn-1-1",
          label: "诗歌鉴赏",
          children: [
            { id: "chn-1-1-1", label: "沁园春·长沙" },
            { id: "chn-1-1-2", label: "立在地球边上放号" },
          ],
        },
      ],
    },
  ],
  "chinese-gao1-bxx": [
    {
      id: "chn-b2-1",
      label: "中华文明之光",
      children: [
        { id: "chn-b2-1-1", label: "子路、曾皙、冉有、公西华侍坐" },
      ],
    },
  ],
  "english-gao1-bx1": [
    {
      id: "eng-1",
      label: "Teenage Life",
      children: [
        {
          id: "eng-1-1",
          label: "Listening & Speaking",
          children: [
            { id: "eng-1-1-1", label: "School Activities" },
            { id: "eng-1-1-2", label: "After-school Clubs" },
          ],
        },
      ],
    },
  ],
  "english-gao1-bx2": [
    {
      id: "eng-b2-1",
      label: "Cultural Heritage",
      children: [
        { id: "eng-b2-1-1", label: "From Problems to Solutions" },
      ],
    },
  ],
  "physics-gao1-bx1": [
    {
      id: "phy-1",
      label: "运动的描述",
      children: [
        {
          id: "phy-1-1",
          label: "质点 参考系",
          children: [
            { id: "phy-1-1-1", label: "1.1 质点" },
            { id: "phy-1-1-2", label: "1.2 参考系和坐标系" },
          ],
        },
      ],
    },
  ],
  "physics-gao1-bx2": [
    {
      id: "phy-b2-1",
      label: "抛体运动",
      children: [
        { id: "phy-b2-1-1", label: "运动的合成与分解" },
      ],
    },
  ],
  "chemistry-gao1-bx1": [
    {
      id: "chem-1",
      label: "物质及其变化",
      children: [
        {
          id: "chem-1-1",
          label: "物质的分类及转化",
          children: [
            { id: "chem-1-1-1", label: "1.1.1 物质的分类" },
            { id: "chem-1-1-2", label: "1.1.2 物质的转化" },
          ],
        },
      ],
    },
  ],
  "chemistry-gao1-bx2": [
    {
      id: "chem-b2-1",
      label: "化学反应与能量",
      children: [
        { id: "chem-b2-1-1", label: "化学能与热能" },
      ],
    },
  ],
  "mid-math-7s": [
    {
      id: "mid-m7s-1",
      label: "有理数",
      children: [
        { id: "mid-m7s-1-1", label: "正数和负数" },
        { id: "mid-m7s-1-2", label: "有理数的加减法" },
      ],
    },
  ],
  "mid-math-7x": [
    {
      id: "mid-m7x-1",
      label: "相交线与平行线",
      children: [
        { id: "mid-m7x-1-1", label: "相交线" },
      ],
    },
  ],
  "mid-chinese-7s": [
    {
      id: "mid-c7s-1",
      label: "四季美景",
      children: [
        { id: "mid-c7s-1-1", label: "春" },
      ],
    },
  ],
  "mid-english-7s": [
    {
      id: "mid-e7s-1",
      label: "My name's Gina",
      children: [
        { id: "mid-e7s-1-1", label: "Section A" },
      ],
    },
  ],
  "mid-physics-8s": [
    {
      id: "mid-p8s-1",
      label: "机械运动",
      children: [
        { id: "mid-p8s-1-1", label: "长度和时间的测量" },
      ],
    },
  ],
  "mid-chemistry-9s": [
    {
      id: "mid-ch9s-1",
      label: "走进化学世界",
      children: [
        { id: "mid-ch9s-1-1", label: "物质的变化和性质" },
      ],
    },
  ],
};

/* ─── Section cards data ─── */
const sectionCardsData: Record<string, SectionCard[]> = {
  "ch1-1-1": [
    {
      id: "cs1",
      title: "1.1.1 集合及表示方法",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约51分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约18分钟", practiceTypes: 5, added: false },
      ],
    },
  ],
  "ch1-1-2": [
    {
      id: "cs2",
      title: "1.1.2 集合间的基本关系",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约35分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约12分钟", practiceTypes: 4, added: false },
      ],
    },
  ],
  "ch1-1-3": [
    {
      id: "cs3",
      title: "1.1.3 集合的基本运算",
      recommended: false,
      modules: [
        { type: "course", title: "课程学习", duration: "约40分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约15分钟", practiceTypes: 6, added: false },
      ],
    },
  ],
};

function getCardsForNode(nodeId: string): SectionCard[] {
  if (sectionCardsData[nodeId]) return sectionCardsData[nodeId];
  return [
    {
      id: `default-${nodeId}`,
      title: nodeId,
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约30分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约10分钟", practiceTypes: 3, added: false },
      ],
    },
  ];
}

/* ─── Tree Arrow SVG ─── */
function TreeArrow({ expanded }: { expanded: boolean }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 transition-transform duration-200"
      style={{
        width: 12,
        height: 12,
        transform: expanded ? "rotate(0deg)" : "rotate(-90deg)",
      }}
    >
      <svg width="7" height="4" viewBox="0 0 7 3.75" fill="none">
        <path d={svgPaths.p32be8f00} fill="var(--gray-3)" />
      </svg>
    </div>
  );
}

/* ─── Course Icon ─── */
function CourseIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p15bf1f72} fill="var(--muted-foreground)" stroke="var(--muted-foreground)" />
        <path d={svgPaths.p373e8380} fill="var(--muted-foreground)" />
      </svg>
    </div>
  );
}

/* ─── Practice Icon ─── */
function PracticeIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p205d7200} stroke="var(--muted-foreground)" strokeLinecap="square" />
        <path d={svgPaths.p71c5400} stroke="var(--muted-foreground)" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── Tree Node Component ─── */
function TreeNodeItem({
  node,
  level,
  expandedNodes,
  selectedNode,
  onToggle,
  onSelect,
}: {
  node: TreeNode;
  level: number;
  expandedNodes: Set<string>;
  selectedNode: string;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = selectedNode === node.id;
  const isLeaf = !hasChildren;

  return (
    <div className="flex flex-col gap-[4px] w-full">
      <button
        onClick={() => {
          if (hasChildren) onToggle(node.id);
          onSelect(node.id);
        }}
        className={`w-full rounded-[6px] text-left transition-colors ${
          isSelected
            ? "bg-sidebar"
            : "hover:bg-[rgba(235,241,255,0.5)]"
        }`}
        style={{
          padding: isLeaf ? "8px 12px 8px " + (14 * level + 8) + "px" : "8px",
          paddingLeft: isLeaf ? 14 * level + 8 + "px" : level > 0 ? 14 * level + 8 + "px" : "8px",
          minHeight: 38,
        }}
      >
        <div className="flex items-center gap-[10px]">
          {hasChildren && <TreeArrow expanded={isExpanded} />}
          <span
            className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: isSelected
                ? "var(--font-weight-medium)"
                : "var(--font-weight-regular)",
              color: isSelected
                ? "var(--sidebar-primary)"
                : "var(--foreground)",
            }}
          >
            {node.label}
          </span>
        </div>
      </button>

      {hasChildren && isExpanded && (
        <div className="flex flex-col gap-[4px] w-full">
          {node.children!.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              level={level + 1}
              expandedNodes={expandedNodes}
              selectedNode={selectedNode}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Helpers ─── */
function findLeafNodes(nodes: TreeNode[], targetId: string): string[] {
  for (const node of nodes) {
    if (node.id === targetId) return collectLeaves(node);
    if (node.children) {
      const result = findLeafNodes(node.children, targetId);
      if (result.length > 0) return result;
    }
  }
  return [];
}

function collectLeaves(node: TreeNode): string[] {
  if (!node.children || node.children.length === 0) return [node.id];
  return node.children.flatMap(collectLeaves);
}

function findLabel(nodes: TreeNode[], id: string): string {
  for (const node of nodes) {
    if (node.id === id) return node.label;
    if (node.children) {
      const r = findLabel(node.children, id);
      if (r) return r;
    }
  }
  return "";
}

/* ─── Main Component ─── */
export function CourseBankPage() {
  const [subject, setSubject] = useState("math");
  const [textbook, setTextbook] = useState("gao1-rj-bx1");
  const [schoolLevel, setSchoolLevel] = useState<"middle" | "high">("high");
  const navigate = useNavigate();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(["ch1", "ch1-1"])
  );
  const [selectedNode, setSelectedNode] = useState("ch1-1");
  const [moduleStates, setModuleStates] = useState<Record<string, boolean[]>>({});

  const tree = treeData[textbook] || [];

  const handleToggle = (id: string) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelect = (id: string) => {
    setSelectedNode(id);
  };

  const handleTextbookChange = (val: string) => {
    setTextbook(val);
    const firstTree = treeData[val] || [];
    if (firstTree.length > 0) {
      setExpandedNodes(new Set([firstTree[0].id]));
      setSelectedNode(firstTree[0].id);
    }
  };

  const handleSubjectChange = (val: string) => {
    setSubject(val);
    const firstTextbook = textbookOptionsBySubject[schoolLevel][val]?.[0]?.value;
    if (firstTextbook) {
      setTextbook(firstTextbook);
      const firstTree = treeData[firstTextbook] || [];
      if (firstTree.length > 0) {
        setExpandedNodes(new Set([firstTree[0].id]));
        setSelectedNode(firstTree[0].id);
      }
    }
  };

  const handleSchoolLevelChange = (level: "middle" | "high") => {
    if (level === schoolLevel) return;
    setSchoolLevel(level);
    const firstTextbook = textbookOptionsBySubject[level][subject]?.[0]?.value;
    if (firstTextbook) {
      setTextbook(firstTextbook);
      const firstTree = treeData[firstTextbook] || [];
      if (firstTree.length > 0) {
        setExpandedNodes(new Set([firstTree[0].id]));
        setSelectedNode(firstTree[0].id);
      }
    }
  };

  const leafIds = findLeafNodes(tree, selectedNode);
  const displayLeaves = leafIds.length > 0 ? leafIds : [selectedNode];

  const getModuleAdded = (sectionId: string, moduleIdx: number, defaultVal: boolean) => {
    const key = sectionId;
    if (moduleStates[key] && moduleStates[key][moduleIdx] !== undefined) {
      return moduleStates[key][moduleIdx];
    }
    return defaultVal;
  };

  const toggleModule = (sectionId: string, moduleIdx: number, currentAdded: boolean) => {
    setModuleStates((prev) => {
      const key = sectionId;
      const cards = getCardsForNode(
        displayLeaves.find((l) =>
          getCardsForNode(l).some((c) => c.id === sectionId)
        ) || ""
      );
      const card = cards.find((c) => c.id === sectionId);
      if (!card) return prev;

      const current = prev[key] || card.modules.map((m) => m.added);
      const next = [...current];
      next[moduleIdx] = !currentAdded;
      return { ...prev, [key]: next };
    });
  };

  // Count added modules
  const addedCount = (() => {
    let count = 0;
    displayLeaves.forEach((leafId) => {
      const cards = getCardsForNode(leafId);
      cards.forEach((card) => {
        card.modules.forEach((mod, modIdx) => {
          if (getModuleAdded(card.id, modIdx, mod.added)) count++;
        });
      });
    });
    return count;
  })();

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Page title */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="shrink-0 size-[30px] cursor-pointer"
          >
            <IcNavBack />
          </button>
          <h2
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--card-foreground)",
            }}
          >
            课程
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <HeaderDropdown
            label={schoolLevel === "high" ? "高中" : "初中"}
            value={schoolLevel}
            options={[
              { label: "初中", value: "middle" },
              { label: "高中", value: "high" },
            ]}
            onChange={(val) => handleSchoolLevelChange(val as "middle" | "high")}
          />
          <HeaderDropdown
            label={subjectLabelMap[subject] || "数学"}
            value={subject}
            options={subjectSelectOptions}
            onChange={handleSubjectChange}
          />
        </div>
      </div>

      {/* Main content: tree + cards */}
      <div className="flex gap-0 flex-1 min-h-0 rounded-[16px]" style={{ border: "1px solid #E9ECF5" }}>
        {/* Left panel: Knowledge tree */}
        <div className="w-[266px] shrink-0 flex flex-col min-h-0">
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="flex flex-col px-5 py-6 flex-1 min-h-0">
              {/* Textbook selector */}
              <div className="mb-3">
                <CustomSelect
                  value={textbook}
                  onChange={handleTextbookChange}
                  options={textbookOptionsBySubject[schoolLevel][subject] || []}
                  placeholder="选择教材"
                />
              </div>
              {/* Tree */}
              <div className="flex-1 overflow-y-auto scrollbar-thin flex flex-col gap-[4px]">
                {tree.map((node) => (
                  <TreeNodeItem
                    key={node.id}
                    node={node}
                    level={0}
                    expandedNodes={expandedNodes}
                    selectedNode={selectedNode}
                    onToggle={handleToggle}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-[#e9ecf5] shrink-0" />

        {/* Right panel: Course cards */}
        <div className="flex-1 min-w-0 overflow-y-auto scrollbar-thin">
          <div className="w-full">
            <div>
              {(() => {
                const allItems: { leafId: string; card: SectionCard; leafLabel: string }[] = [];
                displayLeaves.forEach((leafId) => {
                  const cards = getCardsForNode(leafId);
                  const leafLabel = findLabel(tree, leafId);
                  cards.forEach((card) => {
                    allItems.push({ leafId, card, leafLabel });
                  });
                });
                return allItems.map(({ card, leafLabel }, idx) => (
                  <div key={card.id}>
                    <div className="flex flex-col gap-4 items-start p-6">
                      {/* Section title */}
                      <div className="flex gap-[4px] items-center w-full">
                        {card.recommended && (
                          <span
                            className="flex items-center justify-center px-[4px] rounded-[4px] shrink-0"
                            style={{
                              backgroundColor: "#FA9524",
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "#ffffff",
                            }}
                          >
                            推荐
                          </span>
                        )}
                        <span
                          style={{
                            fontSize: "var(--text-h4)",
                            fontWeight: "var(--font-weight-semibold)",
                            color: "var(--popover-foreground)",
                          }}
                        >
                          {leafLabel || card.title}
                        </span>
                      </div>

                      {/* Modules */}
                      <div className="flex flex-col gap-2 w-full">
                        {card.modules.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-[24px] w-full">
                            <div className="flex flex-col gap-[8px] items-center justify-center h-[215px] w-full">
                              <div className="relative shrink-0 size-[120px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
                                  <path d={svgEmptyState.p3b03ef40} fill="#E0EAFF" />
                                  <path d={svgEmptyState.p3b5f0300} fill="#E0EAFF" />
                                  <path d={svgEmptyState.p3c112300} fill="#F4F7FE" />
                                  <path d={svgEmptyState.p329f1180} fill="#101019" />
                                  <path d={svgEmptyState.p5354c0} fill="white" />
                                  <path d={svgEmptyState.p3c597100} fill="#EBF1FF" />
                                  <path d="M37 53H95" stroke="#EBF1FF" strokeWidth="4" />
                                  <path d={svgEmptyState.p3fde60b0} fill="#EBF1FF" />
                                  <path d="M37 68H94" stroke="#EBF1FF" strokeWidth="4" />
                                  <path d={svgEmptyState.pfc52f00} stroke="#101019" strokeWidth="1.25591" fill="none" />
                                  <path d={svgEmptyState.p17a6580} fill="#2DC01F" />
                                  <path d={svgEmptyState.p1a071180} stroke="#101019" strokeWidth="1.25591" fill="none" />
                                </svg>
                              </div>
                              <p
                                className="text-center"
                                style={{
                                  fontSize: "var(--text-sm)",
                                  fontWeight: "var(--font-weight-regular)",
                                  color: "#838BAB",
                                }}
                              >
                                当前章节下没有课程
                              </p>
                            </div>
                          </div>
                        ) : (
                          card.modules.map((mod, modIdx) => {
                            const isAdded = getModuleAdded(card.id, modIdx, mod.added);
                            return (
                              <div
                                key={modIdx}
                                className="rounded-[12px] w-full"
                                style={{ backgroundColor: "#F4F7FE" }}
                              >
                                <div className="flex items-center justify-between px-3 py-2 w-full h-[60px]">
                                  {/* Left: icon + info */}
                                  <div className="flex gap-[6px] items-start">
                                    <div className="flex items-center pt-[5px]">
                                      {mod.type === "course" ? (
                                        <CourseIcon />
                                      ) : (
                                        <PracticeIcon />
                                      )}
                                    </div>
                                    <div className="flex flex-col gap-[3px]">
                                      <div className="flex gap-2 items-center">
                                        <span
                                          style={{
                                            fontSize: "var(--text-base)",
                                            fontWeight: "var(--font-weight-medium)",
                                            color: "var(--popover-foreground)",
                                          }}
                                        >
                                          {mod.title}
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "var(--text-base)",
                                            fontWeight: "var(--font-weight-medium)",
                                            color: "var(--popover-foreground)",
                                          }}
                                        >
                                          {mod.type === "practice" && mod.practiceTypes
                                            ? `(${mod.practiceTypes}种题型，${mod.duration})`
                                            : `(${mod.duration})`}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right: action buttons */}
                                  <div className="flex gap-[10px] items-center shrink-0">
                                    <button
                                      onClick={() => {
                                        const label = leafLabel || card.title;
                                        const dur = mod.duration;
                                        if (mod.type === "practice") {
                                          navigate(`/exercise-preview?title=${encodeURIComponent(label)}&duration=${encodeURIComponent(dur)}&groups=${mod.practiceTypes || 5}`);
                                        } else {
                                          navigate(`/course-preview?title=${encodeURIComponent(label)}&duration=${encodeURIComponent(dur)}`);
                                        }
                                      }}
                                      className="relative bg-white h-[32px] w-[88px] flex items-center justify-center rounded-[18px] cursor-pointer hover:bg-[#f8f9fc] transition-colors"
                                      style={{
                                        fontSize: "var(--text-sm)",
                                        fontWeight: "var(--font-weight-regular)",
                                        color: "#444963",
                                      }}
                                    >
                                      <div
                                        aria-hidden="true"
                                        className="absolute inset-0 pointer-events-none rounded-[18px]"
                                        style={{ border: "1px solid #dfe3f0" }}
                                      />
                                      预览课程
                                    </button>
                                    <button
                                      onClick={() => toggleModule(card.id, modIdx, isAdded)}
                                      className="relative h-[32px] w-[88px] flex items-center justify-center rounded-[18px] cursor-pointer bg-white transition-colors"
                                      style={{
                                        border: isAdded ? "1px solid #fca5a2" : "1px solid #9cb1fc",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "var(--text-sm)",
                                          fontWeight: "var(--font-weight-regular)",
                                          color: isAdded ? "#e0443f" : "#6574fc",
                                        }}
                                      >
                                        {isAdded ? "取消加入" : "加入"}
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="bg-white flex w-full items-center justify-between gap-[12px] px-[24px] py-[16px] relative shrink-0">
        <div aria-hidden className="absolute border-[#e9ecf5] border-solid border-t inset-0 pointer-events-none" />
        <p className="relative z-[1] shrink-0 min-w-0" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: "1.5" }}>
          <span style={{ color: "#444963" }}>已添加 </span>
          <span style={{ color: "var(--primary)" }}>{addedCount}</span>
          <span style={{ color: "#444963" }}> 个课程</span>
        </p>
        <button
          className={`relative z-[1] flex items-center justify-center h-[36px] w-[100px] py-[8px] rounded-[18px] shrink-0 ${addedCount > 0 ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
          style={{ backgroundColor: addedCount > 0 ? "var(--primary)" : "#C0C4D0" }}
          disabled={addedCount === 0}
        >
          <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5" }}>去布置</span>
        </button>
      </div>
    </div>
  );
}