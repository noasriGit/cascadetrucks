<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes, APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router) marketing site (`cascadetrucks`). Node 22 is available on the VM. Scripts live in `package.json` (`dev`, `build`, `start`, `lint`, `test`, `validate:sitemap`); use those rather than duplicating commands.

- Run the dev server with `npm run dev` (http://localhost:3000). The update script already runs `npm install`, so dependencies are ready.
- Tests are Node's built-in test runner over `lib/sitemap/*.test.ts` (`npm test`); there is no broader test suite.
- Env vars are all optional for local dev. The quote form (`app/actions/quote.ts` + `lib/email/quote-lead.ts`) only delivers email when `RESEND_API_KEY` is set; without it, submitting a valid quote returns a user-facing "we couldn't send your request" error instead of redirecting to `/quote/confirmation`. Form rendering and server-side validation work without any secrets. Optional overrides: `QUOTE_LEAD_TO_EMAIL`, `QUOTE_LEAD_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
