import Link from "next/link";
import { classrooms } from "@/lib/classroom-data";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <main className="container">
      <section className="hero-card glass">
        <p className="eyebrow">Learn Online</p>
        <h1>Beautiful digital classrooms for Classes 5 to 12</h1>
        <p className="subtext">
          Explore an iOS-inspired learning experience with guided material, handpicked videos, and
          fast revision flashcards.
        </p>
      </section>

      <section className="class-grid" aria-label="Classroom list">
        {classrooms.map((room) => (
          <Link
            key={room.grade}
            href={`/class/${room.grade}`}
            className="class-card glass"
            style={
              {
                "--primary": room.theme.primary,
                "--secondary": room.theme.secondary,
                "--glow": room.theme.glow
              } as CSSProperties
            }
          >
            <div className="class-card-top">
              <span className="chip">Class {room.grade}</span>
              <span className="arrow">→</span>
            </div>
            <h2>{room.title}</h2>
            <p>{room.subtitle}</p>
            <ul>
              {room.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </main>
  );
}
