import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { showToast } from "../components/CustomToast";
import { ScheduleRangeButton } from "../components/ScheduleRangeButton";
import {
  ScheduleRangeForm,
  type ScheduleRangeDraftValue,
  UpdateScheduleRangeModal,
  validateScheduleRangeDraft,
} from "../components/UpdateScheduleRangeModal";
import {
  getDiagnosisPlan,
  getDiagnosisPlanProfile,
  getLearnedLessonIds,
  getMaterialVersions,
  saveDiagnosisPlan,
  type SchedulePlanLesson,
  type SchedulePlanProfile,
  upsertDiagnosisPlanProfile,
} from "../mock/schedulePlanMock";
import IcCourse from "../../imports/Ic课程16";
import IcPractice from "../../imports/Ic练习16";

const planItemTagClassName = "inline-flex h-4 shrink-0 items-center rounded-[2px] bg-[#f0f2f7] px-1 py-px";

const planItemTagStyle = {
  fontSize: "10px",
  fontWeight: "var(--font-weight-regular)",
  color: "#646b8a",
  lineHeight: "1.5",
} as const;

function PlanItemLearnedCompletedTag() {
  return (
    <span className={planItemTagClassName} style={planItemTagStyle}>
      已完成
    </span>
  );
}

interface DiagnosisLocationState {
  studentName?: string;
  grade?: string;
  subject?: string;
}

function getDefaultProfile(diagnosisId: string, locationState: DiagnosisLocationState | null): SchedulePlanProfile {
  const fallbackProfile = getDiagnosisPlanProfile(diagnosisId) || {
    diagnosisId,
    studentName: locationState?.studentName || "学生",
    grade: locationState?.grade || "高一",
    subject: locationState?.subject || "数学",
  };

  return {
    diagnosisId,
    studentName: locationState?.studentName || fallbackProfile.studentName,
    grade: locationState?.grade || fallbackProfile.grade,
    subject: locationState?.subject || fallbackProfile.subject,
  };
}

function makeDraftFromPlan(plan: ReturnType<typeof getDiagnosisPlan>, fallbackMaterialVersionId: string): ScheduleRangeDraftValue {
  if (!plan) {
    return {
      materialVersionId: fallbackMaterialVersionId,
      bookLabels: [],
      chapterIds: [],
    };
  }

  return {
    materialVersionId: plan.materialVersionId,
    bookLabels: plan.bookLabels,
    chapterIds: plan.chapterIds,
  };
}

function groupLessons(lessons: SchedulePlanLesson[]) {
  const groups = new Map<
    string,
    {
      chapterId: string;
      chapterIndexLabel: string;
      chapterName: string;
      lessons: Array<SchedulePlanLesson & { globalIndex: number }>;
    }
  >();

  lessons.forEach((lesson, index) => {
    if (!groups.has(lesson.chapterId)) {
      groups.set(lesson.chapterId, {
        chapterId: lesson.chapterId,
        chapterIndexLabel: lesson.chapterIndexLabel,
        chapterName: lesson.chapterName,
        lessons: [],
      });
    }
    groups.get(lesson.chapterId)!.lessons.push({ ...lesson, globalIndex: index });
  });

  return Array.from(groups.values());
}

function expandLessonDisplayItems(
  lessons: Array<SchedulePlanLesson & { globalIndex: number }>,
) {
  return lessons.flatMap((lesson, index) => [
    {
      id: `${lesson.id}-course`,
      order: index * 2 + 1,
      title: lesson.lessonName,
      type: "AI课" as const,
      duration: lesson.duration,
      previewPath: `/course-preview?title=${encodeURIComponent(lesson.lessonName)}&duration=${encodeURIComponent(String(lesson.duration))}`,
      completed: lesson.status === "completed",
    },
    {
      id: `${lesson.id}-practice`,
      order: index * 2 + 2,
      title: lesson.lessonName,
      type: "练习" as const,
      duration: Math.max(12, lesson.duration - 8),
      previewPath: `/exercise-preview?title=${encodeURIComponent(lesson.lessonName)}&duration=${encodeURIComponent(String(Math.max(12, lesson.duration - 8)))}`,
      completed: lesson.status === "completed",
    },
  ]);
}

function resetDisplayItemOrder<T extends { order: number }>(items: T[]) {
  return items.map((item, index) => ({
    ...item,
    order: index + 1,
  }));
}

export function SchedulePlanPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { diagnosisId = "" } = useParams();
  const locationState = (location.state as DiagnosisLocationState | null) || null;
  const [planRecord, setPlanRecord] = useState(() => getDiagnosisPlan(diagnosisId));
  const profile = useMemo(() => getDefaultProfile(diagnosisId, locationState), [diagnosisId, locationState]);
  const materialVersions = useMemo(() => getMaterialVersions(profile.grade, profile.subject), [profile.grade, profile.subject]);
  const [draft, setDraft] = useState<ScheduleRangeDraftValue>(() =>
    makeDraftFromPlan(getDiagnosisPlan(diagnosisId), materialVersions[0]?.id || ""),
  );
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    upsertDiagnosisPlanProfile(profile);
  }, [profile]);

  useEffect(() => {
    const existingPlan = getDiagnosisPlan(diagnosisId);
    setPlanRecord(existingPlan);
    setDraft(makeDraftFromPlan(existingPlan, materialVersions[0]?.id || ""));
  }, [diagnosisId, materialVersions]);

  const activePlan = planRecord || getDiagnosisPlan(diagnosisId);
  const displayMaterialVersions = materialVersions;
  const currentMaterialVersion = displayMaterialVersions.find(
    (item) => item.id === (activePlan?.materialVersionId || draft.materialVersionId),
  );
  const learnedLessonIds = getLearnedLessonIds(activePlan);
  const lessonGroups = activePlan ? groupLessons(activePlan.lessons) : [];
  const [planSegment, setPlanSegment] = useState<"learned" | "unlearned">("unlearned");
  const allDisplayItems = useMemo(
    () => lessonGroups.flatMap((group) => expandLessonDisplayItems(group.lessons)),
    [lessonGroups],
  );
  const learnedCount = allDisplayItems.filter((item) => item.completed).length;
  const unlearnedCount = allDisplayItems.length - learnedCount;

  useEffect(() => {
    if (learnedCount === 0 && planSegment === "learned") {
      setPlanSegment("unlearned");
    }
  }, [learnedCount, planSegment]);

  const handleGenerate = () => {
    if (!validateScheduleRangeDraft(draft)) {
      return;
    }
    const nextRecord = saveDiagnosisPlan(profile, {
      materialVersionId: draft.materialVersionId,
      bookLabels: draft.bookLabels,
      chapterIds: draft.chapterIds,
    });
    setPlanRecord(nextRecord);
    setDraft(makeDraftFromPlan(nextRecord, draft.materialVersionId));
    showToast("排课计划已生成", "success");
  };

  const handleUpdate = (nextDraft: ScheduleRangeDraftValue) => {
    const nextRecord = saveDiagnosisPlan(profile, {
      materialVersionId: nextDraft.materialVersionId,
      bookLabels: nextDraft.bookLabels,
      chapterIds: nextDraft.chapterIds,
    });
    setPlanRecord(nextRecord);
    setDraft(makeDraftFromPlan(nextRecord, nextDraft.materialVersionId));
    setUpdateModalOpen(false);
    showToast("排课范围已更新", "success");
  };

  const chapterDisplayGroups = useMemo(
    () =>
      lessonGroups
        .map((group) => {
          const displayItems = resetDisplayItemOrder(
            expandLessonDisplayItems(group.lessons).filter((item) =>
              planSegment === "learned" ? item.completed : !item.completed,
            ),
          );
          const bookLabel =
            currentMaterialVersion?.chapters.find((chapter) => chapter.id === group.chapterId)?.bookLabel || "";

          return {
            ...group,
            bookLabel,
            displayItems,
          };
        })
        .filter((group) => group.displayItems.length > 0),
    [currentMaterialVersion, lessonGroups, planSegment],
  );

  const chapterDisplaySections = useMemo(() => {
    const grouped = new Map<string, typeof chapterDisplayGroups>();
    chapterDisplayGroups.forEach((group) => {
      const key = group.bookLabel || "未标注分册";
      const existing = grouped.get(key) || [];
      existing.push(group);
      grouped.set(key, existing);
    });

    return Array.from(grouped.entries()).map(([label, groups]) => ({
      key: label,
      label,
      groups,
    }));
  }, [chapterDisplayGroups]);

  const renderChapterBlock = (group: (typeof chapterDisplayGroups)[number], showChapterGap: boolean) => (
    <div
      key={group.chapterId}
      className={showChapterGap ? "mt-10" : ""}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--foreground)",
            }}
          >
            {group.chapterIndexLabel} · {group.chapterName}
          </div>
          <div
            className="mt-1"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--muted-foreground)",
            }}
          >
            共 {group.lessons.length} 节
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-[8px]">
          {group.displayItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-[6px] border border-solid border-[#e9ecf5] bg-white px-[17px] py-[12px]"
            >
              <div className="min-w-0 flex-1">
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-regular)",
                    color: "#101019",
                  }}
                >
                  {item.order}. {item.title}
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  <span
                    className="inline-flex shrink-0 items-center gap-1 rounded-[999px] px-2 py-[2px]"
                    style={{
                      backgroundColor: item.type === "AI课" ? "rgba(101,116,252,0.10)" : "rgba(87,199,255,0.12)",
                      color: item.type === "AI课" ? "#5c68f6" : "#2e91d1",
                    }}
                  >
                    <span
                      className="inline-block h-3.5 w-3.5 shrink-0"
                      style={
                        {
                          "--fill-0": item.type === "AI课" ? "#5c68f6" : "#2e91d1",
                          "--stroke-0": item.type === "AI课" ? "#5c68f6" : "#2e91d1",
                          "--muted-foreground": item.type === "AI课" ? "#5c68f6" : "#2e91d1",
                        } as any
                      }
                    >
                      {item.type === "AI课" ? <IcCourse /> : <IcPractice />}
                    </span>
                    <span
                      className="shrink-0"
                      style={{
                        fontSize: "11px",
                        fontWeight: "var(--font-weight-medium)",
                        lineHeight: "1.4",
                      }}
                    >
                      {item.type}
                    </span>
                  </span>
                  <span
                    className="min-w-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#838bab",
                      lineHeight: "1.5",
                    }}
                  >
                    预计 {item.duration} 分钟
                  </span>
                  {item.completed ? <PlanItemLearnedCompletedTag /> : null}
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate(item.previewPath)}
                className="flex h-[28px] w-[60px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] border border-solid border-[#dfe3f0] bg-white transition-colors hover:bg-[#f8f9fc]"
                style={{
                  fontSize: "12px",
                  fontWeight: "var(--font-weight-regular)",
                  color: "#646B8A",
                  lineHeight: "1.5",
                }}
              >
                预览
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col pb-6">
      <div className="flex h-[68px] shrink-0 items-center justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="relative flex size-[30px] shrink-0 cursor-pointer items-center justify-center rounded-[20px] bg-white transition-colors hover:bg-[#f8f9fc]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[20px] border border-[#E9ECF5]"
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
          <h2
            className="min-w-0 truncate"
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: "var(--font-weight-page-title)",
              lineHeight: "30px",
              letterSpacing: 0,
              color: "var(--page-title-muted)",
            }}
          >
            排课计划
          </h2>
        </div>
        <div className="shrink-0">
          {activePlan ? <ScheduleRangeButton onClick={() => setUpdateModalOpen(true)} /> : null}
        </div>
      </div>

      <div className="pb-8">
        {!activePlan ? (
          <div className="w-full rounded-[12px] bg-card p-8" style={{ border: "1px solid var(--border)" }}>
            <div
              className="grid gap-4 rounded-[8px] p-4 md:grid-cols-3"
              style={{ backgroundColor: "#F8F9FC" }}
            >
              <div>
                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  学生姓名
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--foreground)",
                  }}
                >
                  {profile.studentName}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  年级
                </div>
                <div className="mt-1" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}>
                  {profile.grade}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  学科
                </div>
                <div className="mt-1" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}>
                  {profile.subject}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ScheduleRangeForm
                mode="setup"
                materialVersions={displayMaterialVersions}
                value={draft}
                onChange={setDraft}
                onMaterialVersionChange={(nextMaterialVersionId) =>
                  setDraft({
                    ...draft,
                    materialVersionId: nextMaterialVersionId,
                    bookLabels: [],
                    chapterIds: [],
                  })
                }
              />
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={handleGenerate}
                className="flex h-[40px] min-w-[136px] items-center justify-center rounded-[20px] px-5"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "white",
                  backgroundColor:
                    draft.materialVersionId && draft.bookLabels.length > 0 && draft.chapterIds.length > 0
                      ? "var(--primary)"
                      : "#BBCBFC",
                }}
              >
                生成排课计划
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-6">
            <div
              className="rounded-[12px] bg-card p-6"
              style={{
                border: "1px solid rgba(207,213,232,0.9)",
              }}
            >
              <div className="flex items-center justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-baseline gap-3">
                      <div
                        className="shrink-0"
                        style={{
                          fontSize: "var(--text-h3)",
                          fontWeight: "var(--font-weight-semibold)",
                          color: "var(--foreground)",
                        }}
                      >
                        {activePlan.studentName}
                      </div>
                      <div
                        className="truncate"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-regular)",
                          color: "#838bab",
                          lineHeight: "1.5",
                        }}
                      >
                        {activePlan.grade} · {activePlan.subject}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[currentMaterialVersion?.name, ...activePlan.bookLabels].map((label) => (
                        <span
                          key={label}
                          className="inline-flex items-center rounded-[999px] px-3 py-[6px]"
                          style={{
                            backgroundColor: "#f5f7fc",
                            color: "#646B8A",
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                            lineHeight: "1.5",
                          }}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center">
                  <div className="text-right">
                    <div className="flex items-end justify-end gap-1">
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "var(--font-weight-regular)",
                          color: "#838bab",
                          lineHeight: "1.5",
                        }}
                      >
                        共
                      </span>
                      <span
                        style={{
                          fontSize: "32px",
                          fontWeight: "var(--font-weight-semibold)",
                          color: "var(--primary)",
                          lineHeight: "1",
                        }}
                      >
                        {allDisplayItems.length}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "var(--font-weight-regular)",
                          color: "#838bab",
                          lineHeight: "1.5",
                        }}
                      >
                        课
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-0 pb-0">
              <div className="flex w-full items-center gap-[12px] py-[12px]">
                <div className="flex items-center gap-[8px]">
                  <h3
                    className="shrink-0 whitespace-nowrap"
                    style={{
                      fontSize: "var(--text-h4)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      lineHeight: "24px",
                    }}
                  >
                    学习规划
                  </h3>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#9aa4c3",
                      lineHeight: "1.5",
                    }}
                  >
                    {activePlan.generatedAt}
                  </span>
                </div>
                <div className="ml-auto flex shrink-0 items-center gap-[12px]">
                  {learnedCount > 0 ? (
                    <button
                      type="button"
                      onClick={() => setPlanSegment("learned")}
                      className="flex w-[95px] cursor-pointer flex-col items-center gap-[4px]"
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: planSegment === "learned" ? "#4a4fed" : "#abb4d1",
                          lineHeight: "1.5",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        已学（{learnedCount}）
                      </span>
                      <div className="h-[2px] w-full" style={{ backgroundColor: planSegment === "learned" ? "#6574fc" : "transparent", borderRadius: "2px" }} />
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setPlanSegment("unlearned")}
                    className="flex w-[95px] cursor-pointer flex-col items-center gap-[4px]"
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: planSegment === "unlearned" ? "#4a4fed" : "#abb4d1",
                        lineHeight: "1.5",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      未学（{unlearnedCount}）
                    </span>
                    <div className="h-[2px] w-full" style={{ backgroundColor: planSegment === "unlearned" ? "#6574fc" : "transparent", borderRadius: "2px" }} />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-6">
                {chapterDisplaySections.map((section) => (
                  <div key={section.key} className="flex flex-col gap-6">
                    {section.label ? (
                      <div
                        className="px-1"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-semibold)",
                          color: "#646B8A",
                          lineHeight: "1.5",
                        }}
                      >
                        {section.label}
                      </div>
                    ) : null}
                    <div
                      className="rounded-[12px] border border-solid border-[#e9ecf5] p-6"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      {section.groups.map((group, groupIndex) =>
                        renderChapterBlock(group, groupIndex > 0),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <UpdateScheduleRangeModal
        open={updateModalOpen}
        mode="report"
        materialVersions={displayMaterialVersions}
        value={draft}
        learnedLessonIds={learnedLessonIds}
        onClose={() => setUpdateModalOpen(false)}
        onConfirm={handleUpdate}
      />
    </div>
  );
}
