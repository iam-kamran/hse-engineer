# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a **Next.js 14 App Router** application for HSE (Health, Safety & Environment) certification training, targeting Gulf region professionals. All content is static JSON — there are no API routes or external data dependencies.

### Data Flow

Content lives in `/data` as JSON files and is loaded server-side via `lib/data-loaders.ts` (filesystem reads using `fs`). Pages receive data at render time; no client-side fetching occurs.

User progress (completed modules, quiz scores, bookmarks) is stored exclusively in **localStorage** via `ProgressProvider` (`components/progress/ProgressProvider.tsx`) and accessed through `hooks/useProgress.ts`.

### Key Directories

- **`app/`** — App Router pages. Route group `(learning)/` wraps certification and fundamentals routes without affecting URLs. Dynamic segments: `[cert]` for certifications, `[slug]` for fundamentals modules, `[country]` for interview prep.
- **`data/`** — All learning content as JSON. Structure mirrors routes: `data/certifications/nebosh-igc/modules/`, `data/fundamentals/modules/`, `data/interview/`, `data/glossary.json`.
- **`lib/`** — `data-loaders.ts` (JSON loading), `progress-utils.ts` (localStorage helpers), `quiz-utils.ts` (scoring logic).
- **`components/content/ModuleContent.tsx`** — Renders module blocks by type: `heading`, `paragraph`, `keyPoint`, `definition`, `table`, `example`, `gulfNote`, `list`, `warning`.
- **`types/`** — TypeScript interfaces for `Module`, `Quiz`, `InterviewQuestion`, `UserProgress`.

### Module Block System

Content modules use a typed block system (`types/module.ts`). Each block has a `type` field that `ModuleContent.tsx` switches on to render the appropriate component. When adding new content, use existing block types; adding a new type requires updating both the type definition and the renderer.

### Certifications Covered

NEBOSH IGC (14 modules), IOSH Managing Safely (7), OSHA 30-Hour (20), First Aid/CPR (6), NEBOSH Diploma (5), ISO 45001/14001 Lead Auditor (7). Interview prep covers Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, and Oil & Gas.

### Path Aliases

`@/*` resolves to the project root (configured in `tsconfig.json`). Use `@/components/...`, `@/lib/...`, etc.
