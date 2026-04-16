import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { showToast } from "../components/CustomToast";
import svgPaths from "../../imports/svg-n0o3yvjvmo";

/* ─── Types ─── */
interface ExerciseGroup {
  label: string;
  difficulty: "easy" | "medium" | "hard" | "unset";
  active?: boolean;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  tags: string[];
  showAnalysis?: boolean;
}

/* ─── Mock Data ─── */
const exerciseGroups: ExerciseGroup[] = [
  { label: "集合的概念基础练习", difficulty: "easy", active: true },
  { label: "集合中元素性质应用", difficulty: "medium" },
  { label: "判断元素与集合关系", difficulty: "hard" },
  { label: "已知元素与集合的关系求参数两行标题样式（多行标题）", difficulty: "unset" },
];

const difficultyConfig: Record<string, { label: string; bg: string; border: string; color: string }> = {
  easy: { label: "较 易", bg: "#e9f4ff", border: "#b0d8ff", color: "#0071df" },
  medium: { label: "一 般", bg: "#fff3e6", border: "#fdd1a0", color: "#db7505" },
  hard: { label: "较 难", bg: "#fff0eb", border: "#fededd", color: "#e0443f" },
  unset: { label: "未设置", bg: "#f0f2f7", border: "#cfd5e8", color: "#646b8a" },
};

const mockQuestions: Question[] = [
  {
    id: 123,
    text: "函数y=f（x）在R上可导且满足不等式xf(x) > -f(x)恒成立, 下列不等式一定成立的是（  ）",
    options: ["A.a f(b) > b f(a)", "B.a f(a) > b f(b)", "C.a f(a) < b f(b)", "D.a f(b) < b f(a)"],
    tags: ["2020年·江西省·期末", "单选", "简单"],
  },
  {
    id: 78,
    text: "若函数y=f（x）在R上可导且满足不等式xf(x) > -f(x)恒成立, 则下列不等式一定成立的是（  ）",
    options: ["A.a f(b) > b f(a)", "B.a f(a) > b f(b)", "C.a f(a) < b f(b)", "D.a f(b) < b f(a)"],
    tags: ["2020年·江西省·期末", "单选", "简单"],
  },
  {
    id: 45,
    text: "设集合A={x|x²-3x+2=0}，B={x|x²-ax+a-1=0}，若B⊆A，则实数a的取值范围是（  ）",
    options: ["A.{2}", "B.{2,3}", "C.{2,3,∅}", "D.以上都不对"],
    tags: ["2021年·北京·期中", "单选", "中等"],
  },
  {
    id: 32,
    text: "已知集合M={1,2,3}，N={2,3,4}，则M∩N=（  ）",
    options: ["A.{1,2,3,4}", "B.{2,3}", "C.{1}", "D.{4}"],
    tags: ["2019年·上海·月考", "单选", "简单"],
  },
];

/* ─── Components ─── */

function DifficultyTag({ type }: { type: string }) {
  const config = difficultyConfig[type] || difficultyConfig.unset;
  return (
    <div
      className="h-[17px] relative rounded-[4px] shrink-0 w-[36px]"
      style={{ backgroundColor: config.bg }}
    >
      <div className="flex items-center justify-center overflow-clip px-[6px] py-[2px] rounded-[inherit] size-full">
        <span
          className="whitespace-nowrap"
          style={{
            fontSize: "10px",
            fontWeight: "var(--font-weight-regular)",
            color: config.color,
          }}
        >
          {config.label}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[4px]"
        style={{ border: `1px solid ${config.border}` }}
      />
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0">
      <div className="flex h-full items-center overflow-clip px-[6px] py-[2px] rounded-[inherit]">
        <span
          className="whitespace-nowrap"
          style={{
            fontSize: "12px",
            fontWeight: "var(--font-weight-regular)",
            color: "#646b8a",
          }}
        >
          {text}
        </span>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function QuestionCard({ question, onToggleAnalysis }: { question: Question; onToggleAnalysis: () => void }) {
  return (
    <div className="bg-[#f4f7fe] flex flex-col gap-[12px] items-start pb-[8px] pt-[20px] px-[20px] rounded-[16px] w-full">
      {/* Question stem */}
      <div className="flex gap-[8px] items-start w-full">
        {/* Number */}
        <div className="flex h-[32px] items-center justify-center py-[4px] rounded-[16px] shrink-0 w-[24px]">
          <span
            className="whitespace-nowrap text-center"
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-bold)",
              color: "#444963",
              fontFeatureSettings: "'lnum', 'pnum'",
            }}
          >
            {question.id}.
          </span>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-[16px] items-start flex-1 pt-[4px] min-w-0">
          <p
            className="w-full whitespace-pre-wrap"
            style={{
              fontSize: "16px",
              fontWeight: "var(--font-weight-regular)",
              color: "#101019",
              lineHeight: "1.5",
            }}
          >
            {question.text}
          </p>
          {/* Options */}
          <div className="flex gap-[32px] items-start flex-wrap">
            {question.options.map((opt, i) => (
              <span
                key={i}
                className="whitespace-nowrap"
                style={{
                  fontSize: "16px",
                  fontWeight: "var(--font-weight-regular)",
                  color: "#101019",
                  lineHeight: "1.5",
                }}
              >
                {opt}
              </span>
            ))}
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-[6px] items-start">
            {question.tags.map((tag, i) => (
              <Tag key={i} text={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex h-[56px] items-center justify-between w-full relative">
        <div aria-hidden="true" className="absolute border-[#dfe3f0] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
        <div className="w-[204px]" />
        <div className="flex gap-[16px] items-center">
          {/* Answer analysis toggle */}
          <button
            onClick={onToggleAnalysis}
            className="flex gap-[2px] h-[21px] items-center justify-center py-[6px] rounded-[6px] cursor-pointer"
          >
            <span
              className="whitespace-nowrap"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)",
                color: "#444963",
                lineHeight: "1.5",
              }}
            >
              答案解析
            </span>
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[37.7%_21.29%_34.96%_21.22%]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 9.1985 4.37503">
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p1adb3300}
                    fill="#444963"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </button>
          {/* Divider */}
          <div className="flex h-[12px] items-center justify-center shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[12px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" viewBox="0 0 12 1">
                    <line stroke="#E9ECF5" x2="12" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Feedback */}
          <button
            onClick={() => showToast("问题反馈功能待完善", "info")}
            className="bg-white flex h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] cursor-pointer hover:bg-[#f8f9fc] transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#dfe3f0] inset-0 pointer-events-none rounded-[16px]" />
            <span
              className="whitespace-nowrap text-center"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)",
                color: "#444963",
                lineHeight: "1.5",
              }}
            >
              问题反馈
            </span>
          </button>
        </div>
      </div>

      {/* Analysis content (collapsible) */}
      {question.showAnalysis && (
        <div className="w-full pb-[12px] px-[32px]">
          <div className="bg-white rounded-[8px] p-[16px] border border-[#e9ecf5]">
            <p style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#444963", lineHeight: "1.5" }}>
              <span style={{ fontWeight: "var(--font-weight-semibold)", color: "#101019" }}>答案：</span>A
            </p>
            <p className="mt-[8px]" style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#444963", lineHeight: "1.5" }}>
              <span style={{ fontWeight: "var(--font-weight-semibold)", color: "#101019" }}>解析：</span>
              根据题意可知 xf(x) {">"} -f(x)，即 xf(x) + f(x) {">"} 0，构造函数 g(x) = xf(x)，则 g'(x) = f(x) + xf'(x) {">"} 0，所以 g(x) 在 R 上单调递增。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Page ─── */
export function ExercisePreviewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "集合的概念";
  const groups = searchParams.get("groups") || "5";
  const duration = searchParams.get("duration") || "约8分钟";
  const [activeGroup, setActiveGroup] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);

  const toggleAnalysis = (idx: number) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === idx ? { ...q, showAnalysis: !q.showAnalysis } : q))
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: "#F0F2F7" }}>
      {/* ── Top Bar ── */}
      <div className="flex items-center gap-4 px-8 shrink-0" style={{ height: 64 }}>
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="relative shrink-0 size-[30px] rounded-[20px] bg-white flex items-center justify-center cursor-pointer hover:bg-[#f8f9fc] transition-colors"
        >
          <div aria-hidden="true" className="absolute border border-[#E9ECF5] inset-0 pointer-events-none rounded-[20px]" />
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M6 1L1 6L6 11" stroke="#646B8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* Title */}
        <span
          className="flex-1"
          style={{
            fontSize: "20px",
            fontWeight: "var(--font-weight-page-title)",
            color: "#101019",
            lineHeight: "1.5",
          }}
        >
          巩固练习：{title}（{groups}个题组/{duration}）
        </span>

        {/* Add to task button */}
        <button
          onClick={() => showToast("已加入任务", "success")}
          className="h-[32px] flex items-center justify-center gap-[4px] px-[16px] py-[6px] rounded-[18px] cursor-pointer hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#6574fc" }}
        >
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[4.17%]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 18.3333 18.3333">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2b8acb80}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <span
            className="whitespace-nowrap"
            style={{
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)",
              color: "white",
              lineHeight: "1.5",
            }}
          >
            加入任务
          </span>
        </button>
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 flex overflow-hidden p-0 gap-0">
        {/* Main card container */}
        <div
          className="flex-1 bg-white flex overflow-hidden relative"
          style={{ margin: "16px 16px 16px 16px", borderRadius: "16px" }}
        >
          {/* Left sidebar - exercise groups */}
          <div className="w-[220px] shrink-0 border-r border-[#e9ecf5] overflow-y-auto py-[24px] px-[8px]">
            <div className="flex flex-col gap-[2px]">
              {exerciseGroups.map((group, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGroup(idx)}
                  className={`flex gap-[8px] items-center p-[8px] rounded-[6px] cursor-pointer transition-colors w-full text-left ${
                    activeGroup === idx ? "bg-[#ebf1ff]" : "hover:bg-[#f8f9fc]"
                  }`}
                >
                  <DifficultyTag type={group.difficulty} />
                  <span
                    className="flex-1 min-w-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: activeGroup === idx
                        ? "var(--font-weight-medium)"
                        : "var(--font-weight-regular)",
                      color: activeGroup === idx ? "#4a4fed" : "#101019",
                      lineHeight: "1.5",
                    }}
                  >
                    {group.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right content - questions */}
          <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
            {/* Tab header */}
            <div className="shrink-0 flex items-center gap-[12px] px-[20px] pt-[20px] pb-[12px] relative">
              {/* Tab label */}
              <span
                className="text-center"
                style={{
                  fontSize: "16px",
                  fontWeight: "var(--font-weight-medium)",
                  color: "#4a4fed",
                  lineHeight: "1.5",
                }}
              >
                题目(44)
              </span>

              {/* Hint */}
              {showHint && (
                <div className="bg-[#fff3e6] flex gap-[7px] items-center px-[10px] py-[2px] rounded-[5px]">
                  <div className="relative shrink-0 size-[4px]">
                    <svg className="absolute block size-full" fill="none" viewBox="0 0 4 4">
                      <path d={svgPaths.p2d5a3780} fill="#FA9524" />
                    </svg>
                  </div>
                  <span
                    className="whitespace-nowrap"
                    style={{
                      fontSize: "12px",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#db7505",
                      lineHeight: "1.5",
                    }}
                  >
                    此处对您展示全部题目；对学生将智能匹配答题数量和难度
                  </span>
                  <button
                    onClick={() => setShowHint(false)}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative shrink-0 size-[11.333px]">
                      <svg className="absolute block size-full" fill="none" viewBox="0 0 11.3333 11.3333">
                        <path d={svgPaths.p1ca4b840} fill="#FA9524" />
                        <path clipRule="evenodd" d={svgPaths.p2d4cdb00} fill="white" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p35b66600} fill="white" fillRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}

              {/* 题型讲解 button - top right */}
              <div className="ml-auto">
                <button
                  onClick={() => showToast("题型讲解功能待完善", "info")}
                  className="bg-white border border-[#9cb1fc] h-[28px] rounded-[18px] flex items-center gap-[4px] px-[12px] cursor-pointer hover:bg-[#f8f9fc] transition-colors"
                >
                  <div className="relative shrink-0 size-[16px] flex items-center justify-center overflow-clip p-[2px]">
                    <div className="relative shrink-0" style={{ width: "12.222px", height: "11.499px" }}>
                      <div className="absolute" style={{ inset: "-5.57% -5.24%" }}>
                        <svg className="block size-full" fill="none" viewBox="0 0 13.5023 12.7795">
                          <path d={svgPaths.p33555200} stroke="#6574FC" strokeLinecap="round" strokeWidth="1.28" />
                          <path d={svgPaths.p3eae1560} stroke="#6574FC" strokeLinecap="round" strokeWidth="1.28" />
                          <path d="M3.75108 6.32152H6.14" stroke="#6574FC" strokeLinecap="round" strokeWidth="1.28" />
                          <path d="M3.75108 8.63939H5.75108" stroke="#6574FC" strokeLinecap="round" strokeWidth="1.28" />
                          <path d={svgPaths.pbf13e80} fill="#6574FC" />
                          <path d={svgPaths.p30784e00} stroke="#6574FC" strokeLinecap="round" strokeWidth="1.28" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span
                    className="whitespace-nowrap text-center"
                    style={{
                      fontSize: "12px",
                      fontWeight: "var(--font-weight-medium)",
                      color: "#6574fc",
                      lineHeight: "1.5",
                    }}
                  >
                    题型讲解
                  </span>
                </button>
              </div>
            </div>

            {/* Question cards */}
            <div className="flex-1 overflow-y-auto px-[20px] pb-[20px] flex flex-col gap-[16px]">
              {questions.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  onToggleAnalysis={() => toggleAnalysis(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}