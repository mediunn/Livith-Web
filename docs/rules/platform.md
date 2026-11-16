# Web-specific guidance

## Structure and conventions
- Keep FSD responsibilities: app (initialization/providers/router), pages (route screens), widgets (composed independent UI), features (user behavior), entities (domain data/state), shared (domain-independent UI/utilities/hooks).
- Preserve camelCase variables/functions, PascalCase components/component files and existing React/JSX conventions. Do not restructure the app as part of workflow cleanup.

## Verification
- Existing package scripts: `npm run build` (TypeScript + Vite), `npm run lint`, `npm run build-storybook`. Test configuration is in `vite.config.ts` and `.storybook/` (Vitest/Playwright); there is no package `test` script. Choose an existing suitable command and state the browser/dependency prerequisites before claiming test success.
- UI changes need browser checks at affected viewport sizes. WebView changes need the relevant iOS/Android host flow and bridge compatibility checks; distinguish browser-only results from host-device results.
- `package-lock.json` exists while Chromatic CI runs `yarn`; package manager alignment is follow-up work. Do not silently change dependencies, lockfiles or CI in a documentation task.
- ESLint module syntax and Prettier configuration discovery need separate execution checks. Presence of scripts/configuration alone does not prove they run successfully.

## Deployment (observed 2026-11-16)
- GitHub/Vercel records show Production success for main commit `c78ba02` (2026-08-26) and Preview success for develop commit `67b9aee` (2026-11-08). Feature PRs also receive Preview deployments.
- README historically described main as production and develop as integration. These observations do not prove the current Vercel Production Branch setting: an older develop-history commit also has a Production record.
- Two Vercel team deployment URLs occur for the same commits. Which integrations remain active needs dashboard confirmation.
- `.github/workflows/chromatic.yml` publishes Storybook on push; it is separate from service deployment. `vercel.json` configures routing, not the deployment branch.
- Current production branch, domain mapping and rollback procedure are **unverified** because dashboard access requires login. Do not invent a main-only trigger, a release branch policy, or a tested rollback runbook.
- Follow up with read-only dashboard checks before changing deployment rules. Do not treat a successful Preview as proof of production verification.

## Security
- Do not read or expose secret-bearing `.env` or service config values for routine exploration. Use redacted examples and key names.
- Do not commit credentials or log authentication payloads. Browser-bundled configuration is visible to clients; do not place server secrets in it.
- Follow existing auth/bridge boundaries. Changes to these boundaries require user decisions.
