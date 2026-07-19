import type { ReactNode } from "react";

/**
 * ReadingColumn
 *
 * The single, consistent content width referenced by the Design Bible,
 * Part 5: "a single, fairly narrow reading-optimized max-width for
 * body content... applied uniformly across every stage of the
 * experience architecture, so that the Docket, a structure's report,
 * and the Foundation Report all feel like the same document."
 *
 * Every content page (Docket, each Inspection, Foundation, Contact —
 * Milestones 5–8) wraps its content in this component instead of
 * choosing its own width, per the Engineering Architecture's rule
 * that container width is "enforced structurally, not by convention
 * that could drift page to page" (Part 4, "Shared layouts"). The
 * width itself is the `--container-reading` token (styles/tokens.css),
 * not a value chosen here.
 *
 * A Server Component — it has no interactivity of its own, only
 * layout. `as` lets a caller pick the right landmark element (e.g.
 * `main` for a page's primary content) without this component making
 * that decision on the page's behalf.
 */

type ReadingColumnProps = {
  children: ReactNode;
  as?: "div" | "main" | "section" | "article";
  className?: string;
};

export function ReadingColumn({
  children,
  as: Tag = "div",
  className,
}: ReadingColumnProps) {
  return (
    <Tag
      className={[
        "max-w-reading mx-auto w-full px-3 sm:px-4 lg:px-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
