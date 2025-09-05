# Repository Guidelines

## Project Structure & Modules
- `src/app/`: Next.js App Router pages, layouts, styles (`globals.css`).
- `src/components/`: UI and feature components (shadcn/ui + Radix UI).
- `src/lib/`: Utilities (e.g., `src/lib/utils.ts`).
- `src/data/`: Local data and config for views.
- `public/`: Static assets (SVGs, icons).
- Path alias: import from `@/*` → `./src/*`.

## Build, Test, and Development
This project uses bun. Use `bun` or `bunx --bun` for commands

- `bun run dev`: Start Next.js dev server with Turbopack.
- `bun run build`: Production build (Turbopack).
- `bun run start`: Serve the built app.
- `bun run lint`: Biome checks (lint + basic rules).
- `bun run format`: Biome format (writes changes).

Example: `bun run dev` then visit `http://localhost:3000`.

## Coding Style & Naming
- Formatting: Biome, 2-space indentation, single quotes.
- Imports: auto-organized; prefer path alias `@/...`.
- Types: TypeScript strict mode, ES2017 target, React 19 types.
- Naming: kebab-case files, PascalCase components, camelCase vars/functions.
- UI: shadcn/ui with Radix primitives and `class-variance-authority` for variants.
- Styling: Tailwind CSS (v4) with CSS variables; support dark mode.

## Commit & Pull Requests
- Commits: use imperative mood, concise scope (e.g., `add chat message input`).
- Prefer small, focused commits with clear intent; reference issues (`#123`) when relevant.
- PRs: include summary, rationale, screenshots for UI changes, and steps to verify.
- Keep diffs minimal; update docs/examples when behavior changes.

## Security & Config Tips
- Never commit secrets; use environment files (`.env.local`) ignored by Git.
- Validate user input in components and APIs; avoid trusting client data.
- Use error boundaries in complex areas to contain failures.

## Architecture Notes
- App Router with server-first React; colocate components under `src/components/*` and compose pages in `src/app/*`.
- Favor small, typed utilities in `src/lib` and variant-driven UI.
