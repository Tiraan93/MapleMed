# MapleMed

A healthcare platform with a professional landing site and portfolio system for **MapleMedic** — a company founded by GPs that recruits UK-qualified GPs into clinics across Canada.

> **Tagline:** By NHS doctors, for NHS doctors.

## Project Structure

This is a monorepo containing multiple projects:

```
MapleMed/
  ├── portfolio/           # PortfolioAI - Portfolio management system
  │   ├── app/
  │   ├── components/
  │   ├── lib/
  │   ├── public/
  │   ├── package.json
  │   ├── next.config.ts
  │   └── ...
  │
  ├── src/                 # MapleMed website landing site
  │   ├── app/
  │   ├── components/
  │   └── ...
  │
  ├── public/              # Shared public assets
  ├── package.json         # Root monorepo config
  └── README.md
```

## Packages

### 1. **Portfolio** (`portfolio/`)

A comprehensive portfolio management system for SCA (Surgical Care Associates) healthcare professionals.

- **Tech:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Zod
- **Port:** 3003
- **Dev:** `cd portfolio && npm run dev`

**Features:**
- OpenAI integration for professional descriptors
- RCGP (Royal College of General Practitioners) descriptor sync
- Dynamic portfolio generation
- Real-time data management

### 2. **MapleMed Website** (`src/`)

A professional single-page landing site for MapleMed with mailing list integration.

- **Tech:** Next.js 14, React 18, TypeScript, Tailwind CSS 3
- **Port:** 3000 (default)
- **Dev:** `npm run dev` (from root)

**Features:**
- Responsive landing page
- Brevo email mailing list integration
- Healthcare professional registration

## Quick Start

**Requirements:** Node.js 18.17+

### Run the MapleMed Website

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>

### Run the Portfolio System

```bash
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3003>

## Development

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `npm run dev`         | Start website dev server (port 3000)  |
| `npm run build`       | Production build                      |
| `npm run start`       | Run production build locally          |
| `npm run lint`        | Lint with ESLint                      |

For portfolio commands, run them from the `portfolio/` directory.

## Website Configuration

### Mailing List (Brevo)

The website includes a mailing list signup form with Brevo integration.

**Setup:**
1. Create a free account at [brevo.com](https://www.brevo.com/)
2. Get your API key from **Settings → SMTP & API → API Keys**
3. Get your List ID from **Contacts → Lists**
4. Add to `.env.local`:
   ```
   BREVO_API_KEY=xkeysib-your-real-key
   BREVO_LIST_ID=2
   ```

In development, if env vars are not set, the form returns a mock success response for testing.

**For production (Vercel):**
- Add `BREVO_API_KEY` and `BREVO_LIST_ID` to project environment variables
- Do not prefix with `NEXT_PUBLIC_` (server-only secrets)

## Branding

- **Colors:** deep maple red (`maple-700`), dark navy (`navy-900`), soft grey (`mist-*`)
- **Logo:** `src/components/Logo.tsx` — maple leaf + medical cross + wordmark

## Legal Note

MapleMedic is a recruitment company. It is not a medical regulator or an immigration adviser, and it does not guarantee a job offer, Canadian medical registration, a work permit or any immigration outcome.
