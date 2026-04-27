import { useState, useMemo } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { CustomSelect } from "../components/CustomSelect";
import { showToast } from "../components/CustomToast";

const classOptions = [
  { label: "高三 · 1班", value: "c1" },
  { label: "高二 · 2班", value: "c2" },
  { label: "高一 · 3班", value: "c3" },
];

const subjectOptions = [
  { label: "数学", value: "math" },
  { label: "英语", value: "en" },
  { label: "物理", value: "phy" },
];

const dateRangeOptions = [
  { label: "近7天", value: "7d" },
  { label: "近30天", value: "30d" },
  { label: "本学期", value: "term" },
];

const studentOptions = [
  { label: "郑文锦 · 高三", value: "zwj" },
  { label: "李雨桐 · 高一", value: "lyt" },
  { label: "张子涵 · 高一", value: "zzh" },
];

const textbookOptions = [
  { label: "人教A版 · 必修第一册 · 数学", value: "rja-1" },
  { label: "人教A版 · 必修第二册 · 数学", value: "rja-2" },
];

type SectionRow = {
  id: string;
  title: string;
  status: string;
  mastery: string;
  classAvg: string;
  tags: { text: string; tone: "default" | "warn" | "weak" }[];
};

type Chapter = {
  id: string;
  title: string;
  sections: SectionRow[];
};

const knowledgeTree: Chapter[] = [
  {
    id: "ch1",
    title: "第1章 集合与常用逻辑用语",
    sections: [
      {
        id: "1.1",
        title: "1.1 集合的概念",
        status: "已学完",
        mastery: "掌握 78%",
        classAvg: "班级 66%",
        tags: [{ text: "加练", tone: "default" }],
      },
      {
        id: "1.2",
        title: "1.2 集合间的基本关系",
        status: "进行中",
        mastery: "掌握 50%",
        classAvg: "班级 66%",
        tags: [{ text: "催学", tone: "warn" }],
      },
      {
        id: "1.3",
        title: "1.3 集合的基本运算",
        status: "未开始",
        mastery: "—",
        classAvg: "班级 62%",
        tags: [{ text: "薄弱", tone: "weak" }],
      },
    ],
  },
  {
    id: "ch2",
    title: "第2章 一元二次函数、方程和不等式",
    sections: [
      {
        id: "2.1",
        title: "2.1 等式性质与不等式性质",
        status: "已学完",
        mastery: "掌握 85%",
        classAvg: "班级 70%",
        tags: [],
      },
      {
        id: "2.2",
        title: "2.2 基本不等式",
        status: "进行中",
        mastery: "掌握 30%",
        classAvg: "班级 65%",
        tags: [{ text: "走神多", tone: "warn" }],
      },
    ],
  },
];

const learningEffectCopy =
  "该生近期在数学学科上学习节奏稳定，作业完成度较高，课堂互动积极。建议继续保持教材同步练习，并在「集合与逻辑」相关章节加练基础题，巩固概念表述与步骤书写。";

function tagClass(tone: "default" | "warn" | "weak") {
  if (tone === "weak") return "bg-[#ffecec] text-[#e0443f]";
  if (tone === "warn") return "bg-[#fff5e6] text-[#fa9524]";
  return "bg-[#f0f2f7] text-[#646b8a]";
}

export function LearningReportPage() {
  const [classId, setClassId] = useState("c1");
  const [subjectId, setSubjectId] = useState("math");
  const [dateRange, setDateRange] = useState("30d");
  const [studentId, setStudentId] = useState("zwj");
  const [textbook, setTextbook] = useState("rja-1");
  const [scope, setScope] = useState<"single" | "all">("single");
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(knowledgeTree.map((c) => [c.id, true])),
  );

  const currentStudent = useMemo(
    () => studentOptions.find((s) => s.value === studentId)?.label ?? "—",
    [studentId],
  );

  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* 与用户信息页一致：标题 + 筛选在白色画布卡片外 */}
      <div className="mb-4 flex min-w-0 shrink-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <h2
          className="shrink-0"
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "30px",
            color: "var(--page-title-muted)",
          }}
        >
          学情报告
        </h2>
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-2">
          <div className="w-[160px] min-w-0 sm:w-[180px]">
            <CustomSelect value={classId} onChange={setClassId} options={classOptions} placeholder="班级" size="sm" />
          </div>
          <div className="w-[120px] min-w-0 sm:w-[140px]">
            <CustomSelect value={subjectId} onChange={setSubjectId} options={subjectOptions} placeholder="学科" size="sm" />
          </div>
          <div className="w-[120px] min-w-0 sm:w-[140px]">
            <CustomSelect value={dateRange} onChange={setDateRange} options={dateRangeOptions} placeholder="时间" size="sm" />
          </div>
          <button
            type="button"
            onClick={() => showToast("指标说明：核心指标为周期内汇总的学情数据，供沟通参考。", "info")}
            className="h-8 rounded-[10px] border border-[var(--border)] bg-white px-3 transition-opacity hover:opacity-90"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--gray-3)",
            }}
          >
            指标说明
          </button>
          <button
            type="button"
            onClick={() => {
              showToast("报告已加入导出队列", "success");
            }}
            className="h-8 rounded-[10px] border border-transparent px-4 text-white transition-opacity hover:opacity-95"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              background: "var(--primary-gradient)",
            }}
          >
            导出报告
          </button>
        </div>
      </div>

      <div className="dashboard-page-panel min-h-0 flex-1 flex flex-col p-4 pb-6">
      {/* 学生信息卡 */}
      <div
        className="mb-4 flex flex-col gap-4 rounded-[12px] border border-[#e9ecf5] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
        style={{ boxShadow: "0px 4px 24px 0px rgba(16,18,25,0.04)" }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full"
            style={{ background: "linear-gradient(180deg, #ecf0fc 0%, rgba(236,240,252,0.5) 100%)" }}
          >
            <span className="text-lg">👤</span>
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                style={{
                  fontSize: "var(--text-h4)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "#101019",
                }}
              >
                郑文锦
              </span>
              <span
                className="rounded px-1.5 py-0.5"
                style={{ fontSize: "var(--text-sm)", background: "#ecefff", color: "#4a4fed" }}
              >
                尖子生
              </span>
              <span
                className="rounded px-1.5 py-0.5"
                style={{ fontSize: "var(--text-sm)", background: "#f0f2f7", color: "#646b8a" }}
              >
                专注高效
              </span>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--gray-3)", marginTop: "4px" }}>当前展示：{currentStudent}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            className="h-9 rounded-[10px] border border-[var(--border)] bg-white px-4 transition-opacity hover:opacity-90"
            style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--gray-3)" }}
            onClick={() => showToast("已打开与家长的沟通入口（演示）", "info")}
          >
            发消息
          </button>
          <div className="w-full min-w-[200px] sm:w-[220px]">
            <CustomSelect
              value={studentId}
              onChange={setStudentId}
              options={studentOptions}
              placeholder="选择学生"
              size="sm"
            />
          </div>
        </div>
      </div>

      {/* 学习效果 */}
      <div className="mb-4">
        <h3
          className="mb-2"
          style={{
            fontSize: "var(--text-h4)",
            fontWeight: "var(--font-weight-semibold)",
            color: "#101019",
          }}
        >
          学习效果
        </h3>
        <div
          className="flex gap-3 rounded-[12px] border border-[#e0ebff] p-4"
          style={{ background: "linear-gradient(135deg, #f0f6ff 0%, #f8fbff 100%)" }}
        >
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
            style={{ background: "var(--primary-gradient)" }}
            aria-hidden
          >
            <FileText className="size-4 text-white" />
          </div>
          <p
            className="min-w-0 flex-1"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: 1.6,
              color: "#444963",
            }}
          >
            {learningEffectCopy}
          </p>
        </div>
      </div>

      {/* 个人核心指标 */}
      <div className="mb-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "#101019",
            }}
          >
            个人核心指标
          </h3>
          <div className="inline-flex rounded-[10px] border border-[#e9ecf5] bg-white p-0.5">
            <button
              type="button"
              onClick={() => setScope("single")}
              className={`rounded-[8px] px-3 py-1.5 transition-colors ${
                scope === "single" ? "bg-[#ecefff] text-[#4a4fed]" : "text-[#646b8a] hover:bg-[#f8f9fc]"
              }`}
              style={{ fontSize: "var(--text-sm)", fontWeight: scope === "single" ? 600 : 400 }}
            >
              单科
            </button>
            <button
              type="button"
              onClick={() => setScope("all")}
              className={`rounded-[8px] px-3 py-1.5 transition-colors ${
                scope === "all" ? "bg-[#ecefff] text-[#4a4fed]" : "text-[#646b8a] hover:bg-[#f8f9fc]"
              }`}
              style={{ fontSize: "var(--text-sm)", fontWeight: scope === "all" ? 600 : 400 }}
            >
              全科
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "AI 课完课量", value: "5", unit: "课" },
            { label: "练习题量", value: "185", unit: "题" },
            { label: "正确率", value: "88", unit: "%" },
            { label: "学习时长", value: "21.5", unit: "h" },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-[12px] border border-[#e9ecf5] bg-white p-4"
              style={{ boxShadow: "0px 2px 12px 0px rgba(16,18,25,0.04)" }}
            >
              <p style={{ fontSize: "var(--text-sm)", color: "var(--gray-3)", marginBottom: "8px" }}>{c.label}</p>
              <p>
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#101019",
                    lineHeight: 1.2,
                  }}
                >
                  {c.value}
                </span>
                <span style={{ fontSize: "var(--text-base)", color: "var(--gray-3)", marginLeft: "4px" }}>{c.unit}</span>
              </p>
            </div>
          ))}
        </div>
        {scope === "all" && (
          <p className="mt-2" style={{ fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
            全科视图为各科目合计（演示数据）。
          </p>
        )}
      </div>

      {/* 知识点进度与掌握度 */}
      <div className="min-w-0 flex-1">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "#101019",
            }}
          >
            知识点进度与掌握度
          </h3>
          <div className="w-full min-w-0 sm:w-[320px]">
            <CustomSelect value={textbook} onChange={setTextbook} options={textbookOptions} placeholder="教材" size="sm" />
          </div>
        </div>

        <div className="overflow-hidden rounded-[12px] border border-[#e9ecf5] bg-white" style={{ boxShadow: "0px 2px 12px 0px rgba(16,18,25,0.04)" }}>
          {knowledgeTree.map((chapter) => {
            const open = openChapters[chapter.id];
            return (
              <div key={chapter.id} className="border-b border-[#e9ecf5] last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter.id)}
                  className="flex w-full items-center gap-2 px-3 py-3 text-left transition-colors hover:bg-[#f8f9fc] sm:px-4"
                >
                  <ChevronRight
                    className={`size-4 shrink-0 text-[#646b8a] transition-transform ${open ? "rotate-90" : ""}`}
                    aria-hidden
                  />
                  <span style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "#101019" }}>{chapter.title}</span>
                </button>
                {open && (
                  <div className="overflow-x-auto border-t border-[#e9ecf5]">
                    <table className="w-full min-w-[640px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#fafbfc]">
                          <th className="px-3 py-2 pl-6" style={{ fontSize: "var(--text-sm)", color: "var(--table-header-text)", fontWeight: 400 }}>
                            小节
                          </th>
                          <th className="px-2 py-2" style={{ fontSize: "var(--text-sm)", color: "var(--table-header-text)", fontWeight: 400 }}>
                            学习状态
                          </th>
                          <th className="px-2 py-2" style={{ fontSize: "var(--text-sm)", color: "var(--table-header-text)", fontWeight: 400 }}>
                            掌握度
                          </th>
                          <th className="px-2 py-2" style={{ fontSize: "var(--text-sm)", color: "var(--table-header-text)", fontWeight: 400 }}>
                            班级均值
                          </th>
                          <th className="min-w-[120px] px-2 py-2" style={{ fontSize: "var(--text-sm)", color: "var(--table-header-text)", fontWeight: 400 }}>
                            标签
                          </th>
                          <th className="w-14 px-2 py-2 text-right" style={{ fontSize: "var(--text-sm)", color: "var(--table-header-text)", fontWeight: 400 }}>
                            操作
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {chapter.sections.map((row) => (
                          <tr key={row.id} className="border-t border-[#f0f2f7]">
                            <td className="px-3 py-3 pl-6" style={{ fontSize: "var(--text-base)", color: "#101019" }}>
                              {row.title}
                            </td>
                            <td className="px-2 py-3" style={{ fontSize: "var(--text-sm)", color: "#444963" }}>
                              {row.status}
                            </td>
                            <td className="px-2 py-3" style={{ fontSize: "var(--text-sm)", color: "#444963" }}>
                              {row.mastery}
                            </td>
                            <td className="px-2 py-3" style={{ fontSize: "var(--text-sm)", color: "var(--gray-3)" }}>
                              {row.classAvg}
                            </td>
                            <td className="px-2 py-3">
                              {row.tags.length === 0 ? (
                                <span style={{ fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>—</span>
                              ) : (
                                <div className="flex flex-wrap gap-1">
                                  {row.tags.map((t) => (
                                    <span
                                      key={t.text}
                                      className={`inline-flex rounded px-1.5 py-0.5 ${tagClass(t.tone)}`}
                                      style={{ fontSize: "10px", fontWeight: 500, lineHeight: 1.5 }}
                                    >
                                      {t.text}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td className="px-2 py-3 text-right">
                              <button
                                type="button"
                                className="text-[#4a4fed] hover:underline"
                                style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}
                                onClick={() => showToast("小节详情：演示", "info")}
                              >
                                详情
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
