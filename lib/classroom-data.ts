export type Resource = {
  title: string;
  description: string;
  type: "Notes" | "Worksheet" | "Guide" | "Quiz";
  estimatedTime: string;
};

export type VideoLesson = {
  title: string;
  topic: string;
  duration: string;
  teacher: string;
};

export type Flashcard = {
  prompt: string;
  answer: string;
};

export type Classroom = {
  grade: number;
  title: string;
  subtitle: string;
  theme: {
    primary: string;
    secondary: string;
    glow: string;
  };
  highlights: string[];
  resources: Resource[];
  videos: VideoLesson[];
  flashcards: Flashcard[];
};

const byGradeContent: Record<number, { focus: string[]; subjects: string[] }> = {
  5: {
    focus: ["Number Sense", "Basic Grammar", "Nature & Environment"],
    subjects: ["Math", "English", "Science"]
  },
  6: {
    focus: ["Fractions", "Reading Comprehension", "Earth Science"],
    subjects: ["Math", "English", "Science"]
  },
  7: {
    focus: ["Algebra Basics", "Writing Skills", "Life Science"],
    subjects: ["Math", "English", "Biology"]
  },
  8: {
    focus: ["Geometry", "Literature", "Physics Foundations"],
    subjects: ["Math", "English", "Physics"]
  },
  9: {
    focus: ["Linear Equations", "Critical Reading", "Chemistry Basics"],
    subjects: ["Math", "English", "Chemistry"]
  },
  10: {
    focus: ["Trigonometry", "Writing Arguments", "Scientific Method"],
    subjects: ["Math", "English", "Science"]
  },
  11: {
    focus: ["Advanced Algebra", "Essay Analysis", "STEM Projects"],
    subjects: ["Math", "English", "Applied Science"]
  },
  12: {
    focus: ["Exam Readiness", "Presentation Skills", "Problem Solving"],
    subjects: ["Math", "English", "Integrated Science"]
  }
};

const palette = [
  { primary: "#5B7CFF", secondary: "#7ED7FF", glow: "rgba(91, 124, 255, 0.34)" },
  { primary: "#22C1C3", secondary: "#8DEBCE", glow: "rgba(34, 193, 195, 0.33)" },
  { primary: "#F97316", secondary: "#FDBA74", glow: "rgba(249, 115, 22, 0.28)" },
  { primary: "#EC4899", secondary: "#F9A8D4", glow: "rgba(236, 72, 153, 0.30)" },
  { primary: "#8B5CF6", secondary: "#C4B5FD", glow: "rgba(139, 92, 246, 0.33)" },
  { primary: "#14B8A6", secondary: "#7DD3FC", glow: "rgba(20, 184, 166, 0.32)" },
  { primary: "#3B82F6", secondary: "#93C5FD", glow: "rgba(59, 130, 246, 0.30)" },
  { primary: "#D946EF", secondary: "#F0ABFC", glow: "rgba(217, 70, 239, 0.30)" }
];

export const classrooms: Classroom[] = Array.from({ length: 8 }, (_, idx) => {
  const grade = idx + 5;
  const curriculum = byGradeContent[grade];
  const theme = palette[idx];

  return {
    grade,
    title: `Class ${grade} Learning Lounge`,
    subtitle: `A guided, high-retention classroom built for Class ${grade} students.`,
    theme,
    highlights: curriculum.focus,
    resources: curriculum.subjects.map((subject, subjectIndex) => ({
      title: `${subject} Smart Pack`,
      description: `Concept notes, solved examples, and mixed practice for Class ${grade} ${subject}.`,
      type: (["Notes", "Worksheet", "Guide"] as const)[subjectIndex],
      estimatedTime: `${15 + subjectIndex * 10} min`
    })),
    videos: curriculum.subjects.map((subject, subjectIndex) => ({
      title: `${subject} Deep Dive`,
      topic: curriculum.focus[subjectIndex] ?? "Concept Mastery",
      duration: `${10 + subjectIndex * 7} min`,
      teacher: ["Ms. Rao", "Mr. Verma", "Dr. Singh"][subjectIndex]
    })),
    flashcards: [
      {
        prompt: `What is the best way to revise ${curriculum.focus[0]} for Class ${grade}?`,
        answer: "Start with formulas and definitions, then solve 5 mixed problems from easy to hard."
      },
      {
        prompt: `How should you prepare before watching a lesson video in Class ${grade}?`,
        answer: "Preview the topic briefly and write 2-3 questions to answer while watching the video."
      },
      {
        prompt: `How can flashcards improve results in Class ${grade}?`,
        answer: "They support active recall and spaced repetition, which improves long-term retention."
      }
    ]
  };
});

export const classroomGrades = classrooms.map(({ grade }) => grade);

export const getClassroomByGrade = (grade: number) =>
  classrooms.find((room) => room.grade === grade);
