# Ember Lane

Sample website for a wood-fired neighbourhood restaurant — dark, appetite-led, with a tabbed menu and table reservations. Built as a portfolio piece to show prospective hospitality clients.

Next.js 16, React 19, Tailwind CSS v4, TypeScript.

## Getting started

Requires Node.js >= 20.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Setting it up for a real restaurant

1. **`src/config/site.ts`** — name, address, directions, phone, email, opening hours.
2. **`src/data/content.ts`** — hero, tonight's special, the story, the **full menu** (tabs → courses → dishes), private dining and reservation options. Wrap words in `*asterisks*` to set them in bold ember. Menus change weekly, so this is the file the owner will ask you to update most.
3. **`src/app/globals.css`** — brand colours at the top. `--ember` is the one accent; everything else is the dark room.
4. **Photography** — elements with the `plate` class are gradient placeholders. Replace with `next/image` once you have food and room photos. For a restaurant, photography matters more than anything else on this list.
5. **`src/app/icon.svg`** — favicon.

## Reservations

The form confirms in place and sends nothing. Most restaurants already use a booking provider — before launch, either embed theirs or POST to a route handler (`pzaideletrato/src/app/api/contact/route.ts` has the nodemailer pattern).

## Deploy

Push to a Git host and import the repo on [Vercel](https://vercel.com/new).
