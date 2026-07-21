import Link from "next/link";

import { ReadingColumn } from "@/components/layout/ReadingColumn";

/**
 * Landing — "The Call-Out" (Experience Architecture Stage 0;
 * Production Blueprint, Part 2, "Landing (The Call-Out)").
 *
 * Spec, read literally:
 * - "Information hierarchy: one short line of framing text > one
 *   clear action. Nothing else." (Blueprint)
 * - "Secondary content: none by design." (Blueprint)
 * - Goal: "establish register immediately — this is not a 'digital
 *   experience,' it's a real inspection, and the visitor has just
 *   been handed the file." (Experience Architecture, Stage 0)
 * - "Information revealed: almost none — a single line establishing
 *   that a set of structures is about to be inspected, and by whom."
 *   (Experience Architecture, Stage 0)
 *
 * The framing line is written in first person specifically to answer
 * "by whom" without a separate byline element, which the "nothing
 * else" rule above doesn't leave room for. "Put under load" and
 * "inspected" are deliberate: they're the exact vocabulary of the
 * Load Test interaction (Production Blueprint Part 3), so a visitor
 * already has the site's core metaphor in hand before ever reaching
 * the Docket.
 *
 * Alignment: the Design Bible (Part 5) names the Call-Out as the one
 * place center-aligned display text is allowed ("used sparingly, and
 * only at true top-level moments (the Call-Out)"), but the Production
 * Blueprint's own Landing spec is explicit and specific: "content
 * vertically centered but left-aligned." These two locked documents
 * disagree on this one point. This implementation follows the
 * Blueprint, since it's the more specific, screen-level authority —
 * flagged for review rather than resolved silently.
 *
 * No motion: the only motion the Production Blueprint specifies
 * touching this screen is the Landing → Docket transition (Part 8),
 * which needs a real Docket on the other end to mean anything — until
 * then it would be motion without a state change to mark, which the
 * Design Bible's motion philosophy (Part 7) specifically rules out.
 * It's implemented alongside the Docket instead.
 *
 * The CTA links to /docket, which doesn't have a page yet (that
 * route is intentionally out of scope for this sprint) — the link is
 * correct, forward-looking infrastructure and will resolve as soon
 * as the Docket ships, with no further change needed here.
 */
export default function Home() {
  return (
    <ReadingColumn
      as="main"
      className="flex h-full flex-col justify-center gap-8 py-12"
    >
      <h1 className="font-display text-display tracking-display text-ink font-bold">
        I put six systems under load and inspected what actually held. This is
        the file.
      </h1>

      <Link
        href="/docket"
        className="border-verified text-verified hover:bg-verified hover:text-on-verified focus-visible:ring-verified text-body tracking-body rounded-hairline inline-flex w-fit items-center border px-4 py-3 font-medium focus-visible:ring-2 focus-visible:outline-none"
      >
        Enter the Docket
      </Link>
    </ReadingColumn>
  );
}
