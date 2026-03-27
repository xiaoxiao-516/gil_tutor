import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { Checkbox } from "../components/ui/checkbox";
import { showToast } from "../components/CustomToast";
import svgPaths from "../../imports/svg-fip8jemehj";

/* ─── Decorative arc SVG ─── */
function DecoArc() {
  return (
    <svg
      width="267"
      height="395"
      viewBox="0 0 267 394.827"
      fill="none"
      className="block"
    >
      <path
        d={svgPaths.p2c4e6500}
        stroke="var(--primary)"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
    </svg>
  );
}

export function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const isPhoneValid = /^1\d{10}$/.test(phone);
  const canSubmit = phone.trim() && verifyCode.trim() && agreed;

  const handleSendCode = useCallback(() => {
    if (!phone.trim()) {
      showToast("请先输入手机号", "warning");
      return;
    }
    if (phone.length > 11 || (phone.length === 11 && !isPhoneValid)) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    setCountdown(60);
    showToast("验证码已发送", "success");
  }, [phone, isPhoneValid]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      showToast("请同意《用户协议》和《隐私政策》", "info");
      return;
    }
    if (!phone.trim() || !verifyCode.trim()) {
      showToast("请输入手机号和验证码", "warning");
      return;
    }
    localStorage.setItem("currentUser", phone);
    navigate("/dashboard");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setPhone(val);
    if (phoneError) setPhoneError(false);
  };

  const clearPhone = () => {
    setPhone("");
    setPhoneError(false);
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#EBF1FF", fontFamily: "var(--font-family-base)" }}
    >
      {/* Background decorative arcs */}
      <div
        className="absolute opacity-60"
        style={{ left: "-130px", top: "147px", transform: "rotate(95deg)" }}
      >
        <DecoArc />
      </div>
      <div
        className="absolute opacity-40"
        style={{ left: "574px", top: "325px", transform: "rotate(-13deg)" }}
      >
        <DecoArc />
      </div>

      {/* Centered frosted-glass card */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{
          padding: "49px",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(5px)",
          border: "1px solid white",
        }}
      >
        <div className="flex flex-col gap-[50px] items-start" style={{ width: 320 }}>
          {/* Logo + Title */}
          <div className="flex items-center justify-center gap-[12px] px-[12px] w-full">
            <div
              className="shrink-0 flex items-center justify-center"
              style={{
                width: 28,
                height: 28,
                borderRadius: 28,
                backgroundColor: "#767BF1",
                opacity: 0.7,
              }}
            >
              <span
                className="text-white whitespace-nowrap"
                style={{
                  fontSize: 10,
                  fontFamily: "var(--font-family-base)",
                }}
              >
                LOGO
              </span>
            </div>
            <span
              className="whitespace-nowrap"
              style={{
                fontSize: 24,
                fontWeight: "var(--font-weight-semibold)",
                color: "#101019",
                letterSpacing: "1.08px",
              }}
            >
              学管平台
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full" style={{ gap: 0 }}>
            {/* Phone input */}
            <div className="flex flex-col gap-[8px] w-full">
              <label
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "#444963",
                  lineHeight: "21px",
                }}
              >
                手机号
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={11}
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="请输入手机号"
                  className="w-full bg-white px-[12px] outline-none transition-colors"
                  style={{
                    height: 45,
                    borderRadius: "8px",
                    border: phoneError ? "1px solid #F55656" : "1px solid #CFD5E8",
                    fontSize: "var(--text-sm)",
                    color: "var(--foreground)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                  onFocus={(e) => {
                    if (!phoneError) e.currentTarget.style.border = "1px solid var(--primary)";
                  }}
                  onBlur={(e) => {
                    if (!phoneError) e.currentTarget.style.border = "1px solid #CFD5E8";
                  }}
                />
                {phone && (
                  <button
                    type="button"
                    onClick={clearPhone}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center justify-center size-[20px] cursor-pointer bg-transparent border-none"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="#CFD5E8" />
                      <path d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Verification code */}
            <div className="flex flex-col gap-[8px] w-full mt-[16px]">
              <label
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "#444963",
                  lineHeight: "21px",
                }}
              >
                验证码
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value.replace(/\D/g, ""))}
                  placeholder="请输入验证码"
                  className="w-full bg-white px-[12px] outline-none transition-colors"
                  style={{
                    height: 45,
                    borderRadius: "8px",
                    border: "1px solid #CFD5E8",
                    fontSize: "var(--text-sm)",
                    color: "var(--foreground)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.border = "1px solid var(--primary)"; }}
                  onBlur={(e) => { e.currentTarget.style.border = "1px solid #CFD5E8"; }}
                />
                {/* Divider line */}
                <div
                  className="absolute"
                  style={{
                    left: 236,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 0,
                    height: 14,
                    borderLeft: "1px solid #E9ECF5",
                  }}
                />
                <button
                  type="button"
                  onClick={handleSendCode}
                  disabled={countdown > 0}
                  className="absolute right-0 top-0 h-full flex items-center justify-center cursor-pointer disabled:cursor-default bg-transparent border-none"
                  style={{
                    width: 84,
                    borderRadius: "0 var(--radius) var(--radius) 0",
                    fontSize: "var(--text-xs)",
                    color: countdown > 0 ? "var(--muted-foreground)" : "var(--sidebar-primary)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  {countdown > 0 ? `${countdown}s` : "获取验证码"}
                </button>
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-center gap-[4px] mt-[16px]">
              <Checkbox
                id="agreement"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(!!checked)}
                className="size-[14px] rounded-[3px]"
              />
              <label
                htmlFor="agreement"
                className="cursor-pointer"
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                <span style={{ color: "#202224" }}>我已知晓并同意</span>
                <span style={{ color: "var(--sidebar-primary)" }}>《用户协议》</span>
                <span style={{ color: "#202224" }}>和</span>
                <span style={{ color: "var(--sidebar-primary)" }}>《隐私政策》</span>
              </label>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center cursor-pointer mt-[32px]"
              style={{
                height: 48,
                borderRadius: "8px",
                backgroundColor: canSubmit ? "var(--primary)" : "#BBCBFC",
                fontSize: 20,
                color: "white",
                fontWeight: "var(--font-weight-semibold)",
                letterSpacing: "6px",
                border: "none",
                lineHeight: "30px",
              }}
            >
              登 录
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}