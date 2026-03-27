import { useState, useRef } from "react";
import { CustomSelect } from "./CustomSelect";
import { Check, Copy, Loader2 } from "lucide-react";
import svgPaths from "../../imports/svg-cql4f9f1hr";
import { showToast } from "./CustomToast";

interface DiagnosisModalProps {
  onClose: () => void;
  onAdd: (row: any) => void;
  buildDiagnosisUrl: (params: any) => string;
}

type ModalStage = "form" | "loading" | "done";

export function DiagnosisModal({ onClose, onAdd, buildDiagnosisUrl }: DiagnosisModalProps) {
  const [grade, setGrade] = useState("初一");
  const [subject, setSubject] = useState("英语");
  const [chapter, setChapter] = useState("必修一 Unit2");
  const [type, setType] = useState("人教版");
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [stage, setStage] = useState<ModalStage>("form");
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const linkInputRef = useRef<HTMLInputElement>(null);

  const handleGenerateAndCopy = async () => {
    // Validation
    if (!studentName.trim()) {
      showToast("请填写学生姓名", "error");
      return;
    }
    if (!phone.trim()) {
      showToast("请填写手机号", "error");
      return;
    }
    if (!/^1\d{10}$/.test(phone)) {
      showToast("请输入正确的手机号", "error");
      return;
    }
    if (!chapter.trim()) {
      showToast("请填写教材章节", "error");
      return;
    }

    // Enter loading state
    setStage("loading");

    // Simulate brief generation delay for UX
    await new Promise((resolve) => setTimeout(resolve, 600));

    const chapterShort = chapter.includes("专题") ? chapter : `${chapter}专题`;
    const chapterDetail = `${grade} · ${subject} · ${chapter} · ${type}`;
    const id = `new-${Date.now()}`;
    const url = buildDiagnosisUrl({ grade, subject, chapter: chapterShort, type, id });

    setGeneratedLink(url);

    // Add row to table
    onAdd({
      id,
      studentName: studentName.trim(),
      grade,
      subject,
      chapter: chapterShort,
      chapterDetail,
      creator: "李小明老师",
      createdAtTs: Date.now(),
      result: "未开始",
      finishedAtTs: null,
      status: "未开始",
      isUrlDeleted: false,
      rawUrl: url,
      phone: phone.trim(),
    });

    // Auto-copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopyState("copied");
      showToast("链接已生成并复制到剪贴板", "success");
    } catch {
      showToast("链接已生成，请手动复制", "info");
    }

    setStage("done");
  };

  const handleManualCopy = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopyState("copied");
      showToast("链接已复制到剪贴板", "success");
      setTimeout(() => setCopyState("idle"), 2500);
    } catch {
      showToast("复制失败，请手动复制", "error");
    }
  };

  const labelStyle = {
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-weight-medium)" as const,
    color: "var(--foreground)",
  };

  const inputClass =
    "w-full h-[40px] px-3 bg-input-background border border-border rounded-[6px] focus:outline-none focus:border-primary focus:ring-0 transition-colors";

  const inputStyle = {
    fontSize: "var(--text-base)",
    fontWeight: "var(--font-weight-regular)" as const,
    color: "var(--foreground)",
  };

  const isLocked = stage !== "form";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div
        className="relative bg-card rounded-[16px] overflow-visible w-full max-w-[640px] mx-4"
        style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-1">
          <h3
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
              lineHeight: 1.5,
            }}
          >
            新建诊断
          </h3>
          <button
            onClick={onClose}
            className="shrink-0 size-6 flex items-center justify-center hover:opacity-70 transition-opacity rounded-[6px] hover:bg-muted/30"
          >
            <svg className="size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0237 14.0237">
              <path clipRule="evenodd" d={svgPaths.p37c48700} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 px-8 pt-6 pb-2">
          {/* Row 1: 学生姓名 + 手机号 */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>
                学生姓名 <span className="text-[#f35757]">*</span>
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="请输入学生姓名"
                disabled={isLocked}
                className={`${inputClass} ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
                style={inputStyle}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>
                手机号 <span className="text-[#f35757]">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 11);
                  setPhone(val);
                }}
                placeholder="请输入手机号"
                disabled={isLocked}
                className={`${inputClass} ${isLocked ? "opacity-60 cursor-not-allowed" : ""}`}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 2: 学段 + 学科 */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>年级</label>
              <CustomSelect
                value={grade}
                onChange={setGrade}
                options={[
                  { label: "初一", value: "初一" },
                  { label: "初二", value: "初二" },
                  { label: "初三", value: "初三" },
                  { label: "高一", value: "高一" },
                  { label: "高二", value: "高二" },
                  { label: "高三", value: "高三" },
                ]}
                placeholder="请选择学段"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>学科</label>
              <CustomSelect
                value={subject}
                onChange={setSubject}
                options={[
                  { label: "英语", value: "英语" },
                  { label: "数学", value: "数学" },
                  { label: "物理", value: "物理" },
                ]}
                placeholder="请选择学科"
              />
            </div>
          </div>

          {/* Row 3: 教材版本 + 教材章节 */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>教材版本</label>
              <CustomSelect
                value={type}
                onChange={setType}
                options={[
                  { label: "人教版", value: "人教版" },
                  { label: "北师大版", value: "北师大版" },
                  { label: "苏教版", value: "苏教版" },
                  { label: "外研版", value: "外研版" },
                  { label: "沪教版", value: "沪教版" },
                ]}
                placeholder="请选择教材版本"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label style={labelStyle}>教材章节</label>
              <CustomSelect
                value={chapter}
                onChange={setChapter}
                options={[
                  { label: "必修一 Unit1", value: "必修一 Unit1" },
                  { label: "必修一 Unit2", value: "必修一 Unit2" },
                  { label: "必修一 Unit3", value: "必修一 Unit3" },
                  { label: "必修二 Unit1", value: "必修二 Unit1" },
                  { label: "必修二 Unit2", value: "必修二 Unit2" },
                  { label: "必修二 Unit3", value: "必修二 Unit3" },
                ]}
                placeholder="请选择教材章节"
              />
            </div>
          </div>

          {/* 链接结果区域 - 仅在生成完成后展开 */}
          {stage === "done" && generatedLink && (
            <div
              className="rounded-[8px] p-4 mt-1"
              style={{
                backgroundColor: "#F8F9FA",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--foreground)",
                  }}
                >
                  诊断链接
                </p>
                <span
                  className="inline-flex items-center gap-1 text-[#2dc01f]"
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  <Check className="w-3.5 h-3.5" />
                  已自动复制
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  ref={linkInputRef}
                  type="text"
                  value={generatedLink}
                  readOnly
                  onClick={() => linkInputRef.current?.select()}
                  className="flex-1 h-[40px] px-3 bg-card border border-border rounded-[6px] focus:outline-none focus:border-primary focus:ring-0 cursor-text"
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--foreground)",
                  }}
                />
                <button
                  onClick={handleManualCopy}
                  className="shrink-0 h-[40px] w-[40px] flex items-center justify-center rounded-[6px] transition-all hover:opacity-90"
                  style={{
                    backgroundColor: copyState === "copied" ? "rgba(45, 192, 31, 0.08)" : "rgba(101, 116, 252, 0.08)",
                    color: copyState === "copied" ? "var(--chart-2)" : "var(--primary)",
                  }}
                  title="再次复制"
                >
                  {copyState === "copied" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 pt-6 pb-7">
          {stage === "form" && (
            <>
              <button
                onClick={onClose}
                className="h-[36px] px-6 bg-card border border-border rounded-full hover:bg-muted/30 transition-colors"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--card-foreground)",
                }}
              >
                取消
              </button>
              <button
                onClick={handleGenerateAndCopy}
                disabled={!studentName.trim() || !phone.trim()}
                className={`h-[36px] px-6 text-white rounded-full transition-all ${
                  !studentName.trim() || !phone.trim()
                    ? "bg-[#bbcbfc] cursor-not-allowed"
                    : "bg-[#6574fc] hover:bg-[#4a4fed] active:bg-[#9cb1fc]"
                }`}
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                生成并复制链接
              </button>
            </>
          )}
          {stage === "loading" && (
            <button
              disabled
              className="h-[36px] px-6 bg-primary text-primary-foreground rounded-full opacity-80 cursor-not-allowed inline-flex items-center gap-2"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              生成中...
            </button>
          )}
          {stage === "done" && (
            <button
              onClick={onClose}
              className="h-[36px] px-6 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              完成
            </button>
          )}
        </div>
      </div>
    </div>
  );
}