# Journey Portfolio (Next.js + Tailwind + Framer Motion)

An interactive, timeline-based personal portfolio where a robot moves along a journey road as the user scrolls.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript

## Project Structure

- `app/page.tsx`
- `app/components/Hero.tsx`
- `app/components/Timeline.tsx`
- `app/components/Robot.tsx`
- `app/components/MilestoneCard.tsx`
- `app/components/Projects.tsx`
- `app/components/Skills.tsx`
- `app/components/Certifications.tsx`
- `app/components/Contact.tsx`

## Features

- Full-screen hero section
- Scroll-driven timeline journey
- Robot motion tied to scroll progress (`useScroll`, `useTransform`)
- Animated milestone cards (`whileInView`)
- Project cards with hover interactions
- Animated skill bars
- Certification cards
- Contact + chatbot placeholder panel
- App loading animation
- Dark-mode-first visual style
- Responsive layout (mobile + desktop)

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Build & Production Run

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Keep default Next.js build settings.
4. Click **Deploy**.

Vercel will automatically detect Next.js and deploy the App Router project.

## Customization Notes

- Update milestone marks/details in `app/components/Timeline.tsx`.
- Replace contact links and email in `app/components/Contact.tsx`.
- Replace GitHub/demo links in `app/components/Projects.tsx`.
- Replace `public/resume.pdf` with your actual resume file.
