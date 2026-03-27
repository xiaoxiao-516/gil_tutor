import imgAvatar from "figma:asset/ff375aa93bf8927b36c352c6491a06bc6ed7e493.png";
import image_8e70990d from "figma:asset/8e70990d6104e43028f05c9340c57c6d1586c867.png";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/svg-7ibfcnakl0";
import svgIcLesson from "../../imports/svg-31opha56kx";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface ModuleGroup {
  title: string;
  items: NavItem[];
}

// Icons from Figma SVG paths
function DiagnosisIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p125fe300} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p3b050570} stroke={color} strokeWidth="1.2" />
        <path d="M12 12.6667L13.6667 14" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p3b0e00} fill={color} opacity="0.4" />
      </svg>
    </div>
  );
}

function IcLessonIcon({ active }: { active: boolean }) {
  const color = active ? "var(--sidebar-primary)" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgIcLesson.p15bf1f72} fill={color} opacity="0.5" stroke={color} />
        <path d={svgIcLesson.p202a0f00} fill={color} />
      </svg>
    </div>
  );
}

function TrialAccountIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p1490be40} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p1543d380} opacity="0.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function AssignIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p386b8b00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p22f79f00} fill={color} opacity="0.5" />
        <path d={svgPaths.p9a1b880} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function StudentIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p1967df00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p1914900} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p138bd980} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p11806f00} fill={color} opacity="0.5" />
        <path d={svgPaths.p1e903800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function UserInfoIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p212e3f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p1b134200} fill={color} opacity="0.5" stroke={color} />
        <path d="M5 4.66667H10.3333" stroke={color} strokeLinecap="round" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function TeacherIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p28f79080} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p2cc7f500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d={svgPaths.p84e4b00} fill={color} opacity="0.5" />
      </svg>
    </div>
  );
}

function ResourceIcon({ active }: { active: boolean }) {
  const color = active ? "#4A4FED" : "#777D98";
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p236c340} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d="M7 5H13V8H6L7 5Z" fill={color} opacity="0.5" />
      </svg>
    </div>
  );
}

const modules: ModuleGroup[] = [
  {
    title: "体验管理",
    items: [
      { label: "诊断管理", path: "/dashboard/diagnosis", icon: <DiagnosisIcon active={false} /> },
      { label: "试听课管理", path: "/dashboard/onboarding", icon: <IcLessonIcon active={false} /> },
      { label: "体验账号管理", path: "/dashboard/trial-accounts", icon: <TrialAccountIcon active={false} /> },
    ],
  },
  {
    title: "督学管理",
    items: [
      { label: "布置", path: "/dashboard/task-management", icon: <AssignIcon active={false} /> },
      { label: "学员管理", path: "/dashboard/today-board", icon: <StudentIcon active={false} /> },
    ],
  },
  {
    title: "人员管理",
    items: [
      { label: "用户信息", path: "/dashboard/user-info", icon: <UserInfoIcon active={false} /> },
      { label: "老师管理", path: "/dashboard/supervisor-management", icon: <TeacherIcon active={false} /> },
    ],
  },
  {
    title: "资源",
    items: [
      { label: "资源中心", path: "/dashboard/question-bank", icon: <ResourceIcon active={false} /> },
    ],
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState("陈子涵老师");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user && user.length > 1) setCurrentUser(user);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setMenuOpen(false);
    navigate("/");
  };

  const handleMenuItemClick = (item: string) => {
    if (item === "退出登录") handleLogout();
    else { setActiveMenuItem(item); setMenuOpen(false); }
  };

  const menuItems = [
    { label: "用户反馈", color: "var(--card-foreground)" },
    { label: "关于", color: "var(--card-foreground)" },
    { label: "退出登录", color: "#e0443f" },
  ];

  const isActive = (path: string) =>
    location.pathname === path ||
    (path === "/dashboard/diagnosis" && location.pathname === "/dashboard");

  return (
    <aside
      className="bg-[rgba(255,255,255,0.8)] border border-white rounded-[20px] overflow-hidden relative shrink-0 flex flex-col h-full"
      style={{
        width: "200px",
        boxShadow: "0px 18px 40px 0px rgba(112,144,176,0.1)",
      }}
    >
      {/* Logo header */}
      <div className="flex items-center justify-center gap-[12px] px-[12px] py-[16px] h-[68px] shrink-0">
        <div className="relative shrink-0 size-[28px]">
          <div className="absolute bg-[#767bf1] left-0 opacity-70 rounded-[28px] size-[28px] top-0" />
          <p
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white"
            style={{ fontSize: "10px", fontWeight: "var(--font-weight-regular)" }}
          >
            LOGO
          </p>
        </div>
        <p
          className="whitespace-nowrap tracking-[1.08px]"
          style={{
            fontSize: "20px",
            fontWeight: "var(--font-weight-regular)",
            color: "#646b8a",
          }}
        >
          学管平台
        </p>
      </div>

      {/* Divider */}
      <div className="relative w-[188px] mx-auto h-0 shrink-0">
        <svg className="block w-full h-[1px]" fill="none" viewBox="0 0 188 1">
          <path d="M0 0.5H188" stroke="url(#sidebarDivider)" />
          <defs>
            <linearGradient id="sidebarDivider" x1="0" x2="188" y1="1" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E9ECF5" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E9ECF5" />
              <stop offset="1" stopColor="#E9ECF5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="flex-1 min-h-0 overflow-y-auto scrollbar-thin px-[20px] pt-[16px]">
        <div className="flex flex-col gap-[24px]">
          {modules.map((group) => (
            <div key={group.title} className="flex flex-col gap-[2px]">
              {/* Section title */}
              <div className="px-[12px] py-[4px]">
                <p
                  className="whitespace-nowrap"
                  style={{
                    fontSize: "10px",
                    fontWeight: "var(--font-weight-regular)",
                    color: "#777d98",
                    lineHeight: "1.5",
                  }}
                >
                  {group.title}
                </p>
              </div>
              {/* Items */}
              {group.items.map((item) => {
                const active = isActive(item.path);
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`w-full h-[40px] flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] transition-colors cursor-pointer ${
                      active
                        ? "bg-gradient-to-r from-[#f0f4ff] to-[#e6edff]"
                        : "hover:bg-[rgba(240,244,255,0.5)]"
                    }`}
                  >
                    {/* Render active icon for diagnosis when active */}
                    {item.label === "诊断管理" ? (
                      <DiagnosisIcon active={active} />
                    ) : item.label === "试听课管理" ? (
                      <IcLessonIcon active={active} />
                    ) : item.label === "布置" ? (
                      <AssignIcon active={active} />
                    ) : item.label === "体验账号管理" ? (
                      <TrialAccountIcon active={active} />
                    ) : item.label === "学员管理" ? (
                      <StudentIcon active={active} />
                    ) : item.label === "用户信息" ? (
                      <UserInfoIcon active={active} />
                    ) : item.label === "老师管理" ? (
                      <TeacherIcon active={active} />
                    ) : item.label === "资源中心" ? (
                      <ResourceIcon active={active} />
                    ) : (
                      item.icon
                    )}
                    <span
                      className="whitespace-nowrap"
                      style={{
                        fontSize: "14px",
                        fontWeight: active
                          ? "var(--font-weight-semibold)"
                          : "var(--font-weight-regular)",
                        color: active ? "#4a4fed" : "#777d98",
                        lineHeight: "1.75",
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom user section */}
      <div className="shrink-0 px-[12px] pb-[16px] pt-[8px] relative" ref={menuRef}>
        {/* Dropdown menu */}
        {menuOpen && (
          <div
            className="absolute bottom-full left-[12px] mb-[8px] w-[176px] bg-popover flex flex-col gap-[2px] p-[4px] rounded-[12px] z-50"
            style={{ boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)" }}
          >
            {menuItems.map((item) => {
              const isMenuActive = activeMenuItem === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleMenuItemClick(item.label)}
                  className={`w-full text-left transition-colors rounded-[10px] cursor-pointer ${
                    isMenuActive ? "bg-sidebar" : "bg-popover hover:bg-[rgba(235,241,255,0.5)]"
                  }`}
                  style={{
                    height: 44,
                    padding: "0 16px",
                    fontSize: "14px",
                    fontWeight: isMenuActive ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                    color: isMenuActive ? "var(--sidebar-primary)" : item.color,
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {/* User avatar */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-[176px] flex items-center gap-[8px] p-[8px] cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="relative rounded-[32px] shrink-0 size-[32px]">
            <div className="absolute bg-gradient-to-b from-[#ecf0fc] to-[rgba(236,240,252,0.5)] inset-0 rounded-[32px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[32px]">
              <img
                alt="avatar"
                className="absolute h-[132.74%] left-0 max-w-none top-[1.49%] w-full"
                src={imgAvatar}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center whitespace-nowrap">
            <span
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-medium)",
                color: "#101019",
                lineHeight: "21px",
              }}
            >
              {currentUser}
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "var(--font-weight-regular)",
                color: "#838bab",
                lineHeight: "15px",
              }}
            >
              教师 ID: 135121
            </span>
          </div>
        </button>
      </div>
    </aside>
  );
}