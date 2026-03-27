import { createBrowserRouter, RouterProvider, Outlet, useLocation, Navigate } from "react-router";
import { Suspense } from "react";
import { Sidebar } from "./components/Sidebar";
import BackgroundFrame from "../imports/Frame69";
import { Toaster } from "sonner";
import { LoginPage } from "./pages/LoginPage";

// Route title mapping
const routeTitles: Record<string, string> = {
  "/dashboard": "布置",
  "/dashboard/diagnosis": "诊断管理",
  "/dashboard/onboarding": "试听课管理",
  "/dashboard/task-management": "布置",
  "/dashboard/today-board": "今日看板",
  "/dashboard/supervisor-management": "督学管理",
  "/dashboard/user-info": "用户信息",
  "/dashboard/question-bank": "资源中心",
  "/dashboard/homework-bank": "作业",
  "/dashboard/course-bank": "课程",
  "/dashboard/ai-tools": "智能工具",
  "/dashboard/sop-management": "SOP管理",
  "/dashboard/trial-accounts": "体验账号管理",
  "/dashboard/course-preview": "课程预览",
  "/dashboard/exercise-preview": "练习预览",
};

const LoadingFallback = () => (
  <div className="flex-1 flex items-center justify-center">
    <span
      className="text-muted-foreground"
      style={{
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-regular)",
      }}
    >
      加载中…
    </span>
  </div>
);

function DashboardLayout() {
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || "诊断管理";
  const hideDefaultTitle = location.pathname === "/dashboard/onboarding" || location.pathname === "/dashboard/diagnosis" || location.pathname === "/dashboard" || location.pathname === "/dashboard/question-bank" || location.pathname === "/dashboard/homework-bank" || location.pathname === "/dashboard/course-bank";

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundFrame />
      </div>
      <div className="relative z-10 flex w-full h-full">
      <div className="p-[16px] pb-[16px] pr-0 shrink-0">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col overflow-hidden">
        {!hideDefaultTitle && (
          <div className="px-4 lg:px-6 pt-4 lg:pt-6">
            <h2
              style={{
                fontSize: "var(--text-h3)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--card-foreground)",
              }}
            >
              {pageTitle}
            </h2>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6 flex flex-col">
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      </div>
    </div>
  );
}

function LoginPageWrapper() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <span
            className="text-muted-foreground"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            加载中…
          </span>
        </div>
      }
    >
      <LoginPage />
    </Suspense>
  );
}

const FullPageLoading = (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <span className="text-muted-foreground" style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-regular)" }}>加载中…</span>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    hydrateFallbackElement: <LoadingFallback />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/TaskManagementPage").then(m => ({ Component: m.TaskManagementPage })),
      },
      {
        path: "diagnosis",
        lazy: () => import("./pages/DiagnosisPage").then(m => ({ Component: m.DiagnosisPage })),
      },
      {
        path: "onboarding",
        lazy: () => import("./pages/OnboardingPage").then(m => ({ Component: m.OnboardingPage })),
      },
      {
        path: "trial-accounts",
        lazy: () => import("./pages/TrialAccountsPage").then(m => ({ Component: m.TrialAccountsPage })),
      },
      {
        path: "task-management",
        lazy: () => import("./pages/TaskManagementPage").then(m => ({ Component: m.TaskManagementPage })),
      },
      {
        path: "today-board",
        lazy: () => import("./pages/TodayBoardPage").then(m => ({ Component: m.TodayBoardPage })),
      },
      {
        path: "supervisor-management",
        lazy: () => import("./pages/SupervisorManagementPage").then(m => ({ Component: m.SupervisorManagementPage })),
      },
      {
        path: "user-info",
        lazy: () => import("./pages/UserInfoPage").then(m => ({ Component: m.UserInfoPage })),
      },
      {
        path: "question-bank",
        lazy: () => import("./pages/QuestionBankPage").then(m => ({ Component: m.QuestionBankPage })),
      },
      {
        path: "homework-bank",
        lazy: () => import("./pages/HomeworkBankPage").then(m => ({ Component: m.HomeworkBankPage })),
      },
      {
        path: "course-bank",
        lazy: () => import("./pages/CourseBankPage").then(m => ({ Component: m.CourseBankPage })),
      },
      {
        path: "ai-tools",
        lazy: () => import("./pages/AIToolsPage").then(m => ({ Component: m.AIToolsPage })),
      },
      {
        path: "sop-management",
        lazy: () => import("./pages/SOPManagementPage").then(m => ({ Component: m.SOPManagementPage })),
      },
    ],
  },
  {
    path: "/course-preview",
    lazy: () => import("./pages/CoursePreviewPage").then(m => ({ Component: m.CoursePreviewPage })),
  },
  {
    path: "/exercise-preview",
    lazy: () => import("./pages/ExercisePreviewPage").then(m => ({ Component: m.ExercisePreviewPage })),
  },
  {
    path: "*",
    element: <LoginPageWrapper />,
  },
]);

export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          unstyled: true,
          className: "flex justify-center",
        }}
        style={{ top: 20 }}
      />
      <RouterProvider router={router} />
    </>
  );
}