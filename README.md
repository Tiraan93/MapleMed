# MapleMed Website

A professional single-page landing site for **MapleMed** — a healthcare company
developing modern clinics in Canada and building a team of UK-qualified and
internationally trained doctors.

> **Tagline:** Building modern clinics in Canada with UK-trained medical talent.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Fully
responsive, accessible, and production-ready, with a server-side mailing list
API that integrates with [Brevo](https://www.brevo.com/).

---

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS 3
- Server-side API route for mailing list sign-ups (Brevo)

## Project structure

```
src/
  app/
    layout.tsx            # Root layout + SEO metadata
    page.tsx              # Single-page landing (composes all sections)
    globals.css           # Tailwind layers + shared component classes
    privacy/page.tsx      # /privacy route (Privacy Policy + Terms)
    api/subscribe/route.ts# Server-side Brevo subscription endpoint
  components/
    Logo.tsx              # SVG logo (maple leaf + medical cross + wordmark)
    Header.tsx            # Sticky header w/ responsive nav + CTA
    Hero.tsx              # Hero section
    About.tsx             # About MapleMed
    Clinics.tsx           # Our Clinics cards
    Doctors.tsx           # For Doctors
    Process.tsx           # 5-step process
    Join.tsx              # Register-interest section wrapper
    MailingListForm.tsx   # Validated form (loading/success/error + honeypot)
    FAQ.tsx               # Accordion FAQ
    Trust.tsx             # Responsible & transparent section
    Footer.tsx            # Footer
```

## Getting started

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.example .env.local
#   (On Windows PowerShell: Copy-Item .env.example .env.local)

# 3. Run the dev server
npm run dev
```

Open <http://localhost:3000>.

> **Note on the mailing list in development:** If `BREVO_API_KEY` and
> `BREVO_LIST_ID` are not set, the `/api/subscribe` route returns a **mock
> success** response so you can test the full form UX without a live Brevo
> account. You'll see a `[subscribe] ... mock success` warning in the terminal.

## Mailing list (Brevo) integration

The form posts to `POST /api/subscribe`, which runs **only on the server** and
creates/updates a contact in your Brevo list. API keys are never exposed to the
browser.

The following attributes are stored against each Brevo contact:

| Attribute      | Value                                |
| -------------- | ------------------------------------ |
| `FIRSTNAME`    | The subscriber's first name          |
| `ROLE`         | Friendly label of the selected role  |
| `MESSAGE`      | Optional message                     |
| `SOURCE`       | `"MapleMed website"`                 |
| `CONSENT`      | `true`                               |
| `CONSENT_DATE` | ISO timestamp of submission          |

### 1. Get your Brevo credentials

1. Create a free account at [brevo.com](https://www.brevo.com/).
2. **API key:** Go to **Settings → SMTP & API → API Keys** (or
   <https://app.brevo.com/settings/keys/api>) and create a new **v3 API key**.
3. **List ID:** Go to **Contacts → Lists**. Create a list (e.g. "MapleMed
   Interest") if you don't have one. The numeric **ID** is shown in the list
   table — that's your `BREVO_LIST_ID`.
4. **(Recommended) Create contact attributes** under **Contacts → Settings →
   Contact Attributes** so they display nicely: `ROLE` (text), `MESSAGE`
   (text), `SOURCE` (text), `CONSENT` (boolean), `CONSENT_DATE` (date or text).
   `FIRSTNAME` already exists by default. Brevo will also create missing
   attributes automatically on first use.

### 2. Local environment variables

Add them to `.env.local`:

```bash
BREVO_API_KEY=xkeysib-your-real-key
BREVO_LIST_ID=2
```

Restart `npm run dev` after changing env files.

### 3. Add the keys in Vercel (production)

When deploying to [Vercel](https://vercel.com/):

1. Import the repository into Vercel (it auto-detects Next.js — no extra build
   config needed).
2. Go to your project → **Settings → Environment Variables**.
3. Add the two variables for the **Production** (and **Preview**, if you like)
   environments:
   - `BREVO_API_KEY` = your Brevo v3 API key
   - `BREVO_LIST_ID` = your numeric Brevo list ID
4. **Redeploy** so the new variables are picked up.

> These are server-only secrets. **Do not** prefix them with `NEXT_PUBLIC_`,
> and never commit real values to git (`.env.local` is git-ignored).

Alternatively, with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
vercel env add BREVO_API_KEY production
vercel env add BREVO_LIST_ID production
vercel --prod
```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build locally  |
| `npm run lint`  | Lint with ESLint                  |

## Branding

- **Colours:** deep maple red (`maple-700`), dark navy (`navy-900`), white,
  soft grey (`mist-*`), with subtle light-blue / pale-red accents.
- **Logo:** see `src/components/Logo.tsx` — an inline SVG combining a maple
  leaf, a subtle medical cross and the `MapleMed` wordmark.

## Important positioning & compliance

MapleMed is presented as a company **building and operating its own clinics**
and recruiting doctors to join the MapleMed team — not merely a recruiter
connecting doctors to third-party clinics. The site is careful **not** to
guarantee employment, medical registration, visas or relocation, and directs
users to official authorities for licensing and immigration matters.
