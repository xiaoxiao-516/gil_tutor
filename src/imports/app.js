const subtabMeta = {
  diagnosis: { main: "体验", label: "诊断管理" },
  onboarding: { main: "体验", label: "新课建档" },
  taskMgmt: { main: "督学", label: "任务管理" },
  todayBoard: { main: "督学", label: "今日看板" },
  supervisorMgmt: { main: "管理", label: "督学管理" },
  userInfo: { main: "管理", label: "用户信息" },
  stageInsight: { main: "管理", label: "阶段学情" },
  questionBank: { main: "资源", label: "题库" },
  aiTools: { main: "资源", label: "智能工具" },
  sopMgmt: { main: "资源", label: "SOP管理" }
};

const loginPage = document.getElementById("loginPage");
const appPage = document.getElementById("appPage");
const loginForm = document.getElementById("loginForm");
const sendCodeBtn = document.getElementById("sendCodeBtn");
const logoutBtn = document.getElementById("logoutBtn");
const currentUser = document.getElementById("currentUser");
const moduleNav = document.getElementById("moduleNav");
const pageTitle = document.getElementById("pageTitle");
const pageDesc = document.getElementById("pageDesc");

const diagnosisTableBody = document.getElementById("diagnosisTableBody");
const openCreateEvalBtn = document.getElementById("openCreateEvalBtn");
const diagnosisModal = document.getElementById("diagnosisModal");
const closeDiagnosisModalMask = document.getElementById("closeDiagnosisModalMask");
const closeDiagnosisModalBtn = document.getElementById("closeDiagnosisModalBtn");
const generateDiagnosisLinkBtn = document.getElementById("generateDiagnosisLinkBtn");
const copyDiagnosisLinkBtn = document.getElementById("copyDiagnosisLinkBtn");
const generatedDiagnosisLink = document.getElementById("generatedDiagnosisLink");
const diagGrade = document.getElementById("diagGrade");
const diagSubject = document.getElementById("diagSubject");
const diagChapter = document.getElementById("diagChapter");
const diagType = document.getElementById("diagType");
const searchName = document.getElementById("searchName");
const searchSubject = document.getElementById("searchSubject");
const searchPeriod = document.getElementById("searchPeriod");
const searchResult = document.getElementById("searchResult");
const runSearchBtn = document.getElementById("runSearchBtn");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const pageInfo = document.getElementById("pageInfo");

const chapterTooltip = document.getElementById("chapterTooltip");
const urlPopover = document.getElementById("urlPopover");
const urlPopoverText = document.getElementById("urlPopoverText");
const urlPopoverMeta = document.getElementById("urlPopoverMeta");
const copyUrlPopoverBtn = document.getElementById("copyUrlPopoverBtn");
const openUrlPopoverBtn = document.getElementById("openUrlPopoverBtn");
const deleteUrlPopoverBtn = document.getElementById("deleteUrlPopoverBtn");
const createSupervisorBtn = document.getElementById("createSupervisorBtn");
const supervisorTableBody = document.getElementById("supervisorTableBody");
const userInfoTableBody = document.getElementById("userInfoTableBody");
const userSearchName = document.getElementById("userSearchName");
const userSearchStage = document.getElementById("userSearchStage");
const userSearchTeacher = document.getElementById("userSearchTeacher");
const runUserSearchBtn = document.getElementById("runUserSearchBtn");
const resetUserSearchBtn = document.getElementById("resetUserSearchBtn");
const userInfoPrevPageBtn = document.getElementById("userInfoPrevPageBtn");
const userInfoNextPageBtn = document.getElementById("userInfoNextPageBtn");
const userInfoPageInfo = document.getElementById("userInfoPageInfo");
const studentPicker = document.getElementById("studentPicker");
const taskDate = document.getElementById("taskDate");
const taskStartTime = document.getElementById("taskStartTime");
const taskEndTime = document.getElementById("taskEndTime");
const matchTasksBtn = document.getElementById("matchTasksBtn");
const taskPlanList = document.getElementById("taskPlanList");
const taskMatchSummary = document.getElementById("taskMatchSummary");
const publishTaskBtn = document.getElementById("publishTaskBtn");

const PAGE_SIZE = 15;
const USER_INFO_PAGE_SIZE = 6;
const URL_VALID_DAYS = 3;
let currentPage = 1;
let filteredRows = [];
let userInfoCurrentPage = 1;
let userInfoFilteredRows = [];

const subjects = ["英语", "数学", "物理"];
const grades = ["初一", "初二", "初三", "高一", "高二", "高三"];
const creators = ["李小明老师", "王晓彤老师", "陈子涵老师", "周嘉宁老师", "赵一帆老师"];
const chapters = [
  { short: "函数专题", detail: "人教版 必修一 · 函数专题 · 基础诊断包A" },
  { short: "阅读理解", detail: "人教版 必修一 · 阅读理解专项 · 进阶包B" },
  { short: "电学综合", detail: "人教版 必修二 · 电学综合 · 综合诊断包C" },
  { short: "文言文", detail: "人教版 必修一 · 文言文专项 · 文本理解包A" },
  { short: "几何证明", detail: "人教版 选择性必修一 · 几何证明 · 证明链路包" },
  { short: "力学基础", detail: "人教版 必修二 · 力学基础 · 受力分析包A" }
];
const statuses = ["未开始", "进行中", "已完成"];
const studentNames = [
  "张子涵", "李雨桐", "王梓轩", "赵佳宁", "刘浩然", "陈思远", "黄语彤", "周梓晴",
  "吴嘉豪", "郑诗涵", "孙宇辰", "朱梦瑶", "马子墨", "胡可欣", "郭泽宇", "何欣怡",
  "高一诺", "林子昂", "罗诗雨", "梁嘉乐", "宋佳琪", "谢博文", "唐思语", "邓宇航",
  "冯若涵", "韩子轩", "曹依琳", "彭浩宇", "曾雨菲", "萧子辰"
];

const supervisedStudents = [
  { id: "stu-g109-1", name: "高一G109-理英 · 张子涵", done: "已完成 18 / 40" },
  { id: "stu-g101-1", name: "高一G101-文数 · 李雨桐", done: "已完成 14 / 40" },
  { id: "stu-c302-1", name: "初三C302-理综 · 王梓轩", done: "已完成 22 / 40" },
  { id: "stu-c205-1", name: "初二C205-英语 · 赵佳宁", done: "已完成 11 / 40" }
];

const plannedTasks = Array.from({ length: 40 }).map((_, idx) => {
  const isAi = idx % 2 === 0;
  const order = idx + 1;
  const type = isAi ? "AI课" : "巩固练习";
  const duration = isAi ? 30 + (idx % 3) * 5 : 18 + (idx % 3) * 4;
  return {
    id: `task-${order}`,
    name: isAi ? `诗歌吟课 ${Math.ceil(order / 2)}` : `诗歌巩固练习 ${Math.ceil(order / 2)}`,
    type,
    duration
  };
});

let selectedStudentId = supervisedStudents[0].id;
let selectedTaskIds = new Set();

const userInfoRows = [
  {
    name: "张子涵",
    stage: "高一",
    province: "广东省",
    city: "深圳市",
    subjects: ["数学", "英语"],
    activatedAt: new Date("2026-01-10 10:30").getTime(),
    expiredAt: new Date("2026-07-10 23:59").getTime(),
    teacher: "李小明老师"
  },
  {
    name: "李雨桐",
    stage: "高一",
    province: "广东省",
    city: "广州市",
    subjects: ["语文"],
    activatedAt: new Date("2026-02-02 09:20").getTime(),
    expiredAt: new Date("2026-08-02 23:59").getTime(),
    teacher: "王晓彤老师"
  },
  {
    name: "王梓轩",
    stage: "初三",
    province: "浙江省",
    city: "杭州市",
    subjects: ["数学", "物理", "英语"],
    activatedAt: new Date("2025-12-18 14:40").getTime(),
    expiredAt: new Date("2026-03-08 23:59").getTime(),
    teacher: "陈子涵老师"
  },
  {
    name: "赵佳宁",
    stage: "初二",
    province: "江苏省",
    city: "南京市",
    subjects: ["英语"],
    activatedAt: new Date("2026-01-25 16:10").getTime(),
    expiredAt: new Date("2026-07-25 23:59").getTime(),
    teacher: "周嘉宁老师"
  },
  {
    name: "刘浩然",
    stage: "高二",
    province: "四川省",
    city: "成都市",
    subjects: ["数学", "物理"],
    activatedAt: new Date("2026-02-14 11:00").getTime(),
    expiredAt: new Date("2026-03-10 23:59").getTime(),
    teacher: "赵一帆老师"
  },
  {
    name: "陈思远",
    stage: "初一",
    province: "湖北省",
    city: "武汉市",
    subjects: ["语文", "英语"],
    activatedAt: new Date("2026-01-08 08:50").getTime(),
    expiredAt: new Date("2026-07-08 23:59").getTime(),
    teacher: "李小明老师"
  },
  {
    name: "黄语彤",
    stage: "高三",
    province: "北京市",
    city: "北京市",
    subjects: ["英语"],
    activatedAt: new Date("2025-11-30 15:25").getTime(),
    expiredAt: new Date("2026-03-02 23:59").getTime(),
    teacher: "王晓彤老师"
  },
  {
    name: "周梓晴",
    stage: "初三",
    province: "上海市",
    city: "上海市",
    subjects: ["数学", "化学"],
    activatedAt: new Date("2026-02-06 12:15").getTime(),
    expiredAt: new Date("2026-08-06 23:59").getTime(),
    teacher: "陈子涵老师"
  },
  {
    name: "吴嘉豪",
    stage: "高一",
    province: "山东省",
    city: "青岛市",
    subjects: ["数学"],
    activatedAt: new Date("2026-01-18 10:00").getTime(),
    expiredAt: new Date("2026-06-30 23:59").getTime(),
    teacher: "周嘉宁老师"
  },
  {
    name: "郑诗涵",
    stage: "初二",
    province: "湖南省",
    city: "长沙市",
    subjects: ["英语", "语文"],
    activatedAt: new Date("2026-02-03 09:35").getTime(),
    expiredAt: new Date("2026-07-28 23:59").getTime(),
    teacher: "赵一帆老师"
  },
  {
    name: "孙宇辰",
    stage: "高二",
    province: "陕西省",
    city: "西安市",
    subjects: ["物理", "数学"],
    activatedAt: new Date("2026-01-21 13:10").getTime(),
    expiredAt: new Date("2026-03-12 23:59").getTime(),
    teacher: "李小明老师"
  },
  {
    name: "朱梦瑶",
    stage: "初一",
    province: "福建省",
    city: "厦门市",
    subjects: ["语文"],
    activatedAt: new Date("2026-02-11 11:50").getTime(),
    expiredAt: new Date("2026-08-11 23:59").getTime(),
    teacher: "王晓彤老师"
  }
];

const supervisorRows = [
  { name: "李小明老师", roleType: "试听课", studentCount: 18, joinedAtTs: new Date("2025-08-01").getTime() },
  { name: "王晓彤老师", roleType: "正价课", studentCount: 26, joinedAtTs: new Date("2024-11-15").getTime() },
  { name: "陈子涵老师", roleType: "正价课", studentCount: 22, joinedAtTs: new Date("2025-02-20").getTime() },
  { name: "周嘉宁老师", roleType: "试听课", studentCount: 14, joinedAtTs: new Date("2025-05-09").getTime() },
  { name: "赵一帆老师", roleType: "正价课", studentCount: 20, joinedAtTs: new Date("2024-09-03").getTime() }
];

function makeTime(offsetDay, hour) {
  const dt = new Date();
  dt.setDate(dt.getDate() - offsetDay);
  dt.setHours(hour, (offsetDay * 7) % 60, 0, 0);
  return dt;
}

function formatDateTime(ts) {
  if (!ts) return "-";
  return new Date(ts).toLocaleString("zh-CN", { hour12: false });
}

function formatDateOnly(ts) {
  if (!ts) return "-";
  return new Date(ts).toLocaleDateString("zh-CN");
}

function formatTenure(ts) {
  if (!ts) return "-";
  const days = Math.max(0, Math.floor((Date.now() - ts) / (24 * 60 * 60 * 1000)));
  const months = Math.floor(days / 30);
  const remainDays = days % 30;
  return `${months}个月${remainDays}天`;
}

function safeEncode(text) {
  return encodeURIComponent(text ?? "");
}

function renderSubjectTags(subjectsList) {
  return `
    <div class="subject-tags">
      ${subjectsList
        .map(
          (subject) =>
            `<span class="subject-tag ${subjectsList.length === 1 ? "single" : ""}">${subject}</span>`
        )
        .join("")}
    </div>
  `;
}

function getDaysToExpire(expiredAt) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.floor((expiredAt - Date.now()) / oneDay);
}

function expiryBadge(expiredAt) {
  const days = getDaysToExpire(expiredAt);
  if (days < 0) return '<span class="expiry-badge expiry-badge-expired">已到期</span>';
  if (days <= 15) return `<span class="expiry-badge expiry-badge-warning">${days}天内到期</span>`;
  return "";
}

function renderUserInfoTablePage() {
  if (!userInfoTableBody) return;
  const totalPages = Math.max(1, Math.ceil(userInfoFilteredRows.length / USER_INFO_PAGE_SIZE));
  if (userInfoCurrentPage > totalPages) userInfoCurrentPage = totalPages;
  const start = (userInfoCurrentPage - 1) * USER_INFO_PAGE_SIZE;
  const pageRows = userInfoFilteredRows.slice(start, start + USER_INFO_PAGE_SIZE);

  userInfoTableBody.innerHTML = pageRows
    .map(
      (item) => `
      <tr>
        <td>${item.name}</td>
        <td>${item.stage}</td>
        <td>${item.province} · ${item.city}</td>
        <td>${renderSubjectTags(item.subjects)}</td>
        <td>${item.teacher}</td>
        <td>${formatDateOnly(item.activatedAt)}</td>
        <td>
          <div class="expiry-cell">
            <span>${formatDateOnly(item.expiredAt)}</span>
            ${expiryBadge(item.expiredAt)}
          </div>
        </td>
        <td>
          <div class="op-group">
            <button class="link-btn">学情</button>
            <button class="link-btn">订单</button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");

  if (userInfoPageInfo) {
    userInfoPageInfo.textContent = `共 ${userInfoFilteredRows.length} 条 · 第 ${userInfoCurrentPage} / ${totalPages} 页`;
  }
  if (userInfoPrevPageBtn) userInfoPrevPageBtn.disabled = userInfoCurrentPage === 1;
  if (userInfoNextPageBtn) userInfoNextPageBtn.disabled = userInfoCurrentPage === totalPages;
}

function applyUserInfoSearch() {
  const nameKeyword = userSearchName?.value.trim() || "";
  const stage = userSearchStage?.value || "";
  const teacher = userSearchTeacher?.value || "";

  userInfoFilteredRows = userInfoRows.filter((item) => {
    const nameMatch = !nameKeyword || item.name.includes(nameKeyword);
    const stageMatch = !stage || item.stage === stage;
    const teacherMatch = !teacher || item.teacher === teacher;
    return nameMatch && stageMatch && teacherMatch;
  });
  userInfoCurrentPage = 1;
  renderUserInfoTablePage();
}

function initUserInfoModule() {
  userInfoFilteredRows = [...userInfoRows];
  userInfoCurrentPage = 1;
  renderUserInfoTablePage();
}

function roleTypeBadge(type) {
  const cls = type === "正价课" ? "role-type-badge paid" : "role-type-badge trial";
  return `<span class="${cls}">${type}</span>`;
}

function renderSupervisorTable() {
  if (!supervisorTableBody) return;
  supervisorTableBody.innerHTML = supervisorRows
    .map(
      (item) => `
      <tr>
        <td>${item.name}</td>
        <td>${roleTypeBadge(item.roleType)}</td>
        <td><button class="link-btn contract-link" data-supervisor="${item.name}">${item.studentCount} 人</button></td>
        <td>${formatTenure(item.joinedAtTs)}</td>
        <td>
          <div class="op-group">
            <button class="link-btn">调整角色</button>
            <button class="link-btn danger-link">操作离职</button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");
}

function getStudyMinutes() {
  const date = taskDate?.value;
  const start = taskStartTime?.value;
  const end = taskEndTime?.value;
  if (!date || !start || !end) return 0;
  const startTs = new Date(`${date}T${start}:00`).getTime();
  const endTs = new Date(`${date}T${end}:00`).getTime();
  if (Number.isNaN(startTs) || Number.isNaN(endTs) || endTs <= startTs) return 0;
  return Math.floor((endTs - startTs) / (60 * 1000));
}

function renderStudentPicker() {
  if (!studentPicker) return;
  studentPicker.innerHTML = supervisedStudents
    .map(
      (item) => `
      <button class="student-chip ${item.id === selectedStudentId ? "active" : ""}" data-student-id="${item.id}">
        ${item.name} · ${item.done}
      </button>
    `
    )
    .join("");
}

function renderTaskPlanList() {
  if (!taskPlanList) return;
  taskPlanList.innerHTML = plannedTasks
    .map((task, idx) => {
      const checked = selectedTaskIds.has(task.id);
      const typeClass = task.type === "AI课" ? "task-type-ai" : "task-type-practice";
      return `
        <label class="task-item ${checked ? "selected" : ""}">
          <input type="checkbox" data-task-id="${task.id}" ${checked ? "checked" : ""} />
          <div class="task-main">
            <div class="task-name">${idx + 1}. ${task.name}</div>
            <div class="task-meta">${task.type} · 预计 ${task.duration} 分钟</div>
          </div>
          <span class="task-type-badge ${typeClass}">${task.type}</span>
        </label>
      `;
    })
    .join("");
}

function runTaskMatch() {
  const minutes = getStudyMinutes();
  if (minutes <= 0) {
    window.alert("请先选择有效的学习时间（结束时间需晚于开始时间）。");
    return;
  }
  let used = 0;
  const matched = [];
  for (const task of plannedTasks) {
    if (used + task.duration > minutes) continue;
    matched.push(task.id);
    used += task.duration;
    if (used >= minutes) break;
  }
  selectedTaskIds = new Set(matched);
  renderTaskPlanList();

  const aiCount = plannedTasks.filter((t) => selectedTaskIds.has(t.id) && t.type === "AI课").length;
  const practiceCount = plannedTasks.filter((t) => selectedTaskIds.has(t.id) && t.type === "巩固练习").length;
  const gap = Math.max(0, minutes - used);
  taskMatchSummary.textContent = `已按 ${minutes} 分钟匹配：AI课 ${aiCount} 个，巩固练习 ${practiceCount} 个，预计占用 ${used} 分钟${gap ? `（余 ${gap} 分钟）` : ""}。`;
}

function initTaskMgmt() {
  if (!taskDate || !taskStartTime || !taskEndTime) return;
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  taskDate.value = `${yyyy}-${mm}-${dd}`;
  renderStudentPicker();
  renderTaskPlanList();
}

function buildDiagnosisUrl({ grade, subject, chapter, type, id }) {
  return `https://h5.xiaoluai.com/diagnosis?grade=${encodeURIComponent(
    grade
  )}&subject=${encodeURIComponent(subject)}&chapter=${encodeURIComponent(
    chapter
  )}&type=${encodeURIComponent(type)}&id=${id}`;
}

function getExpireTs(item) {
  return item.createdAtTs + URL_VALID_DAYS * 24 * 60 * 60 * 1000;
}

function getUrlState(item) {
  if (item.isUrlDeleted) return "已删除";
  return Date.now() > getExpireTs(item) ? "已过期" : "生效中";
}

function urlStateBadge(state) {
  const clsMap = {
    "生效中": "url-state-badge state-active",
    "已过期": "url-state-badge state-expired",
    "已删除": "url-state-badge state-deleted"
  };
  return `<span class="${clsMap[state] || "url-state-badge"}">${state}</span>`;
}

const diagnosisRows = Array.from({ length: 48 }).map((_, idx) => {
  const subject = subjects[idx % subjects.length];
  const status = statuses[idx % statuses.length];
  const baseName = studentNames[idx % studentNames.length];
  const name = idx < studentNames.length ? baseName : `${baseName}${Math.floor(idx / studentNames.length) + 1}`;
  const createdAtTs = makeTime((idx % 15) + 1, 9 + (idx % 8)).getTime();
  const chapter = chapters[idx % chapters.length];

  return {
    id: `seed-${idx + 1}`,
    studentName: name,
    grade: grades[idx % grades.length],
    subject,
    chapter: chapter.short,
    chapterDetail: chapter.detail,
    creator: creators[idx % creators.length],
    createdAtTs,
    result: status,
    finishedAtTs: status === "已完成" ? makeTime(idx % 10, 14 + (idx % 5)).getTime() : null,
    status,
    isUrlDeleted: false,
    rawUrl: buildDiagnosisUrl({
      grade: grades[idx % grades.length],
      subject,
      chapter: chapter.short,
      type: "基础摸底",
      id: `seed-${idx + 1}`
    })
  };
});

function opCell(status) {
  return status === "已完成"
    ? `<button class="link-btn">查看报告</button> ｜ <button class="link-btn">绑定</button>`
    : "-";
}

function statusBadge(status) {
  const classMap = {
    "未开始": "status status-not-started",
    "进行中": "status status-in-progress",
    "已完成": "status status-completed"
  };
  return `<span class="${classMap[status] || "status"}">${status}</span>`;
}

function urlActionCell(item) {
  const state = getUrlState(item);
  const disabled = item.isUrlDeleted || !item.rawUrl;
  return `
    <div class="url-cell">
      ${urlStateBadge(state)}
      <button class="link-btn row-url-btn" ${disabled ? "disabled" : ""} data-row-id="${item.id}">查看URL</button>
    </div>
  `;
}

function renderDiagnosisTablePage() {
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageRows = filteredRows.slice(start, start + PAGE_SIZE);

  diagnosisTableBody.innerHTML = pageRows
    .map(
      (item) => `
      <tr>
        <td>${item.studentName}</td>
        <td>${item.grade}</td>
        <td>${item.subject}</td>
        <td>
          <div class="chapter-cell">
            <span>${item.chapter}</span>
            <button class="help-dot" data-detail="${safeEncode(item.chapterDetail)}">?</button>
          </div>
        </td>
        <td>${statusBadge(item.result)}</td>
        <td>${formatDateTime(item.finishedAtTs)}</td>
        <td>${opCell(item.status)}</td>
        <td>${urlActionCell(item)}</td>
        <td>${item.creator}</td>
        <td>${formatDateTime(item.createdAtTs)}</td>
      </tr>
    `
    )
    .join("");

  pageInfo.textContent = `共 ${filteredRows.length} 条 · 第 ${currentPage} / ${totalPages} 页`;
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
}

function applySearch() {
  const nameKeyword = searchName.value.trim();
  const subject = searchSubject.value;
  const period = searchPeriod.value;
  const result = searchResult.value;

  filteredRows = diagnosisRows.filter((item) => {
    const nameMatch = !nameKeyword || item.studentName.includes(nameKeyword);
    const subjectMatch = !subject || item.subject === subject;
    const resultMatch = !result || item.result === result;
    const periodMatch = !period || item.result === "已完成";
    return nameMatch && subjectMatch && resultMatch && periodMatch;
  });
  currentPage = 1;
  renderDiagnosisTablePage();
}

function switchSubtab(subtabKey) {
  const meta = subtabMeta[subtabKey];
  if (!meta) return;

  document.querySelectorAll(".sub-nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.subtab === subtabKey);
  });
  document.querySelectorAll(".subtab-panel").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.subpanel !== subtabKey);
  });

  pageTitle.textContent = meta.label;
  if (pageDesc) pageDesc.textContent = "";
}

function closeModal() {
  diagnosisModal.classList.add("hidden");
}

function closeUrlPopover() {
  urlPopover.classList.add("hidden");
  urlPopover.dataset.rowId = "";
}

function placeFloating(element, target) {
  const rect = target.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const er = element.getBoundingClientRect();
  let left = rect.left;
  let top = rect.bottom + 8;
  if (left + er.width > vw - 12) left = vw - er.width - 12;
  if (top + er.height > vh - 12) top = rect.top - er.height - 8;
  if (left < 12) left = 12;
  if (top < 12) top = 12;
  element.style.left = `${left}px`;
  element.style.top = `${top}px`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    window.alert("链接已复制。");
  } catch {
    window.alert("复制失败，请手动复制。");
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const phone = document.getElementById("phone").value.trim();
  const code = document.getElementById("verifyCode").value.trim();
  if (!phone || !code) {
    window.alert("请输入手机号和验证码。");
    return;
  }
  currentUser.textContent = phone;
  loginPage.classList.add("hidden");
  appPage.classList.remove("hidden");
  switchSubtab("diagnosis");
  filteredRows = [...diagnosisRows];
  renderDiagnosisTablePage();
});

sendCodeBtn.addEventListener("click", () => {
  const phone = document.getElementById("phone").value.trim();
  if (!phone) {
    window.alert("请先输入手机号。");
    return;
  }
  document.getElementById("verifyCode").value = "123456";
  window.alert("验证码已发送（Demo 固定为 123456）。");
});

logoutBtn.addEventListener("click", () => {
  appPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  loginForm.reset();
});

moduleNav.addEventListener("click", (event) => {
  const button = event.target.closest(".sub-nav-item");
  if (!button) return;
  switchSubtab(button.dataset.subtab);
});

openCreateEvalBtn.addEventListener("click", () => {
  diagnosisModal.classList.remove("hidden");
});
closeDiagnosisModalMask.addEventListener("click", closeModal);
closeDiagnosisModalBtn.addEventListener("click", closeModal);

generateDiagnosisLinkBtn.addEventListener("click", () => {
  const grade = diagGrade.value;
  const subject = diagSubject.value;
  const chapterInput = diagChapter.value.trim();
  const type = diagType.value;
  if (!chapterInput) {
    window.alert("请填写教材章节。");
    return;
  }
  const chapterShort = chapterInput.includes("专题") ? chapterInput : `${chapterInput}专题`;
  const chapterDetail = `${grade} · ${subject} · ${chapterInput} · ${type}`;
  const id = `new-${Date.now()}`;
  const url = buildDiagnosisUrl({ grade, subject, chapter: chapterShort, type, id });
  generatedDiagnosisLink.value = url;

  diagnosisRows.unshift({
    id,
    studentName: "待填写",
    grade: grade === "高中" ? "高一" : "初三",
    subject,
    chapter: chapterShort,
    chapterDetail,
    creator: "李小明老师",
    createdAtTs: Date.now(),
    result: "未开始",
    finishedAtTs: null,
    status: "未开始",
    isUrlDeleted: false,
    rawUrl: url
  });
  applySearch();
});

copyDiagnosisLinkBtn.addEventListener("click", async () => {
  const text = generatedDiagnosisLink.value.trim();
  if (!text) {
    window.alert("请先生成诊断链接。");
    return;
  }
  await copyText(text);
});

runSearchBtn.addEventListener("click", applySearch);
resetSearchBtn.addEventListener("click", () => {
  searchName.value = "";
  searchSubject.value = "";
  searchPeriod.value = "";
  searchResult.value = "";
  filteredRows = [...diagnosisRows];
  currentPage = 1;
  renderDiagnosisTablePage();
});

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderDiagnosisTablePage();
  }
});
nextPageBtn.addEventListener("click", () => {
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  if (currentPage < totalPages) {
    currentPage += 1;
    renderDiagnosisTablePage();
  }
});

diagnosisTableBody.addEventListener("click", (event) => {
  const btn = event.target.closest(".row-url-btn");
  if (!btn || btn.disabled) return;
  const row = diagnosisRows.find((item) => item.id === btn.dataset.rowId);
  if (!row || !row.rawUrl) return;
  const state = getUrlState(row);
  urlPopoverText.textContent = row.rawUrl;
  urlPopoverMeta.textContent = `状态：${state} ｜ 默认有效期：3天 ｜ 生效至：${formatDateTime(getExpireTs(row))}`;
  urlPopover.dataset.rowId = row.id;
  urlPopover.classList.remove("hidden");
  placeFloating(urlPopover, btn);
});

copyUrlPopoverBtn.addEventListener("click", async () => {
  const row = diagnosisRows.find((item) => item.id === urlPopover.dataset.rowId);
  if (!row || !row.rawUrl) return;
  await copyText(row.rawUrl);
});

openUrlPopoverBtn.addEventListener("click", () => {
  const row = diagnosisRows.find((item) => item.id === urlPopover.dataset.rowId);
  if (!row || !row.rawUrl) return;
  window.open(row.rawUrl, "_blank");
});

deleteUrlPopoverBtn.addEventListener("click", () => {
  const row = diagnosisRows.find((item) => item.id === urlPopover.dataset.rowId);
  if (!row) return;
  row.isUrlDeleted = true;
  row.rawUrl = "";
  closeUrlPopover();
  renderDiagnosisTablePage();
});

diagnosisTableBody.addEventListener("mouseover", (event) => {
  const help = event.target.closest(".help-dot");
  if (!help) return;
  const detail = decodeURIComponent(help.dataset.detail || "");
  if (!detail) return;
  chapterTooltip.textContent = detail;
  chapterTooltip.classList.remove("hidden");
  placeFloating(chapterTooltip, help);
});

diagnosisTableBody.addEventListener("mouseout", (event) => {
  if (event.target.closest(".help-dot")) chapterTooltip.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  const insidePopover = event.target.closest("#urlPopover");
  const urlBtn = event.target.closest(".row-url-btn");
  if (!insidePopover && !urlBtn) closeUrlPopover();
});

studentPicker?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-student-id]");
  if (!btn) return;
  selectedStudentId = btn.dataset.studentId;
  renderStudentPicker();
});

matchTasksBtn?.addEventListener("click", runTaskMatch);

taskPlanList?.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"][data-task-id]');
  if (!checkbox) return;
  const id = checkbox.dataset.taskId;
  if (checkbox.checked) selectedTaskIds.add(id);
  else selectedTaskIds.delete(id);
  renderTaskPlanList();
});

publishTaskBtn?.addEventListener("click", () => {
  const minutes = getStudyMinutes();
  const student = supervisedStudents.find((item) => item.id === selectedStudentId);
  if (!student) {
    window.alert("请先选择布置对象。");
    return;
  }
  if (minutes <= 0) {
    window.alert("请先设置有效的学习时间。");
    return;
  }
  if (!selectedTaskIds.size) {
    window.alert("当前未勾选任何任务，请先点击“匹配任务”或手动勾选。");
    return;
  }
  window.alert(`已为 ${student.name} 布置 ${selectedTaskIds.size} 项任务。`);
});

runUserSearchBtn?.addEventListener("click", applyUserInfoSearch);
resetUserSearchBtn?.addEventListener("click", () => {
  if (userSearchName) userSearchName.value = "";
  if (userSearchStage) userSearchStage.value = "";
  if (userSearchTeacher) userSearchTeacher.value = "";
  userInfoFilteredRows = [...userInfoRows];
  userInfoCurrentPage = 1;
  renderUserInfoTablePage();
});

userInfoPrevPageBtn?.addEventListener("click", () => {
  if (userInfoCurrentPage > 1) {
    userInfoCurrentPage -= 1;
    renderUserInfoTablePage();
  }
});

userInfoNextPageBtn?.addEventListener("click", () => {
  const totalPages = Math.max(1, Math.ceil(userInfoFilteredRows.length / USER_INFO_PAGE_SIZE));
  if (userInfoCurrentPage < totalPages) {
    userInfoCurrentPage += 1;
    renderUserInfoTablePage();
  }
});

createSupervisorBtn?.addEventListener("click", () => {
  window.alert("创建督学老师功能待接入，当前为占位入口。");
});

supervisorTableBody?.addEventListener("click", (event) => {
  const btn = event.target.closest(".contract-link");
  if (!btn) return;
  const supervisorName = btn.dataset.supervisor || "该督学老师";
  window.alert(`后续将跳转到 ${supervisorName} 的履约中学生列表。`);
});

filteredRows = [...diagnosisRows];
renderDiagnosisTablePage();
switchSubtab("diagnosis");
initTaskMgmt();
initUserInfoModule();
renderSupervisorTable();
