import { useState, useEffect, useMemo, useCallback, useRef, Fragment } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AlertCircle, ClipboardList, GripVertical } from "lucide-react";
import IcCourse from "../../imports/Ic课程16";
import IcPractice from "../../imports/Ic练习16";
import IcClose from "../../imports/Ic关闭16";
import { CustomSelect } from "../components/CustomSelect";
import { showToast } from "../components/CustomToast";
import { SchedulingDiagnosisDetailSection } from "../components/SchedulingDiagnosisDetailSection";
import { getDiagnosisPlan, getDiagnosisSessionMeta } from "../mock/schedulePlanMock";
import svgPaths from "../../imports/svg-r57qxbmmrt";
import bottomBarSvgPaths from "../../imports/svg-3g6fnutf14";
import recentSvgPaths from "../../imports/svg-fnul1acw7u";
import practiceSvgPaths from "../../imports/svg-ltvqg4yhpr";
import emptyTaskListIllustration from "../../assets/empty-task-list.svg?url";
import { DeadlineDatePicker } from "../components/DeadlineDatePicker";
import publishSvgPaths from "../../imports/svg-gl0as5wg90";
import { DateTimePicker } from "../components/DateTimePicker";
import { PublicQuestionResourceWorkspace } from "./QuestionBankPage";
import { CourseBankWorkspace } from "./CourseBankPage";
import { HomeworkBankWorkspace } from "./HomeworkBankPage";
import noDiagnosisSvgPaths from "../../imports/svg-vwlpb83c5k";

/* ─── Mock Data ─── */
const students = [
  { label: "李雨桐 · 高一", value: "liyt" },
  { label: "张子涵 · 高一", value: "zzh" },
  { label: "王梓轩 · 初三", value: "wzx" },
  { label: "赵佳宁 · 初二", value: "zjn" },
  { label: "曹操 · 高二", value: "cc" },
];

const subjectOptions = [
  { label: "数学", value: "数学" },
  { label: "英语", value: "英语" },
  { label: "物理", value: "物理" },
];

const studentMeta: Record<string, { remaining: number; total: number; planNearComplete: boolean; noDiagnosis?: boolean }> = {
  liyt: { remaining: 75, total: 100, planNearComplete: false },
  zzh: { remaining: 42, total: 100, planNearComplete: false },
  wzx: { remaining: 1, total: 100, planNearComplete: true },
  zjn: { remaining: 88, total: 100, planNearComplete: false, noDiagnosis: true },
  cc: { remaining: 60, total: 100, planNearComplete: false },
};

interface TaskItem {
  id: string;
  name: string;
  type: "AI课" | "巩固练习" | "诊断任务";
  duration: number;
}

interface PlanItem {
  id: string;
  order: number;
  name: string;
  type: "AI课" | "巩固练习";
  duration: number;
  completed: boolean;
  studiedMinutes?: number;
  /** 已下架：未学列表置底，文案置灰，不可加入布置清单 */
  delisted?: boolean;
}

function IcAiStarOutline({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9.71387 5.78882C9.82113 6.00418 9.99557 6.17862 10.2109 6.28589L13.6523 7.99976L10.2109 9.71362C10.0494 9.79407 9.91108 9.9124 9.80664 10.0574L9.71387 10.2107L8 13.6521L6.28613 10.2107C6.17886 9.99533 6.00442 9.82089 5.78906 9.71362L2.34668 7.99976L5.78906 6.28589C6.00443 6.17862 6.17887 6.00418 6.28613 5.78882L8 2.34644L9.71387 5.78882Z" stroke="url(#aiStarOutlineGrad)" strokeWidth="1.2" />
      <defs>
        <linearGradient id="aiStarOutlineGrad" x1="11" y1="5" x2="6.5" y2="11.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AE6BFF" />
          <stop offset="1" stopColor="#7C86FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IcAiStar({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M7.5465 1.91083C7.73289 1.53637 8.26711 1.53637 8.4535 1.91083L10.2507 5.52131C10.2998 5.61999 10.3798 5.69995 10.4784 5.74907L14.0889 7.54625C14.4634 7.73265 14.4634 8.26687 14.0889 8.45326L10.4784 10.2504C10.3798 10.2996 10.2998 10.3795 10.2507 10.4782L8.4535 14.0887C8.26711 14.4631 7.73289 14.4631 7.5465 14.0887L5.74931 10.4782C5.70019 10.3795 5.62023 10.2996 5.52155 10.2504L1.91107 8.45326C1.53662 8.26687 1.53662 7.73265 1.91107 7.54625L5.52155 5.74907C5.62023 5.69995 5.70019 5.61999 5.74931 5.52131L7.5465 1.91083Z" fill="url(#aiStarGrad)" />
      <defs>
        <linearGradient id="aiStarGrad" x1="4" y1="12" x2="12" y2="4.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.279139" stopColor="#7A87FF" />
          <stop offset="1" stopColor="#C55EFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** 界面展示：类型「巩固练习」统一为「练习」（数据层仍为 巩固练习） */
function displayTaskTypeLabel(type: TaskItem["type"] | PlanItem["type"]): string {
  return type === "巩固练习" ? "练习" : type;
}

/** 浅色标签（已学「已完成」、未学「已布置」「已下架」）— Figma 浅色标签 */
const planItemTagClassName =
  "inline-flex h-4 shrink-0 items-center rounded-[2px] bg-[#f0f2f7] px-1 py-px";

const planItemTagStyle = {
  fontSize: "10px",
  fontWeight: "var(--font-weight-regular)",
  color: "#646b8a",
  lineHeight: "1.5",
} as const;

/** 未学：自学进度百分比，无自学则为 null */
function planItemProgressPercent(item: PlanItem): number | null {
  const m = item.studiedMinutes;
  if (m == null || m <= 0) return null;
  return Math.min(99, Math.round((m / Math.max(item.duration, 1)) * 100));
}

function PlanItemLearnedCompletedTag() {
  return (
    <span className={planItemTagClassName} style={planItemTagStyle}>
      已完成
    </span>
  );
}

function PlanItemAssignedTag() {
  return (
    <span className={planItemTagClassName} style={planItemTagStyle}>
      已布置
    </span>
  );
}

function PlanItemDelistedTag() {
  return (
    <span className={planItemTagClassName} style={planItemTagStyle}>
      已下架
    </span>
  );
}

const PLAN_DELISTED_GRAY = "#ABB4D1";

const allPlanItems: PlanItem[] = Array.from({ length: 60 }).map((_, idx) => {
  const isAi = idx % 2 === 0;
  return {
    id: `plan-${idx + 1}`,
    order: idx + 1,
    name: isAi ? `诗歌吟课 ${Math.ceil((idx + 1) / 2)}` : `诗歌练习 ${Math.ceil((idx + 1) / 2)}`,
    type: isAi ? "AI课" : "巩固练习",
    duration: isAi ? 30 + (idx % 3) * 5 : 22 + (idx % 3) * 4,
    completed: idx < 21,
    /** idx 22：未学 AI课 35 分钟 + 自学约 83%，用于演示「已布置且学生在做」 */
    studiedMinutes: idx === 22 ? 29 : undefined,
    /** 未学列表最后两条：演示「已下架」 */
    delisted: idx >= 58,
  };
});

/** 学习规划 · 排课范围（仅展示与配置，不改动 allPlanItems 已学标记） */
const planTextbookScopeOptions = [
  { label: "人教A版 · 必修第一册", value: "rja-bx1" },
  { label: "人教A版 · 必修第二册", value: "rja-bx2" },
  { label: "北师大版 · 必修第一册", value: "bsd-bx1" },
  { label: "苏教版 · 必修第一册", value: "sj-bx1" },
];

const planChapterRangeOptions = [
  { label: "第1章～第30章", value: "1-30" },
  { label: "第1章～第45章", value: "1-45" },
  { label: "第1章～第60章", value: "1-60" },
];

/** 布置任务目标时长（底栏与 AI 智能添加弹窗共用） */
const studyMinuteSelectOptions = [
  { label: "目标15分", value: "15" },
  { label: "目标30分", value: "30" },
  { label: "目标45分", value: "45" },
  { label: "目标60分", value: "60" },
  { label: "目标90分", value: "90" },
  { label: "目标120分", value: "120" },
  { label: "目标180分", value: "180" },
];

/** 教材选项 label 中「 · 」前的系列名，用于「人教A版（共…章 · …）」展示 */
function planTextbookSeriesShortLabel(value: string): string {
  const full = planTextbookScopeOptions.find((o) => o.value === value)?.label;
  if (!full) return "";
  return full.split(" · ")[0]?.trim() ?? "";
}

/** 单学生近期布置：仅三种完成态，不出现「完成率」 */
type RecentCompletionKind = "done" | "donePercent" | "notDone";

interface RecentAssignment {
  id: string;
  date: string;
  isNew?: boolean;
  title: string;
  type: "AI课" | "巩固练习";
  completion: RecentCompletionKind;
  /** 仅 donePercent 时使用，如 89 展示为「已完成 89%」 */
  progressPercent?: number;
  completionTime: string;
  remark: string;
}

function recentCompletionLabel(item: RecentAssignment): string {
  if (item.completion === "done") return "已完成";
  if (item.completion === "donePercent" && item.progressPercent != null) {
    return `已完成 ${item.progressPercent}%`;
  }
  if (item.completion === "donePercent") return "已完成";
  return "未完成";
}

const recentAssignments: RecentAssignment[] = [
  {
    id: "r1",
    date: "2026-03-25",
    isNew: true,
    title: "集合的概念",
    type: "AI课",
    completion: "done",
    completionTime: "时长：36分钟",
    remark: "备注：函数概念已掌握，方程仍需巩固",
  },
  {
    id: "r2",
    date: "2026-03-24",
    title: "集合间的基本关系",
    type: "AI课",
    completion: "donePercent",
    progressPercent: 89,
    completionTime: "时长：28分钟",
    remark: "备注：函数概念已掌握，方程仍需巩固",
  },
  {
    id: "r3",
    date: "2026-03-23",
    title: "集合间的基本关系",
    type: "巩固练习",
    completion: "notDone",
    completionTime: "时长：36分钟",
    remark: "备注：函数概念已掌握，方程仍需巩固",
  },
];

// 已学 / 未学规划行复选框共用（教师端「大 16」）
const planCheckboxClassName =
  "size-4 rounded-[3px] flex items-center justify-center shrink-0 transition-colors box-border";

function PlanCheckboxCheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path
        d="M0.75001 4.17867L3.00001 6.7501L6.75001 0.7501"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ASSIGN_TASK_DRAG = "assign-task";

type AssignTaskDragItem = { index: number };

function SortableAssignTaskCard({
  task,
  index,
  taskCount,
  moveTask,
  removeTask,
}: {
  task: TaskItem;
  index: number;
  taskCount: number;
  moveTask: (from: number, to: number) => void;
  removeTask: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const canDrag = taskCount > 1;

  const [{ isDragging }, drag] = useDrag({
    type: ASSIGN_TASK_DRAG,
    item: (): AssignTaskDragItem => ({ index }),
    canDrag: () => canDrag,
    collect: (m) => ({ isDragging: m.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: ASSIGN_TASK_DRAG,
    hover(item: AssignTaskDragItem) {
      if (!ref.current || !canDrag) return;
      const from = item.index;
      const to = index;
      if (from === to) return;
      moveTask(from, to);
      item.index = to;
    },
  });

  drag(drop(ref));

  return (
    <motion.div
      key={task.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="box-border w-full flex-shrink-0"
    >
      <div
        ref={ref}
        className={`flex h-[67px] w-full items-center gap-[12px] rounded-[6px] bg-white px-[21px] py-px transition-opacity ${
          canDrag ? "cursor-grab active:cursor-grabbing" : ""
        }`}
        style={{
          border: "1px solid #dfe3f0",
          opacity: isDragging ? 0.55 : 1,
        }}
      >
        {canDrag ? (
          <span className="shrink-0 text-[#abb4d1]" aria-hidden>
            <GripVertical size={18} strokeWidth={1.5} />
          </span>
        ) : null}
        <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
          <div style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "var(--foreground)", lineHeight: "21px" }}>
            {task.name}
          </div>
          <div className="flex h-[18px] items-center gap-[6px]">
            <span className="inline-flex shrink-0 items-center gap-[4px]">
              <span className="inline-flex h-[14px] w-[14px] shrink-0 items-center justify-center">
                {task.type === "AI课" ? (
                  <IcCourse />
                ) : task.type === "巩固练习" ? (
                  <IcPractice />
                ) : (
                  <ClipboardList className="text-[#6574fc]" size={14} strokeWidth={1.5} aria-hidden />
                )}
              </span>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                {displayTaskTypeLabel(task.type)}
              </span>
            </span>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>·</span>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5", whiteSpace: "nowrap" }}>
              预计 {task.duration} 分钟
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            removeTask(task.id);
          }}
          className="shrink-0 flex cursor-pointer items-center justify-center border-none bg-transparent p-0 transition-colors"
          aria-label="移除任务"
        >
          <div className="h-[16px] w-[16px]">
            <IcClose />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export type TaskManagementAppearance = "default" | "studio";

export interface TaskManagementPageProps {
  /** `studio`：同结构与交互，卡片/底栏采用渐变、大圆角与柔和阴影的另一套视觉 */
  appearance?: TaskManagementAppearance;
}

export function TaskManagementPage({ appearance = "default" }: TaskManagementPageProps) {
  const navigate = useNavigate();
  const studio = appearance === "studio";
  const [selectedStudent, setSelectedStudent] = useState("cc");
  const [selectedSubject, setSelectedSubject] = useState("物理");
  const [taskDate, setTaskDate] = useState("");
  const [studyMinutes, setStudyMinutes] = useState("60");
  const [tasks, setTasks] = useState<TaskItem[]>(() => {
    const demo = allPlanItems.find((p) => p.id === "plan-23");
    return demo
      ? [{ id: `plan-add-${demo.id}`, name: demo.name, type: demo.type, duration: demo.duration }]
      : [];
  });
  /** 学习规划：已学 / 未学 分段（Figma 659:22326） */
  const [planSegment, setPlanSegment] = useState<"learned" | "unlearned">("unlearned");
  const [selectedPlanIds, setSelectedPlanIds] = useState<Set<string>>(new Set());
  const [showAddTaskMenu, setShowAddTaskMenu] = useState(false);
  const [deadlineTime, setDeadlineTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [tempHour, setTempHour] = useState("18");
  const [tempMinute, setTempMinute] = useState("00");
  const [showPublishDialog, setShowPublishDialog] = useState(false);
  const [showPublishTimePicker, setShowPublishTimePicker] = useState(false);
  const [publishMode, setPublishMode] = useState<"now" | "scheduled">("now");
  const [publishDate, setPublishDate] = useState("");
  const [publishTime, setPublishTime] = useState("");
  const [requireDate, setRequireDate] = useState("");
  const [requireTime, setRequireTime] = useState("");
  const [showUpdateScopeDialog, setShowUpdateScopeDialog] = useState(false);
  const [planTextbook, setPlanTextbook] = useState("rja-bx2");
  const [planChapterRange, setPlanChapterRange] = useState("1-60");
  const [draftPlanTextbook, setDraftPlanTextbook] = useState("rja-bx2");
  const [draftPlanChapterRange, setDraftPlanChapterRange] = useState("1-60");
  /** 手动添加 → 资源：公共资源弹窗（侧栏进资源中心仍为整页） */
  const [showPublicResourceDialog, setShowPublicResourceDialog] = useState(false);
  const [showCoursePickerDialog, setShowCoursePickerDialog] = useState(false);
  const [showHomeworkPickerDialog, setShowHomeworkPickerDialog] = useState(false);
  const [showHomeworkNameDialog, setShowHomeworkNameDialog] = useState(false);
  const [pendingHomeworkItems, setPendingHomeworkItems] = useState<{ id: string; content: string; number: string }[]>([]);
  const [homeworkTaskName, setHomeworkTaskName] = useState("");
  const planSectionRef = useRef<HTMLDivElement | null>(null);
  /** 诊断专视图下仅顶栏+诊断卡；展开后显示布置清单/学习规划/侧栏/底栏 */
  const [assignWorkspaceExpanded, setAssignWorkspaceExpanded] = useState(false);

  const meta = selectedStudent ? studentMeta[selectedStudent] : null;
  const hasStudent = !!selectedStudent && !!selectedSubject;
  const noDiagnosis = hasStudent && meta?.noDiagnosis;

  // Initialize date to today
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setTaskDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  useEffect(() => {
    setAssignWorkspaceExpanded(false);
  }, [selectedStudent, selectedSubject]);

  const targetMinutes = useMemo(() => {
    const m = parseInt(studyMinutes, 10);
    return Number.isFinite(m) && m > 0 ? m : 60;
  }, [studyMinutes]);

  const totalDuration = useMemo(() => tasks.reduce((s, t) => s + t.duration, 0), [tasks]);

  /** 确认发布弹窗顶部：姓名 · 年级 · 学科 */
  const publishDialogStudentLine = useMemo(() => {
    const st = students.find((s) => s.value === selectedStudent);
    if (!st?.label || !selectedSubject) return "—";
    return `${st.label} · ${selectedSubject}`;
  }, [selectedStudent, selectedSubject]);

  const assignLayoutDiagnosisId = `assign-${selectedStudent}-${selectedSubject}`;

  /** 已有诊断且该组合下尚未生成排课计划 → 在学科后展示「（未排课）」纯文案 */
  const showUnscheduledFilterTag = useMemo(
    () => hasStudent && !noDiagnosis && !getDiagnosisPlan(assignLayoutDiagnosisId),
    [hasStudent, noDiagnosis, assignLayoutDiagnosisId],
  );

  /** 布置页 · 与当前学生/学科绑定的诊断链接（演示） */
  const assignDiagnosisSession = useMemo(
    () =>
      getDiagnosisSessionMeta(assignLayoutDiagnosisId, {
        studentName: "",
        grade: "",
        subject: selectedSubject,
      }),
    [assignLayoutDiagnosisId, selectedSubject],
  );

  const goToSchedulePlanFromLayout = useCallback(() => {
    const st = students.find((s) => s.value === selectedStudent);
    const label = st?.label ?? "·";
    const parts = label.split(" · ");
    const studentName = parts[0] ?? label;
    const grade = parts[1] ?? "";
    navigate(
      `/dashboard/schedule-plan/${encodeURIComponent(assignLayoutDiagnosisId)}`,
      { state: { studentName, grade, subject: selectedSubject } },
    );
  }, [navigate, selectedStudent, selectedSubject, assignLayoutDiagnosisId]);

  const completedPlanItems = allPlanItems.filter((p) => p.completed);
  const uncompletedPlanItems = allPlanItems.filter((p) => !p.completed);
  /** 未学：已下架条目固定排在列表最后 */
  const displayUncompletedPlanItems = useMemo(
    () =>
      allPlanItems
        .filter((p) => !p.completed)
        .sort((a, b) => {
          const ad = a.delisted ? 1 : 0;
          const bd = b.delisted ? 1 : 0;
          if (ad !== bd) return ad - bd;
          return a.order - b.order;
        }),
    [],
  );
  const completedCount = completedPlanItems.length;
  const uncompletedCount = uncompletedPlanItems.length;
  const planTextbookSeriesLabel = planTextbookSeriesShortLabel(planTextbook);

  const removeTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveTask = useCallback((fromIndex: number, toIndex: number) => {
    setTasks((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  }, []);

  const handleSmartAssign = (minutesCap?: number) => {
    if (!hasStudent) {
      showToast("请先选择学生和学科", "warning");
      return;
    }
    const cap =
      minutesCap != null && Number.isFinite(minutesCap) && minutesCap > 0 ? minutesCap : targetMinutes;
    // Auto-match tasks from plan
    let used = 0;
    const newTasks: TaskItem[] = [];
    for (const p of displayUncompletedPlanItems) {
      if (p.delisted) continue;
      if (used + p.duration > cap) continue;
      newTasks.push({
        id: `smart-${p.id}`,
        name: p.name,
        type: p.type,
        duration: p.duration,
      });
      used += p.duration;
      if (used >= cap) break;
    }
    setTasks(newTasks);
    // Auto-check corresponding plan items in 学习规划
    const newSelectedIds = new Set<string>();
    for (const t of newTasks) {
      const planId = t.id.replace("smart-", "");
      newSelectedIds.add(planId);
    }
    setSelectedPlanIds(newSelectedIds);
    showToast(`已智能布置 ${newTasks.length} 个任务`, "success");
  };

  const handleTogglePlan = (planId: string) => {
    const plan = allPlanItems.find((p) => p.id === planId);
    if (plan?.delisted) {
      showToast("该课程已下架，无法加入布置清单", "warning");
      return;
    }
    setSelectedPlanIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(planId)) {
        newSet.delete(planId);
        // Remove from tasks
        setTasks((t) => t.filter((item) => item.id !== `plan-add-${planId}`));
      } else {
        newSet.add(planId);
        // Add to tasks
        const pAdd = allPlanItems.find((p) => p.id === planId);
        if (pAdd && !pAdd.delisted) {
          setTasks((t) => [
            ...t,
            { id: `plan-add-${planId}`, name: pAdd.name, type: pAdd.type, duration: pAdd.duration },
          ]);
        }
      }
      return newSet;
    });
  };

  const handleConfirm = () => {
    if (tasks.length === 0) {
      showToast("请先添加任务", "warning");
      return;
    }
    showToast(`已成功布置 ${tasks.length} 个任务！`, "success");
  };

  return (
    <div className="flex flex-col h-full" data-appearance={studio ? "studio" : "default"}>
      {/* 主内容 + 近期布置：同一卡片，中间竖线分隔 */}
      <div
        className={
          studio
            ? "flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-[16px] bg-white"
            : "flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-[16px] bg-white"
        }
      >
          {/* Top selectors row — full width */}
          <div
            className={`flex shrink-0 items-center px-6 ${studio ? "gap-3 pb-4 pt-6 mb-0" : "gap-4 border-b border-[#e9ecf5] py-4"}`}
            style={studio ? { borderBottom: "1px solid var(--border)" } : undefined}
          >
                <div className="w-[200px] shrink-0">
                  <CustomSelect
                    value={selectedStudent}
                    onChange={(v) => setSelectedStudent(v)}
                    options={students}
                    placeholder="请选择学生"
                    size="sm"
                    tone={studio ? "default" : "canvas"}
                  />
                </div>
                <div className="w-[200px] shrink-0">
                  <CustomSelect
                    value={selectedSubject}
                    onChange={(v) => setSelectedSubject(v)}
                    options={subjectOptions}
                    placeholder="请选择学科"
                    size="sm"
                    tone={studio ? "default" : "canvas"}
                    valueSuffix={showUnscheduledFilterTag ? "（未排课）" : undefined}
                  />
                </div>
                {meta && !noDiagnosis && (
                  <div className="flex shrink-0 items-center gap-1">
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "var(--font-weight-regular)",
                        color: "#838bab",
                        lineHeight: "1.5",
                      }}
                    >
                      剩余
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "var(--font-weight-medium)",
                        color: meta.remaining <= 10 ? "#F55656" : "#6574FC",
                        lineHeight: "1.5",
                        fontFeatureSettings: "'lnum' 1, 'pnum' 1",
                      }}
                    >
                      {meta.remaining}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: "var(--font-weight-regular)",
                        color: "#838bab",
                        lineHeight: "1.5",
                        fontFeatureSettings: "'lnum' 1, 'pnum' 1",
                      }}
                    >
                      /{meta.total}节
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="ml-0.5 shrink-0">
                      <circle cx="9" cy="9" r="6" stroke="rgba(16,18,25,0.08)" strokeWidth="2.5" />
                      <circle
                        cx="9"
                        cy="9"
                        r="6"
                        stroke={meta!.remaining <= 10 ? "#F55656" : "#6574FC"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={`${(meta!.remaining / meta!.total) * 2 * Math.PI * 6} ${2 * Math.PI * 6}`}
                        transform="rotate(-90 9 9)"
                      />
                    </svg>
                  </div>
                )}
          </div>

          {/* Content row: left main + right sidebar */}
          <div className="flex min-h-0 flex-1 flex-row overflow-hidden">
          {/* 左侧主区 */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto scrollbar-thin p-6">

              {/* Warning banner when plan near complete */}
              {meta?.planNearComplete && hasStudent && !noDiagnosis && assignWorkspaceExpanded && (
                <div
                  className="flex items-center justify-between mb-4 px-4 py-3 rounded-[6px]"
                  style={{ backgroundColor: "rgba(245,86,86,0.06)" }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <AlertCircle size={16} className="shrink-0" style={{ color: "#F55656" }} />
                      <div
                        className="text-left"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "#F55656",
                        }}
                      >
                        规划即将全部完成
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-regular)",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        该学生当前学科规划即将全部学完，建议重新进行诊断。
                      </div>
                    </div>
                  </div>
                  <button
                    className="shrink-0 px-4 py-[6px] rounded-[18px] cursor-pointer transition-colors"
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#E0443F",
                      border: "1px solid #FCA5A2",
                      backgroundColor: "white",
                    }}
                  >
                    布置诊断
                  </button>
                </div>
              )}

              {noDiagnosis ? (
                <div className="flex flex-1 flex-col items-center justify-center w-full min-h-0 py-8">
                  <div className="flex w-full max-w-[360px] flex-col items-center gap-[12px] text-center px-4">
                    <div className="relative shrink-0" style={{ width: 120, height: 120 }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
                        <rect fill="white" height="120" width="120" />
                        <path d={noDiagnosisSvgPaths.p286f9600} fill="#E0EAFF" />
                        <path d={noDiagnosisSvgPaths.p145d5b00} fill="#BBCBFC" />
                        <path d={noDiagnosisSvgPaths.pfbd6600} fill="white" />
                        <path d="M66 49H82" stroke="#101019" strokeWidth="1.5" />
                        <path d="M66 59H82" stroke="#101019" strokeWidth="1.5" />
                        <path d={noDiagnosisSvgPaths.p19ea31c0} fill="#101019" />
                        <g>
                          <path d={noDiagnosisSvgPaths.p39acd500} fill="#BBCBFC" />
                          <circle cx="45" cy="51" fill="#9CB1FC" r="6" />
                          <path d={noDiagnosisSvgPaths.p1914aaf0} fill="#9CB1FC" />
                        </g>
                        <g>
                          <path d={noDiagnosisSvgPaths.p31eaef00} fill="white" />
                          <path d={noDiagnosisSvgPaths.p2bcb300} stroke="#101019" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex w-full flex-col gap-[4px] items-center text-center">
                      <p
                        className="text-center"
                        style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}
                      >
                        该学生尚未完成诊断
                      </p>
                      <p
                        className="text-center"
                        style={{ fontSize: "12px", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}
                      >
                        无法自动生成学习规划。请先布置诊断。
                      </p>
                    </div>
                    <button
                      type="button"
                      className="bg-white flex items-center justify-center px-[16px] h-[32px] rounded-[16px] cursor-pointer transition-colors shrink-0"
                      style={{
                        border: "1px solid var(--primary)",
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--primary)",
                      }}
                      onClick={() => showToast("诊断功能开发中", "info")}
                    >
                      去诊断
                    </button>
                  </div>
                </div>
              ) : (
              <>
              {!assignWorkspaceExpanded ? (
                <>
                  <SchedulingDiagnosisDetailSection
                    showContextFilterBar={false}
                    className="mb-2"
                    studentLine={students.find((s) => s.value === selectedStudent)?.label ?? "—"}
                    subject={selectedSubject}
                    sessionMeta={assignDiagnosisSession}
                    onGoToSchedule={goToSchedulePlanFromLayout}
                  />
                  <div className="mt-2 flex w-full justify-center">
                    <button
                      type="button"
                      onClick={() => setAssignWorkspaceExpanded(true)}
                      className="inline-flex h-9 cursor-pointer items-center justify-center rounded-[20px] border border-solid border-[#dfe3f0] bg-white px-4 transition-colors hover:bg-[#f8f9fc]"
                      style={{ fontSize: 14, fontWeight: 500, color: "#4a4fed" }}
                    >
                      进入布置
                    </button>
                  </div>
                </>
              ) : (
                <>
                <div className="mb-5 flex w-full items-center">
                  <button
                    type="button"
                    onClick={() => setAssignWorkspaceExpanded(false)}
                    className="inline-flex h-8 cursor-pointer items-center justify-center gap-1 rounded-[20px] border-none bg-transparent px-0 text-left transition-opacity hover:opacity-90"
                    style={{ fontSize: 14, fontWeight: 500, color: "#646b8a" }}
                  >
                    <span aria-hidden>←</span> 返回诊断概览
                  </button>
                </div>
              {/* 布置清单（Figma 673:23215） */}
              <div className="flex w-full shrink-0 flex-col gap-[12px]">
                {/* 标题行 */}
                <div className="flex w-full items-center">
                  <div className="flex flex-1 items-baseline gap-[8px]">
                    <h3
                      className="shrink-0 whitespace-nowrap"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#101019",
                        lineHeight: "24px",
                      }}
                    >
                      布置清单
                    </h3>
                    <div className="flex items-center gap-[4px]">
                      <span style={{ fontSize: 14, color: "#838bab", lineHeight: "1.5" }}>共</span>
                      <span style={{ fontSize: 14, color: "#4a4fed", lineHeight: "1.5" }}> {tasks.length} </span>
                      <span style={{ fontSize: 14, color: "#838bab", lineHeight: "1.5" }}>个任务</span>
                      <div className="relative mx-[4px] h-[8px] w-px shrink-0 bg-[#CFD5E8]" aria-hidden />
                      <span style={{ fontSize: 14, color: "#838bab", lineHeight: "1.5" }}>预计</span>
                      <span style={{ fontSize: 14, color: "#4a4fed", lineHeight: "1.5" }}> {totalDuration} </span>
                      <span style={{ fontSize: 14, color: "#838bab", lineHeight: "1.5" }}>分钟</span>
                    </div>
                  </div>
                </div>

                {/* AI 工具栏 */}
                <div
                  className="flex w-full items-center rounded-[8px] p-[12px]"
                  style={{ backgroundImage: "linear-gradient(258deg, #f8f7ff 49.3%, #f8f6ff 98%)" }}
                >
                  <div className="flex flex-1 items-center gap-[12px]">
                    <div className="flex shrink-0 items-center gap-[2px]">
                      <IcAiStar className="size-4 shrink-0" />
                      <span
                        className="-skew-x-[4deg] bg-clip-text text-[14px] font-bold leading-normal text-transparent"
                        style={{ backgroundImage: "linear-gradient(253deg, #e958e9 2.1%, #6574fc 47.5%, #4c5eff 78%)" }}
                      >
                        AI智能
                      </span>
                    </div>
                    <div className="w-[200px] shrink-0">
                      <CustomSelect
                        value={studyMinutes}
                        options={studyMinuteSelectOptions}
                        onChange={setStudyMinutes}
                      />
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-[12px]">
                    <button
                      type="button"
                      onClick={() => {
                        if (!hasStudent) {
                          showToast("请先选择学生和学科", "warning");
                          return;
                        }
                        const m = parseInt(studyMinutes, 10);
                        const cap = Number.isFinite(m) && m > 0 ? m : 60;
                        handleSmartAssign(cap);
                      }}
                      className="flex h-[32px] w-[100px] shrink-0 cursor-pointer items-center justify-center gap-[2px] rounded-[18px] border border-solid border-[#9cb1fc] bg-white px-[16px] py-[6px] transition-colors hover:bg-[#fafbff]"
                    >
                      <IcAiStarOutline className="size-4 shrink-0" />
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#6574fc", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        智能添加
                      </span>
                    </button>
                    <div className="relative shrink-0">
                      <button
                        type="button"
                        className="flex h-[32px] w-[100px] cursor-pointer items-center justify-center gap-[2px] whitespace-nowrap rounded-[18px] border border-solid border-[#cfd5e8] bg-white px-[16px] py-[6px] transition-colors hover:bg-[#f8f9fc]"
                        onClick={() => setShowAddTaskMenu(!showAddTaskMenu)}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                          <path d={svgPaths.p1beb1380} stroke="#646b8a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3.33333 8H12.6667" stroke="#646b8a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontSize: 14, color: "#646b8a", lineHeight: "1.5" }}>手动添加</span>
                      </button>
                      {showAddTaskMenu && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setShowAddTaskMenu(false)} />
                          <div
                            className="absolute right-0 top-full z-20 mt-1 flex min-w-[132px] flex-col gap-0.5 rounded-[12px] bg-white p-1"
                            style={{ boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)" }}
                          >
                            {[
                              { label: "课程", value: "course" as const },
                              { label: "作业", value: "question" as const },
                              { label: "资源", value: "resource" as const },
                            ].map((menuItem) => (
                              <button
                                key={menuItem.value}
                                type="button"
                                className="w-full cursor-pointer rounded-[10px] border-none bg-white px-4 py-3 text-left transition-colors hover:bg-[#ebf1ff]"
                                style={{ fontSize: 14, color: "#444963" }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = "#ebf1ff";
                                  e.currentTarget.style.color = "#4a4fed";
                                  e.currentTarget.style.fontWeight = "500";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = "white";
                                  e.currentTarget.style.color = "#444963";
                                  e.currentTarget.style.fontWeight = "400";
                                }}
                                onClick={() => {
                                  setShowAddTaskMenu(false);
                                  if (!hasStudent) {
                                    showToast("请先选择学生和学科", "warning");
                                    return;
                                  }
                                  if (menuItem.value === "question") {
                                    setShowHomeworkPickerDialog(true);
                                  } else if (menuItem.value === "course") {
                                    setShowCoursePickerDialog(true);
                                  } else {
                                    setShowPublicResourceDialog(true);
                                  }
                                }}
                              >
                                {menuItem.label}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

              {/* Task list area — 空态固定 120px；仅 0～2 个任务时同高，下方留白，学习规划标题位置不变；≥3 个任务 min-h 120 后随内容增高 */}
              <div
                className="box-border flex w-full shrink-0 flex-col"
              >
                {!hasStudent || tasks.length === 0 ? (
                  <div className="flex h-[170px] w-full flex-col items-center justify-center gap-1">
                    <img
                      src={emptyTaskListIllustration}
                      alt=""
                      className="h-[57.6px] w-[57.6px] shrink-0 object-contain"
                    />
                    <p
                      className="text-center"
                      style={{
                        fontSize: "14px",
                        fontWeight: "var(--font-weight-medium)",
                        color: "#838BAB",
                        lineHeight: "21px",
                      }}
                    >
                      暂无布置清单
                    </p>
                  </div>
                ) : (
                  <DndProvider backend={HTML5Backend}>
                    <div className="flex h-full min-h-0 min-w-0 flex-col">
                      {/* 单卡时也占满「2 张卡片 + 间距(8) + pb」高度，避免学习规划整体上移 */}
                      <div className="flex min-h-[182px] flex-col gap-[8px] pb-[40px] pt-0">
                        <AnimatePresence>
                          {tasks.map((task, index) => (
                            <SortableAssignTaskCard
                              key={task.id}
                              task={task}
                              index={index}
                              taskCount={tasks.length}
                              moveTask={moveTask}
                              removeTask={removeTask}
                            />
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </DndProvider>
                )}
              </div>
              </div>

              {/* 学习规划（Figma 659:22307：灰底圆角 + 分段 Tab + 网格） */}
              <div ref={planSectionRef}>
                {!hasStudent ? (
                  <div
                    className="flex flex-col items-center justify-center rounded-[8px] py-16"
                    style={{ backgroundColor: "rgba(244, 247, 254, 0.6)" }}
                  >
                    <img src={emptyTaskListIllustration} alt="" className="mb-3 h-[68px] w-[68px] object-contain" />
                    <div
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      暂无学习规划
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      studio
                        ? "mt-[8px] rounded-2xl p-6 shadow-[0_2px_14px_rgba(101,116,252,0.06)] ring-1 ring-[#dce3f5]/80"
                        : "mt-[8px] rounded-[12px] bg-[#f4f7fe] px-6 pt-[8px] pb-6"
                    }
                    style={
                      studio
                        ? { border: "1px solid rgba(226, 232, 246, 0.95)", background: "linear-gradient(to bottom right, white, #f6f8ff)" }
                        : undefined
                    }
                  >
                    <div className="flex flex-col gap-[4px] rounded-[8px]">
                      <div className="flex w-full items-center gap-[12px] py-[12px]">
                        <div className="flex items-center gap-[8px]">
                          <h3
                            className="shrink-0 whitespace-nowrap"
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#646b8a",
                              lineHeight: "24px",
                            }}
                          >
                            学习规划
                          </h3>
                          <button
                            type="button"
                            onClick={() => {
                              setDraftPlanTextbook(planTextbook);
                              setDraftPlanChapterRange(planChapterRange);
                              setShowUpdateScopeDialog(true);
                            }}
                            className="flex h-[28px] shrink-0 cursor-pointer items-center justify-center rounded-[6px] border border-solid border-[#dfe3f0] bg-white px-[12px] py-[5px] transition-colors hover:bg-[#f8f9fc]"
                            style={{
                              fontSize: "12px",
                              fontWeight: 500,
                              color: "#444963",
                              lineHeight: "1.5",
                            }}
                          >
                            更新排课范围
                          </button>
                        </div>
                        <div className="ml-auto flex shrink-0 items-center gap-[12px]">
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
                              已学（{completedCount}/{allPlanItems.length}）
                            </span>
                            <div className="h-[2px] w-full" style={{ backgroundColor: planSegment === "learned" ? "#6574fc" : "transparent", borderRadius: "2px" }} />
                          </button>
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
                              未学（{uncompletedCount}/{allPlanItems.length}）
                            </span>
                            <div className="h-[2px] w-full" style={{ backgroundColor: planSegment === "unlearned" ? "#6574fc" : "transparent", borderRadius: "2px" }} />
                          </button>
                        </div>
                      </div>

                      {planSegment === "learned" ? (
                        completedPlanItems.length === 0 ? (
                          <div className="py-8 text-center" style={{ fontSize: "14px", color: "#838bab" }}>
                            暂无已学章节
                          </div>
                        ) : (
                        <div className="grid grid-cols-2 gap-[8px]">
                          {completedPlanItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-3 rounded-[6px] border border-solid border-[#e9ecf5] bg-white px-[17px] py-[12px]"
                            >
                              <div
                                className={planCheckboxClassName}
                                style={{
                                  backgroundColor: "var(--primary)",
                                  border: "1px solid var(--primary)",
                                  opacity: 0.4,
                                }}
                              >
                                <PlanCheckboxCheckIcon />
                              </div>
                              <div className="min-w-0 flex-1" style={{ opacity: 0.5 }}>
                                <div style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#101019" }}>
                                  {item.order}. {item.name}
                                </div>
                                <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                                  <span className="inline-flex min-w-0 items-center gap-1">
                                    <span className="inline-block h-3.5 w-3.5 shrink-0">
                                      {item.type === "AI课" ? <IcCourse /> : <IcPractice />}
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
                                      {displayTaskTypeLabel(item.type)} · 用时 {item.duration} 分钟
                                    </span>
                                  </span>
                                  <PlanItemLearnedCompletedTag />
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  if (item.type === "AI课") {
                                    navigate(
                                      `/course-preview?title=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(String(item.duration))}`,
                                    );
                                  } else {
                                    navigate(
                                      `/exercise-preview?title=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(String(item.duration))}`,
                                    );
                                  }
                                }}
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
                        )
                      ) : (
                        <div className="grid grid-cols-2 gap-[8px]">
                          {displayUncompletedPlanItems.map((item) => {
                            const isDelisted = !!item.delisted;
                            const isChecked = selectedPlanIds.has(item.id);
                            const isInProgress = !!item.studiedMinutes && !isDelisted;
                            const isInAssignmentList =
                              !isDelisted &&
                              tasks.some(
                                (t) => t.id === `plan-add-${item.id}` || t.id === `smart-${item.id}`,
                              );
                            const progressPct = planItemProgressPercent(item);
                            const titleColor = isDelisted ? PLAN_DELISTED_GRAY : "#101019";
                            const subColor = isDelisted ? PLAN_DELISTED_GRAY : "#838bab";
                            return (
                              <label
                                key={item.id}
                                className={`flex items-center gap-3 rounded-[6px] border border-solid border-[#e9ecf5] bg-white px-[17px] py-[12px] transition-colors ${
                                  isDelisted ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#f8f9fc]"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  disabled={isDelisted}
                                  onChange={() => handleTogglePlan(item.id)}
                                  className="sr-only"
                                />
                                <div
                                  className={planCheckboxClassName}
                                  style={{
                                    backgroundColor:
                                      isDelisted || (!isChecked && !isInProgress)
                                        ? "white"
                                        : "var(--primary)",
                                    border: isDelisted
                                      ? "1px solid #CFD5E8"
                                      : isChecked || isInProgress
                                        ? "1px solid var(--primary)"
                                        : "1px solid #CFD5E8",
                                    opacity: isDelisted ? 0.45 : isInProgress && !isChecked ? 0.4 : 1,
                                  }}
                                >
                                  {!isDelisted && (isChecked || isInProgress) && <PlanCheckboxCheckIcon />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div
                                    style={{
                                      fontSize: "14px",
                                      fontWeight:
                                        isDelisted || !isChecked
                                          ? "var(--font-weight-regular)"
                                          : "var(--font-weight-medium)",
                                      color: titleColor,
                                    }}
                                  >
                                    {item.order}. {item.name}
                                  </div>
                                  <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                                    <span className="inline-flex min-w-0 items-center gap-1">
                                      <span
                                        className={`inline-block h-3.5 w-3.5 shrink-0 ${isDelisted ? "opacity-50" : ""}`}
                                      >
                                        {item.type === "AI课" ? <IcCourse /> : <IcPractice />}
                                      </span>
                                      <span
                                        className="min-w-0"
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "var(--font-weight-regular)",
                                          color: subColor,
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        {displayTaskTypeLabel(item.type)} · 预计 {item.duration} 分钟
                                        {progressPct != null ? ` | 进度 ${progressPct}%` : ""}
                                      </span>
                                    </span>
                                    {isDelisted ? (
                                      <PlanItemDelistedTag />
                                    ) : isInAssignmentList ? (
                                      <PlanItemAssignedTag />
                                    ) : null}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  disabled={isDelisted}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (isDelisted) return;
                                    if (item.type === "AI课") {
                                      navigate(
                                        `/course-preview?title=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(String(item.duration))}`,
                                      );
                                    } else {
                                      navigate(
                                        `/exercise-preview?title=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(String(item.duration))}`,
                                      );
                                    }
                                  }}
                                  className={`flex h-[28px] w-[60px] shrink-0 items-center justify-center rounded-[18px] border border-solid bg-white ${
                                    isDelisted
                                      ? "cursor-not-allowed opacity-50"
                                      : "cursor-pointer transition-colors hover:bg-[#f8f9fc]"
                                  }`}
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "var(--font-weight-regular)",
                                    color: isDelisted ? PLAN_DELISTED_GRAY : "#646B8A",
                                    lineHeight: "1.5",
                                    borderColor: isDelisted ? "#e9ecf5" : "#dfe3f0",
                                  }}
                                >
                                  预览
                                </button>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
                </>
                )}
              </>
            )}
          </div>

          {!noDiagnosis && assignWorkspaceExpanded && (
              <div className="flex w-[200px] shrink-0 min-h-0 flex-col gap-[12px] border-l border-solid border-[#e9ecf5] bg-white p-[24px]">
                <p
                  className="w-full shrink-0"
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "#101019",
                    lineHeight: "24px",
                  }}
                >
                  近期布置
                </p>

              <div className="flex min-h-0 w-full flex-1 flex-col gap-[24px] overflow-y-auto scrollbar-thin">
                {recentAssignments.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex w-full flex-col gap-[4px]">
                    <p
                      className="m-0 min-w-0"
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#646b8a",
                        lineHeight: "1.5",
                      }}
                    >
                      {item.type === "AI课" ? `课程 · ${item.title}` : `练习 · ${item.title}`}
                    </p>
                    <div
                      className="flex flex-col"
                      style={{ fontSize: 12, color: "#838bab", lineHeight: "1.75" }}
                    >
                      <span>完成率：{recentCompletionLabel(item)}</span>
                      {item.completionTime ? (
                        <span>
                          {item.completionTime.startsWith("时") ? item.completionTime.replace("时长", "时\u2003长") : `时\u2003长：${item.completionTime}`}
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="w-full shrink-0 text-center"
                style={{
                  fontSize: "10px",
                  fontWeight: "var(--font-weight-regular)",
                  color: "#838bab",
                  lineHeight: "1.5",
                }}
              >
                - 目前展示最近布置3节课 -
              </p>
              </div>
          )}
      </div>
      </div>

      {!noDiagnosis && assignWorkspaceExpanded && (
      <div
        className={
          studio
            ? "relative flex shrink-0 items-center gap-3 px-6 py-4 rounded-t-2xl bg-gradient-to-r from-[#f8f9ff] via-white to-[#f3f5ff] shadow-[0_-6px_24px_rgba(101,116,252,0.06)]"
            : "relative flex shrink-0 items-center gap-[12px] border-t border-[#e9ecf5] bg-white px-[24px] py-[16px]"
        }
        style={{
          borderTop: studio ? "1px solid rgba(203, 213, 245, 0.85)" : undefined,
          zIndex: 10,
        }}
      >
        <div className="flex min-w-0 flex-1 items-center justify-end gap-[6px]">
          <p
            style={{
              fontSize: 14,
              color: "#444963",
              lineHeight: "1.5",
              whiteSpace: "nowrap",
            }}
          >
            <span>共 </span>
            <span style={{ color: "#6574fc" }}>{tasks.length}</span>
            <span> 个任务</span>
          </p>
          <div className="h-[8px] w-px shrink-0 bg-[#cfd5e8]" aria-hidden />
          <p
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#444963",
              lineHeight: "1.5",
              whiteSpace: "nowrap",
            }}
          >
            <span>预计 </span>
            <span style={{ color: "#6574fc" }}>{totalDuration}</span>
            <span> 分钟 (目标{studyMinutes}分钟)</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-[12px]">
          <button
            type="button"
            onClick={() => {
              if (tasks.length === 0) return;
              setTasks([]);
              setSelectedPlanIds(new Set());
              showToast("已清空布置清单", "success");
            }}
            disabled={tasks.length === 0}
            className="flex h-[36px] w-[96px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] border border-solid bg-white transition-colors hover:opacity-90 disabled:cursor-not-allowed"
            style={{
              borderColor: tasks.length > 0 ? "var(--primary)" : "#bbcbfc",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: tasks.length > 0 ? "var(--primary)" : "#bbcbfc",
                lineHeight: "1.5",
                whiteSpace: "nowrap",
              }}
            >
              清空
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (tasks.length === 0) {
                showToast("请先添加任务", "warning");
                return;
              }
              setPublishMode("now");
              setPublishDate("");
              setPublishTime("");
              const tmr = new Date();
              tmr.setDate(tmr.getDate() + 1);
              setRequireDate(`${tmr.getFullYear()}-${String(tmr.getMonth() + 1).padStart(2, "0")}-${String(tmr.getDate()).padStart(2, "0")}`);
              setRequireTime("23:59");
              setShowPublishDialog(true);
            }}
            disabled={tasks.length === 0}
            className="flex h-[36px] w-[96px] shrink-0 cursor-pointer items-center justify-center rounded-[36px] border-none transition-opacity hover:opacity-90 disabled:cursor-not-allowed"
            style={{
              background: tasks.length > 0 ? "linear-gradient(90deg, #3355ff 1.45%, #4da6ff 98.55%)" : "#bbcbfc",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "white",
                lineHeight: "1.5",
                whiteSpace: "nowrap",
              }}
            >
              确认布置
            </span>
          </button>
        </div>
      </div>
      )}

      {/* Time Picker Modal */}
      {showTimePicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
          <DeadlineDatePicker
            initialDate={deadlineTime}
            onConfirm={(dateStr) => {
              setDeadlineTime(dateStr);
              setShowTimePicker(false);
            }}
            onCancel={() => setShowTimePicker(false)}
          />
        </div>
      )}

      {/* Publish Confirmation Dialog */}
      {showPublishDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
          <div
            className="flex w-full max-w-[520px] flex-col overflow-hidden rounded-[16px] bg-white"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
          >
            {/* Header */}
            <div className="flex items-start gap-[8px] p-[24px]">
              <div className="min-w-0 flex-1">
                <p style={{ fontSize: "20px", fontWeight: "var(--font-weight-semibold)", color: "#101019", lineHeight: "1.5" }}>
                  确认发布
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPublishDialog(false)}
                className="flex h-[20px] w-[20px] shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0"
              >
                <svg width="14" height="14" viewBox="0 0 14.0237 14.0237" fill="none">
                  <path clipRule="evenodd" d={publishSvgPaths.p37c48700} fill="#646B8A" fillRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-[16px] px-[24px]">
              <div
                className="rounded-[8px] px-[12px] py-[10px]"
                style={{ backgroundColor: "#f4f7fe" }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#101019",
                    lineHeight: "1.5",
                  }}
                >
                  {publishDialogStudentLine}
                </p>
                {tasks.length > 0 ? (
                  <div className="mt-1.5 flex flex-wrap items-center gap-[6px]">
                    {tasks.map((t, i) => (
                      <Fragment key={t.id}>
                        {i > 0 ? (
                          <span
                            aria-hidden
                            className="inline-block h-[8px] w-px shrink-0 self-center bg-[#cfd5e8]"
                          />
                        ) : null}
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                            color: "#838bab",
                            lineHeight: "1.5",
                          }}
                        >
                          {t.name}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex w-full min-w-0 flex-col gap-[16px] sm:flex-row sm:items-start sm:gap-[16px]">
                <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
                  <p style={{ fontSize: "12px", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                    发布时间
                  </p>
                  <DateTimePicker
                    value={publishMode === "scheduled" && publishDate && publishTime ? `${publishDate} ${publishTime}` : ""}
                    displayText={publishMode === "now" ? "立即发布" : (publishDate && publishTime ? `${publishDate} ${publishTime}` : "")}
                    onChange={(val) => {
                      const [d, t] = val.split(" ");
                      setPublishDate(d);
                      setPublishTime(t);
                      setPublishMode("scheduled");
                    }}
                    placeholder="立即发布"
                    showNowButton
                    nowButtonLabel="立即发布"
                    onNowClick={() => {
                      setPublishMode("now");
                      setPublishDate("");
                      setPublishTime("");
                    }}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
                  <p style={{ fontSize: "12px", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                    要求完成时间
                  </p>
                  <DateTimePicker
                    value={requireDate && requireTime ? `${requireDate} ${requireTime}` : ""}
                    onChange={(val) => {
                      const [d, t] = val.split(" ");
                      setRequireDate(d);
                      setRequireTime(t);
                    }}
                    placeholder="请选择截止日期时间"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end px-[24px] pt-[24px] pb-[20px]">
              <div className="flex gap-[12px] items-center">
                <button
                  onClick={() => setShowPublishDialog(false)}
                  className="h-[36px] w-[96px] flex items-center justify-center rounded-[18px] bg-white cursor-pointer transition-colors hover:bg-[#f8f9fc]"
                  style={{ border: "1px solid #dfe3f0" }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                    取消
                  </span>
                </button>
                <button
                  onClick={() => {
                    if (publishMode === "scheduled" && publishDate && publishTime) {
                      setShowPublishDialog(false);
                      showToast(`已成功布置 ${tasks.length} 个任务！定时发布：${publishDate} ${publishTime}`, "success");
                    } else {
                      setShowPublishDialog(false);
                      showToast(`已成功布置 ${tasks.length} 个任务！`, "success");
                    }
                  }}
                  className="h-[36px] flex items-center justify-center rounded-[18px] border-none cursor-pointer transition-colors hover:opacity-90 px-[20px] py-[8px]"
                  style={{ backgroundColor: "#6574fc" }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                    确认发布
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publish Time Picker Dialog removed - inline DateTimePicker now uses portal */}

      {/* AI 智能添加：先选布置任务时长 */}

      {/* 学习规划 · 更新排课范围（仅改教材/章节配置，不修改 allPlanItems 已学标记） */}
      {showUpdateScopeDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
          <div
            className="flex w-full max-w-[min(520px,calc(100vw-32px))] min-w-0 flex-col overflow-hidden rounded-[16px] bg-white"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
          >
            <div className="flex items-start gap-[8px] p-[24px]">
              <div className="min-w-0 flex-1 overflow-x-auto">
                <p style={{ fontSize: "20px", fontWeight: "var(--font-weight-semibold)", color: "#101019", lineHeight: "1.5" }}>
                  更新排课范围
                </p>
                <p
                  className="mt-2 whitespace-nowrap"
                  style={{
                    fontSize: "12px",
                    fontWeight: "var(--font-weight-regular)",
                    color: "#838bab",
                    lineHeight: "1.5",
                  }}
                >
                  修改教材版本与章节范围后，已学课程的完成标记将保持不变。
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowUpdateScopeDialog(false)}
                className="flex h-[20px] w-[20px] shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0"
              >
                <svg width="14" height="14" viewBox="0 0 14.0237 14.0237" fill="none">
                  <path clipRule="evenodd" d={publishSvgPaths.p37c48700} fill="#646B8A" fillRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-[16px] px-[24px]">
              <div className="flex flex-col gap-[4px]">
                <p style={{ fontSize: "12px", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                  教材版本
                </p>
                <div className="h-[32px] w-full">
                  <CustomSelect
                    menuInPortal
                    size="sm"
                    value={draftPlanTextbook}
                    onChange={(v) => setDraftPlanTextbook(v)}
                    options={planTextbookScopeOptions}
                    placeholder="请选择教材版本"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <p style={{ fontSize: "12px", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                  章节范围
                </p>
                <div className="h-[32px] w-full">
                  <CustomSelect
                    menuInPortal
                    size="sm"
                    value={draftPlanChapterRange}
                    onChange={(v) => setDraftPlanChapterRange(v)}
                    options={planChapterRangeOptions}
                    placeholder="请选择章节范围"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[12px] px-[24px] pb-[20px] pt-[24px]">
              <button
                type="button"
                onClick={() => setShowUpdateScopeDialog(false)}
                className="flex h-[36px] w-[96px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] bg-white transition-colors hover:bg-[#f8f9fc]"
                style={{ border: "1px solid #dfe3f0" }}
              >
                <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                  取消
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setPlanTextbook(draftPlanTextbook);
                  setPlanChapterRange(draftPlanChapterRange);
                  setShowUpdateScopeDialog(false);
                  showToast("排课范围已更新", "success");
                }}
                className="flex h-[36px] w-[96px] shrink-0 cursor-pointer items-center justify-center rounded-[18px] border-none transition-colors hover:opacity-90"
                style={{ backgroundColor: "#6574fc" }}
              >
                <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                  确定
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {showPublicResourceDialog ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setShowPublicResourceDialog(false)}
        >
          <div
            className="flex flex-col overflow-hidden rounded-[16px] bg-white px-[24px]"
            style={{ width: "80vw", height: "80vh", boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <PublicQuestionResourceWorkspace
              variant="modal"
              onClose={() => setShowPublicResourceDialog(false)}
              onConfirm={(questions) => {
                const ts = Date.now();
                setTasks((prev) => [
                  ...prev,
                  ...questions.map((q, i) => ({
                    id: `question-${q.id}-${ts}-${i}`,
                    name:
                      q.content.length > 48
                        ? `${q.number} ${q.content.slice(0, 48)}…`
                        : `${q.number} ${q.content}`,
                    type: "巩固练习" as const,
                    duration: 30,
                  })),
                ]);
                showToast(`已添加 ${questions.length} 道试题到布置清单`, "success");
              }}
            />
          </div>
        </div>
      ) : null}

      {showCoursePickerDialog ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setShowCoursePickerDialog(false)}
        >
          <div
            className="flex max-h-[min(920px,calc(100vh-48px))] w-full max-w-[1200px] flex-col overflow-hidden rounded-[16px] bg-white px-5 pt-3"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <CourseBankWorkspace
              variant="modal"
              onClose={() => setShowCoursePickerDialog(false)}
              onConfirm={(picks) => {
                const ts = Date.now();
                setTasks((prev) => [
                  ...prev,
                  ...picks.map((p, i) => ({
                    id: `${p.id}-${ts}-${i}`,
                    name: p.name,
                    type: p.taskType,
                    duration: p.duration,
                  })),
                ]);
                showToast(`已添加 ${picks.length} 项到布置清单`, "success");
              }}
            />
          </div>
        </div>
      ) : null}

      {showHomeworkPickerDialog ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setShowHomeworkPickerDialog(false)}
        >
          <div
            className="flex flex-col overflow-hidden rounded-[16px] bg-white p-5"
            style={{ width: "80vw", height: "80vh", boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <HomeworkBankWorkspace
              variant="modal"
              onClose={() => setShowHomeworkPickerDialog(false)}
              onConfirm={(list) => {
                setPendingHomeworkItems(list.map((q) => ({ id: q.id, content: q.content, number: q.number })));
                setHomeworkTaskName("");
                setShowHomeworkPickerDialog(false);
                setShowHomeworkNameDialog(true);
              }}
            />
          </div>
        </div>
      ) : null}

      {showHomeworkNameDialog ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setShowHomeworkNameDialog(false)}
        >
          <div
            className="flex w-full max-w-[520px] flex-col overflow-hidden rounded-[16px] bg-white"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)", minHeight: "180px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-[8px] px-[24px] pt-[24px]">
              <div className="min-w-0 flex-1">
                <p style={{ fontSize: "20px", fontWeight: "var(--font-weight-semibold)", color: "#101019", lineHeight: "1.5" }}>
                  作业名称
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowHomeworkNameDialog(false)}
                className="flex h-[20px] w-[20px] shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-0"
              >
                <svg width="14" height="14" viewBox="0 0 14.0237 14.0237" fill="none">
                  <path clipRule="evenodd" d={publishSvgPaths.p37c48700} fill="#646B8A" fillRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="px-[24px] pt-[20px]">
              <div className="relative w-full">
                <input
                  type="text"
                  maxLength={100}
                  value={homeworkTaskName}
                  onChange={(e) => setHomeworkTaskName(e.target.value)}
                  placeholder="请输入作业名称"
                  className="h-[40px] w-full rounded-[8px] border border-solid border-[#dfe3f0] bg-white px-[12px] outline-none transition-colors focus:border-[#6574fc]"
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-regular)",
                    color: "#101019",
                    lineHeight: "1.5",
                  }}
                />
                <span
                  className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2"
                  style={{ fontSize: "12px", fontWeight: "var(--font-weight-regular)", color: "#838bab" }}
                >
                  {homeworkTaskName.length}/100
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[12px] px-[24px] pb-[20px] pt-[24px]">
              <button
                type="button"
                onClick={() => setShowHomeworkNameDialog(false)}
                className="flex h-[36px] w-[96px] cursor-pointer items-center justify-center rounded-[18px] bg-white transition-colors hover:bg-[#f8f9fc]"
                style={{ border: "1px solid #dfe3f0" }}
              >
                <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                  取消
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const name = homeworkTaskName.trim();
                  if (!name) {
                    showToast("请输入作业名称", "warning");
                    return;
                  }
                  const ts = Date.now();
                  setTasks((prev) => [
                    ...prev,
                    {
                      id: `homework-batch-${ts}`,
                      name,
                      type: "巩固练习" as const,
                      duration: pendingHomeworkItems.length * 30,
                    },
                  ]);
                  showToast(`已添加作业「${name}」到布置清单`, "success");
                  setShowHomeworkNameDialog(false);
                  setPendingHomeworkItems([]);
                }}
                className="flex h-[36px] cursor-pointer items-center justify-center rounded-[18px] border-none px-[20px] py-[8px] transition-colors hover:opacity-90"
                style={{ backgroundColor: homeworkTaskName.trim() ? "#6574fc" : "#bbcbfc" }}
              >
                <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                  确定
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}