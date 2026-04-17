# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Forever New (`artifacts/forever-new`) — Preview at `/`
- **Type**: React + Vite web app
- **Purpose**: Forever New pre-loved fashion brand landing page for Karatina, Kenya
- **Design**: Chrome Noir aesthetic — dark #0A0A0A background, chrome green (#00FF88) and gold (#FFD700) accents
- **Features**:
  - Hero section with gradient headline, VIP list CTA, AI Stylist WhatsApp link
  - Collections grid (Women's, Men's, Kids') with product cards
  - Shoe Vault with tiered shelf display (sneakers + formal)
  - Locations section with 2 branch cards (KWFT & Pacoon Junction) + Google Maps
  - Floating Action Menu (FAB) with WhatsApp, call, and branch selection
  - Branch Selection Modal linking to WhatsApp per branch
  - Sticky Collections Assist bar (appears when viewing collections)
  - Mobile menu, scroll-reveal animations
- **Contact**: +254 793 606 050 (WhatsApp & phone)
- **Fonts**: Inter + Space Grotesk (Google Fonts)

### API Server (`artifacts/api-server`) — Preview at `/api`
- Express server with health check endpoint
- No database schema provisioned yet

### Canvas (`artifacts/mockup-sandbox`) — Preview at `/__mockup`
- Mockup sandbox for UI prototyping

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/forever-new run dev` — run Forever New frontend

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
