import svgPaths from "../../imports/svg-i8bsv8j0y1";
import svgEmptyState from "../../imports/svg-3r90azh3mw";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { CustomSelect } from "../components/CustomSelect";
import { showToast } from "../components/CustomToast";
import { HeaderDropdown } from "../components/HeaderDropdown";

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

/* ─── Mock data ─── */

/* ─── Subject title labels ─── */
const subjectLabelMap: Record<string, string> = {
  math: "数学",
  chinese: "语文",
  english: "英语",
  physics: "物理",
  chemistry: "化学",
};

/* ─── Subject Title Dropdown ─── */
function SubjectTitleDropdown({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLabel = subjectLabelMap[value] || "数学";

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <span
          style={{
            fontSize: "var(--text-h3)",
            fontWeight: "var(--font-weight-page-title)",
            color: "#101019",
          }}
        >
          {currentLabel}
        </span>
        <div
          className="relative rounded-[10px] shrink-0 size-[20px]"
          style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute flex items-center justify-center inset-0">
              <svg width="10" height="6" viewBox="0 0 9.5 5.5" fill="none">
                <path d="M0.75 0.75L4.75 4.75L8.75 0.75" stroke="#444963" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#dfe3f0] inset-0 pointer-events-none rounded-[10px]"
          />
        </div>
      </button>

      {open && (
        <div
          className="absolute left-0 top-[calc(100%+8px)] z-50 rounded-[12px] bg-white p-[4px] flex flex-col gap-[2px] w-[160px]"
          style={{ boxShadow: "0px 16px 56px rgba(16, 18, 25, 0.08)" }}
        >
          {options.map((opt) => {
            const isActive = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className="w-full text-left cursor-pointer transition-colors flex items-center"
                style={{
                  height: "45px",
                  padding: "16px",
                  fontSize: "16px",
                  fontWeight: isActive ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                  color: isActive ? "#4A4FED" : "#444963",
                  backgroundColor: isActive ? "#EBF1FF" : "white",
                  borderRadius: isActive ? "10px" : "12px",
                  lineHeight: 1.5,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "#F5F7FA";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "white";
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── Subject options ─── */
const subjectSelectOptions = [
  { label: "数学", value: "math" },
  { label: "语文", value: "chinese" },
  { label: "英语", value: "english" },
  { label: "物理", value: "physics" },
  { label: "化学", value: "chemistry" },
];

/* ─── Textbook options per subject ─── */
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
      { label: "高二·人教版选择性必修上", value: "chinese-gao2-xxbxs" },
    ],
    english: [
      { label: "高一·人教版必修1", value: "english-gao1-bx1" },
      { label: "高一·人教版必修2", value: "english-gao1-bx2" },
      { label: "高二·人教版选择性必修1", value: "english-gao2-xxbx1" },
    ],
    physics: [
      { label: "高一·人教版必修1", value: "physics-gao1-bx1" },
      { label: "高一·人教版必修2", value: "physics-gao1-bx2" },
      { label: "高二·人教版选择性必修1", value: "physics-gao2-xxbx1" },
    ],
    chemistry: [
      { label: "高一·人教版必修1", value: "chemistry-gao1-bx1" },
      { label: "高一·人教版必修2", value: "chemistry-gao1-bx2" },
      { label: "高二·人教版选择性必修1", value: "chemistry-gao2-xxbx1" },
    ],
  },
  middle: {
    math: [
      { label: "七年级·人教版上册", value: "mid-math-7s" },
      { label: "七年级·人教版下册", value: "mid-math-7x" },
      { label: "八年级·人教版上册", value: "mid-math-8s" },
    ],
    chinese: [
      { label: "七年级·人教版上册", value: "mid-chinese-7s" },
      { label: "七年级·人教版下册", value: "mid-chinese-7x" },
      { label: "八年级·人教版上册", value: "mid-chinese-8s" },
    ],
    english: [
      { label: "七年级·人教版上册", value: "mid-english-7s" },
      { label: "七年级·人教版下册", value: "mid-english-7x" },
      { label: "八年级·人教版上册", value: "mid-english-8s" },
    ],
    physics: [
      { label: "八年级·人教版上册", value: "mid-physics-8s" },
      { label: "八年级·人教版下册", value: "mid-physics-8x" },
      { label: "九年级·人教版全一册", value: "mid-physics-9" },
    ],
    chemistry: [
      { label: "九年级·人教版上册", value: "mid-chemistry-9s" },
      { label: "九年级·人教版下册", value: "mid-chemistry-9x" },
    ],
  },
};

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
            { id: "ch1-1-2", label: "1.1.2 集合间的基关系" },
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
        { id: "ch-b2-1-3", label: "空间向量及其运算的坐标" },
      ],
    },
    { id: "ch-b2-2", label: "直线和圆" },
    { id: "ch-b2-3", label: "圆锥曲线" },
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
  /* ─── 语文 ─── */
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
            { id: "chn-1-1-3", label: "红烛" },
          ],
        },
        {
          id: "chn-1-2",
          label: "小说阅读",
          children: [
            { id: "chn-1-2-1", label: "百合花" },
            { id: "chn-1-2-2", label: "哦，香雪" },
          ],
        },
      ],
    },
    {
      id: "chn-2",
      label: "劳动光荣",
      children: [
        { id: "chn-2-1", label: "芣苢" },
        { id: "chn-2-2", label: "插秧歌" },
      ],
    },
    { id: "chn-3", label: "生命的诗意" },
  ],
  "chinese-gao1-bxx": [
    {
      id: "chn-b2-1",
      label: "中华明之光",
      children: [
        {
          id: "chn-b2-1-1",
          label: "古代议论散文",
          children: [
            { id: "chn-b2-1-1-1", label: "子路、曾皙、冉有、公西华侍坐" },
            { id: "chn-b2-1-1-2", label: "齐桓晋文之事" },
          ],
        },
        { id: "chn-b2-1-2", label: "庖丁解牛" },
      ],
    },
    { id: "chn-b2-2", label: "良知与悲悯" },
    { id: "chn-b2-3", label: "探索与发现" },
  ],
  "chinese-gao2-xxbxs": [
    {
      id: "chn-xx-1",
      label: "中国革命传统作品",
      children: [
        { id: "chn-xx-1-1", label: "中国人民站起来了" },
        { id: "chn-xx-1-2", label: "长征胜利万岁" },
      ],
    },
  ],
  /* ─── 英语 ─── */
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
        {
          id: "eng-1-2",
          label: "Reading & Thinking",
          children: [
            { id: "eng-1-2-1", label: "The Freshman Challenge" },
            { id: "eng-1-2-2", label: "Vocabulary in Context" },
          ],
        },
        { id: "eng-1-3", label: "Grammar: Noun Clauses" },
      ],
    },
    {
      id: "eng-2",
      label: "Travelling Around",
      children: [
        { id: "eng-2-1", label: "Listening: Travel Plans" },
        { id: "eng-2-2", label: "Reading: Amazing Places" },
        { id: "eng-2-3", label: "Grammar: Present Continuous" },
      ],
    },
    { id: "eng-3", label: "Sports and Fitness" },
  ],
  "english-gao1-bx2": [
    {
      id: "eng-b2-1",
      label: "Cultural Heritage",
      children: [
        {
          id: "eng-b2-1-1",
          label: "Reading & Thinking",
          children: [
            { id: "eng-b2-1-1-1", label: "From Problems to Solutions" },
            { id: "eng-b2-1-1-2", label: "Cultural Relics Protection" },
          ],
        },
        { id: "eng-b2-1-2", label: "Grammar: Restrictive Relative Clauses" },
      ],
    },
    { id: "eng-b2-2", label: "Wildlife Protection" },
    { id: "eng-b2-3", label: "The Internet" },
  ],
  "english-gao2-xxbx1": [
    {
      id: "eng-xx-1",
      label: "People of Achievement",
      children: [
        { id: "eng-xx-1-1", label: "Reading: Tu Youyou" },
        { id: "eng-xx-1-2", label: "Grammar: Non-restrictive Relative Clauses" },
      ],
    },
  ],
  /* ─── 物理 ─── */
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
            { id: "phy-1-1-3", label: "1.3 时间和位移" },
          ],
        },
        {
          id: "phy-1-2",
          label: "速度",
          children: [
            { id: "phy-1-2-1", label: "1.4 速度变化快慢的描述——加速度" },
          ],
        },
      ],
    },
    {
      id: "phy-2",
      label: "匀变速直线运动的研究",
      children: [
        { id: "phy-2-1", label: "2.1 实验：探究小车速度随时间变化的规律" },
        { id: "phy-2-2", label: "2.2 匀变速直线运动的速度与时间的关系" },
        { id: "phy-2-3", label: "2.3 匀变速直线运动的位移与时间的关系" },
      ],
    },
    { id: "phy-3", label: "相互作用——力" },
  ],
  "physics-gao1-bx2": [
    {
      id: "phy-b2-1",
      label: "抛体运动",
      children: [
        {
          id: "phy-b2-1-1",
          label: "运动的合成与分解",
          children: [
            { id: "phy-b2-1-1-1", label: "运动的合成与分解" },
          ],
        },
        { id: "phy-b2-1-2", label: "抛体运动的规律" },
      ],
    },
    { id: "phy-b2-2", label: "圆周运动" },
    { id: "phy-b2-3", label: "万有引力与宇宙航行" },
  ],
  "physics-gao2-xxbx1": [
    {
      id: "phy-xx-1",
      label: "动量守恒定律",
      children: [
        { id: "phy-xx-1-1", label: "动量定理" },
        { id: "phy-xx-1-2", label: "动量守恒定律" },
      ],
    },
  ],
  /* ─── 化学 ─── */
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
        {
          id: "chem-1-2",
          label: "离子反应",
          children: [
            { id: "chem-1-2-1", label: "1.2.1 电解的电离" },
            { id: "chem-1-2-2", label: "1.2.2 离子反应" },
          ],
        },
        { id: "chem-1-3", label: "氧化还原反应" },
      ],
    },
    {
      id: "chem-2",
      label: "海水中的重要元素——钠和氯",
      children: [
        { id: "chem-2-1", label: "2.1 钠及其化合物" },
        { id: "chem-2-2", label: "2.2 氯及其化合物" },
        { id: "chem-2-3", label: "2.3 物质的量" },
      ],
    },
    { id: "chem-3", label: "铁 金属材料" },
  ],
  "chemistry-gao1-bx2": [
    {
      id: "chem-b2-1",
      label: "化学反应与能量",
      children: [
        {
          id: "chem-b2-1-1",
          label: "化学反应与能量变化",
          children: [
            { id: "chem-b2-1-1-1", label: "化学能与热能" },
            { id: "chem-b2-1-1-2", label: "化学能与电能" },
          ],
        },
        { id: "chem-b2-1-2", label: "化学反应的速率与限度" },
      ],
    },
    { id: "chem-b2-2", label: "化学与可持续发展" },
  ],
  "chemistry-gao2-xxbx1": [
    {
      id: "chem-xx-1",
      label: "化学反应的热效应",
      children: [
        { id: "chem-xx-1-1", label: "反应热 焓变" },
        { id: "chem-xx-1-2", label: "盖斯定律及其用" },
      ],
    },
  ],
  /* ─── 初中数学 ─── */
  "mid-math-7s": [
    {
      id: "mid-m7s-1",
      label: "有理数",
      children: [
        { id: "mid-m7s-1-1", label: "正数和负数" },
        { id: "mid-m7s-1-2", label: "有理数的加减法" },
        { id: "mid-m7s-1-3", label: "有理数的乘除法" },
      ],
    },
    {
      id: "mid-m7s-2",
      label: "整式的加减",
      children: [
        { id: "mid-m7s-2-1", label: "整式" },
        { id: "mid-m7s-2-2", label: "合并同类项" },
      ],
    },
    { id: "mid-m7s-3", label: "一元一次方程" },
  ],
  "mid-math-7x": [
    {
      id: "mid-m7x-1",
      label: "相交线与平行线",
      children: [
        { id: "mid-m7x-1-1", label: "相交线" },
        { id: "mid-m7x-1-2", label: "平行线及其判定" },
      ],
    },
    { id: "mid-m7x-2", label: "实数" },
    { id: "mid-m7x-3", label: "平面直角坐标系" },
  ],
  "mid-math-8s": [
    {
      id: "mid-m8s-1",
      label: "三角形",
      children: [
        { id: "mid-m8s-1-1", label: "三角形的边" },
        { id: "mid-m8s-1-2", label: "全等三角形" },
      ],
    },
    { id: "mid-m8s-2", label: "轴对称" },
  ],
  /* ─── 初中语文 ─── */
  "mid-chinese-7s": [
    {
      id: "mid-c7s-1",
      label: "四季美景",
      children: [
        { id: "mid-c7s-1-1", label: "春" },
        { id: "mid-c7s-1-2", label: "济南的冬天" },
      ],
    },
    { id: "mid-c7s-2", label: "至爱亲情" },
  ],
  "mid-chinese-7x": [
    {
      id: "mid-c7x-1",
      label: "群星闪耀",
      children: [
        { id: "mid-c7x-1-1", label: "邓稼先" },
        { id: "mid-c7x-1-2", label: "说和做" },
      ],
    },
    { id: "mid-c7x-2", label: "家国情怀" },
  ],
  "mid-chinese-8s": [
    {
      id: "mid-c8s-1",
      label: "活动·探究",
      children: [
        { id: "mid-c8s-1-1", label: "消息二则" },
        { id: "mid-c8s-1-2", label: "首届诺贝尔奖颁发" },
      ],
    },
  ],
  /* ─── 初中英语 ─── */
  "mid-english-7s": [
    {
      id: "mid-e7s-1",
      label: "My name's Gina",
      children: [
        { id: "mid-e7s-1-1", label: "Section A" },
        { id: "mid-e7s-1-2", label: "Section B" },
      ],
    },
    { id: "mid-e7s-2", label: "This is my sister" },
  ],
  "mid-english-7x": [
    {
      id: "mid-e7x-1",
      label: "Can you play the guitar?",
      children: [
        { id: "mid-e7x-1-1", label: "Section A" },
        { id: "mid-e7x-1-2", label: "Section B" },
      ],
    },
  ],
  "mid-english-8s": [
    {
      id: "mid-e8s-1",
      label: "Where did you go on vacation?",
      children: [
        { id: "mid-e8s-1-1", label: "Section A" },
        { id: "mid-e8s-1-2", label: "Section B" },
      ],
    },
  ],
  /* ─── 初中物理 ─── */
  "mid-physics-8s": [
    {
      id: "mid-p8s-1",
      label: "机械运动",
      children: [
        { id: "mid-p8s-1-1", label: "长度和时间的测量" },
        { id: "mid-p8s-1-2", label: "运动的描述" },
      ],
    },
    { id: "mid-p8s-2", label: "声现象" },
  ],
  "mid-physics-8x": [
    {
      id: "mid-p8x-1",
      label: "力",
      children: [
        { id: "mid-p8x-1-1", label: "力" },
        { id: "mid-p8x-1-2", label: "弹力" },
      ],
    },
  ],
  "mid-physics-9": [
    {
      id: "mid-p9-1",
      label: "内能",
      children: [
        { id: "mid-p9-1-1", label: "分子热运动" },
        { id: "mid-p9-1-2", label: "内能" },
      ],
    },
    { id: "mid-p9-2", label: "电流和电路" },
  ],
  /* ─── 初中化学 ─── */
  "mid-chemistry-9s": [
    {
      id: "mid-ch9s-1",
      label: "走进化学世界",
      children: [
        { id: "mid-ch9s-1-1", label: "物质的变化和性质" },
        { id: "mid-ch9s-1-2", label: "化学是一门以实验为基础的科学" },
      ],
    },
    { id: "mid-ch9s-2", label: "我们周围的空气" },
  ],
  "mid-chemistry-9x": [
    {
      id: "mid-ch9x-1",
      label: "金属和金属材料",
      children: [
        { id: "mid-ch9x-1-1", label: "金属材料" },
        { id: "mid-ch9x-1-2", label: "金属的化学性质" },
      ],
    },
  ],
};

const sectionCardsData: Record<string, SectionCard[]> = {
  "ch1-1-1": [
    {
      id: "s1",
      title: "1.1.1 集合及表示方法",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约51分钟", added: true },
        { type: "practice", title: "巩固练习", duration: "约18分钟", practiceTypes: 5, added: false },
      ],
    },
  ],
  "ch1-1-2": [
    {
      id: "s2",
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
      id: "s3",
      title: "1.1.3 集合的基本运算",
      recommended: false,
      modules: [
        { type: "course", title: "课程学习", duration: "约40分钟", added: false, available: false },
        { type: "practice", title: "巩固练习", duration: "约15分钟", practiceTypes: 6, added: false, available: false },
      ],
    },
  ],
  "ch1-2-1": [
    {
      id: "s-ch1-2-1",
      title: "1.2.1 充分条件与必要条件",
      recommended: false,
      modules: [],
    },
  ],
  "ch1-2-2": [
    {
      id: "s-ch1-2-2",
      title: "1.2.2 全称量词与存在量词",
      recommended: false,
      modules: [],
    },
  ],
  /* ─── 语文 ─── */
  "chn-1-1-1": [
    {
      id: "chn-s1",
      title: "沁园春·长沙",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约45分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约20分钟", practiceTypes: 4, added: false },
      ],
    },
  ],
  "chn-1-1-2": [
    {
      id: "chn-s2",
      title: "立在地球边上放号",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约38分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约15分钟", practiceTypes: 3, added: false },
      ],
    },
  ],
  "chn-1-1-3": [
    {
      id: "chn-s3",
      title: "红烛",
      recommended: false,
      modules: [
        { type: "course", title: "课程学习", duration: "约42分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约16分钟", practiceTypes: 3, added: false },
      ],
    },
  ],
  "chn-1-2-1": [
    {
      id: "chn-s4",
      title: "百合花",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约55分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约22分钟", practiceTypes: 5, added: false },
      ],
    },
  ],
  "chn-1-2-2": [
    {
      id: "chn-s5",
      title: "哦，香雪",
      recommended: false,
      modules: [
        { type: "course", title: "课程学习", duration: "约48分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约18分钟", practiceTypes: 4, added: false },
      ],
    },
  ],
  /* ─── 英语 ─── */
  "eng-1-1-1": [
    {
      id: "eng-s1",
      title: "School Activities",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约40分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约15分钟", practiceTypes: 4, added: false },
      ],
    },
  ],
  "eng-1-1-2": [
    {
      id: "eng-s2",
      title: "After-school Clubs",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约35分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约12分钟", practiceTypes: 3, added: false },
      ],
    },
  ],
  "eng-1-2-1": [
    {
      id: "eng-s3",
      title: "The Freshman Challenge",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约50分", added: false },
        { type: "practice", title: "巩固练习", duration: "约20分钟", practiceTypes: 5, added: false },
      ],
    },
  ],
  "eng-1-2-2": [
    {
      id: "eng-s4",
      title: "Vocabulary in Context",
      recommended: false,
      modules: [
        { type: "course", title: "课程学习", duration: "约30分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约18分钟", practiceTypes: 6, added: false },
      ],
    },
  ],
  /* ─── 物理 ─── */
  "phy-1-1-1": [
    {
      id: "phy-s1",
      title: "1.1 质点",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约36分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "14分钟", practiceTypes: 4, added: false },
      ],
    },
  ],
  "phy-1-1-2": [
    {
      id: "phy-s2",
      title: "1.2 参考系和坐标系",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约42分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约16分钟", practiceTypes: 5, added: false },
      ],
    },
  ],
  "phy-1-1-3": [
    {
      id: "phy-s3",
      title: "1.3 时间和位移",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约48分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约20分钟", practiceTypes: 6, added: false },
      ],
    },
  ],
  "phy-1-2-1": [
    {
      id: "phy-s4",
      title: "11.4 速度变化快慢的描述——加速度",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约55分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约22分钟", practiceTypes: 7, added: false },
      ],
    },
  ],
  /* ─── 化学 ─── */
  "chem-1-1-1": [
    {
      id: "chem-s1",
      title: "1.1.1 物质的分类",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约40分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约15分钟", practiceTypes: 4, added: false },
      ],
    },
  ],
  "chem-1-1-2": [
    {
      id: "chem-s2",
      title: "1.1.2 物质的转化",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约38分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约14分钟", practiceTypes: 3, added: false },
      ],
    },
  ],
  "chem-1-2-1": [
    {
      id: "chem-s3",
      title: "1.2.1 电解质的电离",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约45分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约18分钟", practiceTypes: 5, added: false },
      ],
    },
  ],
  "chem-1-2-2": [
    {
      id: "chem-s4",
      title: "1.2.2 离子反应",
      recommended: true,
      modules: [
        { type: "course", title: "课程学习", duration: "约52分钟", added: false },
        { type: "practice", title: "巩固练习", duration: "约20分钟", practiceTypes: 6, added: false },
      ],
    },
  ],
};

// Generate default cards for any leaf node not explicitly defined
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

/* ──── Find all leaf node IDs under a tree path ─── */
function findLeafNodes(nodes: TreeNode[], targetId: string): string[] {
  for (const node of nodes) {
    if (node.id === targetId) {
      return collectLeaves(node);
    }
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

/* ─── Find label by id ─── */
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
export function OnboardingPage() {
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

  // Get all leaf nodes under selected node for card display
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

  return (
    <>
      <div className="flex flex-col flex-1 min-h-0 pb-6">
      {/* Page title */}
      <div className="flex h-[68px] shrink-0 items-center justify-between">
        <h2
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "30px",
            color: "var(--page-title-muted)",
          }}
        >
          试听课管理
        </h2>
        <div className="flex items-center gap-3">
          {/* School level dropdown */}
          <HeaderDropdown
            label={schoolLevel === "high" ? "高中" : "初中"}
            value={schoolLevel}
            options={[
              { label: "初中", value: "middle" },
              { label: "高中", value: "high" },
            ]}
            onChange={(val) => handleSchoolLevelChange(val as "middle" | "high")}
          />
          {/* Subject dropdown */}
          <HeaderDropdown
            label={subjectLabelMap[subject] || "数学"}
            value={subject}
            options={subjectSelectOptions}
            onChange={handleSubjectChange}
          />
        </div>
      </div>

      {/* Main content: tree + cards */}
          <div className="flex gap-0 flex-1 min-h-0 rounded-[16px] bg-[#ffffff]">
            {/* Left panel: Knowledge tree */}
            <div className="w-[266px] shrink-0 flex flex-col min-h-0">
              <div className="flex-1 min-h-0 flex flex-col">
                <div className="flex flex-col px-5 py-6 flex-1 min-h-0">
                  {/* School level toggle */}
                  
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
                  <div className="flex-1 overflow-y-auto flex flex-col gap-[4px]">
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
            <div className="flex-1 min-w-0 overflow-y-auto">
              <div className="w-full">
                <div>
              {(() => {
                const allItems: { leafId: string; card: typeof getCardsForNode extends (id: string) => (infer R)[] ? R : never; leafLabel: string }[] = [];
                displayLeaves.forEach((leafId) => {
                  const cards = getCardsForNode(leafId);
                  const leafLabel = findLabel(tree, leafId);
                  cards.forEach((card) => {
                    allItems.push({ leafId, card, leafLabel });
                  });
                });
                return allItems.map(({ card, leafLabel }, idx) => (
                  <div key={card.id}>
                    {idx > 0 && (
                      <div className="mx-6">
                        
                      </div>
                    )}
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
                                当前章节下没有试听课
                              </p>
                            </div>
                          </div>
                        ) : (
                        card.modules.map((mod, modIdx) => {
                          const isAdded = getModuleAdded(card.id, modIdx, mod.added);
                          return (
                            <div
                              key={modIdx}
                              className="flex items-center justify-between px-3 py-2 w-full h-[60px] rounded-[12px]"
                              style={{ backgroundColor: "var(--dashboard-canvas)" }}
                            >
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
                                      if (mod.available === false) {
                                        showToast("该资源暂不可预览", "warning");
                                        return;
                                      }
                                      const label = leafLabel || card.title;
                                      const dur = mod.duration;
                                      if (mod.type === "practice") {
                                        navigate(`/exercise-preview?title=${encodeURIComponent(label)}&duration=${encodeURIComponent(dur)}&groups=${mod.practiceTypes || 5}`);
                                      } else {
                                        navigate(`/course-preview?title=${encodeURIComponent(label)}&duration=${encodeURIComponent(dur)}`);
                                      }
                                    }}
                                    className="relative bg-white h-[32px] w-[88px] flex items-center justify-center rounded-[28px] cursor-pointer hover:bg-[#f8f9fc] transition-colors"
                                    style={{
                                      fontSize: "var(--text-sm)",
                                      fontWeight: "var(--font-weight-regular)",
                                      color: "var(--sidebar-primary)",
                                    }}
                                  >
                                    <div
                                      aria-hidden="true"
                                      className="absolute inset-0 pointer-events-none rounded-[28px]"
                                      style={{ border: "1px solid rgba(74,79,237,0.35)" }}
                                    />
                                    预览课程
                                  </button>
                                  {isAdded ? (
                                    null
                                  ) : (
                                    null
                                  )}
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
      </div>
    </>
  );
}