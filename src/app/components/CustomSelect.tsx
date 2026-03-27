import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "全部",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const selectedLabel =
    options.find((o) => o.value === value)?.label || placeholder;

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-[32px] px-3 bg-input-background border rounded-[6px] focus:outline-none text-left flex items-center justify-between ${isOpen ? 'border-primary' : 'border-border'}`}
        style={{
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-regular)",
          color: value
            ? "var(--card-foreground)"
            : "var(--muted-foreground)",
        }}
      >
        <span className="truncate">{selectedLabel}</span>
        <svg
          className="shrink-0 ml-2 transition-transform duration-200"
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

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute z-50 mt-1 w-full bg-popover flex flex-col gap-[2px] p-[4px] rounded-[12px] max-h-[240px] overflow-y-auto"
          style={{
            boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)",
          }}
        >
          {options.map((option) => {
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
          })}
        </div>
      )}
    </div>
  );
}