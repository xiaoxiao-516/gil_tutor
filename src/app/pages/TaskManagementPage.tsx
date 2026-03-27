import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ChevronDown, ChevronUp, AlertCircle, ClipboardList, GripVertical } from "lucide-react";
import IcCourse from "../../imports/Ic课程16";
import IcPractice from "../../imports/Ic练习16";
import IcClose from "../../imports/Ic关闭16";
import { CustomSelect } from "../components/CustomSelect";
import { showToast } from "../components/CustomToast";
import svgPaths from "../../imports/svg-r57qxbmmrt";
import bottomBarSvgPaths from "../../imports/svg-3g6fnutf14";
import recentSvgPaths from "../../imports/svg-fnul1acw7u";
import practiceSvgPaths from "../../imports/svg-ltvqg4yhpr";
import timelineSvgPaths from "../../imports/svg-a75ekfl1fo";
import emptyTaskListIllustration from "../../assets/empty-task-list.svg?url";
import { DeadlineDatePicker } from "../components/DeadlineDatePicker";
import publishSvgPaths from "../../imports/svg-gl0as5wg90";
import { DateTimePicker } from "../components/DateTimePicker";
import noDiagnosisSvgPaths from "../../imports/svg-vwlpb83c5k";

/* ─── Mock Data ─── */
const students = [
  { label: "李雨桐 · 高一", value: "liyt" },
  { label: "张子涵 · 高一", value: "zzh" },
  { label: "王梓轩 · 初三", value: "wzx" },
  { label: "赵佳宁 · 初二", value: "zjn" },
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
}

const allPlanItems: PlanItem[] = Array.from({ length: 60 }).map((_, idx) => {
  const isAi = idx % 2 === 0;
  return {
    id: `plan-${idx + 1}`,
    order: idx + 1,
    name: isAi ? `诗歌吟课 ${Math.ceil((idx + 1) / 2)}` : `诗歌巩固练习 ${Math.ceil((idx + 1) / 2)}`,
    type: isAi ? "AI课" : "巩固练习",
    duration: isAi ? 30 + (idx % 3) * 5 : 22 + (idx % 3) * 4,
    completed: idx < 21,
    studiedMinutes: idx === 23 ? 25 : undefined,
  };
});

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
    completionTime: "",
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
      className="box-border flex-shrink-0"
      style={{ width: "calc(50% - 4px)" }}
    >
      <div
        ref={ref}
        className={`flex h-[67px] w-full items-center gap-[12px] rounded-[6px] px-[12px] py-[1px] transition-opacity ${
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
                {task.type}
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
export function TaskManagementPage() {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState("liyt");
  const [selectedSubject, setSelectedSubject] = useState("数学");
  const [taskDate, setTaskDate] = useState("");
  const [studyDuration, setStudyDuration] = useState("");
  const [studyMinutes, setStudyMinutes] = useState("60");
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [completedExpanded, setCompletedExpanded] = useState(false);
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

  const targetMinutes = useMemo(() => {
    const m = parseInt(studyMinutes, 10);
    return Number.isFinite(m) && m > 0 ? m : 60;
  }, [studyMinutes]);

  /** 【近期布置】标题旁日期，与页面 taskDate（当日）一致 */
  const recentPanelDateLabel = useMemo(() => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(taskDate)) {
      const [y, m, d] = taskDate.split("-").map((x) => parseInt(x, 10));
      return `${y}年${m}月${d}日`;
    }
    const now = new Date();
    return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
  }, [taskDate]);

  const totalDuration = useMemo(() => tasks.reduce((s, t) => s + t.duration, 0), [tasks]);

  const completedPlanItems = allPlanItems.filter((p) => p.completed);
  const uncompletedPlanItems = allPlanItems.filter((p) => !p.completed);
  const completedCount = completedPlanItems.length;
  const uncompletedCount = uncompletedPlanItems.length;

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

  const handleSmartAssign = () => {
    if (!hasStudent) {
      showToast("请先选择学生和学科", "warning");
      return;
    }
    // Auto-match tasks from plan
    let used = 0;
    const newTasks: TaskItem[] = [];
    for (const p of uncompletedPlanItems) {
      if (used + p.duration > targetMinutes) continue;
      newTasks.push({
        id: `smart-${p.id}`,
        name: p.name,
        type: p.type,
        duration: p.duration,
      });
      used += p.duration;
      if (used >= targetMinutes) break;
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
    setSelectedPlanIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(planId)) {
        newSet.delete(planId);
        // Remove from tasks
        setTasks((t) => t.filter((item) => item.id !== `plan-add-${planId}`));
      } else {
        newSet.add(planId);
        // Add to tasks
        const plan = allPlanItems.find((p) => p.id === planId);
        if (plan) {
          setTasks((t) => [
            ...t,
            { id: `plan-add-${planId}`, name: plan.name, type: plan.type, duration: plan.duration },
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
    <div className="flex flex-col h-full">
      {/* Content area - left card + right card side by side */}
      <div className="flex-1 min-h-0 flex gap-[12px] mb-[20px]">
          {/* Left content card */}
          <div
            className="flex flex-1 min-w-0 min-h-0 flex-col overflow-y-auto scrollbar-thin bg-card rounded-[8px] p-6"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* Left content */}
              {/* Top selectors row */}
              <div
                className="flex items-center gap-3 pb-4 mb-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="w-[200px]">
                  <CustomSelect
                    value={selectedStudent}
                    onChange={(v) => setSelectedStudent(v)}
                    options={students}
                    placeholder="请选择学生"
                  />
                </div>
                <div className="w-[200px]">
                  <CustomSelect
                    value={selectedSubject}
                    onChange={(v) => setSelectedSubject(v)}
                    options={subjectOptions}
                    placeholder="请选择学科"
                  />
                </div>
                {meta && !noDiagnosis && (
                  <div className="flex items-center gap-1 ml-auto">
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-regular)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      剩余
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-medium)",
                        color: meta.remaining <= 10 ? "#F55656" : "var(--sidebar-primary)",
                      }}
                    >
                      {meta.remaining}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-regular)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      /{meta.total}次
                    </span>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="ml-1">
                      <circle cx="9" cy="9" r="6" stroke="black" strokeOpacity="0.1" strokeWidth="2.5" />
                      <circle
                        cx="9"
                        cy="9"
                        r="6"
                        stroke={meta!.remaining <= 10 ? "#F55656" : "var(--primary)"}
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

              {/* Warning banner when plan near complete */}
              {meta?.planNearComplete && hasStudent && !noDiagnosis && (
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
              {/* 布置清单整块（含学习时长、卡片区）：shrink-0 避免在整页 flex 布局里被拉长，空态紧贴学习时长 */}
              <div className="flex w-full shrink-0 flex-col">
              {/* 布置清单 header row */}
              <div className="flex items-center gap-[8px] py-[16px]">
                <div className="flex flex-1 gap-[8px] items-baseline min-w-0">
                  <h3
                    style={{
                      fontSize: "var(--text-h4)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    布置清单
                  </h3>
                  <div className="flex gap-[4px] items-center">
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>共</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "var(--sidebar-primary)", lineHeight: "1.5" }}>{tasks.length}</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>个任务</span>
                    <div className="h-[8px] shrink-0 w-0 relative">
                      <div className="absolute" style={{ inset: "0 -0.5px" }}>
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8">
                          <path d="M0.5 0V8" stroke="#CFD5E8" />
                        </svg>
                      </div>
                    </div>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>预计</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "var(--sidebar-primary)", lineHeight: "1.5" }}>{totalDuration}</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>分钟 (目标{targetMinutes}分钟)</span>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="flex items-center gap-[2px] w-[100px] h-[32px] justify-center rounded-[18px] cursor-pointer transition-colors bg-white"
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                      color: "var(--primary)",
                      border: "1px solid #9CB1FC",
                    }}
                    onClick={() => setShowAddTaskMenu(!showAddTaskMenu)}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d={svgPaths.p1beb1380} stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.33333 8H12.6667" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    添加任务
                  </button>
                  {showAddTaskMenu && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setShowAddTaskMenu(false)} />
                      <div
                        className="absolute top-full mt-1 right-0 bg-white flex flex-col gap-[2px] p-[4px] rounded-[12px] z-20 min-w-[132px]"
                        style={{ boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)" }}
                      >
                        {[
                          { label: "课程", value: "course" as const },
                          { label: "作业", value: "question" as const },
                          { label: "诊断任务", value: "diagnosis" as const },
                        ].map((menuItem) => (
                          <button
                            key={menuItem.value}
                            className="w-full px-[16px] py-[12px] text-left bg-white rounded-[10px] cursor-pointer border-none transition-colors hover:bg-[#ebf1ff]"
                            style={{
                              fontSize: "14px",
                              fontWeight: "var(--font-weight-regular)",
                              color: "#444963",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#ebf1ff";
                              e.currentTarget.style.color = "#4a4fed";
                              e.currentTarget.style.fontWeight = "var(--font-weight-medium)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "white";
                              e.currentTarget.style.color = "#444963";
                              e.currentTarget.style.fontWeight = "var(--font-weight-regular)";
                            }}
                            onClick={() => {
                              setShowAddTaskMenu(false);
                              if (menuItem.value === "question") {
                                navigate("/dashboard/homework-bank");
                              } else if (menuItem.value === "course") {
                                navigate("/dashboard/course-bank");
                              } else {
                                if (!hasStudent) {
                                  showToast("请先选择学生和学科", "warning");
                                  return;
                                }
                                setTasks((prev) => [
                                  ...prev,
                                  {
                                    id: `diagnosis-${Date.now()}`,
                                    name: "诊断任务",
                                    type: "诊断任务",
                                    duration: 45,
                                  },
                                ]);
                                showToast("已添加诊断任务", "success");
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

              {/* 学习时长 card — 与下方任务列表间距 16px */}
              <div
                className="mb-[16px] flex w-full flex-col items-start justify-center gap-[8px] rounded-[8px] p-[12px]"
                style={{ backgroundColor: "#f4f7fe" }}
              >
                <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)", color: "#838bab", lineHeight: "1.5" }}>
                  学习时长
                </span>
                <div className="flex gap-[12px] items-center flex-wrap">
                  <div className="w-[160px] h-[32px]">
                    <CustomSelect
                      value={studyMinutes}
                      onChange={setStudyMinutes}
                      options={[
                        { label: "15分钟", value: "15" },
                        { label: "30分钟", value: "30" },
                        { label: "45分钟", value: "45" },
                        { label: "60分钟", value: "60" },
                        { label: "90分钟", value: "90" },
                        { label: "120分钟", value: "120" },
                        { label: "180分钟", value: "180" },
                      ]}
                      placeholder="60分钟"
                    />
                  </div>
                  <button
                    onClick={handleSmartAssign}
                    className="flex items-center gap-[2px] w-[100px] h-[32px] justify-center rounded-[8px] border-none transition-colors cursor-pointer hover:opacity-90"
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "white",
                      backgroundImage: "linear-gradient(218.313deg, rgba(255, 255, 255, 0.2) 12.811%, rgba(255, 255, 255, 0) 64.413%), linear-gradient(90deg, rgb(83, 118, 255) 0%, rgb(83, 118, 255) 100%)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <g clipPath="url(#clip_smart)">
                        <path d={svgPaths.p13f62700} stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip_smart">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                    智能布置
                  </button>
                </div>
              </div>

              {/* Task list area — 空态固定 120px；仅 0～2 个任务时同高，下方留白，学习规划标题位置不变；≥3 个任务 min-h 120 后随内容增高 */}
              <div
                className={`mb-5 box-border flex w-full shrink-0 flex-col ${
                  !hasStudent || tasks.length === 0 || tasks.length <= 2 ? "h-[120px] min-h-[120px]" : "min-h-[120px]"
                }`}
              >
                {!hasStudent || tasks.length === 0 ? (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1">
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
                      <div className="flex flex-wrap gap-[8px] pb-[16px] pt-0">
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
                      {tasks.length <= 2 ? <div className="min-h-0 flex-1 shrink-0" aria-hidden /> : null}
                    </div>
                  </DndProvider>
                )}
              </div>
              </div>

              {/* 学习规划 section */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3
                    style={{
                      fontSize: "var(--text-h4)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                    }}
                  >
                    学习规划
                  </h3>
                  {hasStudent && (
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      共{allPlanItems.length}章 · 已学{completedCount}章 · 未学{uncompletedCount}章
                    </span>
                  )}
                </div>

                {!hasStudent ? (
                  /* Empty state for plan */
                  <div
                    className="rounded-[8px] flex flex-col items-center justify-center py-16"
                    style={{ backgroundColor: "rgba(244, 247, 254, 0.6)" }}
                  >
                    <img src={emptyTaskListIllustration} alt="" className="mb-3 w-[68px] h-[68px] object-contain" />
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
                    className="rounded-[8px]"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    {/* Completed section toggle */}
                    <button
                      onClick={() => setCompletedExpanded(!completedExpanded)}
                      className="w-full flex items-center justify-center gap-1 py-3 cursor-pointer bg-transparent border-none transition-colors hover:bg-muted/20"
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "var(--muted-foreground)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      已学1～{completedCount}章
                      {completedExpanded ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronUp size={14} />
                      )}
                    </button>

                    {/* Completed items (collapsible) */}
                    <AnimatePresence>
                      {completedExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-0">
                            {completedPlanItems.map((item, idx) => (
                              <div
                                key={item.id}
                                className="flex items-center gap-3 p-3"
                                style={{
                                  borderRight: idx % 2 === 0 ? "1px solid var(--border)" : undefined,
                                  borderBottom: "1px solid var(--border)",
                                }}
                              >
                                {/* 已学行：与未学行选中态同一套复选框 */}
                                <div
                                  className={planCheckboxClassName}
                                  style={{
                                    backgroundColor: "var(--primary)",
                                    border: "1px solid var(--primary)",
                                  }}
                                >
                                  <PlanCheckboxCheckIcon />
                                </div>
                                <div className="flex-1 min-w-0" style={{ opacity: 0.5 }}>
                                  <div
                                    style={{
                                      fontSize: "var(--text-base)",
                                      fontWeight: "var(--font-weight-regular)",
                                      color: "var(--foreground)",
                                    }}
                                  >
                                    {item.order}. {item.name}
                                  </div>
                                  <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="inline-flex items-center gap-1">
                                      <span className="inline-block w-3.5 h-3.5">
                                        {item.type === "AI课" ? <IcCourse /> : <IcPractice />}
                                      </span>
                                      <span
                                        style={{
                                          fontSize: "var(--text-sm)",
                                          fontWeight: "var(--font-weight-regular)",
                                          color: "var(--muted-foreground)",
                                        }}
                                      >
                                        {item.type} · 预计 {item.duration} 分钟
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Uncompleted items */}
                    <div className="grid grid-cols-2 gap-0">
                      {uncompletedPlanItems.map((item, idx) => {
                        const isChecked = selectedPlanIds.has(item.id);
                        const isInProgress = !!item.studiedMinutes;
                        return (
                          <label
                            key={item.id}
                            className="flex items-center gap-3 p-3 cursor-pointer transition-colors hover:bg-[#f8f9fc]"
                            style={{
                              borderRight: idx % 2 === 0 ? "1px solid var(--border)" : undefined,
                              borderBottom:
                                idx < uncompletedPlanItems.length - (uncompletedPlanItems.length % 2 === 0 ? 2 : 1)
                                  ? "1px solid var(--border)"
                                  : undefined,
                              backgroundColor: isChecked ? "rgba(101,116,252,0.06)" : undefined,
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleTogglePlan(item.id)}
                              className="sr-only"
                            />
                            <div
                              className={planCheckboxClassName}
                              style={{
                                backgroundColor: isChecked || isInProgress ? "var(--primary)" : "white",
                                border: isChecked || isInProgress ? "1px solid var(--primary)" : "1px solid #CFD5E8",
                                opacity: isInProgress && !isChecked ? 0.4 : 1,
                              }}
                            >
                              {(isChecked || isInProgress) && <PlanCheckboxCheckIcon />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div
                                style={{
                                  fontSize: "var(--text-base)",
                                  fontWeight: isChecked ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                                  color: "var(--foreground)",
                                }}
                              >
                                {item.order}. {item.name}
                              </div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="inline-flex items-center gap-1">
                                  <span className="inline-block w-3.5 h-3.5">
                                    {item.type === "AI课" ? <IcCourse /> : <IcPractice />}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "var(--text-sm)",
                                      fontWeight: "var(--font-weight-regular)",
                                      color: "var(--muted-foreground)",
                                    }}
                                  >
                                    {item.type} · 预计 {item.duration} 分钟{item.studiedMinutes ? ` (已学${item.studiedMinutes}分钟)` : ""}
                                  </span>
                                </span>
                              </div>
                            </div>
                            {/* 预览（Figma 602:1231） */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (item.type === "AI课") {
                                  navigate(`/course-preview?title=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(String(item.duration))}`);
                                } else {
                                  navigate(`/exercise-preview?title=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(String(item.duration))}`);
                                }
                              }}
                              className="shrink-0 flex h-[32px] min-w-[76px] items-center justify-center rounded-[18px] border border-solid border-[#dfe3f0] bg-white px-4 py-[6px] cursor-pointer transition-colors hover:bg-[#f8f9fc]"
                              style={{
                                fontSize: "14px",
                                fontWeight: "var(--font-weight-regular)",
                                color: "#444963",
                                lineHeight: "1.5",
                              }}
                            >
                              预览
                            </button>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              </>
              )}
          </div>

          {!noDiagnosis && (
            <div
              className="w-[260px] shrink-0 min-h-0 flex flex-col bg-card rounded-[8px] p-4"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="mb-[12px] shrink-0 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <p
                  style={{
                    fontSize: "var(--text-h4)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "#101019",
                    lineHeight: "24px",
                  }}
                >
                  近期布置
                </p>
                <span
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "#838bab",
                    lineHeight: "1.5",
                  }}
                >
                  {recentPanelDateLabel}
                </span>
              </div>

              {/* Timeline */}
              <div className="flex flex-col items-start w-full flex-1 min-h-0 overflow-y-auto scrollbar-thin">
                {recentAssignments.map((item, idx) => {
                  const isFirst = idx === 0;
                  const isLast = idx === recentAssignments.length - 1;

                  return (
                    <div key={item.id} className="flex gap-[12px] items-start w-full">
                      {/* Timeline track column */}
                      <div className="flex flex-col items-center shrink-0 w-[14px]">
                        {/* Dot */}
                        {isFirst ? (
                          <div className="flex items-center justify-center py-[7px] shrink-0 w-full">
                            <div className="relative shrink-0 w-[8px] h-[8px]">
                              <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" stroke="var(--sidebar-primary)" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-[22px] py-[4px] shrink-0 w-full">
                            <div className="relative shrink-0 w-[8px] h-[8px]">
                              <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" fill="#ABB4D1" stroke="#E9ECF5" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                        )}
                        {/* Connecting line */}
                        {!isLast && (
                          <div className="h-[70px] shrink-0 w-0 relative">
                            <div className="absolute" style={{ inset: "0 -0.5px" }}>
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 70">
                                <path d="M0.5 0V70" stroke={isFirst ? "var(--primary)" : "#ABB4D1"} />
                              </svg>
                            </div>
                          </div>
                        )}
                        {isLast && (
                          <div className="h-[46px] shrink-0 w-0 relative">
                            <div className="absolute" style={{ inset: "0 -0.5px" }}>
                              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 46">
                                <path d="M0.5 0V46" stroke={`url(#paint_timeline_fade_${idx})`} />
                                <defs>
                                  <linearGradient gradientUnits="userSpaceOnUse" id={`paint_timeline_fade_${idx}`} x1="1" x2="1" y1="0" y2="46">
                                    <stop stopColor="#ABB4D1" />
                                    <stop offset="1" stopColor="#ABB4D1" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content column */}
                      <div className="flex flex-col flex-1 gap-[8px] items-start min-w-0 min-h-[1px]">
                        {/* Type icon + label · Title row + Stats */}
                        <div className="flex flex-col gap-[4px] items-start w-full">
                          <div className="flex gap-[4px] items-center w-full">
                            {/* Type icon + label */}
                            <div className="flex gap-[4px] items-center shrink-0">
                              <div className="relative shrink-0 w-[16px] h-[16px]">
                                {item.type === "AI课" ? (
                                  <>
                                    <div className="absolute" style={{ left: "7px", top: "5.5px", width: "3px", height: "4px" }}>
                                      <div className="absolute" style={{ inset: "-6.02% -8.64% -6.02% -16.67%" }}>
                                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75917 4.48158">
                                          <path d={timelineSvgPaths.p249c1d20} fill="#FA9524" stroke="#FA9524" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="absolute" style={{ left: "1.9px", top: "1.4px", width: "12.199px", height: "12.199px" }}>
                                      <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1992 12.1992">
                                        <path d={timelineSvgPaths.pc8d000} fill="#FA9524" />
                                      </svg>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="absolute" style={{ left: "5.5px", top: "13px", width: "8.5px", height: "0px" }}>
                                      <div className="absolute" style={{ inset: "-0.6px -7.06%" }}>
                                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.7 1.2">
                                          <path d="M0.6 0.6H9.1" stroke="#2091FF" strokeLinecap="round" strokeWidth="1.2" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="absolute" style={{ inset: "12.5% 21.39% 18.75% 15.63%" }}>
                                      <div className="absolute" style={{ inset: "-5.45% -5.95%" }}>
                                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2776 12.2">
                                          <path d={timelineSvgPaths.pc58d740} fill="#2091FF" />
                                        </svg>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                              <p
                                style={{
                                  fontSize: "var(--text-base)",
                                  fontWeight: "var(--font-weight-medium)",
                                  color: "#444963",
                                  lineHeight: "1.5",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {item.type === "AI课" ? "AI课" : "练习"}
                              </p>
                            </div>
                            <p
                              style={{
                                fontSize: "var(--text-base)",
                                fontWeight: "var(--font-weight-regular)",
                                color: "#838bab",
                                lineHeight: "1.5",
                                whiteSpace: "nowrap",
                              }}
                            >
                              ·
                            </p>
                            <p
                              style={{
                                fontSize: "var(--text-base)",
                                fontWeight: "var(--font-weight-medium)",
                                color: "#444963",
                                lineHeight: "1.5",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {item.title}
                            </p>
                          </div>
                          {/* Stats row：单学生仅已完成 / 已完成 xx% / 未完成；未完成不展示时长 */}
                          <div className="flex items-center gap-[6px] w-full">
                            <span
                              style={{
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--font-weight-regular)",
                                color: "#838bab",
                                lineHeight: "1.75",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {recentCompletionLabel(item)}
                            </span>
                            {item.completion !== "notDone" && item.completionTime ? (
                              <>
                                <div className="h-[7.5px] shrink-0 w-0 relative">
                                  <div className="absolute" style={{ inset: "0 -0.5px" }}>
                                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
                                      <path d="M0.5 0V7.5" stroke="#CFD5E8" />
                                    </svg>
                                  </div>
                                </div>
                                <span
                                  style={{
                                    fontSize: "var(--text-sm)",
                                    fontWeight: "var(--font-weight-regular)",
                                    color: "#838bab",
                                    lineHeight: "1.75",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {item.completionTime}
                                </span>
                              </>
                            ) : null}
                          </div>
                        </div>
                        {/* Remark card */}
                        <div
                          className="w-full rounded-[4px]"
                          style={{ backgroundColor: "#f4f7fe" }}
                        >
                          
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
          )}
      </div>

      {!noDiagnosis && (
      <div
        className="shrink-0 bg-white flex gap-[12px] items-center px-[24px] py-[16px] relative"
        style={{
          borderTop: "1px solid var(--border)",
          zIndex: 10,
        }}
      >
        {/* Left: estimated vs target minutes */}
        <p
          className="flex-1 min-w-0"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "1.5",
          }}
        >
          <span style={{ color: "var(--muted-foreground)" }}>预计</span>
          <span style={{ color: "var(--primary)" }}>{` ${totalDuration} `}</span>
          <span style={{ color: "var(--muted-foreground)" }}>分钟 (目标{targetMinutes}分钟)</span>
        </p>

        {/* 取消布置 button */}
        

        {/* 已加入(N) button */}
        

        {/* 去布置 button */}
        <button
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
          className="flex h-[36px] w-[100px] items-center justify-center rounded-[18px] shrink-0 border-none cursor-pointer transition-colors hover:opacity-90 disabled:cursor-not-allowed"
          style={{
            backgroundColor: tasks.length > 0 ? "var(--primary)" : "#bbcbfc",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "white",
              lineHeight: "1.5",
              whiteSpace: "nowrap",
            }}
          >
            去布置
          </span>
        </button>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
          <div
            className="bg-white overflow-hidden rounded-[16px] w-[400px] flex flex-col"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
          >
            {/* Header */}
            <div className="flex items-start gap-[8px] p-[24px]">
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: "20px", fontWeight: "var(--font-weight-semibold)", color: "#101019", lineHeight: "1.5" }}>
                  发布时间
                </p>
              </div>
              <button
                onClick={() => setShowPublishDialog(false)}
                className="shrink-0 w-[20px] h-[20px] flex items-center justify-center cursor-pointer bg-transparent border-none p-0"
              >
                <svg width="14" height="14" viewBox="0 0 14.0237 14.0237" fill="none">
                  <path clipRule="evenodd" d={publishSvgPaths.p37c48700} fill="#646B8A" fillRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-[16px] px-[24px]">
              {/* 发布时间 */}
              <div className="flex flex-col gap-[4px]">
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

              {/* 要求完成时间 */}
              <div className="flex flex-col gap-[4px]">
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

    </div>
  );
}