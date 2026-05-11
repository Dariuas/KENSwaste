# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project
KENS Waste — a single-page marketing and booking website for a Central Texas portable toilet and septic pumping business. Business name may change.

## Commands
```
npm install       # install dependencies
npm run dev       # dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## Tech Stack
- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for all styling (no component library)
- **react-calendly** — inline Calendly booking widget (`components/Booking.tsx`)
- **react-qr-code** — QR code pointing to the booking section (`components/QRCodeSection.tsx`)
- **Resend** — transactional email for the quote/contact form (`app/api/contact/route.ts`)

## Page Architecture
Single long-scroll page (`app/page.tsx`) with anchor-linked sections:

```
Nav (sticky, #)
Hero (#)           → headline, Book + Quote CTAs
Services (#services) → pricing cards, two columns: Rentals / Septic Care
ServiceArea        → city tags for covered areas
Booking (#booking) → Calendly InlineWidget embed
QuoteForm (#quote) → form → POST /api/contact → Resend email
QRCodeSection      → QR code linking to /#booking
ContactFooter (#contact) → phone, email, quick links, footer
```

All components are in `/components`. Only `Nav.tsx`, `Booking.tsx`, `QuoteForm.tsx`, and `QRCodeSection.tsx` are client components (`"use client"`).

## Environment Variables
Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | From resend.com — enables quote form emails |
| `NEXT_PUBLIC_CALENDLY_URL` | The business's Calendly scheduling link |
| `NEXT_PUBLIC_SITE_URL` | Deployed domain (sets QR code target URL) |

## Before Going Live
1. **Phone & email** — update placeholders in `components/ContactFooter.tsx`
2. **Email recipient** — update the `to` field in `app/api/contact/route.ts`
3. **Resend sender** — once a domain is verified in Resend, update the `from` field in `app/api/contact/route.ts` (currently uses `onboarding@resend.dev` which only delivers to the Resend account owner)
4. **Calendly URL** — set `NEXT_PUBLIC_CALENDLY_URL` in deployment env vars
5. **Site URL** — set `NEXT_PUBLIC_SITE_URL` in deployment env vars

## Deployment
- **Vercel**: connect GitHub repo → add env vars in Vercel dashboard → deploys automatically
- **Netlify**: connect GitHub repo → Netlify auto-detects Next.js and applies `@netlify/plugin-nextjs` → add env vars in Netlify site settings
