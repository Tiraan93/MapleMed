# MapleMed Portfolio

A comprehensive portfolio management system for healthcare professionals in the MapleMed ecosystem. Originally built as SCA Portfolio AI for UK GP trainees to generate structured portfolio case reviews from free-text case notes.

## Part of MapleMed

This package is part of the **MapleMed monorepo**. See the [root README](../README.md) for the full project structure and getting started guide.

## Quick Start (from this directory)

**Windows:**
```powershell
npm install
.\setup.cmd
.\start.cmd
```

Open [http://localhost:3003](http://localhost:3003).

**Mac/Linux:**
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes npm)
- An API key for your preferred LLM provider (see below)

## Configuration

Edit `.env.local` in this directory:

```
LLM_PROVIDER=openai
OPENAI_API_KEY=sk_...
```

### Supported AI Providers

| Provider | Cost | Setup |
|----------|------|--------|
| **OpenRouter** (default) | Pay-as-you-go | `OPENROUTER_API_KEY` from [openrouter.ai/keys](https://openrouter.ai/keys) |
| **Groq** | Free tier | `LLM_PROVIDER=groq` and `GROQ_API_KEY` from [console.groq.com](https://console.groq.com/keys) |
| **Ollama** | Free, local | Install [Ollama](https://ollama.com), then `LLM_PROVIDER=ollama` |
| **OpenAI** | Paid | `LLM_PROVIDER=openai` and `OPENAI_API_KEY` |

Without any key configured, the app runs in **demo mode** with a sample review.

## Scripts

- `npm run dev` — Start dev server on port 3003
- `npm run build` — Production build
- `npm run start` — Run production build
- `npm run lint` — Run ESLint
- `npm run test:descriptors` — Test RCGP descriptor logic
- `npm run sync:descriptors` — Sync RCGP descriptors

## Rate Limiting

The API endpoints are rate-limited to **2 requests per IP per minute** to protect against abuse. For production deployments on Vercel, configure Upstash Redis:

```
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

## Important

AI-generated content must be reviewed before submission. This tool is not medical advice.
