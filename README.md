# 🚀 SaaS Boilerplate

> A modern, production-ready SaaS boilerplate built with Next.js and the latest web technologies.

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Authentication (Clerk)](#-authentication-clerk)
- [Security (Arcjet)](#-security-arcjet)
- [UI Components (Shadcn)](#-ui-components-shadcn)
- [Database (Drizzle + PostgreSQL)](#-database-drizzle--postgresql)
- [Webhooks](#-webhooks)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🛠 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Security:** Arcjet
- **UI Components:** Shadcn/ui
- **Database:** PostgreSQL with Drizzle ORM
- **Deployment:** Vercel

## ✨ Features

- [ ] User authentication and management
- [ ] Rate limiting and security protection
- [ ] Modern UI components
- [ ] Database schema and migrations
- [ ] Webhook handling
- [ ] Type-safe API routes
- [ ] Responsive design

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd wall-streetr

# Install dependencies
npm install

# Set up environment variables (see Environment Setup section below)
cp .env.example .env.local

# Run the development server
npm run dev
```

## 📦 Installation

### Dependencies

```bash
# Core dependencies
npm install @clerk/nextjs @arcjet/next @t3-oss/env-nextjs zod
npm install googleapis google-auth-library
npm install @supabase/supabase-js

# UI dependencies
npx shadcn@latest init
npm install next-themes lucide-react

# Development dependencies
npm install -D @types/node typescript
```

## 🎨 UI Components (Shadcn)

npx shadcn@latest add button dropdown-menu

### Tweakcn Installation

npx shadcn@latest add https://tweakcn.com/r/themes/nature.json

### 🎨 Font Configuration --> Montserrat font is configured in layout.tsx and globals.css --> font-sans uses var(--font-montserrat)

### Usage

<!-- Add component usage examples -->

## 🗄️ Database (Drizzle + PostgreSQL)

### Setup

<!-- Add database setup instructions -->

### Schema

<!-- Add schema information -->

### Migrations

<!-- Add migration commands -->

## 🔗 Webhooks

### Clerk Webhooks

<!-- Add webhook setup instructions -->

## 🚀 Deployment

### Vercel Deployment

<!-- Add deployment instructions -->

### Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

# Arcjet Security
ARCJET_KEY=your_arcjet_key_here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

#### Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Gmail API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/gmail/callback` (development)
   - `https://your-domain.com/api/auth/gmail/callback` (production)
6. Copy the Client ID and Client Secret to your environment variables

## 🤝 Contributing

<!-- Add contributing guidelines -->

---

**Built with ❤️ for rapid SaaS development**
