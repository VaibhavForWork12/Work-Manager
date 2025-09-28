# Copilot Instructions for work-manager

## Project Overview
- This is a Next.js project (see `next.config.mjs`, `src/app/`), using Tailwind CSS (`tailwind.config.js`, `postcss.config.mjs`).
- The app is organized by feature: see `src/app/` for route-based pages, and `src/components/` for reusable UI.
- Data and business logic are separated into `src/models/`, `src/services/`, and `src/helper/`.
- User authentication and session logic are handled via API routes in `src/app/api/` (notably `login/`, `logout/`, `users/`).

## Key Patterns & Conventions
- **API routes**: All backend logic is in `src/app/api/`. Each subfolder (e.g., `tasks/`, `users/`) maps to a REST endpoint. Dynamic routes use `[param]` syntax.
- **Context**: User state is managed via React context (`src/context/userContext.js`, `userProvider.js`).
- **Component structure**: UI is split into feature folders (e.g., `homepage/`, `infopage/`) under `src/components/`.
- **Assets**: Images and static files are in `public/` and `src/assets/`.
- **Models/Services**: Data models in `src/models/` and business logic in `src/services/` are used by API routes.
- **Error/loading UI**: Each route can have `error.js` and `loading.js` for error and loading states (see `src/app/about/`).

## Developer Workflows
- **Start dev server**: `npm run dev` (see `README.md`).
- **Edit main page**: `src/app/page.js`.
- **Add API route**: Create a new folder/file in `src/app/api/`.
- **Add UI component**: Place in `src/components/`, grouped by feature.
- **Authentication**: Use context and API routes for login/logout.
- **Styling**: Use Tailwind CSS utility classes in components.

## Integration & Data Flow
- Frontend pages call API routes (e.g., `/api/tasks`) for data.
- API routes use models/services for DB logic (see `src/models/`, `src/services/`).
- User context is updated on login/logout via API.

## Examples
- To add a new task API: add logic to `src/app/api/tasks/route.js` and update `src/services/taskService.js`.
- To show tasks: use `src/app/show-tasks/ShowTask.jsx` and fetch from `/api/tasks`.

## Special Notes
- Dynamic API and page routes use `[param]` syntax (see `src/app/api/tasks/[taskId]/route.js`).
- Use `src/app/middleware.js` for request/response middleware.
- All business logic should be in `services/`, not directly in API routes.

---
For more, see `README.md` and explore `src/app/`, `src/components/`, and `src/services/` for patterns.
