src/
│
├── app/                                # Next.js 14 App Router
│   ├── (main)/                         # Main app routes
│   │   ├── page.tsx                    # Home page
│   │   └── pokemon/                    # Pokemon details page
│   │       └── [id]/page.tsx
│   ├── layout.tsx                      # Root layout
│   └── providers.tsx                   # Global providers
│
├── components/                         # Reusable UI components
│   ├── common/                         # Common components (e.g., buttons, inputs)
│   └── features/                       # Feature-specific components
│       ├── PokemonList.tsx             # Pokemon list component
│       └── PokemonDetails.tsx          # Pokemon details component
│
├── hooks/                              # Custom React hooks
│   ├── usePokemon.ts                   # Hook for fetching Pokemon list
│   └── usePokemonDetails.ts            # Hook for fetching Pokemon details
│
├── lib/                                # Utility functions and libraries
│   ├── api/                            # API client and services
│   │   ├── client.ts                   # Axios client
│   │   └── pokemonService.ts           # Pokemon-related API calls
│   └── constants/                      # Constants (e.g., API endpoints)
│
├── stores/                             # Zustand stores
│   └── useUIStore.ts                   # UI-related state (e.g., theme, modals)
│
└── types/                              # TypeScript types
    ├── api/                            # API response/request types
    └── pokemon.ts                      # Pokemon-related types

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
