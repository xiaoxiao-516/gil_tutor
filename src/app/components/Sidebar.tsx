import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  FileSearch,
  FolderOpen,
  GraduationCap,
  PlayCircle,
  UserCircle,
  UserRound,
  Users,
} from "lucide-react";

import teacherAvatarImg from "@/assets/images/teacher-avatar.jpg";


interface NavItem {
  label: string;
  path: string;
}

interface ModuleGroup {
  title: string;
  items: NavItem[];
}

/** 与 Figma 学管侧栏（node 624:7071）一致：16×16 线型图标槽 */
const NAV_ICON_MAP: Record<string, LucideIcon> = {
  诊断管理: FileSearch,
  试听课管理: PlayCircle,
  体验账号管理: UserRound,
  布置: ClipboardList,
  学员管理: Users,
  用户信息: UserCircle,
  老师管理: GraduationCap,
  公共资源: FolderOpen,
};

function AnnouncementIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
      <rect x="1.75" y="3.75" width="15.5" height="12.5" rx="2.25" stroke={color} strokeWidth="1.5" />
      <path d="M5 7L8.27212 9.54498C8.99434 10.1067 10.0057 10.1067 10.7279 9.54498L14 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function NavItemIcon({ label, active }: { label: string; active: boolean }) {
  const color = active ? "var(--sidebar-primary)" : "var(--sidebar-foreground)";
  if (label === "消息") return <AnnouncementIcon color={color} />;
  const Icon = NAV_ICON_MAP[label];
  if (!Icon) return <span className="inline-block size-4 shrink-0" />;
  return (
    <Icon
      className="shrink-0"
      size={16}
      strokeWidth={active ? 2.25 : 2}
      color={color}
      aria-hidden
    />
  );
}

const modules: ModuleGroup[] = [
  {
    title: "体验管理",
    items: [
      { label: "诊断管理", path: "/dashboard/diagnosis" },
      { label: "试听课管理", path: "/dashboard/onboarding" },
      { label: "体验账号管理", path: "/dashboard/trial-accounts" },
    ],
  },
  {
    title: "督学管理",
    items: [
      { label: "布置", path: "/dashboard/task-management" },
      { label: "学员管理", path: "/dashboard/today-board" },
    ],
  },
  {
    title: "人员管理",
    items: [
      { label: "用户信息", path: "/dashboard/user-info" },
      { label: "老师管理", path: "/dashboard/supervisor-management" },
    ],
  },
  {
    title: "资源",
    items: [
      { label: "公共资源", path: "/dashboard/question-bank" },
      { label: "消息", path: "/dashboard/community" },
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
    else {
      setActiveMenuItem(item);
      setMenuOpen(false);
    }
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
      className="relative flex h-full shrink-0 flex-col overflow-hidden bg-[#F5F7FA]"
      style={{ width: "200px" }}
    >
      {/* Logo header */}
      <div className="mt-[12px] flex h-[48px] shrink-0 items-center gap-[8px] px-6">
        <div className="relative size-[28px] shrink-0">
          <div className="absolute inset-0 size-[28px] rounded-[28px] bg-[#3e88ff]" />
          <p
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white"
            style={{ fontSize: "10px", fontWeight: 400 }}
          >
            LOGO
          </p>
        </div>
        <p
          className="-skew-x-[4deg] whitespace-nowrap tracking-[1.08px]"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#101019",
            lineHeight: "27px",
          }}
        >
          小鹿爱学
        </p>
      </div>

      <div className="relative mx-6 h-0 shrink-0">
        <svg className="block h-[1px] w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1">
          <path d="M0 0.5H160" stroke="url(#sidebarDivider)" />
          <defs>
            <linearGradient id="sidebarDivider" x1="0" x2="160" y1="1" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E9ECF5" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E9ECF5" />
              <stop offset="1" stopColor="#E9ECF5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Figma：模块间距 24px；组内标题与列表 gap 2px；菜单项之间 gap 4px */}
      <nav className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-6 pt-[12px]">
        <div className="mx-auto flex w-full min-w-0 flex-col gap-6">
          {modules.map((group) => (
            <div key={group.title} className="flex flex-col gap-[2px]">
              <div className="px-3 py-1">
                <p
                  className="whitespace-nowrap"
                  style={{
                    fontSize: "10px",
                    fontWeight: 300,
                    color: "var(--sidebar-foreground)",
                    lineHeight: "1.5",
                  }}
                >
                  {group.title}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => navigate(item.path)}
                      className={`flex h-9 w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
                        active
                          ? "bg-gradient-to-r from-[#dce8fd] to-[rgba(220,232,253,0.7)]"
                          : "hover:bg-[rgba(240,244,255,0.5)]"
                      }`}
                    >
                      <NavItemIcon label={item.label} active={active} />
                      <span
                        className="whitespace-nowrap"
                        style={{
                          fontSize: "14px",
                          fontWeight: active ? 600 : 400,
                          color: active ? "var(--sidebar-primary)" : "var(--sidebar-foreground)",
                          lineHeight: active ? "1.5" : "1.75",
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="relative shrink-0 px-6 pb-6 pt-2" ref={menuRef}>
        {menuOpen && (
          <div
            className="absolute bottom-full left-6 right-6 z-50 mb-2 flex w-auto flex-col gap-0.5 rounded-xl bg-popover p-1"
            style={{ boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)" }}
          >
            {menuItems.map((item) => {
              const isMenuActive = activeMenuItem === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleMenuItemClick(item.label)}
                  className={`w-full cursor-pointer rounded-[10px] text-left transition-colors ${
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

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex w-full min-w-0 cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "rgba(255,255,255,0.4)", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.03)" }}
        >
          <div className="relative size-9 shrink-0 overflow-hidden rounded-full bg-gradient-to-b from-[#ecf0fc] to-[rgba(236,240,252,0.5)]">
            <img alt="陈子涵老师" className="size-full object-cover object-center" src={teacherAvatarImg} />
          </div>
          <div className="flex flex-col items-start whitespace-nowrap">
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#101019",
                lineHeight: "21px",
              }}
            >
              {currentUser}
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 400,
                color: "#838bab",
                lineHeight: "15px",
              }}
            >
              ID: 1351213444
            </span>
          </div>
        </button>
      </div>
    </aside>
  );
}
