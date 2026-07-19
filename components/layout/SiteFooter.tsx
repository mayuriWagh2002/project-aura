/**
 * SiteFooter
 *
 * The footer shell requested for Sprint 1. The Design Bible and
 * Experience Architecture don't specify footer content directly —
 * what would naturally live here (a Contact link, per Experience
 * Architecture Part 8's "no dead ends" rule; a restatement of the
 * Sign-Off) depends on routes that don't exist yet (Contact:
 * Milestone 8; the Sign-Off stage: Milestone 8). Linking to a route
 * with nothing behind it yet would itself be a broken promise to the
 * visitor, which the "no dead ends" principle exists to prevent — so
 * this stays a genuine, empty structural landmark rather than a
 * link to somewhere that isn't real yet.
 *
 * Server Component — no interactivity.
 */
export function SiteFooter() {
  return <footer className="border-t border-neutral-100 py-6" />;
}
