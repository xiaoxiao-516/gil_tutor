import { useEffect, useMemo, useState } from "react";
import { CustomSelect } from "./CustomSelect";
import { showToast } from "./CustomToast";
import type { MaterialVersion, ScheduleEditMode } from "../mock/schedulePlanMock";

export interface ScheduleRangeDraftValue {
  materialVersionId: string;
  bookLabels: string[];
  chapterIds: string[];
}

interface ScheduleRangeFormProps {
  mode: "setup" | ScheduleEditMode;
  materialVersions: MaterialVersion[];
  value: ScheduleRangeDraftValue;
  onChange: (value: ScheduleRangeDraftValue) => void;
  onMaterialVersionChange: (materialVersionId: string) => void;
  learnedLessonIds?: string[];
}

interface UpdateScheduleRangeModalProps {
  open: boolean;
  mode: ScheduleEditMode;
  materialVersions: MaterialVersion[];
  value: ScheduleRangeDraftValue;
  learnedLessonIds?: string[];
  onClose: () => void;
  onConfirm: (value: ScheduleRangeDraftValue) => void;
}

const sectionLabelStyle = {
  fontSize: "var(--text-sm)",
  fontWeight: "var(--font-weight-medium)" as const,
  color: "var(--foreground)",
};

function getSelectedVersion(materialVersions: MaterialVersion[], materialVersionId: string) {
  return materialVersions.find((item) => item.id === materialVersionId) || materialVersions[0];
}

export function validateScheduleRangeDraft(value: ScheduleRangeDraftValue) {
  if (!value.materialVersionId) {
    showToast("请选择教材版本", "warning");
    return false;
  }
  if (value.bookLabels.length === 0) {
    showToast("请至少选择一个教材分册", "warning");
    return false;
  }
  if (value.chapterIds.length === 0) {
    showToast("请至少选择一个章节", "warning");
    return false;
  }
  return true;
}

export function ScheduleRangeForm({
  mode,
  materialVersions,
  value,
  onChange,
  onMaterialVersionChange,
  learnedLessonIds = [],
}: ScheduleRangeFormProps) {
  const currentVersion = getSelectedVersion(materialVersions, value.materialVersionId);
  const learnedLessonSet = useMemo(() => new Set(learnedLessonIds), [learnedLessonIds]);
  const lockedChapterIds = useMemo(
    () =>
      new Set(
        currentVersion.chapters
          .filter((chapter) => chapter.lessons.some((lesson) => learnedLessonSet.has(lesson.id)))
          .map((chapter) => chapter.id),
      ),
    [currentVersion.chapters, learnedLessonSet],
  );

  const materialOptions = materialVersions.map((item) => ({ label: item.name, value: item.id }));
  const allBookLabels = Array.from(new Set(currentVersion.chapters.map((chapter) => chapter.bookLabel)));
  const visibleChapterCards = currentVersion.chapters.filter((chapter) => value.bookLabels.includes(chapter.bookLabel));

  const toggleBookLabel = (bookLabel: string) => {
    const isSelected = value.bookLabels.includes(bookLabel);
    const nextBookLabels = isSelected
      ? value.bookLabels.filter((item) => item !== bookLabel)
      : [...value.bookLabels, bookLabel];
    const nextChapterIds = value.chapterIds.filter((chapterId) => {
      const chapter = currentVersion.chapters.find((item) => item.id === chapterId);
      return chapter ? nextBookLabels.includes(chapter.bookLabel) : false;
    });

    onChange({
      ...value,
      bookLabels: nextBookLabels,
      chapterIds: nextChapterIds,
    });
  };

  const toggleChapter = (chapterId: string) => {
    const isSelected = value.chapterIds.includes(chapterId);
    if (mode === "study-plan" && isSelected && lockedChapterIds.has(chapterId)) {
      showToast("该章节包含已学课节，不可取消", "info");
      return;
    }

    onChange({
      ...value,
      chapterIds: isSelected ? value.chapterIds.filter((item) => item !== chapterId) : [...value.chapterIds, chapterId],
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label style={sectionLabelStyle}>
          教材版本 <span className="text-[#f35757]">*</span>
        </label>
        <div className="h-[40px]">
          <CustomSelect
            value={value.materialVersionId}
            onChange={onMaterialVersionChange}
            options={materialOptions}
            placeholder="请选择教材版本"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label style={sectionLabelStyle}>
            教材分册 <span className="text-[#f35757]">*</span>
          </label>
          <span
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--muted-foreground)",
            }}
          >
            已选 {value.bookLabels.length} 项
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {allBookLabels.map((bookLabel) => {
            const isSelected = value.bookLabels.includes(bookLabel);
            return (
              <button
                key={bookLabel}
                type="button"
                onClick={() => toggleBookLabel(bookLabel)}
                className="flex h-[32px] items-center justify-center rounded-[18px] px-4 transition-colors"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: isSelected ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                  color: isSelected ? "var(--primary)" : "#444963",
                  border: isSelected ? "1px solid #9CB1FC" : "1px solid var(--border)",
                  backgroundColor: isSelected ? "#EBF1FF" : "white",
                }}
              >
                {bookLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label style={sectionLabelStyle}>
            章节选择 <span className="text-[#f35757]">*</span>
          </label>
          <span
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--muted-foreground)",
            }}
          >
            已选 {value.chapterIds.length} 章
          </span>
        </div>
        <div className="flex max-h-[360px] flex-col gap-3 overflow-y-auto pr-1">
          {visibleChapterCards.map((chapter) => {
            const isSelected = value.chapterIds.includes(chapter.id);
            const isLocked = mode === "study-plan" && lockedChapterIds.has(chapter.id);
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => toggleChapter(chapter.id)}
                className="w-full rounded-[8px] p-4 text-left transition-colors"
                style={{
                  border: isSelected ? "1px solid #9CB1FC" : "1px solid var(--border)",
                  backgroundColor: isSelected ? "rgba(235, 241, 255, 0.7)" : "white",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--foreground)",
                      }}
                    >
                      {chapter.indexLabel} · {chapter.name}
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {chapter.bookLabel}
                    </div>
                  </div>
                  <div className="shrink-0 self-center flex items-center gap-2">
                    {isLocked && (
                      <span
                        className="rounded-[12px] px-2 py-[2px]"
                        style={{
                          backgroundColor: "#F2F4F9",
                          fontSize: "12px",
                          color: "#646B8A",
                        }}
                      >
                        含已学
                      </span>
                    )}
                    <div
                      className="flex size-[18px] items-center justify-center rounded-[4px]"
                      style={{
                        border: isSelected ? "1px solid var(--primary)" : "1px solid #CFD5E8",
                        backgroundColor: isSelected ? "var(--primary)" : "white",
                      }}
                    >
                      {isSelected ? (
                        <svg width="10" height="10" viewBox="0 0 8 8" fill="none" aria-hidden>
                          <path
                            d="M0.75001 4.17867L3.00001 6.7501L6.75001 0.7501"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
          {visibleChapterCards.length === 0 ? (
            <div
              className="rounded-[8px] px-4 py-6 text-center"
              style={{
                border: "1px dashed var(--border)",
                fontSize: "var(--text-base)",
                color: "var(--muted-foreground)",
              }}
            >
              请选择教材分册后查看对应章节
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function UpdateScheduleRangeModal({
  open,
  mode,
  materialVersions,
  value,
  learnedLessonIds = [],
  onClose,
  onConfirm,
}: UpdateScheduleRangeModalProps) {
  const [draft, setDraft] = useState<ScheduleRangeDraftValue>(value);
  const [pendingMaterialVersionId, setPendingMaterialVersionId] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setDraft(value);
      setPendingMaterialVersionId(null);
    }
  }, [open, value]);

  if (!open) {
    return null;
  }

  const handleMaterialVersionChange = (nextMaterialVersionId: string) => {
    if (!draft.materialVersionId || draft.materialVersionId === nextMaterialVersionId) {
      setDraft({ ...draft, materialVersionId: nextMaterialVersionId });
      return;
    }
    setPendingMaterialVersionId(nextMaterialVersionId);
  };

  const commitMaterialVersionChange = () => {
    if (!pendingMaterialVersionId) {
      return;
    }
    setDraft({
      ...draft,
      materialVersionId: pendingMaterialVersionId,
      bookLabels: [],
      chapterIds: [],
    });
    setPendingMaterialVersionId(null);
  };

  const readyToSubmit = !!draft.materialVersionId && draft.bookLabels.length > 0 && draft.chapterIds.length > 0;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div
          className="relative mx-4 flex max-h-[88vh] w-full max-w-[760px] flex-col overflow-hidden rounded-[16px] bg-card"
          style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
        >
          <div className="flex items-center justify-between px-8 pt-7 pb-5">
            <h3
              style={{
                fontSize: "var(--text-h3)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
              }}
            >
              更新排课范围
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="flex size-6 items-center justify-center rounded-[6px] transition-colors hover:bg-muted/30"
            >
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path
                  d="M3 3L11 11M11 3L3 11"
                  stroke="#646B8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 pb-6">
            <ScheduleRangeForm
              mode={mode}
              materialVersions={materialVersions}
              value={draft}
              onChange={setDraft}
              onMaterialVersionChange={handleMaterialVersionChange}
              learnedLessonIds={mode === "study-plan" ? learnedLessonIds : []}
            />
          </div>

          <div
            className="flex items-center justify-end gap-3 px-8 py-5"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="relative flex h-[36px] min-w-[88px] items-center justify-center rounded-[18px] bg-white px-4"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-regular)",
                color: "#444963",
                border: "1px solid var(--border)",
              }}
            >
              取消
            </button>
            <button
              type="button"
              onClick={() => {
                if (!validateScheduleRangeDraft(draft)) {
                  return;
                }
                onConfirm(draft);
              }}
              className="flex h-[36px] min-w-[108px] items-center justify-center rounded-[18px] px-4 transition-opacity"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
                color: readyToSubmit ? "white" : "rgba(255,255,255,0.9)",
                backgroundColor: readyToSubmit ? "var(--primary)" : "#BBCBFC",
              }}
            >
              确认更新
            </button>
          </div>
        </div>
      </div>

      {pendingMaterialVersionId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setPendingMaterialVersionId(null)} />
          <div
            className="relative mx-4 w-full max-w-[440px] rounded-[16px] bg-card px-8 py-7"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
          >
            <div
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--foreground)",
              }}
            >
              确认切换教材版本？
            </div>
            <p
              className="mt-3"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--muted-foreground)",
                lineHeight: "1.6",
              }}
            >
              切换教材版本后，当前版本的已学记录将不在新版本中展示（切回可恢复），是否确认？
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setPendingMaterialVersionId(null)}
                className="flex h-[36px] min-w-[88px] items-center justify-center rounded-[18px] bg-white px-4"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "#444963",
                  border: "1px solid var(--border)",
                }}
              >
                取消
              </button>
              <button
                type="button"
                onClick={commitMaterialVersionChange}
                className="flex h-[36px] min-w-[88px] items-center justify-center rounded-[18px] px-4"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "white",
                  backgroundColor: "var(--primary)",
                }}
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
