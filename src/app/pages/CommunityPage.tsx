import { useCallback, useEffect, useRef, useState } from "react";
import { Check, FileText, X } from "lucide-react";
import { showToast } from "../components/CustomToast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";

import voiceOrbImg from "@/assets/images/voice-orb.webp";
import surveyIllustrationImg from "@/assets/images/survey-illustration.png";
import cardBgImg from "@/assets/images/card-bg.png";
import interviewErrorImg from "@/assets/images/interview-error-illustration.png";
import microphoneIconUrl from "@/assets/icons/麦克风.svg?url";

/* ─── Mock 公告数据 ─── */
type ContentBlock =
  | { type: "subtitle"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "warning"; text: string };

interface Announcement {
  id: string;
  title: string;
  date: string;
  unread: boolean;
  heading: string;
  content: ContentBlock[];
  surveyTitle?: string;
  surveyUrl?: string;
}

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "1",
    title: "《学情反馈》调研问卷",
    date: "2025.01.17   12:33  发布",
    unread: true,
    heading: "《学情反馈》调研问卷",
    content: [
      { type: "paragraph", text: "老师，您好！感谢您对小鹿爱学教师端产品的使用，为了更好满足您的使用需求，我们诚邀您填写以下调研问卷。请点击下方填写。" },
      { type: "paragraph", text: "此处可以嵌入飞书问卷，满足各类的问卷需求，点击图片，可以进入问卷链接。" },
    ],
    surveyTitle: "《学情反馈》调研问卷",
    surveyUrl: "#",
  },
  {
    id: "2",
    title: "智能分层数据自动更新智能分层数据自动更新",
    date: "2025.01.15   10:00  发布",
    unread: false,
    heading: "agent访谈邀请",
    content: [
      { type: "paragraph", text: "agent访谈邀请文案部分占位文案部分占位文案部分占位文案部分占位文案部分占位文案部分占位文案部分占位" },
    ],
    surveyTitle: "agent访谈链接",
    surveyUrl: "#",
  },
  {
    id: "3",
    title: "2026春季选课通知",
    date: "2025.01.10   09:00  发布",
    unread: false,
    heading: "2026春季选课通知",
    content: [
      { type: "subtitle", text: "2026年春季学期选课通知" },
      { type: "paragraph", text: "亲爱的同学们：" },
      { type: "paragraph", text: "2025年春季学期选课工作即将开始，请各位同学注意以下事项：" },
      { type: "subtitle", text: "选课时间安排" },
      { type: "paragraph", text: "第一轮选课：2025年1月6日 10:00 - 1月10日 17:00" },
      { type: "paragraph", text: "第二轮选课：2025年1月13日 10:00 - 1月17日 17:00" },
      { type: "paragraph", text: "退补选：2025年2月24日 10:00 - 3月7日 17:00" },
      { type: "subtitle", text: "注意事项" },
      { type: "paragraph", text: "1. 请登录 教务系统 完成选课操作" },
      { type: "paragraph", text: "2. 必修课程不可退选，请谨慎操作" },
      { type: "warning", text: "3. 选课结果以系统最终确认为准" },
    ],
    surveyTitle: "《2026春季选课通知》链接",
    surveyUrl: "#",
  },
  {
    id: "4",
    title: "系统升级维护通知（1月8日）",
    date: "2025.01.06   14:30  发布",
    unread: false,
    heading: "系统升级维护通知",
    content: [
      { type: "paragraph", text: "系统将于1月8日凌晨2:00-6:00进行升级维护，届时平台将暂时无法访问，请提前做好准备。" },
    ],
  },
  {
    id: "5",
    title: "新功能上线：AI智能添加任务",
    date: "2025.01.03   11:00  发布",
    unread: false,
    heading: "新功能上线：AI智能添加任务",
    content: [
      { type: "paragraph", text: "AI智能添加任务功能已正式上线，老师可在布置页面体验一键智能生成任务推荐，提升备课效率。" },
    ],
  },
  {
    id: "6",
    title: "2024年度教学数据报告已生成",
    date: "2024.12.30   16:00  发布",
    unread: false,
    heading: "2024年度教学数据报告",
    content: [
      { type: "paragraph", text: "2024年度教学数据报告已生成，请前往学情模块查看年度汇总，回顾过去一年的教学成果。" },
    ],
  },
  {
    id: "7",
    title: "元旦放假安排及值班通知",
    date: "2024.12.28   09:30  发布",
    unread: false,
    heading: "元旦放假安排及值班通知",
    content: [
      { type: "paragraph", text: "元旦假期为12月30日至1月1日，假期期间如有紧急事项请联系值班负责人。" },
    ],
  },
  {
    id: "8",
    title: "教师端新版本发布说明 v2.5.0",
    date: "2024.12.25   10:00  发布",
    unread: false,
    heading: "教师端新版本发布说明 v2.5.0",
    content: [
      { type: "paragraph", text: "新版本已上线，本次更新包括诊断管理优化、排课流程简化等多项改进，详情请查看更新日志。" },
    ],
  },
];

/* ─── 问卷入口绿色 icon ─── */
function SurveyIcon() {
  return (
    <div className="flex size-[52px] shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#0CA27F" }}>
      <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="24" height="28" rx="3" fill="white" fillOpacity="0.25" stroke="white" strokeOpacity="0.5" />
        <rect x="5" y="5" width="5" height="2" rx="1" fill="#088E6F" />
        <rect x="5" y="9" width="11" height="2" rx="1" fill="#088E6F" />
        <rect x="5" y="13" width="8" height="2" rx="1" fill="white" fillOpacity="0.4" />
        <rect x="5" y="17" width="11" height="2" rx="1" fill="white" fillOpacity="0.4" />
        <rect x="5" y="21" width="6" height="2" rx="1" fill="white" fillOpacity="0.4" />
      </svg>
    </div>
  );
}

type InterviewStage = "start" | "interview" | "end" | "error";
type InterviewMode = "voice" | "text";
type InterviewAiStatus = "replying" | "listening" | "thinking" | "waiting";
type InterviewErrorType = "network" | "timeout" | null;

const INTERVIEW_ROUNDS = [
  {
    reply: "👋 您好，感谢你抽时间参与访谈，我会根据你的反馈持续优化教师端体验。",
    followUp: "先说说你在布置任务时最常遇到的一个问题是什么？",
  },
  {
    reply: "收到，这个问题我们会重点分析。",
    followUp: "这个问题通常在什么场景下更容易出现？会影响你哪些工作流程？",
  },
  {
    reply: "非常有价值，这能帮助我们更准确定位改进方向。",
    followUp: "如果让你优先改一个点，你最希望我们先优化什么？",
  },
] as const;

const MAX_RECORD_SECONDS = 20;

function formatRecordTime(seconds: number) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function createInterviewSession() {
  return new Promise<{ sessionId: string }>((resolve) => {
    window.setTimeout(() => {
      resolve({ sessionId: `session_${Date.now()}` });
    }, 700);
  });
}

function Typewriter({ text, speed = 32, onDone }: { text: string; speed?: number; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const idxRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    idxRef.current = 0;

    const timer = window.setInterval(() => {
      idxRef.current += 1;
      if (idxRef.current >= text.length) {
        setDisplayed(text);
        window.clearInterval(timer);
        onDone?.();
        return;
      }
      setDisplayed(text.slice(0, idxRef.current));
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <span
          className="ml-[1px] inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse rounded-full bg-[#6574FC]"
        />
      )}
    </>
  );
}

function speakText(text: string): SpeechSynthesisUtterance | null {
  if (!window.speechSynthesis) return null;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 1.05;
  window.speechSynthesis.speak(utterance);
  return utterance;
}

function InterviewBubble({ reply, followUp }: { reply: string; followUp: string }) {
  const [typingDone, setTypingDone] = useState(false);
  const [replyDone, setReplyDone] = useState(false);

  useEffect(() => {
    speakText(reply);
    return () => window.speechSynthesis?.cancel();
  }, [reply]);

  useEffect(() => {
    if (!replyDone) return;
    speakText(followUp);
    return () => window.speechSynthesis?.cancel();
  }, [replyDone, followUp]);

  useEffect(() => {
    if (!typingDone) return;
    const timer = window.setTimeout(() => setReplyDone(true), 1000);
    return () => window.clearTimeout(timer);
  }, [typingDone]);

  return (
    <div
      className="flex w-full flex-col gap-2 rounded-[12px] p-6"
      style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid #ffffff" }}
    >
      <p
        style={{
          fontSize: replyDone ? "16px" : "24px",
          lineHeight: "1.5",
          color: replyDone ? "#646b8a" : "#101019",
          fontWeight: replyDone ? 400 : 700,
          transition: "font-size 0.3s, color 0.3s, font-weight 0.3s",
        }}
      >
        <Typewriter text={reply} onDone={() => setTypingDone(true)} />
      </p>
      {replyDone && (
        <p style={{ fontSize: "24px", lineHeight: "1.5", color: "#101019", fontWeight: 700 }}>
          <Typewriter text={followUp} />
        </p>
      )}
    </div>
  );
}

function WaveBars({ active }: { active: boolean }) {
  const idleBars = [19, 9, 29, 39, 29, 9, 19];
  const [bars, setBars] = useState(idleBars);

  useEffect(() => {
    if (!active) {
      setBars(idleBars);
      return;
    }

    const weight = [0.6, 0.35, 0.85, 1.2, 0.85, 0.35, 0.6];
    const timer = window.setInterval(() => {
      setBars((prev) =>
        prev.map((current, index) => {
          const target = 8 + Math.random() * 34 * weight[index];
          return Math.max(8, Math.min(44, Math.round(current * 0.4 + target * 0.6)));
        }),
      );
    }, 140);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="flex h-[80px] items-center justify-center gap-[20px] overflow-hidden" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={`bar-${i}`}
          style={{
            width: "8px",
            height: `${h}px`,
            borderRadius: "999px",
            backgroundColor: active ? "#3393FF" : "#C8D0EA",
            transition: "height 140ms linear, background-color 220ms ease",
          }}
        />
      ))}
    </div>
  );
}

function StatusDotWave({ status }: { status: InterviewAiStatus }) {
  const dotCount = 5;
  const [phase, setPhase] = useState(0);
  const animationMode = status === "thinking" || status === "listening" ? "strong" : status === "waiting" ? "gentle" : "idle";
  const isAnimated = animationMode !== "idle";

  useEffect(() => {
    if (!isAnimated) {
      setPhase(0);
      return;
    }

    const timer = window.setInterval(() => {
      setPhase((prev) => (prev + 1) % dotCount);
    }, animationMode === "gentle" ? 260 : status === "listening" ? 180 : 240);

    return () => window.clearInterval(timer);
  }, [animationMode, dotCount, isAnimated, status]);

  return (
    <div className="flex items-center justify-center" style={{ height: "40px", gap: "6px" }} aria-hidden>
      {Array.from({ length: dotCount }, (_, index) => {
        const distance = Math.abs(index - phase);
        const wrappedDistance = Math.min(distance, dotCount - distance);
        const trailingDistance = (phase - index + dotCount) % dotCount;
        const strongEmphasis = trailingDistance <= 2 ? Math.max(0, 1 - trailingDistance * 0.38) : 0;
        const gentleEmphasis = Math.max(0, 1 - wrappedDistance * 0.45);
        const emphasis =
          animationMode === "strong"
            ? strongEmphasis
            : isAnimated
              ? gentleEmphasis
              : [1, 0.75, 0.55, 0.35, 0.25][index];
        const opacity =
          animationMode === "gentle"
            ? Number((0.42 + emphasis * 0.46).toFixed(2))
            : Number((0.22 + emphasis * 0.78).toFixed(2));
        const scale =
          animationMode === "gentle"
            ? Number((0.92 + emphasis * 0.18).toFixed(2))
            : Number((0.88 + emphasis * 0.42).toFixed(2));
        const translateY = animationMode === "strong" ? `${Math.round(-emphasis * 5)}px` : "0px";

        return (
          <span
            key={`status-dot-${index}`}
            className="size-[8px] rounded-full"
            style={{
              backgroundColor: "#005096",
              opacity,
              transform: `translateY(${translateY}) scale(${scale})`,
              boxShadow: animationMode === "strong" && emphasis > 0.75 ? "0 0 10px rgba(0, 80, 150, 0.22)" : "none",
              transition: "transform 220ms ease, opacity 220ms ease, box-shadow 220ms ease",
            }}
          />
        );
      })}
    </div>
  );
}

function ReadingWaveBars({ active }: { active: boolean }) {
  const idleBars = [6, 14, 30, 14, 6];
  const [bars, setBars] = useState(idleBars);

  useEffect(() => {
    if (!active) {
      setBars(idleBars);
      return;
    }

    const weight = [0.28, 0.68, 1.1, 0.68, 0.28];
    const timer = window.setInterval(() => {
      setBars((prev) =>
        prev.map((current, index) => {
          const target = 4 + Math.random() * 34 * weight[index];
          return Math.max(4, Math.min(36, Math.round(current * 0.3 + target * 0.7)));
        }),
      );
    }, 140);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="flex items-center justify-center" style={{ height: "40px", gap: "6px" }} aria-hidden>
      {bars.map((h, i) => (
        <span
          key={`reading-bar-${i}`}
          style={{
            width: "8px",
            height: `${h}px`,
            borderRadius: "999px",
            backgroundColor: "#005096",
            opacity: 0.18 + Math.pow((h - 4) / (36 - 4), 1.15) * 0.82,
            transition: "height 120ms linear, opacity 140ms linear",
          }}
        />
      ))}
    </div>
  );
}

function useAnimatedDots(active = true) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    if (!active) {
      setDots(1);
      return;
    }

    const timer = window.setTimeout(() => {
      setDots((prev) => (prev % 3) + 1);
    }, dots === 3 ? 1000 : 420);

    return () => window.clearTimeout(timer);
  }, [active, dots]);

  return dots;
}

function RecordingIndicator() {
  const dots = useAnimatedDots();

  return (
    <div className="flex flex-col items-center" style={{ gap: "4px" }}>
      <div className="relative flex items-center justify-center" style={{ width: "70px", height: "70px" }}>
        <img
          src={voiceOrbImg}
          alt=""
          style={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
          }}
        />
      </div>
      <span style={{ fontSize: "12px", lineHeight: "1.5", color: "#0071DF" }}>{`识别中${".".repeat(dots)}`}</span>
    </div>
  );
}

function SurveyIllustration() {
  return (
    <img
      src={surveyIllustrationImg}
      alt=""
      className="size-full object-contain"
      draggable={false}
    />
  );
}

function AgentInterviewFullScreen({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [stage, setStage] = useState<InterviewStage>("start");
  const [mode, setMode] = useState<InterviewMode>("voice");
  const [aiStatus, setAiStatus] = useState<InterviewAiStatus>("replying");
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [roundIndex, setRoundIndex] = useState(0);
  const [sessionId, setSessionId] = useState<string>("");
  const [creatingSession, setCreatingSession] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [errorType, setErrorType] = useState<InterviewErrorType>(null);
  const [retrying, setRetrying] = useState(false);
  const timerRef = useRef<ReturnType<typeof window.setInterval> | null>(null);
  const recordSecondsRef = useRef(0);
  const creatingSessionRef = useRef(false);
  const statusDots = useAnimatedDots(open && stage === "interview");

  const currentAgentMessage = INTERVIEW_ROUNDS[roundIndex] ?? INTERVIEW_ROUNDS[INTERVIEW_ROUNDS.length - 1];

  const resetInterview = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setStage("start");
    setMode("voice");
    setAiStatus("replying");
    setRoundIndex(0);
    setSessionId("");
    setCreatingSession(false);
    setInputValue("");
    setIsRecording(false);
    setRecordSeconds(0);
    setErrorType(null);
    setRetrying(false);
    setShowExitConfirm(false);
    creatingSessionRef.current = false;
    recordSecondsRef.current = 0;
  }, []);

  useEffect(() => {
    if (!open) {
      resetInterview();
    }
  }, [open, resetInterview]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetInterview();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, resetInterview]);

  /** 语音模式：mock 无流式输出，「回复」文案已一次性展示完后应进入可作答态，否则录制按钮会永远禁用 */
  useEffect(() => {
    if (stage !== "interview" || mode !== "voice") return;
    if (aiStatus !== "replying" || isRecording) return;
    const t = window.setTimeout(() => {
      setAiStatus("waiting");
    }, 1000);
    return () => window.clearTimeout(t);
  }, [stage, mode, aiStatus, isRecording, roundIndex]);

  const closeFlow = () => {
    resetInterview();
    onClose();
  };

  const handleAttemptClose = () => {
    if (stage === "interview") {
      setShowExitConfirm(true);
      return;
    }
    closeFlow();
  };

  const goNextRound = () => {
    setAiStatus("thinking");
    const roll = Math.random();

    if (roll < 0.1) {
      window.setTimeout(() => {
        setAiStatus("replying");
        setStage("error");
        setErrorType("network");
      }, 1500);
      return;
    }

    if (roll < 0.2) {
      window.setTimeout(() => {
        showToast("服务响应超时，正在重试。", "warning");
        setRetrying(true);
        window.setTimeout(() => {
          setRetrying(false);
          setRoundIndex((prev) => {
            const next = prev + 1;
            if (next >= INTERVIEW_ROUNDS.length) {
              setStage("end");
              return prev;
            }
            return next;
          });
          setAiStatus("replying");
          setInputValue("");
        }, 2000);
      }, 2000);
      return;
    }

    window.setTimeout(() => {
      setRoundIndex((prev) => {
        const next = prev + 1;
        if (next >= INTERVIEW_ROUNDS.length) {
          setStage("end");
          return prev;
        }
        return next;
      });
      setAiStatus("replying");
      setInputValue("");
    }, 1100);
  };

  const handleStartInterview = async () => {
    if (creatingSessionRef.current || creatingSession) return;
    creatingSessionRef.current = true;
    setCreatingSession(true);
    try {
      const result = await createInterviewSession();
      setSessionId(result.sessionId);
      setStage("interview");
      setRoundIndex(0);
      setMode("voice");
      setAiStatus("replying");
      showToast("访谈会话已创建", "success");
    } catch {
      showToast("会话创建失败，请稍后重试", "error");
    } finally {
      creatingSessionRef.current = false;
      setCreatingSession(false);
    }
  };

  const stopRecording = (autoStop: boolean) => {
    const finalSeconds = recordSecondsRef.current;
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRecording(false);
    if (autoStop) {
      showToast("已自动结束录制", "info");
    }

    if (finalSeconds < 2) {
      showToast("没有听清，请再说一次", "warning");
      setAiStatus("replying");
      setRecordSeconds(0);
      recordSecondsRef.current = 0;
      return;
    }

    goNextRound();
    setRecordSeconds(0);
    recordSecondsRef.current = 0;
  };

  const startRecording = async () => {
    if (isRecording || aiStatus !== "waiting") return;

    try {
      if (navigator?.mediaDevices?.getUserMedia) {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      }
    } catch {
      // microphone unavailable – continue with simulated recording
    }

    setAiStatus("listening");
    setIsRecording(true);
    setRecordSeconds(0);
    recordSecondsRef.current = 0;
    timerRef.current = window.setInterval(() => {
      setRecordSeconds((prev) => {
        const next = prev + 1;
        recordSecondsRef.current = next;
        if (next >= MAX_RECORD_SECONDS) {
          window.setTimeout(() => stopRecording(true), 0);
          return MAX_RECORD_SECONDS;
        }
        return next;
      });
    }, 1000);
  };

  const sendTextAnswer = () => {
    if (!inputValue.trim() || aiStatus === "thinking") return;
    goNextRound();
  };

  const visualAiStatus = mode === "voice" && (isRecording || aiStatus === "listening") ? "waiting" : aiStatus;
  const aiStatusText =
    visualAiStatus === "thinking"
      ? "AI正在思考"
      : visualAiStatus === "waiting"
        ? "AI正在等待您的回答"
        : "AI正在回复";
  const animatedAiStatusText = `${aiStatusText}${".".repeat(statusDots)}`;
  const showSharedStatusPanel = mode === "text" || aiStatus === "thinking";

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[140] overflow-hidden" style={{ backgroundColor: "#f4f7fe" }}>
      {/* Gradient header */}
      <div
        className="absolute left-0 right-0 top-0 h-[125px]"
        style={{
          background: "linear-gradient(180deg, #E9F7FF 0%, #F2F8FF 60%, rgba(244,247,254,0) 100%)",
        }}
      />
      {/* Decorative ellipses */}
      <div className="pointer-events-none absolute right-[-100px] top-[-160px] h-[334px] w-[440px] rounded-full opacity-60" style={{ background: "radial-gradient(ellipse, rgba(193,222,255,0.5) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute right-[20px] top-[-200px] h-[350px] w-[380px] rounded-full opacity-50" style={{ background: "radial-gradient(ellipse, rgba(220,210,255,0.4) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute right-[140px] top-[-20px] h-[260px] w-[300px] rounded-full opacity-40" style={{ background: "radial-gradient(ellipse, rgba(200,230,255,0.35) 0%, transparent 70%)" }} />

      {/* Back button */}
      <button
        type="button"
        onClick={handleAttemptClose}
        className="absolute left-6 top-6 z-10 flex size-[30px] cursor-pointer items-center justify-center rounded-[20px] border border-solid border-[#E9ECF5] bg-white transition-colors hover:bg-[#f8f9fc]"
        aria-label="返回消息"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M6 1L1 6L6 11" stroke="#646B8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {/* White card */}
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px]"
        style={{
          height: "min(70vh, calc(100vh - 64px))",
          maxWidth: "calc(100vw - 64px)",
          aspectRatio: "3 / 2",
          backgroundImage: `url(${cardBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #FFFFFF",
          boxShadow: "0 12px 60px rgba(171, 180, 209, 0.2)",
        }}
      >
        <div className="flex min-h-0 flex-1">
          <div className="h-full w-full">
            {stage === "start" && (
              <div className="relative flex h-full w-full flex-col" style={{ padding: "92px 60px 32px" }}>
                <div className="relative" style={{ maxWidth: "320px" }}>
                  <div
                    className="pointer-events-none absolute"
                    style={{
                      left: "118px",
                      top: "42px",
                      width: "160px",
                      height: "20px",
                      borderRadius: "0px",
                      backgroundColor: "rgba(132,202,255,0.4)",
                    }}
                  />
                  <h2 style={{ fontSize: "40px", lineHeight: "1.5", fontWeight: 700, color: "#101019", position: "relative" }}>
                    学管端使用调研
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#646B8A", marginTop: "8px" }}>
                    预计时长：5～8分钟
                  </p>
                </div>

                <div className="pointer-events-none absolute" style={{ right: "60px", top: "90px", width: "231px", height: "231px", zIndex: 0 }}>
                  <SurveyIllustration />
                </div>

                <div className="relative flex min-h-0 w-full flex-1" style={{ marginTop: "70px", zIndex: 1 }}>
                  <div
                    className="flex w-full flex-1 flex-col items-center justify-center"
                    style={{
                      width: "100%",
                      padding: "24px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      backdropFilter: "blur(40px)",
                      gap: "8px",
                    }}
                  >
                    <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#646B8A", textAlign: "center", fontWeight: 400 }}>
                      欢迎参加本次访谈！我们想了解您使用产品的真实体验。
                      <br />
                      您的反馈将帮助我们改进产品，更好地服务您。
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: 600, lineHeight: "1.5", color: "#444963", textAlign: "center" }}>
                      请放松并真实地分享您的想法。准备好开始了吗？
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex justify-center" style={{ gap: "32px", height: "fit-content", paddingTop: "32px", paddingBottom: "32px" }}>
                  <button
                    type="button"
                    onClick={handleStartInterview}
                    disabled={creatingSession}
                    className="h-[48px] w-[200px] border-none text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      borderRadius: "36px",
                      background: "linear-gradient(to right, #3355FF 1.45%, #4DA6FF 98.55%)",
                    }}
                  >
                    {creatingSession ? "创建中..." : "开始访谈"}
                  </button>
                </div>
              </div>
            )}

            {stage === "interview" && (
              <div className="relative flex h-full flex-col" style={{ padding: "60px 60px 0 60px" }}>
                <div className="min-h-0 flex-1 overflow-y-auto" style={{ height: "fit-content" }}>
                  <InterviewBubble
                    reply={currentAgentMessage.reply}
                    followUp={currentAgentMessage.followUp}
                    key={roundIndex}
                  />
                </div>

                <div className="flex shrink-0 flex-col items-center gap-1" style={{ marginTop: "20px", marginBottom: "20px" }}>
                  {showSharedStatusPanel ? (
                    <>
                      <div className="flex w-full flex-col items-center" style={{ gap: "8px" }}>
                        <div className="flex w-full flex-col items-center justify-center" style={{ height: "161px", gap: "8px" }}>
                          {aiStatus === "replying" ? (
                            <ReadingWaveBars active />
                          ) : (
                            <StatusDotWave status={visualAiStatus} />
                          )}
                          <p style={{ fontSize: "12px", lineHeight: "1.5", color: "#005096", textAlign: "center" }}>
                            {animatedAiStatusText}
                          </p>
                        </div>
                        <div
                          className="relative w-full border border-solid bg-white"
                          style={{ height: "60px", borderColor: "#E9ECF5", borderRadius: "100px", padding: "6px 20px" }}
                        >
                          <input
                            value={inputValue}
                            onChange={(e) => {
                              const next = e.target.value;
                              setInputValue(next);
                              if (aiStatus !== "thinking") {
                                setAiStatus(next.trim() ? "waiting" : "replying");
                              }
                            }}
                            placeholder="请输入..."
                            disabled={aiStatus === "thinking"}
                            className="h-full w-full border-none bg-transparent pr-[110px] outline-none disabled:cursor-not-allowed"
                            style={{ fontSize: "16px", lineHeight: "1.5", color: "#101019" }}
                          />
                          <button
                            type="button"
                            disabled={!inputValue.trim() || aiStatus === "thinking"}
                            onClick={sendTextAnswer}
                            className="absolute right-3 top-1/2 h-[36px] w-[82px] -translate-y-1/2 border-none text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed"
                            style={{
                              fontSize: "14px",
                              fontWeight: 500,
                              borderRadius: "36px",
                              background: "linear-gradient(to right, #3355FF 1.45%, #4DA6FF 98.55%)",
                              opacity: !inputValue.trim() || aiStatus === "thinking" ? 0.3 : 1,
                            }}
                          >
                            发送
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            if (mode === "text") {
                              setMode("voice");
                              setAiStatus("replying");
                            } else {
                              setMode("text");
                              setAiStatus("waiting");
                            }
                          }}
                          className="h-[48px] w-full max-w-[652px] cursor-pointer border-none bg-transparent transition-opacity hover:opacity-70"
                          style={{ fontSize: "12px", fontWeight: 400, color: "#646B8A", borderRadius: "18px" }}
                        >
                          {mode === "text" ? "切换语音录制" : "切换文字输入"}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex w-full flex-col items-center" style={{ gap: "8px" }}>
                        <div className="flex w-full flex-col items-center justify-center" style={{ height: "161px", gap: "8px" }}>
                          <StatusDotWave status={visualAiStatus} />
                          <p style={{ fontSize: "12px", lineHeight: "1.5", color: "#005096", textAlign: "center" }}>
                            {animatedAiStatusText}
                          </p>
                        </div>
                        <div className="flex w-[200px] flex-col items-center" style={{ gap: "4px" }}>
                        <button
                          type="button"
                          onClick={() => {
                            if (isRecording) stopRecording(false);
                            else startRecording();
                          }}
                          disabled={!isRecording && aiStatus !== "waiting"}
                          className="flex h-[48px] w-[200px] items-center justify-center border-none text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            borderRadius: "36px",
                            background: "linear-gradient(to right, #3355FF 1.45%, #4DA6FF 98.55%)",
                            opacity: isRecording || aiStatus === "waiting" ? 1 : 0.35,
                          }}
                        >
                          {isRecording ? (
                            `结束录制 ${formatRecordTime(recordSeconds)}`
                          ) : aiStatus !== "waiting" ? (
                            "处理中"
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <img src={microphoneIconUrl} alt="" width={16} height={16} className="shrink-0" aria-hidden />
                              开始录制
                            </span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setMode("text");
                            setAiStatus("waiting");
                          }}
                          className="h-[48px] w-[200px] cursor-pointer border-none bg-transparent transition-opacity hover:opacity-70"
                          style={{ fontSize: "12px", fontWeight: 400, color: "#646b8a", borderRadius: "18px" }}
                        >
                          切换文字输入
                        </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {stage === "end" && (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div
                  className="flex size-[48px] items-center justify-center rounded-full"
                  style={{ backgroundColor: "#20E315" }}
                  aria-hidden
                >
                  <Check size={24} color="#FFFFFF" strokeWidth={4} />
                </div>
                <h2 style={{ fontSize: "24px", lineHeight: "1.5", fontWeight: 700, color: "#101019" }}>感谢您的宝贵反馈</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#646b8a" }}>
                  您提到的问题我们已记录，如有进展会通知您
                </p>
                <button
                  type="button"
                  onClick={closeFlow}
                  className="mt-3 h-[48px] w-[200px] transition-opacity hover:opacity-95"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "36px",
                    background: "#FFFFFF",
                    color: "#3355FF",
                    border: "1px solid #3355FF",
                  }}
                >
                  结束访谈
                </button>
              </div>
            )}

            {stage === "error" && (
              <div className="flex h-full flex-col items-center justify-center text-center" style={{ gap: "12px" }}>
                <div className="flex flex-col items-center" style={{ gap: "8px" }}>
                  <img
                    src={interviewErrorImg}
                    alt=""
                    style={{ width: "120px", height: "120px", objectFit: "contain" }}
                  />
                  <div className="flex flex-col items-center" style={{ gap: "4px" }}>
                    <p style={{ fontSize: "14px", lineHeight: "1.5", fontWeight: 500, color: "#444963" }}>
                      服务响应异常
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <AlertDialog open={showExitConfirm} onOpenChange={setShowExitConfirm}>
        <AlertDialogContent className="w-[400px] max-w-[calc(100%-2rem)] rounded-[16px] border border-[#E9ECF5] bg-white p-0 shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)]">
          <AlertDialogHeader className="gap-2 px-6 pt-6 text-left">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-full bg-[#FA9524] text-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M7 3V7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="7" cy="10.2" r="0.9" fill="currentColor" />
                </svg>
              </div>
              <AlertDialogTitle className="text-[20px] font-semibold leading-[1.5] text-[#101019]">
                访谈尚未结束，确定要退出吗？
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="pl-8 text-[14px] leading-[1.5] text-[#444963]">
              退出后本次访谈进度不会保留，需要重新开始。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="px-6 pb-5 pt-6 sm:justify-end">
            <AlertDialogCancel className="h-[36px] min-w-[76px] rounded-[18px] border-[#DFE3F0] bg-white px-5 text-[14px] font-medium text-[#444963] hover:bg-white hover:text-[#444963]">
              取消
            </AlertDialogCancel>
            <AlertDialogAction
              className="h-[36px] min-w-[76px] rounded-[18px] bg-[#6574FC] px-5 text-[14px] font-medium text-white hover:bg-[#5B69F8]"
              onClick={closeFlow}
            >
              确认
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

/* ─── 公告列表项 ─── */
function AnnouncementListItem({
  item,
  active,
  onClick,
}: {
  item: Announcement;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full cursor-pointer items-start gap-1 border-none text-left outline-none transition-colors"
      style={{
        padding: "16px 12px 16px 10px",
        borderRadius: active ? "10px" : "0",
        backgroundColor: active ? "#EBF1FF" : "transparent",
      }}
    >
      <div className="flex w-2 shrink-0 flex-col items-center pt-[5px]">
        {item.unread && (
          <span className="block size-2 rounded-full" style={{ backgroundColor: "#FA5A57" }} />
        )}
      </div>
      <p
        className="line-clamp-2 min-w-0 flex-1 overflow-hidden text-ellipsis"
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          fontWeight: active ? 600 : item.unread ? 500 : 400,
          color: active ? "#4A4FED" : item.unread ? "#444963" : "#838BAB",
        }}
      >
        {item.title}
      </p>
    </button>
  );
}

/* ─── 公告详情面板 ─── */
function AnnouncementDetail({ item, onOpenInterview }: { item: Announcement; onOpenInterview: () => void }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-white">
      <div className="px-8 pt-6">
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#101019",
            lineHeight: "1.5",
            marginBottom: "8px",
          }}
        >
          {item.heading}
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#838BAB",
            lineHeight: "1.5",
            marginBottom: "16px",
          }}
        >
          {item.date}
        </p>
        <div style={{ height: "1px", backgroundColor: "#DFE3F0", marginBottom: "24px" }} />
      </div>
      <div className="flex-1 px-8 pb-8">
        {item.content.map((block, i) => {
          if (block.type === "subtitle") {
            return (
              <h3
                key={i}
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#101019",
                  lineHeight: "1.5",
                  marginTop: i > 0 ? "20px" : "0",
                  marginBottom: "8px",
                }}
              >
                {block.text}
              </h3>
            );
          }
          if (block.type === "warning") {
            return (
              <p
                key={i}
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#E0443F",
                  lineHeight: "1.75",
                  marginBottom: "8px",
                }}
              >
                {block.text}
              </p>
            );
          }
          return (
            <p
              key={i}
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333349",
                lineHeight: "1.75",
                marginBottom: "8px",
              }}
            >
              {block.text}
            </p>
          );
        })}
        {item.surveyTitle && (
          <a
            href={`https://survey.xiaolustudy.com/s/a3xK7mQ2/${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              onOpenInterview();
            }}
            className="mt-6 flex w-full max-w-full cursor-pointer items-center gap-3 rounded-[12px] px-4 py-3 no-underline transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#EEF2FF",
              boxShadow: "inset 0 0 0 1px rgba(101, 116, 252, 0.12)",
            }}
          >
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "#6574FC" }}
              aria-hidden
            >
              <FileText className="size-[18px] text-white" strokeWidth={1.75} />
            </span>
            <span
              className="min-w-0 flex-1 text-left"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#5C68F6",
                lineHeight: "1.5",
              }}
            >
              {item.surveyTitle}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── 问题反馈侧栏 ─── */
const FEEDBACK_TYPE_OPTIONS = [
  "板书文字问题",
  "板书花圈问题",
  "字幕问题",
  "老师配音问题",
  "音画不同步",
  "听不懂太难了",
  "讲解超纲",
  "黑屏",
  "播放卡顿",
  "其他",
] as const;

const MAX_IMAGES = 4;
const MAX_DESC_LEN = 2000;
const MIN_DESC_LEN = 10;

function ProblemFeedbackPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSelectedTypes(new Set());
      setDescription("");
      setImages((prev) => {
        prev.forEach((p) => URL.revokeObjectURL(p.url));
        return [];
      });
    }
  }, [open]);

  const toggleType = (label: string) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const onPickFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    const room = MAX_IMAGES - images.length;
    const add = Array.from(files).slice(0, room);
    setImages((prev) => [
      ...prev,
      ...add.map((file) => ({ file, url: URL.createObjectURL(file) })),
    ]);
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const next = [...prev];
      const [removed] = next.splice(index, 1);
      if (removed) URL.revokeObjectURL(removed.url);
      return next;
    });
  };

  const handleSubmit = () => {
    if (selectedTypes.size === 0) {
      showToast("请至少选择一种问题类型", "warning");
      return;
    }
    if (description.trim().length < MIN_DESC_LEN) {
      showToast(`问题描述至少 ${MIN_DESC_LEN} 个字`, "warning");
      return;
    }
    showToast("反馈已提交，感谢您的建议", "success");
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end"
      style={{ backgroundColor: "rgba(16,18,25,0.4)" }}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside
        className="flex h-full w-full max-w-[520px] flex-col bg-background shadow-[-8px_0_32px_rgba(16,18,25,0.12)]"
        role="dialog"
        aria-labelledby="community-feedback-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center gap-2 border-b border-solid border-[#e9ecf5] bg-white px-6 py-4">
          <h2
            id="community-feedback-title"
            className="min-w-0 flex-1"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#101019",
              lineHeight: "1.5",
            }}
          >
            问题反馈
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border-none bg-transparent text-[#646b8a] transition-colors hover:bg-[#f0f2f7]"
            aria-label="关闭"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div
            className="rounded-2xl border border-solid border-[#e9ecf5] bg-white p-5"
            style={{ marginBottom: "16px" }}
          >
            <p
              className="mb-4"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#101019",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: "#e0443f" }}>* </span>
              请选择课程问题类型（可多选）
            </p>
            <div className="grid grid-cols-2 gap-3">
              {FEEDBACK_TYPE_OPTIONS.map((label) => {
                const on = selectedTypes.has(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleType(label)}
                    className="min-h-9 rounded-md border border-solid px-4 py-2 text-center transition-colors"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      borderColor: on ? "#6574fc" : "#cfd5e8",
                      color: on ? "#6574fc" : "#444963",
                      backgroundColor: on ? "rgba(101,116,252,0.08)" : "#fff",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-2xl border border-solid border-[#e9ecf5] bg-white p-5"
            style={{ marginBottom: "16px" }}
          >
            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#101019",
                  lineHeight: "1.5",
                }}
              >
                当前课程内容截图反馈：
              </p>
              <span style={{ fontSize: "14px", color: "#444963" }}>（{images.length}/{MAX_IMAGES}）</span>
            </div>
            <p className="mb-3" style={{ fontSize: "12px", color: "#838bab", lineHeight: "1.5" }}>
              可上传成绩对比、分数公示、课堂照片或备课截图等
            </p>
            <div className="flex flex-wrap gap-3">
              {images.map((img, i) => (
                <div key={img.url} className="relative size-[90px] shrink-0 overflow-hidden rounded-md border border-solid border-[#dfe3f0]">
                  <img src={img.url} alt="" className="size-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute right-1 top-1 flex size-6 items-center justify-center rounded bg-black/50 text-xs text-white"
                    aria-label="删除图片"
                  >
                    ×
                  </button>
                </div>
              ))}
              {images.length < MAX_IMAGES ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex size-[90px] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-[#dfe3f0] bg-white transition-colors hover:bg-[#f8f9fc]"
                >
                  <span className="text-lg leading-none text-[#838bab]">+</span>
                  <span style={{ fontSize: "14px", color: "#838bab" }}>点击传截图</span>
                </button>
              ) : null}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={onPickFiles}
            />
          </div>

          <div className="rounded-2xl border border-solid border-[#e9ecf5] bg-white p-5">
            <p
              className="mb-4"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#101019",
                lineHeight: "1.5",
              }}
            >
              请描述问题
            </p>
            <div className="rounded-md border border-solid border-[#cfd5e8] bg-white">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, MAX_DESC_LEN))}
                placeholder="请输入10个字以上的问题描述，以便我们为您提供更好的帮助"
                rows={5}
                className="w-full resize-none border-none bg-transparent px-3 py-2 outline-none"
                style={{
                  fontSize: "14px",
                  color: "#101019",
                  lineHeight: "1.5",
                }}
              />
              <div className="flex justify-end px-2 pb-2">
                <span style={{ fontSize: "12px", color: "#838bab", fontFeatureSettings: '"lnum", "pnum"' }}>
                  {description.length}/{MAX_DESC_LEN}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-solid border-[#e9ecf5] bg-white px-6 py-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex h-9 w-full cursor-pointer items-center justify-center rounded-[18px] border-none transition-opacity hover:opacity-95"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#fff",
              backgroundColor: "#6574fc",
            }}
          >
            提交反馈
          </button>
        </div>
      </aside>
    </div>
  );
}

/* ─── 主页面 ─── */
export function CommunityPage() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [interviewOpen, setInterviewOpen] = useState(false);
  const closeFeedback = useCallback(() => setFeedbackOpen(false), []);

  const [selectedId, setSelectedId] = useState(ANNOUNCEMENTS[1]?.id ?? ANNOUNCEMENTS[0]?.id ?? "");
  const [readSet, setReadSet] = useState<Set<string>>(() => new Set());

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    setReadSet((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const selectedItem = ANNOUNCEMENTS.find((a) => a.id === selectedId) ?? ANNOUNCEMENTS[0];

  return (
    <div className="flex min-h-0 flex-1 flex-col pb-6">
      <div className="flex shrink-0 items-center justify-between gap-4 pr-6 pb-6 pt-6">
        <h1
          className="shrink-0 whitespace-nowrap"
          style={{
            fontSize: "18px",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "24px",
            color: "var(--page-title-muted)",
          }}
        >
          消息
        </h1>
      </div>

      <div
        className="mr-6 flex min-h-0 flex-1 overflow-hidden pb-4"
        style={{
          boxShadow: "0px 2px 12px 0px rgba(36,41,51,0.04)",
          backgroundColor: "#FFFFFF",
          border: "0.5px solid #E9ECF5",
          borderRadius: "12px",
        }}
      >
        {/* 左侧公告列表 */}
        <div
          className="flex w-[266px] shrink-0 flex-col overflow-y-auto"
          style={{ padding: "12px 20px" }}
        >
          {ANNOUNCEMENTS.map((item, idx) => {
            const isActive = item.id === selectedId;
            const isRead = readSet.has(item.id) || !item.unread;
            const effectiveItem = { ...item, unread: item.unread && !readSet.has(item.id) };
            return (
              <div key={item.id}>
                <AnnouncementListItem
                  item={effectiveItem}
                  active={isActive}
                  onClick={() => handleSelect(item.id)}
                />
                {idx < ANNOUNCEMENTS.length - 1 && !isActive && (
                  <div className="mx-auto" style={{ height: "0.5px", backgroundColor: "#E9ECF5", width: "calc(100% - 12px)" }} />
                )}
              </div>
            );
          })}
        </div>

        {/* 分割线 */}
        <div className="shrink-0 self-stretch" style={{ width: "0.5px", backgroundColor: "#E9ECF5" }} />

        {/* 右侧公告详情 */}
        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">
          {selectedItem && <AnnouncementDetail item={selectedItem} onOpenInterview={() => setInterviewOpen(true)} />}
        </div>
      </div>

      <ProblemFeedbackPanel open={feedbackOpen} onClose={closeFeedback} />
      <AgentInterviewFullScreen open={interviewOpen} onClose={() => setInterviewOpen(false)} />
    </div>
  );
}
