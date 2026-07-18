# Project AURA

Source of truth for all product, design, and engineering decisions lives in
the six locked project documents (Creative Direction, Manifesto, Experience
Architecture, Design Bible, Production Blueprint, Engineering Architecture).
This README documents build status only — it does not restate or interpret
those decisions.

## Status: Sprint 0A — project scaffold

This sprint sets up tooling only. No pages, components, or content have been
built yet.

**Done:**

- Next.js (App Router) + TypeScript + Tailwind CSS scaffold
- ESLint + Prettier, wired together (`eslint-config-prettier`)
- Folder structure per Engineering Architecture, Part 2
- GitHub Actions CI: lint + type-check (Milestone 1 scope)

**Not yet built** (see Engineering Architecture, Part 11 for the full
milestone plan):

- Design tokens (Milestone 2)
- Root layout typography/fonts, reading-column layout (Milestone 3)
- Content model + validation (Milestone 4)
- Landing, Docket, Inspection, Foundation, Contact pages (Milestones 5–8)
- Load Test interaction (Milestone 7)
- Motion, SEO/a11y/performance hardening, content authoring, deploy
  (Milestones 9–12)

## Commands

```bash
npm run dev           # local dev server
npm run build          # production build
npm run lint            # ESLint
npm run format:check    # Prettier check
npm run format           # Prettier write
npm run type-check       # tsc --noEmit
```

## Folder structure

See Engineering Architecture, Part 2, for the authoritative structure and
what belongs (and never belongs) in each folder. Folders that don't yet have
real content contain a `.gitkeep` placeholder.
