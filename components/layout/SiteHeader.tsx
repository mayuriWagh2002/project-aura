import Link from "next/link";

/**
 * SiteHeader
 *
 * The persistent nav element from the Engineering Architecture's
 * folder structure (Part 2, components/layout/) and the Experience
 * Architecture's navigation philosophy (Part 8): "Visible, not
 * hidden — but quiet. A persistent, minimal indicator (not a
 * traditional nav bar)... closer to a running checklist of
 * 'structures inspected' than a menu." Design Bible Part 6 reinforces
 * this: "rendered as a minimal, text-based running list rather than
 * an icon-heavy nav bar — icons are avoided wherever text can do the
 * same job more precisely."
 *
 * Sprint 1 scope: the site identity link only. The Docket-position
 * indicator itself is a stateful Client Component that tracks which
 * structures a visitor has inspected (Engineering Architecture Part
 * 1, "Interaction layer") — it has nothing to track until the Docket
 * and Inspection routes exist (Milestones 5–7), so it isn't built
 * here. This header is a Server Component; it stays that way until
 * the indicator is added, per "default to Server Components
 * everywhere... only add 'use client' to the smallest possible
 * boundary" (Engineering Architecture Part 1 / Part 12, #11).
 *
 * The site identity is a link, not a heading — every page owns its
 * own single `<h1>` (Design Bible Part 9 / Engineering Architecture
 * Part 7, "one `<h1>` per page"), so the header must not compete
 * with it.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-neutral-100">
      <div className="max-w-reading mx-auto flex w-full items-center px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
        <Link
          href="/"
          className="font-display text-body tracking-body text-ink font-medium"
        >
          AURA
        </Link>
        {/* Docket-position indicator mounts here once the Docket and
            Inspection routes exist (Milestone 7). */}
      </div>
    </header>
  );
}
