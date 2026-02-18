import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Flashcards from "@/components/Flashcards";
import { classroomGrades, getClassroomByGrade } from "@/lib/classroom-data";
import type { CSSProperties } from "react";

type ClassPageProps = {
  params: {
    grade: string;
  };
};

export function generateStaticParams() {
  return classroomGrades.map((grade) => ({ grade: String(grade) }));
}

export function generateMetadata({ params }: ClassPageProps): Metadata {
  const grade = Number(params.grade);
  const classroom = getClassroomByGrade(grade);

  if (!classroom) {
    return { title: "Classroom Not Found" };
  }

  return {
    title: `Class ${classroom.grade} | Learn Online`,
    description: classroom.subtitle
  };
}

export default function ClassPage({ params }: ClassPageProps) {
  const grade = Number(params.grade);
  const classroom = getClassroomByGrade(grade);

  if (!classroom) {
    notFound();
  }

  return (
    <main className="container">
      <section
        className="class-hero glass"
        style={
          {
            "--primary": classroom.theme.primary,
            "--secondary": classroom.theme.secondary,
            "--glow": classroom.theme.glow
          } as CSSProperties
        }
      >
        <Link href="/" className="back-link">
          ← All classes
        </Link>
        <p className="eyebrow">Class {classroom.grade}</p>
        <h1>{classroom.title}</h1>
        <p className="subtext">{classroom.subtitle}</p>
      </section>

      <section className="content-grid">
        <article className="glass panel">
          <h2>Learning material</h2>
          <div className="resource-list">
            {classroom.resources.map((resource) => (
              <div key={resource.title} className="resource-item">
                <div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
                <div className="resource-meta">
                  <span>{resource.type}</span>
                  <span>{resource.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="glass panel">
          <h2>Video lessons</h2>
          <div className="video-list">
            {classroom.videos.map((video) => (
              <div key={video.title} className="video-item">
                <div className="video-thumb">▶</div>
                <h3>{video.title}</h3>
                <p>{video.topic}</p>
                <div className="video-meta">
                  <span>{video.duration}</span>
                  <span>{video.teacher}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="glass panel">
          <h2>Flashcards</h2>
          <Flashcards cards={classroom.flashcards} />
        </article>
      </section>
    </main>
  );
}
