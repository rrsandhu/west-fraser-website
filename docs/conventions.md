# West Fraser Developments — Code Conventions

## Routes & Folders

| Rule | Example |
|------|---------|
| App route folders use **kebab-case** | `app/customer-service/` |
| Dynamic segments use **descriptive nouns** | `[slug]` not `[id]` |
| Route paths match the nav label | `/residential`, `/hospitality` |

## File Naming

| Type | Convention | Example |
|------|-----------|---------|
| React components | **PascalCase** | `ContactForm.tsx` |
| Data / utility files | **camelCase** | `projects.ts` |
| Config files | **camelCase** | `next.config.ts` |
| Dev scripts | **kebab-case** | `parse-xml.mjs` |

## Folder Structure

```
wesgroup-clone/
├── app/               # Next.js App Router pages (thin — no data logic)
│   └── [route]/
│       └── page.tsx
├── components/        # All shared React components (PascalCase)
├── lib/
│   ├── types.ts       # Shared TypeScript types
│   └── data/          # Static data files (projects, etc.)
├── public/            # Static assets (images, fonts)
├── scripts/           # One-off dev scripts, data exports
└── docs/              # This file and other internal docs
```

## Import Aliases

Use `@/` for all internal imports (maps to project root):

```ts
// Good
import { projects } from "@/lib/data/projects";
import ContactForm from "@/components/ContactForm";

// Bad
import { projects } from "../projectData";
import ContactForm from "./ContactForm";
```

## Components

- **Pages** (`app/**/page.tsx`) should be thin — no inline data arrays or business logic.
- **Shared components** live in `components/`. Route-specific sub-components (client islands) also go in `components/` once they are used in more than one place.
- Mark components `"use client"` only when they use browser APIs or React hooks.

## Data

- All static data lives in `lib/data/`.
- TypeScript types live in `lib/types.ts`.
- Data files export named exports (not default exports) for easier tree-shaking.

## Styling

- Tailwind CSS v4 utility classes are the primary styling method.
- Design tokens (colors, shadows) are defined as CSS custom properties in `app/globals.css` inside `@layer base`.
- Avoid inline `style={{}}` except for values that require `clamp()` or other CSS functions unsupported by Tailwind.
