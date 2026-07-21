import Link from "next/link";

import { ReadingColumn } from "@/components/layout/ReadingColumn";

/**
 * Route structure: the not-found file Next.js renders for any
 * unmatched path across the entire app.
 *
 * This must live at app/not-found.tsx, not app/(site)/not-found.tsx.
 * A not-found.tsx nested inside a route group only activates for
 * paths that already resolve into that group's rendered segment tree
 * (e.g. an explicit notFound() call from a page already inside it).
 * A genuinely unmatched path — /xyz, or /docket before that route
 * has a page.tsx — never resolves into any segment, so Next.js falls
 * back to its own built-in 404 instead of reaching a not-found.tsx
 * that lives inside a group. Only the file at the app root, next to
 * app/layout.tsx, is guaranteed to catch every unmatched path.
 *
 * Required by the Experience Architecture's "no dead ends" navigation
 * rule (Part 8) — a lost visitor still gets the persistent
 * header/footer shell (applied automatically by the root layout)
 * plus one unambiguous way back, consistent with "visitors must
 * always know what to do next, without needing it explained"
 * (Part 10, #4).
 */
export default function NotFound() {
  return (
    <ReadingColumn as="main" className="py-8 sm:py-12">
      <h1 className="font-display text-headline tracking-display text-ink font-bold">
        Not found
      </h1>
      <p className="text-body text-ink mt-3">
        This page doesn&rsquo;t exist.{" "}
        <Link href="/" className="text-ink underline underline-offset-2">
          Return to the homepage
        </Link>
        .
      </p>
    </ReadingColumn>
  );
}