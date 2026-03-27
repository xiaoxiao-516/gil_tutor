import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-hrhi0uopqy";
import IcNavBack from "../../imports/IcNavBack";

// ─── Types ───
interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

interface HomeworkItem {
  id: string;
  number: string;
  content: string;
  options: string[];
  tags: string[];
  joined: boolean;
  starred: boolean;
}

// ─── Mock Data ───
const mockTreeData: TreeNode[] = [
  {
    id: "ch1",
    label: "第一章 集合与常用逻辑用语",
    children: [
      {
        id: "ch1-1",
        label: "空间向量及其运算",
        children: [
          {
            id: "ch1-1-1",
            label: "空间向量及其线性运算",
            children: [{ id: "ch1-1-1-1", label: "空间向量及其线性运算" }],
          },
          { id: "ch1-1-2", label: "空间向量的数量积运算" },
        ],
      },
      { id: "ch1-2", label: "空间向量基本定理" },
      { id: "ch1-3", label: "空间向量及其运算的坐标" },
    ],
  },
  { id: "ch2", label: "直线和圆" },
  { id: "ch3", label: "圆锥曲线" },
];

const mockKnowledgeTreeData: TreeNode[] = [
  {
    id: "k1",
    label: "一轮复习（上）",
    children: [
      {
        id: "k1-1",
        label: "集合",
        children: [
          { id: "k1-1-1", label: "集合的基本概念" },
          { id: "k1-1-2", label: "集合的个数问题" },
          { id: "k1-1-3", label: "集合的基本运算" },
          { id: "k1-1-4", label: "集合综合" },
        ],
      },
      { id: "k1-2", label: "常用逻辑用语" },
      { id: "k1-3", label: "复数" },
      { id: "k1-4", label: "不等式" },
      { id: "k1-5", label: "函数" },
      { id: "k1-6", label: "导数" },
      { id: "k1-7", label: "三角函数" },
      { id: "k1-8", label: "解三角形" },
    ],
  },
  { id: "k2", label: "一轮复习（下）" },
  { id: "k3", label: "二轮复习" },
  { id: "k4", label: "三轮复习" },
];

const mockHomeworkItems: HomeworkItem[] = [
  {
    id: "hw1",
    number: "1.",
    content:
      "若函数y=f（x）在R上可导且满足不等式xf(x) > -f(x)恒成立, 则下列不等式一定成立的是（  ）",
    options: [
      "A.a f(b) > b f(a)",
      "B.a f(a) > b f(b)",
      "C.a f(a) < b f(b)",
      "D.a f(b) < b f(a)",
    ],
    tags: ["2020年·江西省·期末", "单选", "简单"],
    joined: true,
    starred: true,
  },
  {
    id: "hw2",
    number: "2.",
    content:
      "已知函数f(x) = x³ - 3x + 1，则f(x)在[-2, 2]上的最大值为（  ）",
    options: ["A. 1", "B. 3", "C. -1", "D. 5"],
    tags: ["2021年·北京·期中", "单选", "中等"],
    joined: false,
    starred: false,
  },
  {
    id: "hw3",
    number: "3.",
    content:
      "设等差数列{an}的前n项和为Sn，若a3 = 5, S5 = 25，则a8等于（  ）",
    options: ["A. 13", "B. 15", "C. 17", "D. 19"],
    tags: ["2022年·广东省·高考模拟", "单选", "简单"],
    joined: false,
    starred: false,
  },
  {
    id: "hw4",
    number: "4.",
    content:
      "已知向量a=(1,2), b=(x,1), 若a·b=5, 则x的值为（  ）",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    tags: ["2023年·浙江·月考", "单选", "简单"],
    joined: false,
    starred: true,
  },
];

// ─── Filter Options ───
const filterOptionsMap: Record<string, string[]> = {
  "题型": ["全部", "选择题", "填空题", "解答题", "判断题"],
  "难度": ["全部", "简单", "中等", "较难", "困难"],
  "地区": ["全部", "全国", "北京", "上海", "浙江", "江苏"],
  "年份": ["全部", "2026", "2025", "2024", "2023", "2022"],
  "按最新排序": ["按最新排序", "按最早排序", "按难度排序", "按热度排序"],
};

// ─── Arrow Down Icon ───
function ArrowDownIcon({ color = "#646B8A", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path
        d="M3.5 5.25L7 8.75L10.5 5.25"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Search Icon ───
function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <g transform="translate(1, 1)">
          <path
            clipRule="evenodd"
            d={svgPaths.p38519180}
            fill="#838BAB"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c8387f0}
            fill="#838BAB"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}

// ─── Star Icon ───
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path
          d={filled ? svgPaths.p160a2e00 : svgPaths.p1906d680}
          fill={filled ? "#FA9524" : "none"}
          stroke={filled ? "#FA9524" : "#646B8A"}
          strokeLinejoin="round"
          strokeWidth="1.2"
          transform="translate(1.5, 1.5)"
        />
      </svg>
    </div>
  );
}

// ─── Tree Chevron ───
function TreeChevron({ expanded, color = "#646B8A" }: { expanded: boolean; color?: string }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 transition-transform"
      style={{ transform: expanded ? "rotate(0deg)" : "rotate(90deg)" }}
    >
      <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
        <path d={svgPaths.p32be8f00} fill={color} transform="translate(2.5, 4)" />
      </svg>
    </div>
  );
}

// ─── Tree Item ───
function TreeItem({
  node,
  level,
  expandedIds,
  selectedId,
  onToggle,
  onSelect,
}: {
  node: TreeNode;
  level: number;
  expandedIds: Set<string>;
  selectedId: string | null;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;

  return (
    <div className="flex flex-col gap-[4px] w-full">
      <button
        className="w-full rounded-[6px] flex items-center gap-[10px] p-[8px] cursor-pointer transition-colors"
        style={{
          paddingLeft: hasChildren ? 8 : 30,
          backgroundColor: isSelected ? "#ebf1ff" : "transparent",
        }}
        onClick={() => {
          if (hasChildren) onToggle(node.id);
          onSelect(node.id);
        }}
      >
        {hasChildren && (
          <TreeChevron
            expanded={isExpanded}
            color={isSelected ? "var(--sidebar-primary)" : "#646B8A"}
          />
        )}
        <span
          className="flex-1 text-left"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: isSelected
              ? "var(--font-weight-medium)"
              : "var(--font-weight-regular)",
            color: isSelected ? "var(--sidebar-primary)" : "var(--card-foreground)",
            lineHeight: "1.5",
          }}
        >
          {node.label}
        </span>
      </button>
      {hasChildren && isExpanded && (
        <div className="pl-[14px] flex flex-col gap-[4px]">
          {node.children!.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
              expandedIds={expandedIds}
              selectedId={selectedId}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Tag ───
function Tag({ text }: { text: string }) {
  return (
    <div className="relative rounded-[4px] shrink-0" style={{ backgroundColor: "#f2f4f9" }}>
      <div className="flex items-center px-[6px] py-[2px]">
        <span
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-regular)",
            color: "var(--gray-3)",
            lineHeight: "1.5",
          }}
        >
          {text}
        </span>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-[4px]"
        style={{ border: "1px solid #dfe3f0" }}
      />
    </div>
  );
}

// ─── Filter Button ───
function FilterButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const options = filterOptionsMap[label] || ["全部"];
  const displayLabel = selected && selected !== "全部" ? selected : label;
  const isActive = selected && selected !== "全部";

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex gap-[4px] items-center cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-regular)",
            color: isActive ? "var(--primary)" : "#444963",
            lineHeight: "1.5",
          }}
        >
          {displayLabel}
        </span>
        <div
          className="transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ArrowDownIcon color={isActive ? "var(--primary)" : "#646B8A"} size={14} />
        </div>
      </button>
      {open && (
        <div
          className="absolute top-[calc(100%+4px)] left-0 z-50 min-w-[120px] rounded-[12px] flex flex-col gap-[2px] p-[4px]"
          style={{
            backgroundColor: "var(--popover)",
            boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)",
          }}
        >
          {options.map((opt) => {
            const isSelected = selected === opt || (!selected && (opt === "全部" || opt === label));
            return (
              <button
                key={opt}
                className="flex items-center w-full px-[16px] py-[12px] cursor-pointer rounded-[10px]"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: isSelected ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                  color: isSelected ? "var(--accent)" : "#444963",
                  lineHeight: "1.5",
                  backgroundColor: isSelected ? "var(--sidebar)" : "transparent",
                }}
                onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = "var(--sidebar)"; }}
                onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = "transparent"; }}
                onClick={() => {
                  setSelected(opt === "全部" || opt === label ? null : opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Homework Card ───
function HomeworkCard({
  item,
  onToggleJoin,
  onToggleStar,
}: {
  item: HomeworkItem;
  onToggleJoin: (id: string) => void;
  onToggleStar: (id: string) => void;
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white relative rounded-[12px] w-full">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-[12px]"
        style={{ border: "1px solid #e9ecf5" }}
      />
      <div className="flex flex-col gap-[12px] pt-[20px] px-[20px]">
        {/* Question stem */}
        <div className="flex gap-[8px] items-start w-full">
          <div className="flex items-center justify-center pt-[4px] shrink-0 w-[24px]">
            <span
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-regular)",
                color: "#444963",
                lineHeight: "1.5",
                fontFamily: "Avenir, sans-serif",
              }}
            >
              {item.number}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-[16px] pt-[4px]">
            <p
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--card-foreground)",
                lineHeight: "1.5",
              }}
            >
              {item.content}
            </p>
            {/* Options */}
            <div className="flex flex-wrap gap-x-[32px] gap-y-[16px]">
              {item.options.map((opt, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "var(--text-h4)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  {opt}
                </span>
              ))}
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-[6px]">
              {item.tags.map((tag, i) => (
                <Tag key={i} text={tag} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div
          className="flex items-center justify-between h-[56px] w-full"
          style={{ borderTop: "1px dashed #dfe3f0" }}
        >
          <div className="w-[217px]" />
          <div className="flex gap-[16px] items-center">
            {/* Answer toggle */}
            <button
              className="flex gap-[2px] items-center cursor-pointer"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "#444963",
                  lineHeight: "1.5",
                }}
              >
                答案解析
              </span>
              <div
                style={{
                  transform: showAnswer ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                <ArrowDownIcon color="#444963" size={16} />
              </div>
            </button>

            {/* Divider */}
            <div className="h-[12px] w-0" style={{ borderLeft: "1px solid #E9ECF5" }} />

            {/* Star */}
            <button
              className="cursor-pointer"
              onClick={() => onToggleStar(item.id)}
            >
              <StarIcon filled={item.starred} />
            </button>

            {/* Join/Cancel button */}
            <button
              className="flex items-center justify-center h-[32px] w-[80px] rounded-[16px] bg-white cursor-pointer"
              style={{
                border: item.joined
                  ? "1px solid #fca5a2"
                  : "1px solid #9cb1fc",
              }}
              onClick={() => onToggleJoin(item.id)}
            >
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: item.joined
                    ? "var(--font-weight-regular)"
                    : "var(--font-weight-medium)",
                  color: item.joined ? "#e0443f" : "var(--primary)",
                  lineHeight: "1.5",
                }}
              >
                {item.joined ? "取消加入" : "加 入"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───
export function HomeworkBankPage() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("数学");
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);

  const [treeMode, setTreeMode] = useState<"chapter" | "knowledge">("chapter");
  const defaultExpanded: Record<string, string[]> = {
    chapter: ["ch1", "ch1-1", "ch1-1-1"],
    knowledge: ["k1", "k1-1"],
  };
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(defaultExpanded.chapter)
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>("ch1");
  const [items, setItems] = useState<HomeworkItem[]>(mockHomeworkItems);

  const chapterTextbooks = [
    "高中数学-人教B版-必修1",
    "高中数学-人教B版-必修2",
    "高中数学-人教B版-必修3",
    "高中数学-人教B版-必修4",
  ];
  const knowledgeTextbooks = [
    "高中数学-高考",
    "高中数学-学业水平",
    "高中数学-竞赛",
  ];
  const textbookOptions = treeMode === "chapter" ? chapterTextbooks : knowledgeTextbooks;
  const [selectedTextbook, setSelectedTextbook] = useState(chapterTextbooks[0]);
  const [textbookDropdownOpen, setTextbookDropdownOpen] = useState(false);
  const textbookRef = useRef<HTMLDivElement>(null);

  const subjects = ["数学", "语文", "英语", "物理", "化学", "生物"];

  const joinedCount = items.filter((i) => i.joined).length;

  useEffect(() => {
    setSelectedTextbook(treeMode === "chapter" ? chapterTextbooks[0] : knowledgeTextbooks[0]);
    setTextbookDropdownOpen(false);
  }, [treeMode]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target as Node)) {
        setSubjectDropdownOpen(false);
      }
      if (textbookRef.current && !textbookRef.current.contains(e.target as Node)) {
        setTextbookDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleJoin = (id: string) => {
    setItems((prev) =>
      prev.map((q) => (q.id === id ? { ...q, joined: !q.joined } : q))
    );
  };

  const toggleStar = (id: string) => {
    setItems((prev) =>
      prev.map((q) => (q.id === id ? { ...q, starred: !q.starred } : q))
    );
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Header */}
      <div className="flex items-center h-[48px] shrink-0 mb-[4px]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="shrink-0 size-[30px] cursor-pointer"
          >
            <IcNavBack />
          </button>
          <span
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--card-foreground)",
              lineHeight: "1.5",
            }}
          >
            作业
          </span>
        </div>

        <div className="flex items-center gap-[12px] ml-auto">
          {/* Search */}
          <div
            className="flex items-center gap-[6px] h-[32px] px-[12px] rounded-[16px] bg-white"
            style={{ border: "1px solid #cfd5e8" }}
          >
            <input
              className="bg-transparent outline-none flex-1 w-[190px]"
              placeholder="在作业资源中搜索"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--card-foreground)",
                lineHeight: "1.5",
              }}
            />
            <SearchIcon />
          </div>

          {/* Subject selector */}
          <div className="relative" ref={subjectRef}>
            <button
              className="flex gap-[6px] items-center h-[32px] px-[16px] rounded-[18px] cursor-pointer"
              style={{ border: "1px solid #e9ecf5" }}
              onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
            >
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "#444963",
                  lineHeight: "1.5",
                }}
              >
                {selectedSubject}
              </span>
              <ArrowDownIcon color="#444963" size={12} />
            </button>
            {subjectDropdownOpen && (
              <div
                className="absolute right-0 top-[36px] bg-white rounded-[12px] p-[4px] z-50 min-w-[100px]"
                style={{ boxShadow: "0px 8px 32px rgba(16,18,25,0.08)" }}
              >
                {subjects.map((s) => (
                  <button
                    key={s}
                    className="w-full text-left px-[16px] py-[8px] rounded-[8px] cursor-pointer hover:bg-[rgba(235,241,255,0.5)]"
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight:
                        selectedSubject === s
                          ? "var(--font-weight-medium)"
                          : "var(--font-weight-regular)",
                      color:
                        selectedSubject === s
                          ? "var(--sidebar-primary)"
                          : "var(--card-foreground)",
                    }}
                    onClick={() => {
                      setSelectedSubject(s);
                      setSubjectDropdownOpen(false);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex gap-[16px] flex-1 pt-[16px] min-h-0">
        {/* Tree sidebar */}
        <div
          className="shrink-0 w-[234px] bg-white rounded-[16px] flex flex-col overflow-hidden"
          style={{ border: "1px solid #e9ecf5" }}
        >
          <div className="flex flex-col gap-[12px] p-[16px] pb-[24px] flex-1 overflow-y-auto scrollbar-thin" style={{ scrollbarGutter: "stable" }}>
            {/* Tree mode toggle */}
            <div
              className="relative flex w-full rounded-[6px] p-[2px]"
              style={{ backgroundColor: "rgba(244, 247, 254, 0.6)" }}
            >
              <div
                className="absolute top-[2px] bottom-[2px] rounded-[5px] bg-white transition-all duration-200 ease-in-out"
                style={{
                  width: "calc(50% - 2px)",
                  left: treeMode === "chapter" ? "2px" : "calc(50%)",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              />
              <button
                className="relative z-[1] flex-1 flex items-center justify-center py-[6px] rounded-[5px] cursor-pointer bg-transparent"
                onClick={() => { setTreeMode("chapter"); setExpandedIds(new Set(defaultExpanded.chapter)); setSelectedNodeId("ch1"); }}
              >
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight:
                      treeMode === "chapter"
                        ? "var(--font-weight-medium)"
                        : "var(--font-weight-regular)",
                    color:
                      treeMode === "chapter"
                        ? "var(--sidebar-primary)"
                        : "var(--muted-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  按章节
                </span>
              </button>
              <button
                className="relative z-[1] flex-1 flex items-center justify-center py-[6px] rounded-[5px] cursor-pointer bg-transparent"
                onClick={() => { setTreeMode("knowledge"); setExpandedIds(new Set(defaultExpanded.knowledge)); setSelectedNodeId("k1-1-1"); }}
              >
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight:
                      treeMode === "knowledge"
                        ? "var(--font-weight-medium)"
                        : "var(--font-weight-regular)",
                    color:
                      treeMode === "knowledge"
                        ? "var(--sidebar-primary)"
                        : "var(--muted-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  按知识点
                </span>
              </button>
            </div>

            {/* Textbook selector */}
            <div ref={textbookRef} className="relative">
              <div
                className="flex items-center justify-between px-[12px] py-[8px] rounded-[6px] bg-white h-[36px] cursor-pointer"
                style={{ border: `1px solid ${textbookDropdownOpen ? "var(--sidebar-primary)" : "#cfd5e8"}` }}
                onClick={() => setTextbookDropdownOpen(!textbookDropdownOpen)}
              >
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  {selectedTextbook}
                </span>
                <ArrowDownIcon color="#646B8A" size={14} />
              </div>
              {textbookDropdownOpen && (
                <div
                  className="absolute left-0 right-0 top-[40px] z-20 rounded-[8px] bg-white overflow-y-auto scrollbar-thin"
                  style={{
                    border: "1px solid #e9ecf5",
                    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
                    maxHeight: "320px",
                  }}
                >
                  {textbookOptions.map((tb) => (
                    <div
                      key={tb}
                      className="px-[12px] py-[10px] cursor-pointer"
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        lineHeight: "1.5",
                        color: tb === selectedTextbook ? "var(--sidebar-primary)" : "var(--card-foreground)",
                        backgroundColor: tb === selectedTextbook ? "rgba(101, 116, 252, 0.08)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (tb !== selectedTextbook) e.currentTarget.style.backgroundColor = "rgba(101, 116, 252, 0.04)";
                      }}
                      onMouseLeave={(e) => {
                        if (tb !== selectedTextbook) e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onClick={() => {
                        setSelectedTextbook(tb);
                        setTextbookDropdownOpen(false);
                      }}
                    >
                      {tb}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tree */}
            <div className="flex flex-col gap-[4px]">
              {(treeMode === "chapter" ? mockTreeData : mockKnowledgeTreeData).map((node) => (
                <TreeItem
                  key={node.id}
                  node={node}
                  level={0}
                  expandedIds={expandedIds}
                  selectedId={selectedNodeId}
                  onToggle={toggleExpand}
                  onSelect={setSelectedNodeId}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Questions area */}
        <div
          className="flex-1 bg-white rounded-[16px] flex flex-col overflow-hidden min-h-0"
          style={{ border: "1px solid #e9ecf5" }}
        >
          <div className="flex flex-col gap-[16px] p-[20px] flex-1 overflow-y-auto scrollbar-thin">
            {/* Filters + Results count */}
            <div className="shrink-0 sticky top-[-20px] z-10 bg-white -mx-[20px] px-[20px] -mt-[16px]">
              <div
                className="flex items-center justify-between pt-[20px] pb-[20px]"
                style={{ borderBottom: "1px solid #e9ecf5" }}
              >
                <div className="flex gap-[20px] items-center">
                  <FilterButton label="题型" />
                  <FilterButton label="难度" />
                  <FilterButton label="地区" />
                  <FilterButton label="年份" />
                </div>
                <FilterButton label="按最新排序" />
              </div>
              <div className="flex gap-[8px] items-center py-[12px]">
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--card-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  作业列表
                </span>
                <span
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--muted-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  共{items.length}个结果
                </span>
              </div>
            </div>

            {/* Homework cards */}
            <div className="flex flex-col gap-[12px]">
              {items.map((q) => (
                <HomeworkCard
                  key={q.id}
                  item={q}
                  onToggleJoin={toggleJoin}
                  onToggleStar={toggleStar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="bg-white flex w-full items-center justify-between gap-[12px] px-[24px] py-[16px] relative shrink-0">
        <div aria-hidden className="absolute border-[#e9ecf5] border-solid border-t inset-0 pointer-events-none" />
        <p className="relative z-[1] shrink-0 min-w-0" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: "1.5" }}>
          <span style={{ color: "#444963" }}>已添加 </span>
          <span style={{ color: "var(--primary)" }}>{joinedCount}</span>
          <span style={{ color: "#444963" }}> 题</span>
        </p>
        <div className="relative z-[1] flex items-center gap-[12px] shrink-0">
          <button
            className="flex items-center justify-center h-[36px] w-[100px] py-[8px] rounded-[18px] bg-white relative cursor-pointer shrink-0"
          >
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18px]" style={{ border: "1px solid #dfe3f0" }} />
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>取消布置</span>
          </button>
          <button
            className={`flex items-center justify-center h-[36px] w-[100px] py-[8px] rounded-[18px] shrink-0 ${joinedCount > 0 ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
            style={{ backgroundColor: joinedCount > 0 ? "var(--primary)" : "#C0C4D0" }}
            disabled={joinedCount === 0}
          >
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5" }}>去布置</span>
          </button>
        </div>
      </div>
    </div>
  );
}