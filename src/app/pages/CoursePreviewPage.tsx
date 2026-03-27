import { useNavigate, useSearchParams } from "react-router";
import { showToast } from "../components/CustomToast";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CoursePreviewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "集合及其表示方法";
  const duration = searchParams.get("duration") || "51";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: "#F0F2F7" }}
    >
      {/* ── Top Navigation Bar ── */}
      <div
        className="flex items-center gap-4 px-8 shrink-0"
        style={{ height: 64 }}
      >
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="relative shrink-0 size-[30px] rounded-[20px] bg-white flex items-center justify-center cursor-pointer hover:bg-[#f8f9fc] transition-colors"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[#E9ECF5] inset-0 pointer-events-none rounded-[20px]"
          />
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path
              d="M6 1L1 6L6 11"
              stroke="var(--gray-3)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Title */}
        <span
          className="flex-1"
          style={{
            fontSize: "var(--text-h3)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--foreground)",
          }}
        >
          {title}（约{duration}分钟）
        </span>

        {/* 刷新 button */}
        <button
          onClick={() => showToast("已刷新", "info")}
          className="relative h-[32px] flex items-center justify-center gap-1 px-4 py-[6px] rounded-[18px] cursor-pointer hover:bg-[#f8f9fc] transition-colors"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-regular)",
            color: "var(--popover-foreground)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute border border-border inset-0 pointer-events-none rounded-[18px]"
          />
          刷新
        </button>
      </div>

      {/* ── Course Content Area ── */}
      <div className="flex-1 flex items-center justify-center overflow-hidden px-8 pb-6">
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            maxWidth: 1200,
            borderRadius: 12,
            backgroundColor: "#1B2A4A",
          }}
        >
          {/* Slide content */}
          <div className="absolute inset-0 flex flex-col p-12">
            {/* Slide header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-[6px] h-[28px] rounded-[3px]"
                  style={{ backgroundColor: "#5B8DEF" }}
                />
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "var(--font-weight-bold)",
                    color: "white",
                  }}
                >
                  {title}
                </span>
              </div>
              <div
                className="ml-[18px] mt-1"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                第一章 · 集合与逻辑
              </div>
            </div>

            {/* Slide body */}
            <div className="flex-1 flex gap-10">
              {/* Left column - definitions */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Definition block 1 */}
                <div
                  className="rounded-[8px] p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="size-[22px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#5B8DEF" }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-bold)",
                          color: "white",
                        }}
                      >
                        1
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-h4)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "white",
                      }}
                    >
                      集合的概念
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    一般地，我们把研究对象统称为<span style={{ color: "#7EB8FF" }}>元素</span>，把一些元素组成的总体叫做<span style={{ color: "#7EB8FF" }}>集合</span>（简称为集）。
                  </p>
                </div>

                {/* Definition block 2 */}
                <div
                  className="rounded-[8px] p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="size-[22px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#5B8DEF" }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-bold)",
                          color: "white",
                        }}
                      >
                        2
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-h4)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "white",
                      }}
                    >
                      集合的表示方法
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <span
                        className="shrink-0 mt-0.5"
                        style={{
                          fontSize: "var(--text-base)",
                          color: "#5B8DEF",
                          fontWeight: "var(--font-weight-medium)",
                        }}
                      >
                        ①
                      </span>
                      <p
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-regular)",
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.8,
                        }}
                      >
                        <span style={{ color: "#7EB8FF" }}>列举法</span>：把集合的元素一一列举出来，并用花括号"{"{"}{"}"}"括起来表示集合。
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span
                        className="shrink-0 mt-0.5"
                        style={{
                          fontSize: "var(--text-base)",
                          color: "#5B8DEF",
                          fontWeight: "var(--font-weight-medium)",
                        }}
                      >
                        ②
                      </span>
                      <p
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-regular)",
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.8,
                        }}
                      >
                        <span style={{ color: "#7EB8FF" }}>描述法</span>：用集合所含元素的共同特征表示集合。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - examples */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Example block */}
                <div
                  className="rounded-[8px] p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "#5B8DEF",
                      }}
                    >
                      例 1
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    用列举法表示下列集合：
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <p
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.8,
                      }}
                    >
                      (1) 小于 5 的正整数组成的集合
                    </p>
                    <div
                      className="rounded-[6px] px-4 py-2 mt-1 inline-block"
                      style={{
                        backgroundColor: "rgba(91,141,239,0.15)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "#7EB8FF",
                          fontStyle: "italic",
                        }}
                      >
                        A = {"{"}1, 2, 3, 4{"}"}
                      </span>
                    </div>
                    <p
                      className="mt-2"
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.8,
                      }}
                    >
                      (2) 方程 x² - 1 = 0 的所有实数根组成的集合
                    </p>
                    <div
                      className="rounded-[6px] px-4 py-2 mt-1 inline-block"
                      style={{
                        backgroundColor: "rgba(91,141,239,0.15)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "#7EB8FF",
                          fontStyle: "italic",
                        }}
                      >
                        B = {"{"}−1, 1{"}"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Properties block */}
                <div
                  className="rounded-[8px] p-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="size-[22px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#5B8DEF" }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-bold)",
                          color: "white",
                        }}
                      >
                        3
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-h4)",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "white",
                      }}
                    >
                      元素与集合的关系
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.8,
                      }}
                    >
                      若元素 <span style={{ color: "#7EB8FF", fontStyle: "italic" }}>a</span> 是集合 <span style={{ color: "#7EB8FF", fontStyle: "italic" }}>A</span> 的元素，记作 <span style={{ color: "#7EB8FF", fontStyle: "italic" }}>a ∈ A</span>
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.8,
                      }}
                    >
                      若元素 <span style={{ color: "#7EB8FF", fontStyle: "italic" }}>a</span> 不是集合 <span style={{ color: "#7EB8FF", fontStyle: "italic" }}>A</span> 的元素，记作 <span style={{ color: "#7EB8FF", fontStyle: "italic" }}>a ∉ A</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Page indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              <div
                className="w-[18px] h-[4px] rounded-full"
                style={{ backgroundColor: "#5B8DEF" }}
              />
              <div
                className="w-[4px] h-[4px] rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              />
              <div
                className="w-[4px] h-[4px] rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              />
              <div
                className="w-[4px] h-[4px] rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              />
            </div>
          </div>

          {/* Teacher video overlay - bottom right */}
          <div
            className="absolute bottom-6 right-6 overflow-hidden"
            style={{
              width: 160,
              height: 200,
              borderRadius: 12,
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXQlMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ1MjgzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="讲师"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
