import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Online",
  description:
    "An elegant Next.js classroom app for classes 5-12 with materials, videos, and flashcards.",
  metadataBase: new URL("https://learn-online.local")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-orb orb-1" aria-hidden />
        <div className="background-orb orb-2" aria-hidden />
        {children}
      </body>
    </html>
  );
}
