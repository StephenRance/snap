This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

```bash
npm run test
```

## To-do

A list of things that could be improved:

- Animate the card(s) when a new one is drawn.
- Application congfiguration files could be better (Jest, React Test Library, etc.)?
- Fade out the `SNAP X!` cheering when you draw a new card.
- Get the cards to change at the same time, there is a slight delay.
- Make it so the `Reset` button fetches the `shuffleCards()` data, using the existing deck ID and resetting all of the states.
- More `aria` attributes.
- No test file for the `index.tsx` page (mocking the utility functions and testing the props of the components when called).
- Overlap the `SNAP X!` cheering (with the former fading out) when you get multiple snaps in a row.
- Typing could be better?
