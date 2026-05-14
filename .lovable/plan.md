## Plan: Connect Google Search Console

Link your existing Google Search Console account to this project so the agent can read your verified sites, search analytics, and (if needed) verify new domains on your behalf.

### What happens on approval

1. Trigger the connection picker for **Google Search Console**. You'll choose your existing Google account (or add one) and approve the requested scopes in a Google OAuth popup.
2. Once linked, the connection's secrets (`LOVABLE_API_KEY`, `GOOGLE_SEARCH_CONSOLE_API_KEY`) become available to the project automatically — nothing for you to copy or paste.
3. I'll verify the connection by listing your Search Console sites via the connector gateway, so we can confirm it works and see which properties are already set up.

### What this does NOT do

- No code changes, no UI, no edge functions. This is purely linking the connector so the agent can query Search Console on your behalf during chats.
- If you later want in-app features (e.g. a dashboard showing search analytics for your site), that's a follow-up build — just ask.

### After it's connected

Tell me what you'd like to do next. Common options:
- Verify and add `https://preferred-recruit-track-standards.lovable.app/` (or `track-targets.com` / `trackandfieldstandards.com`) as a Search Console property
- Pull top queries / pages / impressions for one of your existing properties
- Submit your `sitemap.xml` to a verified property
