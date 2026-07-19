import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

import "./globals.css";

// Root layout — the global application shell (Sprint 1).
//
// Composition follows the Engineering Architecture's component
// hierarchy (Part 4): "RootLayout → page-level Server Components...
// → shared layout/ primitives." This file owns the two persistent
// landmarks (header, footer) that wrap every route; each page owns
// its own <main> and single <h1> (Part 7, "one <h1> per page").
//
// `#main-content` is a plain <div>, not a <main> element, precisely
// so it never competes with a page's own <main> landmark — it exists
// only as a stable, permanent skip-link target that works whether or
// not the page inside it has been built yet.
//
// Fonts (next/font, per Engineering Architecture Part 6) aren't
// loaded here — Sprint 1's scope is layout/shell/navigation/route
// structure, not typeface loading. --font-display/body/mono
// (styles/tokens.css) still resolve to the system-font placeholders
// from Sprint 0B; only their values change when fonts are added.

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
      <body className="bg-background text-ink font-body flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="bg-background text-ink focus:ring-verified focus:rounded-hairline sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:ring-2 focus:outline-none"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <div id="main-content" className="flex-1">
          {children}
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}
