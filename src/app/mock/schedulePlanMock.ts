export type LessonSourceTag = "必学" | "推荐学" | "可选" | "手动插入";
export type ScheduleEditMode = "report" | "study-plan";

export interface LessonTemplate {
  id: string;
  name: string;
  priority: Exclude<LessonSourceTag, "手动插入">;
  duration: number;
}

export interface ChapterTemplate {
  id: string;
  indexLabel: string;
  name: string;
  bookLabel: string;
  lessons: LessonTemplate[];
}

export interface MaterialVersion {
  id: string;
  name: string;
  grade: string;
  subject: string;
  chapters: ChapterTemplate[];
}

export interface SchedulePlanLesson {
  id: string;
  materialVersionId: string;
  chapterId: string;
  chapterIndexLabel: string;
  chapterName: string;
  lessonTemplateId: string;
  lessonName: string;
  source: LessonSourceTag;
  status: "pending" | "completed";
  duration: number;
  isManual: boolean;
}

export interface SchedulePlanRecord {
  diagnosisId?: string;
  studentKey?: string;
  studentName: string;
  grade: string;
  subject: string;
  materialVersionId: string;
  bookLabels: string[];
  chapterIds: string[];
  totalLessons: number;
  lessons: SchedulePlanLesson[];
  generatedAt: string;
  updatedAt: string;
  learnedLessonIdsByVersion: Record<string, string[]>;
}

export interface SchedulePlanProfile {
  diagnosisId?: string;
  studentKey?: string;
  studentName: string;
  grade: string;
  subject: string;
}

export interface SchedulePlanDraft {
  materialVersionId: string;
  bookLabels: string[];
  chapterIds: string[];
}

const subjectCatalog: Record<string, { versions: string[]; books: string[]; chapters: { name: string; bookLabel: string; lessons: Omit<LessonTemplate, "id">[] }[] }> = {
  数学: {
    versions: ["人教A版", "北师大版"],
    books: ["必修一", "必修二", "必修三"],
    chapters: [
      {
        name: "集合与常用逻辑",
        bookLabel: "必修一",
        lessons: [
          { name: "集合的概念", priority: "必学", duration: 35 },
          { name: "集合的表示与分类", priority: "必学", duration: 30 },
          { name: "集合间的关系", priority: "推荐学", duration: 28 },
          { name: "集合的运算", priority: "可选", duration: 24 },
        ],
      },
      {
        name: "一元二次函数初步",
        bookLabel: "必修一",
        lessons: [
          { name: "函数图像识别", priority: "必学", duration: 32 },
          { name: "顶点与对称轴", priority: "必学", duration: 36 },
          { name: "最值问题", priority: "推荐学", duration: 30 },
          { name: "函数建模练习", priority: "可选", duration: 25 },
        ],
      },
      {
        name: "不等式与基本解法",
        bookLabel: "必修二",
        lessons: [
          { name: "一元一次不等式", priority: "必学", duration: 30 },
          { name: "不等式组求解", priority: "必学", duration: 34 },
          { name: "区间表示", priority: "推荐学", duration: 22 },
          { name: "综合巩固", priority: "可选", duration: 26 },
        ],
      },
      {
        name: "指数函数与幂函数",
        bookLabel: "必修三",
        lessons: [
          { name: "指数函数图像", priority: "必学", duration: 30 },
          { name: "指数函数性质", priority: "必学", duration: 34 },
          { name: "幂函数比较", priority: "推荐学", duration: 28 },
          { name: "图像综合辨析", priority: "可选", duration: 24 },
        ],
      },
    ],
  },
  英语: {
    versions: ["人教版", "外研版"],
    books: ["必修一", "必修二", "必修三"],
    chapters: [
      {
        name: "Unit 1 Friendship",
        bookLabel: "必修一",
        lessons: [
          { name: "核心词汇与短语", priority: "必学", duration: 25 },
          { name: "重点句型梳理", priority: "必学", duration: 30 },
          { name: "阅读理解训练", priority: "推荐学", duration: 28 },
          { name: "写作表达补充", priority: "可选", duration: 24 },
        ],
      },
      {
        name: "Unit 2 English Around the World",
        bookLabel: "必修一",
        lessons: [
          { name: "词汇语境理解", priority: "必学", duration: 26 },
          { name: "语法点归纳", priority: "必学", duration: 30 },
          { name: "长难句拆解", priority: "推荐学", duration: 24 },
          { name: "口语表达拓展", priority: "可选", duration: 22 },
        ],
      },
      {
        name: "Unit 3 Travel Journal",
        bookLabel: "必修二",
        lessons: [
          { name: "篇章结构分析", priority: "必学", duration: 28 },
          { name: "重点词汇积累", priority: "必学", duration: 24 },
          { name: "任务型阅读", priority: "推荐学", duration: 25 },
          { name: "续写素材整理", priority: "可选", duration: 20 },
        ],
      },
      {
        name: "Unit 4 Earthquakes",
        bookLabel: "必修三",
        lessons: [
          { name: "背景知识导入", priority: "必学", duration: 22 },
          { name: "阅读主旨提炼", priority: "必学", duration: 26 },
          { name: "词汇辨析", priority: "推荐学", duration: 24 },
          { name: "演讲表达训练", priority: "可选", duration: 20 },
        ],
      },
    ],
  },
  物理: {
    versions: ["人教版", "沪科版"],
    books: ["必修一", "必修二", "必修三"],
    chapters: [
      {
        name: "运动的描述",
        bookLabel: "必修一",
        lessons: [
          { name: "参考系与质点", priority: "必学", duration: 30 },
          { name: "位移和路程", priority: "必学", duration: 28 },
          { name: "速度与平均速度", priority: "推荐学", duration: 26 },
          { name: "图像理解", priority: "可选", duration: 22 },
        ],
      },
      {
        name: "力与受力分析",
        bookLabel: "必修一",
        lessons: [
          { name: "重力与弹力", priority: "必学", duration: 32 },
          { name: "摩擦力判断", priority: "必学", duration: 34 },
          { name: "受力图绘制", priority: "推荐学", duration: 26 },
          { name: "综合例题", priority: "可选", duration: 24 },
        ],
      },
      {
        name: "牛顿运动定律",
        bookLabel: "必修二",
        lessons: [
          { name: "牛顿第一定律", priority: "必学", duration: 28 },
          { name: "牛顿第二定律", priority: "必学", duration: 34 },
          { name: "牛顿第三定律", priority: "推荐学", duration: 22 },
          { name: "定律综合应用", priority: "可选", duration: 24 },
        ],
      },
      {
        name: "机械能与功",
        bookLabel: "必修三",
        lessons: [
          { name: "功与功率", priority: "必学", duration: 30 },
          { name: "动能定理", priority: "必学", duration: 34 },
          { name: "机械能守恒", priority: "推荐学", duration: 28 },
          { name: "实验补充", priority: "可选", duration: 22 },
        ],
      },
    ],
  },
};

const materialCache = new Map<string, MaterialVersion[]>();
const diagnosisProfiles = new Map<string, SchedulePlanProfile>();
const diagnosisPlans = new Map<string, SchedulePlanRecord>();
const studentPlans = new Map<string, SchedulePlanRecord>();

function formatDateTime(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${y}/${m}/${d} ${hh}:${mm}`;
}

function buildMaterialVersions(grade: string, subject: string) {
  const catalog = subjectCatalog[subject] || subjectCatalog.数学;
  return catalog.versions.map((versionName, versionIndex) => ({
    id: `${grade}-${subject}-${versionName}`,
    name: versionName,
    grade,
    subject,
    chapters: (() => {
      const bookChapterCounter = new Map<string, number>();

      return catalog.chapters.map((chapter, chapterIndex) => {
        const nextBookChapterIndex = (bookChapterCounter.get(chapter.bookLabel) || 0) + 1;
        bookChapterCounter.set(chapter.bookLabel, nextBookChapterIndex);

        return {
          id: `${grade}-${subject}-${versionIndex + 1}-chapter-${chapterIndex + 1}`,
          indexLabel: `第${nextBookChapterIndex}章`,
          name: chapter.name,
          bookLabel: chapter.bookLabel,
          lessons: chapter.lessons.map((lesson, lessonIndex) => ({
            id: `${grade}-${subject}-${versionIndex + 1}-chapter-${chapterIndex + 1}-lesson-${lessonIndex + 1}`,
            ...lesson,
          })),
        };
      });
    })(),
  }));
}

function getStoreKey(studentKey: string, subject: string) {
  return `${studentKey}::${subject}`;
}

function getVersionById(materialVersionId: string, grade?: string, subject?: string) {
  const [storedGrade = grade || "高一", storedSubject = subject || "数学"] = materialVersionId.split("-");
  const versions = getMaterialVersions(grade || storedGrade, subject || storedSubject);
  return versions.find((item) => item.id === materialVersionId) || versions[0];
}

function buildGeneratedLessons(version: MaterialVersion, bookLabels: string[], chapterIds: string[]) {
  const selectedBookSet = new Set(bookLabels);
  const selectedChapters = version.chapters.filter(
    (chapter) => selectedBookSet.has(chapter.bookLabel) && chapterIds.includes(chapter.id),
  );
  const sortedTemplates = selectedChapters.flatMap((chapter, chapterOrder) =>
    chapter.lessons
      .map((lesson, lessonOrder) => ({
        chapter,
        lesson,
        chapterOrder,
        lessonOrder,
      }))
      .sort((a, b) => {
        const priorityOrder = { 必学: 0, 推荐学: 1, 可选: 2 };
        return priorityOrder[a.lesson.priority] - priorityOrder[b.lesson.priority] || a.lessonOrder - b.lessonOrder;
      }),
  );

  return sortedTemplates.map(({ chapter, lesson }) => ({
    id: `generated-${lesson.id}`,
    materialVersionId: version.id,
    chapterId: chapter.id,
    chapterIndexLabel: chapter.indexLabel,
    chapterName: chapter.name,
    lessonTemplateId: lesson.id,
    lessonName: lesson.name,
    source: lesson.priority,
    status: "pending" as const,
    duration: lesson.duration,
    isManual: false,
  }));
}

function normalizeLearnedMap(record: SchedulePlanRecord | undefined, versionId: string, completedLessons: SchedulePlanLesson[]) {
  const learnedMap = { ...(record?.learnedLessonIdsByVersion || {}) };
  learnedMap[versionId] = Array.from(new Set(completedLessons.map((lesson) => lesson.lessonTemplateId)));
  return learnedMap;
}

function buildRecord(profile: SchedulePlanProfile, draft: SchedulePlanDraft, previous?: SchedulePlanRecord) {
  const version = getVersionById(draft.materialVersionId, profile.grade, profile.subject);
  const generatedLessons = buildGeneratedLessons(version, draft.bookLabels, draft.chapterIds);
  const previousCompleted =
    previous && previous.materialVersionId === version.id
      ? previous.lessons.filter((lesson) => lesson.status === "completed")
      : [];
  const completedTemplateIds = new Set(previousCompleted.map((lesson) => lesson.lessonTemplateId));
  const nextLessons = [
    ...previousCompleted,
    ...generatedLessons.filter((lesson) => !completedTemplateIds.has(lesson.lessonTemplateId)),
  ];
  const now = formatDateTime();

  return {
    ...profile,
    materialVersionId: version.id,
    bookLabels: draft.bookLabels,
    chapterIds: draft.chapterIds,
    totalLessons: generatedLessons.length,
    lessons: nextLessons,
    generatedAt: previous?.generatedAt || now,
    updatedAt: now,
    learnedLessonIdsByVersion: normalizeLearnedMap(previous, version.id, previousCompleted),
  };
}

function addSeededCompletedLessons(record: SchedulePlanRecord, completedLessonIds: string[]) {
  const updatedLessons = record.lessons.map((lesson) =>
    completedLessonIds.includes(lesson.lessonTemplateId) ? { ...lesson, status: "completed" as const } : lesson,
  );

  return {
    ...record,
    lessons: updatedLessons,
    learnedLessonIdsByVersion: normalizeLearnedMap(
      record,
      record.materialVersionId,
      updatedLessons.filter((lesson) => lesson.status === "completed"),
    ),
  };
}

function insertManualLesson(record: SchedulePlanRecord, chapterId: string, lessonTemplateId: string, insertIndex: number) {
  const version = getVersionById(record.materialVersionId, record.grade, record.subject);
  const chapter = version.chapters.find((item) => item.id === chapterId);
  const lesson = chapter?.lessons.find((item) => item.id === lessonTemplateId);

  if (!chapter || !lesson) {
    return record;
  }

  const nextLesson: SchedulePlanLesson = {
    id: `manual-${lessonTemplateId}-${Date.now()}`,
    materialVersionId: version.id,
    chapterId: chapter.id,
    chapterIndexLabel: chapter.indexLabel,
    chapterName: chapter.name,
    lessonTemplateId: lesson.id,
    lessonName: lesson.name,
    source: "手动插入",
    status: "pending",
    duration: lesson.duration,
    isManual: true,
  };

  const nextLessons = [...record.lessons];
  nextLessons.splice(insertIndex, 0, nextLesson);

  return {
    ...record,
    lessons: nextLessons,
    updatedAt: formatDateTime(),
  };
}

function markManualLessonsCompleted(record: SchedulePlanRecord) {
  const updatedLessons = record.lessons.map((lesson) => (lesson.isManual ? { ...lesson, status: "completed" as const } : lesson));
  return {
    ...record,
    lessons: updatedLessons,
    learnedLessonIdsByVersion: normalizeLearnedMap(
      record,
      record.materialVersionId,
      updatedLessons.filter((lesson) => lesson.status === "completed"),
    ),
  };
}

export function getMaterialVersions(grade: string, subject: string) {
  const cacheKey = `${grade}::${subject}`;
  if (!materialCache.has(cacheKey)) {
    materialCache.set(cacheKey, buildMaterialVersions(grade, subject));
  }
  return materialCache.get(cacheKey)!;
}

export function getDiagnosisPlanProfile(diagnosisId: string) {
  return diagnosisProfiles.get(diagnosisId) || null;
}

export function upsertDiagnosisPlanProfile(profile: SchedulePlanProfile) {
  if (profile.diagnosisId) {
    diagnosisProfiles.set(profile.diagnosisId, profile);
  }
}

export function getDiagnosisPlan(diagnosisId: string) {
  return diagnosisPlans.get(diagnosisId) || null;
}

export function saveDiagnosisPlan(profile: SchedulePlanProfile, draft: SchedulePlanDraft) {
  const previous = profile.diagnosisId ? diagnosisPlans.get(profile.diagnosisId) : undefined;
  const nextRecord = buildRecord(profile, draft, previous);
  if (profile.diagnosisId) {
    diagnosisProfiles.set(profile.diagnosisId, profile);
    diagnosisPlans.set(profile.diagnosisId, nextRecord);
  }
  return nextRecord;
}

export function insertDiagnosisPlanLesson(diagnosisId: string, chapterId: string, lessonTemplateId: string, insertIndex: number) {
  const record = diagnosisPlans.get(diagnosisId);
  if (!record) {
    return null;
  }
  const nextRecord = insertManualLesson(record, chapterId, lessonTemplateId, insertIndex);
  diagnosisPlans.set(diagnosisId, nextRecord);
  return nextRecord;
}

export function getStudentPlan(studentKey: string, subject: string) {
  return studentPlans.get(getStoreKey(studentKey, subject)) || null;
}

export function saveStudentPlan(profile: SchedulePlanProfile, draft: SchedulePlanDraft) {
  if (!profile.studentKey) {
    return null;
  }
  const key = getStoreKey(profile.studentKey, profile.subject);
  const previous = studentPlans.get(key);
  const nextRecord = buildRecord(profile, draft, previous || undefined);
  studentPlans.set(key, nextRecord);
  return nextRecord;
}

export function getAvailableInsertLessons(record: SchedulePlanRecord, chapterId: string) {
  const version = getVersionById(record.materialVersionId, record.grade, record.subject);
  const chapter = version.chapters.find((item) => item.id === chapterId);
  const usedLessonIds = new Set(
    record.lessons.filter((lesson) => lesson.chapterId === chapterId).map((lesson) => lesson.lessonTemplateId),
  );

  return (chapter?.lessons || []).filter((lesson) => !usedLessonIds.has(lesson.id));
}

export function getLearnedLessonIds(record: SchedulePlanRecord | null, materialVersionId?: string) {
  if (!record) {
    return [];
  }
  return record.learnedLessonIdsByVersion[materialVersionId || record.materialVersionId] || [];
}

export function seedStudentPlans() {
  if (studentPlans.size > 0) {
    return;
  }

  const liytProfile: SchedulePlanProfile = {
    studentKey: "liyt",
    studentName: "李雨桐",
    grade: "高一",
    subject: "数学",
  };
  const liytVersion = getMaterialVersions("高一", "数学")[0];
  const liytDraft: SchedulePlanDraft = {
    materialVersionId: liytVersion.id,
    bookLabels: ["必修一", "必修二"],
    chapterIds: liytVersion.chapters.slice(0, 3).map((chapter) => chapter.id),
  };
  const liytRecord = saveStudentPlan(liytProfile, liytDraft);
  if (liytRecord) {
    const seeded = addSeededCompletedLessons(liytRecord, [
      liytVersion.chapters[0].lessons[0].id,
      liytVersion.chapters[0].lessons[1].id,
      liytVersion.chapters[1].lessons[0].id,
    ]);
    const inserted = insertManualLesson(seeded, liytVersion.chapters[1].id, liytVersion.chapters[1].lessons[3].id, 4);
    studentPlans.set(getStoreKey("liyt", "数学"), markManualLessonsCompleted(inserted));
  }
}

export function seedDiagnosisPlans() {
  if (diagnosisPlans.size > 0) {
    return;
  }

  const profile: SchedulePlanProfile = {
    diagnosisId: "seed-3",
    studentName: "王梓轩",
    grade: "初三",
    subject: "物理",
  };
  const version = getMaterialVersions(profile.grade, profile.subject)[0];
  const draft: SchedulePlanDraft = {
    materialVersionId: version.id,
    bookLabels: ["必修一"],
    chapterIds: version.chapters.slice(0, 2).map((chapter) => chapter.id),
  };
  const record = saveDiagnosisPlan(profile, draft);
  diagnosisPlans.set(
    "seed-3",
    addSeededCompletedLessons(record, [version.chapters[0].lessons[0].id, version.chapters[0].lessons[1].id]),
  );
}

seedStudentPlans();
seedDiagnosisPlans();
