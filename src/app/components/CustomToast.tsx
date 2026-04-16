import { toast } from "sonner";
import svgPaths from "../../imports/svg-jmtwf69l42";

/* ─── Icon Components ─── */

/** Colored circle background shared by all icon types */
function CircleBg({ color }: { color: string }) {
  return (
    <svg
      className="absolute block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18.3333 18.3333"
    >
      <path d={svgPaths.p18ba9d00} fill={color} />
    </svg>
  );
}

/** Success icon: green circle + white checkmark */
function SuccessIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[4.17%]">
        <CircleBg color="#4DE03F" />
      </div>
      <div className="absolute inset-[34.31%_26.31%_28.19%_28.84%]">
        <div className="absolute inset-[0_0_6.48%_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8.97147 7.01385"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p121a580}
              fill="white"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Error icon: red circle + white X */
function ErrorIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[4.17%]">
        <CircleBg color="#F55656" />
      </div>
      <svg
        className="absolute"
        style={{ top: "30%", left: "30%", width: "40%", height: "40%" }}
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M2 2L8 8M8 2L2 8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/** Info icon: blue circle + white "i" */
function InfoIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[4.17%]">
        <CircleBg color="#5B8DEF" />
      </div>
      <svg
        className="absolute"
        style={{ top: "22%", left: "22%", width: "56%", height: "56%" }}
        viewBox="0 0 10 10"
        fill="none"
      >
        <circle cx="5" cy="2.2" r="1" fill="white" />
        <rect x="4" y="4.2" width="2" height="4.5" rx="1" fill="white" />
      </svg>
    </div>
  );
}

/** Warning icon: orange circle + white "!" */
function WarningIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[4.17%]">
        <CircleBg color="#FAAD14" />
      </div>
      <svg
        className="absolute"
        style={{ top: "22%", left: "22%", width: "56%", height: "56%" }}
        viewBox="0 0 10 10"
        fill="none"
      >
        <rect x="4" y="1.5" width="2" height="4.5" rx="1" fill="white" />
        <circle cx="5" cy="8" r="1" fill="white" />
      </svg>
    </div>
  );
}

/* ─── Toast Container ─── */

function ToastContent({
  message,
  icon,
}: {
  message: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-[rgba(16,16,25,0.7)] flex gap-[4px] items-center px-[10px] py-[8px] rounded-[24px]">
      {icon}
      <p
        className="whitespace-nowrap text-white"
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "14px",
          lineHeight: 1.5,
          fontWeight: "var(--font-weight-regular)",
        }}
      >
        {message}
      </p>
    </div>
  );
}

/* ─── Public API ─── */

const DURATION = 2000;
const TOAST_SINGLETON_ID = "global-custom-toast";
let toastDismissTimer: ReturnType<typeof window.setTimeout> | null = null;

type ToastType = "success" | "error" | "info" | "warning" | "default";

const iconMap: Record<ToastType, React.ReactNode | null> = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  default: null,
};

export function showToast(message: string, type: ToastType = "default") {
  const icon = iconMap[type] ?? null;
  toast.dismiss(TOAST_SINGLETON_ID);
  if (toastDismissTimer) {
    window.clearTimeout(toastDismissTimer);
    toastDismissTimer = null;
  }

  const toastId = toast.custom(
    () => <ToastContent message={message} icon={icon} />,
    {
      id: TOAST_SINGLETON_ID,
      duration: DURATION,
    }
  );

  toastDismissTimer = window.setTimeout(() => {
    toast.dismiss(TOAST_SINGLETON_ID);
    toastDismissTimer = null;
  }, DURATION);

  return toastId;
}