import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-hrhi0uopqy";
import svgPaths2 from "../../imports/svg-d0d4r2dbuk";
import IcUpload from "../../imports/IcUpload14";
import svgPathsUpload from "../../imports/svg-pzealc5p9r";
import svgPathsDialog from "../../imports/svg-71glyoueoc";
import IcNavBack from "../../imports/IcNavBack";

// ─── Types ───
interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

interface Question {
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

const mockQuestions: Question[] = [
  {
    id: "q1",
    number: "123.",
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
    id: "q2",
    number: "8.",
    content:
      "若函数y=f（x）在R上可导且满足不等式xf(x) > -f(x)恒成立, 则下列不等式一定成立的是（  ）",
    options: [
      "A.a f(b) > b f(a)",
      "B.a f(a) > b f(b)",
      "C.a f(a) < b f(b)",
      "D.a f(b) < b f(a)",
    ],
    tags: ["2020年·江西省·期末", "单选", "简单"],
    joined: false,
    starred: false,
  },
  {
    id: "q3",
    number: "15.",
    content:
      "已知函数f(x) = x³ - 3x + 1，则f(x)在[-2, 2]上的最大值为（  ）",
    options: ["A. 1", "B. 3", "C. -1", "D. 5"],
    tags: ["2021年·北京·期中", "单选", "中等"],
    joined: false,
    starred: false,
  },
  {
    id: "q4",
    number: "27.",
    content:
      "设等差数列{an}的前n项和为Sn，若a3 = 5, S5 = 25，则a8等于（  ）",
    options: ["A. 13", "B. 15", "C. 17", "D. 19"],
    tags: ["2022年·广东省·高考模拟", "单选", "简单"],
    joined: true,
    starred: true,
  },
];

const myResources = [
  { id: "r1", name: "高三数学复习单元试卷集", fileType: "pdf" as const, grade: "高一，高二，高三", updatedAt: "2025-01-30", starred: true, action1: "打开", action2: "分享" },
  { id: "r2", name: "高三数学复习单元试卷集", fileType: "folder" as const, grade: "高二，高三", updatedAt: "2025-01-30", starred: false, action1: "打开", action2: "分享" },
  { id: "r3", name: "高三数学复习单元试卷集", fileType: "xls" as const, grade: "高一", updatedAt: "2025-01-30", starred: false, action1: "加入", action2: "分享" },
  { id: "r4", name: "高三数学复习单元试卷集", fileType: "png" as const, grade: "高二", updatedAt: "2025-01-30", starred: false, action1: "加入", action2: "分享" },
  { id: "r5", name: "高三数学复习单元试卷集", fileType: "mp3" as const, grade: "高一", updatedAt: "2025-01-30", starred: false, action1: "加入", action2: "分享" },
  { id: "r6", name: "高三数学复习单元试卷集", fileType: "pdf" as const, grade: "高一", updatedAt: "2020-01-30", starred: false, action1: "加入", action2: "操作2" },
  { id: "r7", name: "高三数学复习单元试卷集", fileType: "pdf" as const, grade: "高二", updatedAt: "2020-01-30", starred: false, action1: "", action2: "" },
  { id: "r8", name: "高三数学复习单元试卷集", fileType: "pdf" as const, grade: "68", updatedAt: "86%", starred: false, action1: "", action2: "" },
];

// ─── Arrow Down Icon ───
function ArrowDownIcon({
  color = "#646B8A",
  size = 14,
  style,
}: {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className="shrink-0" style={style}>
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
    null
  );
}

// ─── Tree chevron ───
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

// ─── Filter Dropdown Options ───
const filterOptionsMap: Record<string, string[]> = {
  "年级": ["全部", "高一", "高二", "高三"],
  "来源": ["全部", "教材", "真题", "模拟题", "自编题"],
  "学科": ["全部", "数学", "语文", "英语", "物理", "化学"],
  "题型": ["全部", "选择题", "填空题", "解答题", "判断题"],
  "难度": ["全部", "简单", "中等", "较难", "困难"],
  "地区": ["全部", "全国", "北京", "上海", "浙江", "江苏"],
  "年份": ["全部", "2026", "2025", "2024", "2023", "2022"],
  "按最新排序": ["按最新排序", "按最早排序", "按难度排序", "按热度排序"],
};

// ─── Filter Dropdown Button ───
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

// ─── Question Card ───
function QuestionCard({
  question,
  onToggleJoin,
  onToggleStar,
}: {
  question: Question;
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
              {question.number}
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
              {question.content}
            </p>
            {/* Options */}
            <div className="flex flex-wrap gap-x-[32px] gap-y-[16px]">
              {question.options.map((opt, i) => (
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
              {question.tags.map((tag, i) => (
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

            {/* Star */}
            <button
              className="cursor-pointer"
              onClick={() => onToggleStar(question.id)}
            >
              <StarIcon filled={question.starred} />
            </button>

            {/* Join/Cancel button */}
            <button
              className="flex items-center justify-center h-[32px] w-[80px] rounded-[16px] bg-white cursor-pointer"
              style={{
                border: question.joined
                  ? "1px solid #fca5a2"
                  : "1px solid #9cb1fc",
              }}
              onClick={() => onToggleJoin(question.id)}
            >
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: question.joined
                    ? "var(--font-weight-regular)"
                    : "var(--font-weight-medium)",
                  color: question.joined ? "#e0443f" : "var(--primary)",
                  lineHeight: "1.5",
                }}
              >
                {question.joined ? "取消加入" : "加 入"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── File Icon ───
function FileIcon({ type }: { type: string }) {
  const colorMap: Record<string, string> = {
    pdf: "#FA5A57",
    xls: "#2DC01F",
    png: "#6F60FF",
    mp3: "#E53E8C",
  };

  if (type === "folder") {
    return (
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <svg className="absolute block" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19" style={{ left: 3, top: 2.5, width: 18, height: 19, position: "absolute" }}>
          <path d={svgPaths2.p6a1ce00} fill="url(#folder_top)" />
          <path d={svgPaths2.p34e15300} fill="url(#folder_bottom)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="folder_top" x1="9" x2="9" y1="0.75" y2="7.5">
              <stop stopColor="#FFB800" />
              <stop offset="1" stopColor="#FF9E00" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="folder_bottom" x1="9" x2="9" y1="6.5" y2="19">
              <stop stopColor="#FFCD38" />
              <stop offset="1" stopColor="#FFCD38" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  const color = colorMap[type] || "#FA5A57";
  const label = type.toUpperCase();
  const isPdf = type === "pdf";

  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute" style={{ height: 20, left: 4, top: 2, width: 16 }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths2.p284f6980} fill={color} />
        </svg>
      </div>
      <div className="absolute" style={{ inset: "8.33% 16.67% 70.83% 62.5%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths2.p2dd3a480} fill="white" fillOpacity="0.3" />
        </svg>
      </div>
      {isPdf ? (
        <div className="absolute" style={{ inset: "33.33% 29.17% 25.01% 29.17%" }}>
          <div className="absolute" style={{ inset: "0 -9.17% -18.34% -9.17%" }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
              <path clipRule="evenodd" d={svgPaths2.pd72ea40} fill="white" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className="absolute flex flex-col justify-center whitespace-nowrap text-white text-center"
          style={{
            fontSize: 5,
            fontFamily: "Avenir, sans-serif",
            fontWeight: 900,
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            textShadow: "0px 1px 1px rgba(0,0,0,0.25)",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}

// ─── More Icon ───
function MoreIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <svg className="absolute block" fill="none" viewBox="0 0 12.8333 2.33333" style={{ position: "absolute", inset: "41.67% 4.17%", width: "91.66%", height: "16.66%" }}>
        <path d={svgPaths2.pb889000} fill="var(--sidebar-primary)" />
        <path d={svgPaths2.p18e20380} fill="var(--sidebar-primary)" />
        <path d={svgPaths2.p1c48d200} fill="var(--sidebar-primary)" />
      </svg>
    </div>
  );
}

// ─── Upload Icon ───
function UploadIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute flex items-center justify-center" style={{ inset: "11.24% 27.08% 30.43% 27.08%" }}>
        <svg className="block" width="6.417" height="8.167" fill="none" viewBox="0 0 6.41667 8.16667">
          <path d={svgPaths2.p271e8180} fill="#444963" />
        </svg>
      </div>
      <div className="absolute" style={{ inset: "81.83% 16.67% 9.84% 16.67%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 1.16667">
          <path d={svgPaths2.p6099200} fill="#444963" />
        </svg>
      </div>
    </div>
  );
}

// ─── Plus Icon ───
function PlusIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <svg className="absolute block" fill="none" viewBox="0 0 11.334 11.333" style={{ position: "absolute", left: 1, top: 1, width: 12, height: 12 }}>
        <path d={svgPaths2.p6b25280} fill="#444963" />
      </svg>
    </div>
  );
}

// ─── Star Icon for table ───
function TableStarIcon({ filled }: { filled: boolean }) {
  if (filled) {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths2.p1d713300} fill="#FA9524" fillRule="evenodd" />
        </svg>
      </div>
    );
  }
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute" style={{ inset: "6.25% 4.17%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
          <path clipRule="evenodd" d={svgPaths2.p2072d200} fill="#838BAB" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── Dialog Select Field ───
function DialogSelect({
  label,
  placeholder,
  value,
  focused,
  onFocus,
  onBlur,
  options,
  onSelect,
  required,
  isOpen,
  onToggle,
}: {
  label: string;
  placeholder: string;
  value: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  options: string[];
  onSelect: (val: string) => void;
  required?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && isOpen) {
        onBlur();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onBlur]);

  return (
    <div className="flex flex-col gap-[8px] items-start px-[24px] w-[520px]" ref={ref}>
      <div className="flex gap-[4px] items-center">
        {required && (
          <span style={{ fontSize: "var(--text-base)", color: "#FA5A57", lineHeight: "1.5" }}>*</span>
        )}
        <span style={{ fontSize: "var(--text-h4)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>
          {label}
        </span>
      </div>
      <div className="relative w-full">
        <div
          className="bg-white h-[32px] relative rounded-[6px] w-full cursor-pointer"
          onClick={() => {
            onFocus();
            onToggle();
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-[6px]"
            style={{ border: focused ? "1px solid #6574fc" : "1px solid #cfd5e8" }}
          />
          <div className="flex items-center justify-between px-[12px] py-[5px] size-full">
            <span style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-regular)",
              color: value ? "var(--card-foreground)" : "#838bab",
              lineHeight: "1.5",
            }}>
              {value || placeholder}
            </span>
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute" style={{ inset: "35.94% 17.19% 32.81% 17.11%" }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
                  <path clipRule="evenodd" d={svgPathsDialog.p1adb3300} fill="#646B8A" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="absolute left-0 right-0 top-[34px] bg-white rounded-[8px] p-[4px] z-50"
            style={{ boxShadow: "0px 8px 32px rgba(16,18,25,0.08)", border: "1px solid #e9ecf5" }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                className="w-full text-left px-[12px] py-[6px] rounded-[6px] cursor-pointer hover:bg-[#f4f7fe]"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: value === opt ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                  color: value === opt ? "var(--sidebar-primary)" : "var(--card-foreground)",
                  lineHeight: "1.5",
                }}
                onClick={() => {
                  onSelect(opt);
                  onBlur();
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Dialog Multi-Select Field with Tags ───
function DialogMultiSelect({
  label,
  placeholder,
  values,
  focused,
  onFocus,
  onBlur,
  options,
  onToggleValue,
  isOpen,
  onToggle,
}: {
  label: string;
  placeholder: string;
  values: string[];
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  options: string[];
  onToggleValue: (val: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && isOpen) {
        onBlur();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onBlur]);

  return (
    <div className="flex flex-col gap-[8px] items-start px-[24px] w-[520px]" ref={ref}>
      <div className="flex gap-[4px] items-center">
        <span style={{ fontSize: "var(--text-h4)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>
          {label}
        </span>
      </div>
      <div className="relative w-full">
        <div
          className="bg-white h-[32px] relative rounded-[6px] w-full cursor-pointer"
          onClick={() => {
            onFocus();
            onToggle();
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-[6px]"
            style={{ border: focused ? "1px solid #6574fc" : "1px solid #cfd5e8" }}
          />
          <div className="flex items-center justify-between size-full" style={{ paddingLeft: values.length > 0 ? 4 : 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4 }}>
            {values.length > 0 ? (
              <div className="flex gap-[4px] items-center overflow-hidden flex-1 min-w-0">
                {values.map((v) => (
                  <div key={v} className="relative rounded-[4px] shrink-0" style={{ backgroundColor: "#f4f7fe" }}>
                    <div className="flex gap-[2px] items-center px-[6px] py-[2px]">
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#444963", lineHeight: "1.5" }}>{v}</span>
                      <button
                        className="cursor-pointer shrink-0 size-[12px] relative"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleValue(v);
                        }}
                      >
                        <svg className="block size-full" viewBox="0 0 12 12" fill="none">
                          <path d="M3.5 3.5L8.5 8.5M8.5 3.5L3.5 8.5" stroke="#444963" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[4px]" style={{ border: "1px solid #dfe3f0" }} />
                  </div>
                ))}
              </div>
            ) : (
              <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                {placeholder}
              </span>
            )}
            <div className="overflow-clip relative shrink-0 size-[14px]">
              <div className="absolute" style={{ inset: "35.94% 17.19% 32.81% 17.11%" }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
                  <path clipRule="evenodd" d={svgPathsDialog.p1adb3300} fill="#646B8A" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="absolute left-0 right-0 top-[34px] bg-white rounded-[8px] p-[4px] z-50"
            style={{ boxShadow: "0px 8px 32px rgba(16,18,25,0.08)", border: "1px solid #e9ecf5" }}
          >
            {options.map((opt) => {
              const selected = values.includes(opt);
              return (
                <button
                  key={opt}
                  className="w-full text-left px-[12px] py-[6px] rounded-[6px] cursor-pointer hover:bg-[#f4f7fe]"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: selected ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                    color: selected ? "var(--sidebar-primary)" : "var(--card-foreground)",
                    lineHeight: "1.5",
                  }}
                  onClick={() => onToggleValue(opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── New Folder Dialog ───
function NewFolderDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [grades, setGrades] = useState<string[]>([]);
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [openField, setOpenField] = useState<string | null>(null);

  if (!open) return null;

  const gradeOptions = ["高一", "高二", "高三"];
  const subjectOptions = ["数学", "语文", "英语", "物理", "化学", "生物"];
  const chapterOptions = ["乘法公式-1", "乘法公式-2", "因式分解", "一元二次方程"];

  const isFormValid = grades.length > 0 && subject && chapter;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(16,18,25,0.4)" }} onClick={onClose}>
      <div className="bg-white rounded-[20px] w-[520px] flex flex-col overflow-hidden" style={{ boxShadow: "0px 8px 32px rgba(16,18,25,0.1)" }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex gap-[8px] items-start p-[24px]">
          <div className="flex-1 flex flex-col gap-[8px]">
            <span style={{ fontSize: "20px", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", lineHeight: "1.5" }}>新建文件夹</span>
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#646b8a", lineHeight: "1.5" }}>请为文件夹选择合适的标签</span>
          </div>
          <button className="cursor-pointer shrink-0 size-[20px] relative" onClick={onClose}>
            <div className="absolute" style={{ inset: "14.94%" }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0237 14.0237">
                <path clipRule="evenodd" d={svgPathsDialog.p37c48700} fill="#646B8A" fillRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-[24px]">
          <DialogMultiSelect
            label="适用年级"
            placeholder="请选择年级"
            values={grades}
            focused={focusedField === "grade"}
            onFocus={() => setFocusedField("grade")}
            onBlur={() => { setFocusedField(null); setOpenField(null); }}
            options={gradeOptions}
            onToggleValue={(val) => {
              setGrades((prev) =>
                prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
              );
            }}
            isOpen={openField === "grade"}
            onToggle={() => setOpenField(openField === "grade" ? null : "grade")}
          />
          <DialogSelect
            label="资料学科"
            placeholder="请选择学科"
            value={subject}
            focused={focusedField === "subject"}
            onFocus={() => setFocusedField("subject")}
            onBlur={() => { setFocusedField(null); setOpenField(null); }}
            options={subjectOptions}
            onSelect={setSubject}
            isOpen={openField === "subject"}
            onToggle={() => setOpenField(openField === "subject" ? null : "subject")}
          />
          <DialogSelect
            label="章节选择"
            placeholder="请选择知识点章节"
            value={chapter}
            focused={focusedField === "chapter"}
            onFocus={() => setFocusedField("chapter")}
            onBlur={() => { setFocusedField(null); setOpenField(null); }}
            options={chapterOptions}
            onSelect={setChapter}
            isOpen={openField === "chapter"}
            onToggle={() => setOpenField(openField === "chapter" ? null : "chapter")}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-[24px] pt-[24px] pb-[20px]">
          <div className="flex gap-[12px] items-center">
            <button
              className="flex items-center justify-center h-[36px] px-[20px] py-[8px] rounded-[18px] bg-white relative cursor-pointer"
              onClick={onClose}
            >
              <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18px]" style={{ border: "1px solid #dfe3f0" }} />
              <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>取 消</span>
            </button>
            <button
              className="flex items-center justify-center h-[36px] px-[20px] py-[8px] rounded-[18px] cursor-pointer"
              style={{ backgroundColor: isFormValid ? "#6574fc" : "#bbcbfc" }}
              onClick={() => {
                if (isFormValid) onClose();
              }}
            >
              <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5" }}>确 认</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── My Resources Tab ───
function MyResourcesTab({ selectedIds, setSelectedIds }: { selectedIds: Set<string>; setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>> }) {
  const [resources, setResources] = useState(myResources);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [newFolderDialogOpen, setNewFolderDialogOpen] = useState(false);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === resources.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(resources.map((r) => r.id)));
    }
  };

  const isAllSelected = resources.length > 0 && selectedIds.size === resources.length;
  const isPartialSelected = selectedIds.size > 0 && selectedIds.size < resources.length;

  const toggleStar = (id: string) => {
    setResources((prev) =>
      prev.map((r) => (r.id === id ? { ...r, starred: !r.starred } : r))
    );
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 pt-[16px]">
      {/* Upload Dialog */}
      {uploadDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(16,18,25,0.4)" }} onClick={() => setUploadDialogOpen(false)}>
          <div className="bg-white rounded-[20px] w-[520px] flex flex-col overflow-hidden" style={{ boxShadow: "0px 8px 32px rgba(16,18,25,0.12)" }} onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-start gap-[8px] p-[24px]">
              <div className="flex-1">
                <span style={{ fontSize: "20px", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", lineHeight: "1.5" }}>上传资源</span>
              </div>
              <button className="cursor-pointer shrink-0 size-[20px] relative" onClick={() => setUploadDialogOpen(false)}>
                <div className="absolute" style={{ inset: "14.94%" }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0237 14.0237">
                    <path clipRule="evenodd" d={svgPathsUpload.p37c48700} fill="#646B8A" fillRule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Upload area */}
            <div className="px-[24px]">
              <div
                className="flex flex-col gap-[16px] items-center pt-[24px] rounded-[8px] cursor-pointer relative"
                style={{ backgroundColor: "#f4f7fe" }}
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.mp3,.mp4";
                  input.click();
                }}
              >
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ border: "1px solid #dfe3f0" }} />
                {/* Cloud upload icon */}
                <div className="relative shrink-0 size-[36px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 36 36">
                    <path transform="translate(1,3)" d={svgPathsUpload.pab5400} fill="#ABB4D1" />
                  </svg>
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[8px] items-center px-[16px] pb-[24px]">
                  <span style={{ fontSize: "var(--text-h4)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>
                    点击支持单个文件上传，最大支持100MB
                  </span>
                  <div className="text-center" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                    <p>支持拓展名：pdf/doc/docx/xls/xlsx/ppt/pptx/jpg/</p>
                    <p>jpeg/png/mp3/mp4/</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end px-[24px] pt-[24px] pb-[20px]">
              <div className="flex gap-[12px] items-center">
                <button
                  className="flex items-center justify-center h-[36px] px-[20px] py-[8px] rounded-[18px] bg-white relative cursor-pointer"
                  onClick={() => setUploadDialogOpen(false)}
                >
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[18px]" style={{ border: "1px solid #dfe3f0" }} />
                  <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>取 消</span>
                </button>
                <button
                  className="flex items-center justify-center h-[36px] px-[20px] py-[8px] rounded-[18px] cursor-pointer"
                  style={{ backgroundColor: "#bbcbfc" }}
                >
                  <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5" }}>下一步</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Folder Dialog */}
      <NewFolderDialog open={newFolderDialogOpen} onClose={() => setNewFolderDialogOpen(false)} />

      {/* Filter bar */}
      <div className="flex items-center justify-between h-[36px] shrink-0 mb-[16px] px-[20px]">
        <div className="flex gap-[20px] items-center">
          <FilterButton label="年级" />
          <FilterButton label="来源" />
          <FilterButton label="学科" />
        </div>
        <div className="flex gap-[8px] items-center">
          <button
            className="flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[3px] rounded-[6px] cursor-pointer relative"
            style={{ border: "1px solid #cfd5e8" }}
            onClick={() => setUploadDialogOpen(true)}
          >
            <div className="shrink-0 size-[14px]"><IcUpload /></div>
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>
              上传文件
            </span>
          </button>
          <button
            className="flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[3px] rounded-[6px] cursor-pointer relative"
            style={{ border: "1px solid #cfd5e8" }}
            onClick={() => setNewFolderDialogOpen(true)}
          >
            <PlusIcon />
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>
              新建文件夹
            </span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
        {/* Table header */}
        <div className="flex items-center h-[44px] shrink-0" style={{ backgroundColor: "#f4f7fe" }}>
          <div className="flex items-center justify-center w-[32px] shrink-0 px-[8px] cursor-pointer" onClick={toggleSelectAll}>
            <div className="relative size-[16px]">
              {isAllSelected || isPartialSelected ? (
                <div className="absolute inset-0 rounded-[3px] flex items-center justify-center" style={{ backgroundColor: "#6574fc" }}>
                  {isPartialSelected ? (
                    <svg width="8" height="2" viewBox="0 0 8 2" fill="none"><rect x="0" y="0.25" width="8" height="1.5" rx="0.75" fill="white" /></svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 6 6" fill="none"><path d="M0.75001 3.32153L2.43751 5.2501L5.25001 0.7501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </div>
              ) : (
                <div className="absolute bg-white inset-0 rounded-[3px]" style={{ border: "1px solid #cfd5e8" }} />
              )}
            </div>
          </div>
          <div className="flex-1 min-w-0 max-w-[360px] px-[16px]">
            <span className="whitespace-nowrap" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#646B8A", lineHeight: "1.5" }}>名称</span>
          </div>
          <div className="flex-1 min-w-0 px-[16px]">
            <span className="whitespace-nowrap" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#646B8A", lineHeight: "1.5" }}>年级</span>
          </div>
          <div className="flex-1 min-w-0 px-[16px]">
            <span className="whitespace-nowrap" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#646B8A", lineHeight: "1.5" }}>更新日期</span>
          </div>
          <div className="flex-1 min-w-0 px-[16px]">
            <span className="whitespace-nowrap" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "#646B8A", lineHeight: "1.5" }}>操作</span>
          </div>
        </div>

        {/* Table rows */}
        {resources.map((res, idx) => {
          const isAlt = idx % 3 === 2;
          return (
            <div
              key={res.id}
              className="flex items-center h-[52px] relative"
              style={{ backgroundColor: "white" }}
            >
              {/* divider removed to match DiagnosisPage */}
              {/* Checkbox */}
              <div className="flex items-center justify-center w-[32px] shrink-0 px-[8px] cursor-pointer" onClick={() => toggleSelect(res.id)}>
                <div className="relative size-[16px]">
                  {selectedIds.has(res.id) ? (
                    <div className="absolute inset-0 rounded-[3px] flex items-center justify-center" style={{ backgroundColor: "#6574fc" }}>
                      <svg width="10" height="10" viewBox="0 0 6 6" fill="none"><path d="M0.75001 3.32153L2.43751 5.2501L5.25001 0.7501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  ) : (
                    <div className="absolute inset-0 rounded-[3px]" style={{ backgroundColor: "white", border: "1px solid #cfd5e8" }} />
                  )}
                </div>
              </div>
              {/* Name with icon */}
              <div className="flex-1 min-w-0 max-w-[360px] flex gap-[8px] items-center px-[16px]">
                <FileIcon type={res.fileType} />
                <span className="whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "var(--card-foreground)", lineHeight: "1.5" }}>
                  {res.name}
                </span>
              </div>
              {/* Grade */}
              <div className="flex-1 min-w-0 px-[16px]">
                <span className="whitespace-nowrap" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "var(--card-foreground)", lineHeight: "1.5" }}>
                  {res.grade}
                </span>
              </div>
              {/* Date */}
              <div className="flex-1 min-w-0 px-[16px]">
                <span className="whitespace-nowrap" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "var(--card-foreground)", lineHeight: "1.5", fontFamily: "Avenir, sans-serif" }}>
                  {res.updatedAt}
                </span>
              </div>
              {/* Actions */}
              <div className="flex-1 min-w-0 px-[16px] flex gap-[24px] items-center whitespace-nowrap">
                <button className="cursor-pointer" onClick={() => toggleStar(res.id)}>
                  <TableStarIcon filled={res.starred} />
                </button>
                {res.action1 && (
                  <button className="cursor-pointer">
                    <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "var(--sidebar-primary)", lineHeight: "1.5" }}>
                      {res.action1}
                    </span>
                  </button>
                )}
                {res.action2 && (
                  <button className="cursor-pointer">
                    <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)", color: "var(--sidebar-primary)", lineHeight: "1.5" }}>
                      {res.action2}
                    </span>
                  </button>
                )}
                <button className="cursor-pointer p-[4px]">
                  <MoreIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom action bar */}
      {selectedIds.size > 0 && (
        null
      )}
    </div>
  );
}

// ─── Public Resources Tab ───
function PublicResourcesTab() {
  const [treeMode, setTreeMode] = useState<"chapter" | "knowledge">("chapter");
  const defaultExpanded: Record<string, string[]> = {
    chapter: ["ch1", "ch1-1", "ch1-1-1"],
    knowledge: ["k1", "k1-1"],
  };
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(defaultExpanded.chapter)
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>("ch1");
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);

  const chapterTextbooks = [
    "高中数学-人教B版-必修1",
    "高中数学-人教B版-必修2",
    "高中数学-人教B版-必修3",
    "高中数学-人教B版-必修4",
    "高中数学-人教B版-选修1",
    "高中数学-人教B版-选修2",
    "高中数学-人教B版-选修3",
    "高中数学-北师大版-必修1",
    "高中数学-北师大版-必修2",
    "高中数学-北师大版-选修1",
    "高中数学-北师大版-选修2",
    "高中数学-苏教版-必修1",
    "高中数学-苏教版-必修2",
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
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, joined: !q.joined } : q))
    );
  };

  const toggleStar = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, starred: !q.starred } : q))
    );
  };

  const subjects = ["数学", "语文", "英语", "物理", "化学", "生物"];

  return (
    <div className="flex flex-col gap-0 flex-1 min-h-0">
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
              {/* Sliding indicator */}
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
                onClick={() => { setTreeMode("chapter"); setExpandedIds(new Set(defaultExpanded.chapter)); setSelectedNodeId("ch1-1-1-1"); }}
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
                <ArrowDownIcon
                  color="#646B8A"
                  size={14}
                  style={{
                    transform: textbookDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
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
            {/* Filters + Results count (sticky) */}
            <div
              className="shrink-0 sticky top-[-20px] z-10 bg-white -mx-[20px] px-[20px] -mt-[16px]"
            >
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
                  试题列表
                </span>
                <span
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--muted-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  共{questions.length}个结果
                </span>
              </div>
            </div>

            {/* Question cards */}
            <div className="flex flex-col gap-[12px]">
              {questions.map((q) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  onToggleJoin={toggleJoin}
                  onToggleStar={toggleStar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───
export function QuestionBankPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"my" | "public">("public");
  const [searchText, setSearchText] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("数学");
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const subjects = ["数学", "语文", "英语", "物理", "化学", "生物"];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target as Node)) {
        setSubjectDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
            公共资源
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
                placeholder="在公共试题资源中搜索"
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

      {/* Tab content */}
      <div className="flex-1 flex flex-col min-h-0">
        <PublicResourcesTab />
      </div>

      {/* Bottom action bar - always visible */}
      <div className="bg-white flex items-center justify-end gap-[12px] px-[24px] py-[16px] relative shrink-0">
        <div aria-hidden className="absolute border-[#e9ecf5] border-solid border-t inset-0 pointer-events-none" />
        <p className="relative shrink-0 mr-auto" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", lineHeight: "1.5" }}>
          <span style={{ color: "#444963" }}>已添加 </span>
          <span style={{ color: "var(--primary)" }}>{selectedIds.size}</span>
          <span style={{ color: "#444963" }}> 题</span>
        </p>
        
        <button
          className={`flex items-center justify-center h-[36px] w-[100px] py-[8px] rounded-[18px] shrink-0 ${selectedIds.size > 0 ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
          style={{ backgroundColor: selectedIds.size > 0 ? "var(--primary)" : "#C0C4D0" }}
          disabled={selectedIds.size === 0}
        >
          <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5" }}>去布置</span>
        </button>
      </div>
    </div>
  );
}