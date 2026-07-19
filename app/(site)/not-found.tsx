import Link from "next/link";

import { ReadingColumn } from "@/components/layout/ReadingColumn";

/**
 * Route structure: the not-found file Next.js renders for any
 * unmatched path under this route group. Required by the Experience
 * Architecture's "no dead ends" navigation rule (Part 8) — a lost
 * visitor still gets the persistent header/footer shell (applied
 * automatically by the root layout) plus one unambiguous way back,
 * consistent with "visitors must always know what to do next,
 * without needing it explained" (Part 10, #4).
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
