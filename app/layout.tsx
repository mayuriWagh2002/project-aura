import type { Metadata } from "next";
import "./globals.css";

// Root layout — Sprint 0A scaffold only.
// Fonts (per Part 6 of the Engineering Architecture: self-hosted via
// next/font) and the persistent shell (nav, position-indicator mount
// point) are introduced in Milestone 3, not here.

export const metadata: Metadata = {
  title: "AURA",
  description: "Project AURA — scaffold in progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
