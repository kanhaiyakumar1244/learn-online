"use client";

import { useMemo, useState } from "react";
import type { Flashcard } from "@/lib/classroom-data";

type FlashcardsProps = {
  cards: Flashcard[];
};

export default function Flashcards({ cards }: FlashcardsProps) {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const card = useMemo(() => cards[active], [active, cards]);

  return (
    <div className="flashcards-widget">
      <div className="flashcard-shell" onClick={() => setRevealed((prev) => !prev)}>
        <p className="flashcard-label">{revealed ? "Answer" : "Question"}</p>
        <p className="flashcard-text">{revealed ? card.answer : card.prompt}</p>
        <p className="flashcard-hint">Tap card to flip</p>
      </div>

      <div className="flashcard-controls" role="tablist" aria-label="Flashcard selector">
        {cards.map((item, index) => (
          <button
            key={item.prompt}
            type="button"
            className={`flashcard-dot ${active === index ? "active" : ""}`}
            onClick={() => {
              setActive(index);
              setRevealed(false);
            }}
            aria-label={`Open flashcard ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
