# Agent Guidelines for DarkNote

## Commands
- **Dev**: `npm run dev` (Next.js with Turbopack)
- **Build**: `npm run build` (Next.js with Turbopack)
- **Lint**: `npm run lint` (Biome check)
- **Format**: `npm run format` (Biome format)
- **Start**: `npm run start` (Production server)

## Code Style
- **Formatting**: Biome, 2-space indentation, single quotes
- **Imports**: Organized imports enabled, use path aliases (`@/*` for `./src/*`)
- **Types**: Strict TypeScript, ES2017 target, React 19 types
- **Naming**: kebab-case files, PascalCase components, camelCase functions/variables
- **Components**: shadcn/ui with Radix UI, class-variance-authority variants
- **Styling**: Tailwind CSS with CSS variables, dark mode support
- **Error Handling**: Use React error boundaries, TypeScript strict mode
- **File Structure**: `src/app/` for pages, `src/components/` for components, `src/lib/` for utilities