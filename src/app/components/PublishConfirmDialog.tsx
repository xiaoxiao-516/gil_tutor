import React, { useState, useEffect } from "react";
import { CustomSelect } from "./CustomSelect";
import { showToast } from "./CustomToast";

const students = [
  { label: "李雨桐 · 高一", value: "liyt" },
  { label: "张子涵 · 高一", value: "zzh" },
  { label: "王梓轩 · 初三", value: "wzx" },
  { label: "赵佳宁 · 初二", value: "zjn" },
];

function getDefaultTaskName(): string {
  const now = new Date();
  return `${now.getMonth() + 1}月${now.getDate()}日数学作业`;
}

function getDefaultDeadline(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}  23:59`;
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M4.5 1.75V3.25M9.5 1.75V3.25M1.75 5.75H12.25M2.75 2.25H11.25C11.8023 2.25 12.25 2.69772 12.25 3.25V11.25C12.25 11.8023 11.8023 12.25 11.25 12.25H2.75C2.19772 12.25 1.75 11.8023 1.75 11.25V3.25C1.75 2.69772 2.19772 2.25 2.75 2.25Z" stroke="#646B8A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface PublishConfirmDialogProps {
  open: boolean;
  joinedCount: number;
  onCancel: () => void;
  onConfirm: (data: { student: string; taskName: string }) => void;
}

export function PublishConfirmDialog({
  open,
  joinedCount,
  onCancel,
  onConfirm,
}: PublishConfirmDialogProps) {
  const [student, setStudent] = useState("liyt");
  const [taskName, setTaskName] = useState(getDefaultTaskName);
  const deadline = getDefaultDeadline();

  useEffect(() => {
    if (open) {
      setTaskName(getDefaultTaskName());
      setStudent("liyt");
    }
  }, [open]);

  if (!open) return null;

  const maxLen = 30;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      onClick={onCancel}
    >
      <div
        className="flex w-full max-w-[560px] flex-col overflow-hidden rounded-[16px] bg-white"
        style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[52px] shrink-0 items-center px-[32px]" style={{ borderBottom: "1px solid #e9ecf5" }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: "#101019" }}>任务设置</span>
        </div>
        <div className="flex flex-col gap-[24px] px-[32px] pt-[20px] pb-[20px]">
          {/* 选择学生 */}
          <div className="flex items-center gap-[16px]">
            <label className="flex w-[100px] shrink-0 items-center gap-[2px]">
              <span style={{ fontSize: 14, color: "#F55656" }}>*</span>
              <span style={{ fontSize: 14, color: "#444963", fontWeight: 400 }}>选择学生</span>
            </label>
            <div className="min-w-0 flex-1">
              <CustomSelect
                value={student}
                onChange={setStudent}
                options={students}
                placeholder="请选择学生"
              />
            </div>
          </div>

          {/* 任务名称 */}
          <div className="flex items-center gap-[16px]">
            <label className="flex w-[100px] shrink-0 items-center gap-[2px]">
              <span style={{ fontSize: 14, color: "#F55656" }}>*</span>
              <span style={{ fontSize: 14, color: "#444963", fontWeight: 400 }}>任务名称</span>
            </label>
            <div className="relative min-w-0 flex-1">
              <input
                className="h-[40px] w-full rounded-[8px] border border-solid border-[#e9ecf5] bg-white px-[12px] outline-none focus:border-[#e9ecf5]"
                style={{ fontSize: 14, color: "#101019" }}
                value={taskName}
                onChange={(e) => {
                  if (e.target.value.length <= maxLen) setTaskName(e.target.value);
                }}
                maxLength={maxLen}
              />
              <span
                className="absolute right-[12px] top-1/2 -translate-y-1/2"
                style={{ fontSize: 12, color: "#838bab" }}
              >
                {taskName.length}/{maxLen}
              </span>
            </div>
          </div>

          {/* 发布时间 */}
          <div className="flex items-center gap-[16px]">
            <label className="flex w-[100px] shrink-0 items-center gap-[2px]">
              <span style={{ fontSize: 14, color: "#F55656" }}>*</span>
              <span style={{ fontSize: 14, color: "#444963", fontWeight: 400 }}>发布时间</span>
            </label>
            <div className="min-w-0 flex-1">
              <div
                className="flex h-[40px] flex-1 items-center gap-[8px] rounded-[8px] border border-solid border-[#e9ecf5] bg-white px-[12px]"
              >
                <span className="flex-1" style={{ fontSize: 14, color: "#101019" }}>立即发布</span>
                <CalendarIcon />
              </div>
            </div>
          </div>

          {/* 要求完成时间 */}
          <div className="flex items-center gap-[16px]">
            <label className="flex w-[100px] shrink-0 items-center gap-[2px]">
              <span style={{ fontSize: 14, color: "#F55656" }}>*</span>
              <span style={{ fontSize: 14, color: "#444963", fontWeight: 400 }}>要求完成时间</span>
            </label>
            <div className="min-w-0 flex-1">
              <div
                className="flex h-[40px] flex-1 items-center gap-[8px] rounded-[8px] border border-solid border-[#e9ecf5] bg-white px-[12px]"
              >
                <span className="flex-1" style={{ fontSize: 14, color: "#101019" }}>{deadline}</span>
                <CalendarIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center border-t border-[#e9ecf5] px-[32px] py-[16px]">
          <span style={{ fontSize: 14, color: "#444963" }}>
            已加入 {joinedCount} 题
          </span>
          <div className="ml-auto flex items-center gap-[12px]">
            <button
              type="button"
              onClick={onCancel}
              className="flex h-[36px] w-[88px] cursor-pointer items-center justify-center rounded-[18px] bg-white transition-colors hover:bg-[#f8f9fc]"
              style={{ border: "1px solid #dfe3f0" }}
            >
              <span style={{ fontSize: 14, fontWeight: 500, color: "#444963", whiteSpace: "nowrap" }}>
                取消布置
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (!student) {
                  showToast("请选择学生", "warning");
                  return;
                }
                if (!taskName.trim()) {
                  showToast("请输入任务名称", "warning");
                  return;
                }
                onConfirm({ student, taskName: taskName.trim() });
              }}
              className="flex h-[36px] w-[88px] cursor-pointer items-center justify-center rounded-[18px] border-none transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#6574fc" }}
            >
              <span style={{ fontSize: 14, fontWeight: 500, color: "white", whiteSpace: "nowrap" }}>
                布置
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
