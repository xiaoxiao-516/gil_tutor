import { useState, useRef, useEffect, useLayoutEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  /** 为 true 时将下拉挂到 document.body，避免被 overflow 或兄弟节点遮挡（如弹窗内） */
  menuInPortal?: boolean;
  /** md=40px 高（默认），sm=32px 高（布置页顶栏、弹窗等） */
  size?: "md" | "sm";
  /** default=白底描边；canvas=#F4F7FE 无描边（布置页学生/学科）；plain=白底无描边（渐变条内时长） */
  tone?: "default" | "canvas" | "plain";
  leadingIcon?: ReactNode;
  /**
   * 选中文本后的补充文案，仍在按钮/筛选框内（不覆盖 value，不写入 options 的 value）
   * 如学科后「（未排课）」
   */
  valueSuffix?: ReactNode;
}

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "全部",
  menuInPortal = false,
  size = "md",
  tone = "default",
  leadingIcon,
  valueSuffix,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuRect, setMenuRect] = useState({ top: 0, left: 0, width: 0 });

  useLayoutEffect(() => {
    if (!isOpen || !menuInPortal) return;
    const update = () => {
      if (!buttonRef.current) return;
      const r = buttonRef.current.getBoundingClientRect();
      setMenuRect({ top: r.bottom + 4, left: r.left, width: r.width });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [isOpen, menuInPortal]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (containerRef.current?.contains(t)) return;
      if (menuRef.current?.contains(t)) return;
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const selectedLabel =
    options.find((o) => o.value === value)?.label || placeholder;

  const heightClass = size === "sm" ? "h-8 min-h-[32px]" : "h-10 min-h-[40px]";
  const toneClasses =
    tone === "canvas"
      ? "bg-[#f4f7fe] border border-transparent"
      : tone === "plain"
        ? "bg-white border border-transparent"
        : "bg-input-background border";
  const openBorderStyle =
    tone === "default"
      ? { borderColor: isOpen ? "var(--primary)" : "var(--input-border-soft)" }
      : { borderColor: isOpen ? "var(--primary)" : "transparent" };

  const menuClassName =
    "bg-popover flex flex-col gap-[2px] p-[4px] rounded-[12px] max-h-[240px] overflow-y-auto";

  const menuStyle = {
    boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)",
  } as const;

  const renderOptions = () =>
    options.map((option) => {
      const isActive = option.value === value;
      return (
        <button
          key={option.value}
          type="button"
          onClick={() => {
            onChange(option.value);
            setIsOpen(false);
          }}
          className={`w-full text-left transition-colors flex items-center ${
            isActive
              ? "bg-sidebar rounded-[10px]"
              : "bg-popover rounded-[10px] hover:bg-[rgba(235,241,255,0.5)]"
          }`}
          style={{
            padding: "12px 16px",
            color: isActive
              ? "var(--sidebar-primary)"
              : "var(--popover-foreground)",
            fontSize: "var(--text-base)",
            fontWeight: isActive
              ? "var(--font-weight-medium)"
              : "var(--font-weight-regular)",
          }}
        >
          {option.label}
        </button>
      );
    });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${heightClass} px-3 rounded-[8px] border border-solid focus:outline-none text-left flex items-center justify-between gap-2 ${toneClasses}`}
        style={{
          fontSize: size === "sm" ? "14px" : "var(--text-base)",
          fontWeight: "var(--font-weight-regular)",
          color: value
            ? "var(--card-foreground)"
            : "var(--muted-foreground)",
          ...openBorderStyle,
        }}
      >
        <span className="flex min-w-0 flex-1 items-center gap-1">
          {leadingIcon ? (
            <span className="inline-flex shrink-0 items-center justify-center">{leadingIcon}</span>
          ) : null}
          {valueSuffix ? (
            <span className="flex min-w-0 flex-1 items-center gap-0 overflow-hidden">
              <span className="min-w-0 flex-1 truncate text-left">{selectedLabel}</span>
              <span
                className="shrink-0"
                style={{
                  fontSize: size === "sm" ? 14 : undefined,
                  color: "var(--muted-foreground)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                {valueSuffix}
              </span>
            </span>
          ) : (
            <span className="truncate">{selectedLabel}</span>
          )}
        </span>
        <svg
          className="shrink-0 transition-transform duration-200"
          style={{
            width: 12,
            height: 12,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          viewBox="0 0 9.2 4.4"
          fill="none"
        >
          <path
            clipRule="evenodd"
            d="M0.137997 0.253731C0.360319 -0.0325095 0.772591 -0.0843245 1.05883 0.137998L4.59925 2.88784L8.13967 0.137998C8.42591 -0.0843249 8.83818 -0.0325099 9.0605 0.25373C9.28282 0.53997 9.23101 0.952241 8.94477 1.17456L5.0018 4.23706C4.76496 4.42102 4.43354 4.42102 4.1967 4.23706L0.25373 1.17456C-0.0325095 0.952242 -0.084325 0.539971 0.137997 0.253731Z"
            fill="var(--muted-foreground)"
            fillRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && !menuInPortal && (
        <div
          className={`absolute z-50 mt-1 w-full ${menuClassName}`}
          style={menuStyle}
        >
          {renderOptions()}
        </div>
      )}

      {isOpen &&
        menuInPortal &&
        createPortal(
          <div
            ref={menuRef}
            className={`fixed z-[10050] ${menuClassName}`}
            style={{
              ...menuStyle,
              top: menuRect.top,
              left: menuRect.left,
              width: menuRect.width,
            }}
          >
            {renderOptions()}
          </div>,
          document.body
        )}
    </div>
  );
}
