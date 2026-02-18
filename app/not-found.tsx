import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <section className="glass hero-card">
        <p className="eyebrow">404</p>
        <h1>Classroom not found</h1>
        <p className="subtext">The class you requested does not exist yet.</p>
        <Link href="/" className="back-link">
          ← Return to classes
        </Link>
      </section>
    </main>
  );
}
