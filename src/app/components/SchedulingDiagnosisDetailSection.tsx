import { ChevronDown } from "lucide-react";
import { showToast } from "./CustomToast";
import type { DiagnosisSessionMeta } from "../mock/schedulePlanMock";

export interface SchedulingDiagnosisDetailSectionProps {
  /** 与顶栏学生选择一致，如「曹操 · 高二」 */
  studentLine: string;
  subject: string;
  sessionMeta: DiagnosisSessionMeta;
  /** 「去排课」：如滚动到排课范围或学习规划 */
  onGoToSchedule: () => void;
  className?: string;
  /**
   * 为 false 时只保留中间白底「排课诊断详情」卡，不展示下方重复的「学生·学科·未排课」条（与页顶筛选合并）。
   * 布置页诊断专视图用 false；排课计划未排课页用 true。
   */
  showContextFilterBar?: boolean;
}

/**
 * 排课诊断详情 + 学生/学科筛选条（未排课态），与排课计划页、布置页共用。
 */
export function SchedulingDiagnosisDetailSection({
  studentLine,
  subject,
  sessionMeta,
  onGoToSchedule,
  className = "",
  showContextFilterBar = true,
}: SchedulingDiagnosisDetailSectionProps) {
  return (
    <div className={`${showContextFilterBar ? "flex flex-col gap-4" : "flex flex-col"} ${className}`.trim()}>
      {showContextFilterBar ? (
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          className="inline-flex h-9 max-w-full cursor-default items-center gap-2 rounded-[8px] border border-solid border-[#E9ECF5] bg-white px-3 py-1.5 text-left transition-colors"
          style={{
            fontSize: "14px",
            fontWeight: "var(--font-weight-medium)",
            color: "#101019",
          }}
        >
          <span className="min-w-0 truncate">{studentLine}</span>
          <ChevronDown className="size-4 shrink-0 text-[#9aa3b8]" aria-hidden />
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 cursor-default items-center gap-2 rounded-[8px] border border-solid border-[#E9ECF5] bg-white px-3 py-1.5"
            style={{
              fontSize: "14px",
              fontWeight: "var(--font-weight-medium)",
              color: "#101019",
            }}
          >
            {subject}
            <ChevronDown className="size-4 shrink-0 text-[#9aa3b8]" aria-hidden />
          </button>
          <span
            className="inline-flex shrink-0 items-center rounded-[4px] px-2 py-0.5"
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "1.5",
              color: "#C27803",
              backgroundColor: "#FFF4E0",
            }}
          >
            未排课
          </span>
        </div>
      </div>
      ) : null}

      <div
        className="rounded-[12px] border border-solid border-[#E9ECF5] bg-white p-5"
        style={{ boxShadow: "0 1px 0 rgba(16, 24, 40, 0.04)" }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
                lineHeight: "1.4",
              }}
            >
              排课诊断详情
            </span>
            <span
              className="inline-flex shrink-0 items-center rounded-[999px] px-2 py-0.5"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: "1.4",
                color: "#0D9A66",
                backgroundColor: "rgba(13, 154, 102, 0.12)",
              }}
            >
              {sessionMeta.statusLabel}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => showToast("诊断报告功能待完善", "info")}
              className="inline-flex h-8 shrink-0 items-center rounded-[20px] px-3"
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--primary)",
                backgroundColor: "rgba(101, 116, 252, 0.12)",
              }}
            >
              查看报告
            </button>
            <button
              type="button"
              onClick={() => showToast("报告已发送给学生", "success")}
              className="inline-flex h-8 shrink-0 items-center rounded-[20px] px-3"
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--primary)",
                backgroundColor: "rgba(101, 116, 252, 0.12)",
              }}
            >
              发送报告给学生
            </button>
            <button
              type="button"
              onClick={onGoToSchedule}
              className="inline-flex h-8 shrink-0 items-center rounded-[20px] px-3"
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "#4a59e8",
                backgroundColor: "rgba(101, 116, 252, 0.12)",
              }}
            >
              去排课
            </button>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <span
              className="shrink-0"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)",
                color: "#646b8a",
                lineHeight: "1.5",
              }}
            >
              创建时间
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-medium)",
                color: "#101019",
                lineHeight: "1.5",
                wordBreak: "break-all",
              }}
            >
              {sessionMeta.createdAt}
            </span>
          </div>
          <div>
            <div
              className="mb-2"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)",
                color: "#646b8a",
                lineHeight: "1.5",
              }}
            >
              诊断链接
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
              <a
                href={sessionMeta.diagnosisUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="min-w-0 flex-1 break-all underline-offset-2 hover:underline"
                style={{
                  fontSize: "14px",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary)",
                  lineHeight: "1.5",
                }}
              >
                {sessionMeta.diagnosisUrl}
              </a>
              <button
                type="button"
                onClick={() => {
                  void navigator.clipboard.writeText(sessionMeta.diagnosisUrl).then(
                    () => {
                      showToast("已复制到剪贴板", "success");
                    },
                    () => {
                      showToast("复制失败，请重试", "error");
                    },
                  );
                }}
                className="shrink-0"
                style={{
                  fontSize: "14px",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary)",
                  lineHeight: "1.5",
                }}
              >
                复制
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-solid pt-4" style={{ borderColor: "#E9ECF5" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-regular)",
              color: "#8b95b3",
              lineHeight: "1.6",
            }}
          >
            诊断完成后，系统将根据结果自动生成诊断报告，帮助老师制作合适的学习规划
          </p>
        </div>
      </div>
    </div>
  );
}
