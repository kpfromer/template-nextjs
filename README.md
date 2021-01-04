# template-nextjs

## Includes

- [eslint](https://github.com/eslint/eslint)
- [jest](https://github.com/facebook/jest) for unit/integration testing
  - Uses [`next-page-tester`](https://github.com/toomuchdesign/next-page-tester#readme) - read more
  about the project [here](https://dev.to/toomuchdesign/dom-testing-next-js-applications-46ke)
  <!-- - A GitHub workflow file for continuous testing and building. -->
- [prettier](https://github.com/prettier/prettier), [husky](https://github.com/typicode/husky),
  [lint-staged](https://github.com/okonet/lint-staged) for automatic formatting and linting
- [cypress](https://www.cypress.io/) for end-to-end tests
- [swr](https://github.com/vercel/swr) for remote data fetching
- [storybooks](https://storybook.js.org/) for testing/viewing UI components in isolation
- TODO: mdx remote
- TODO: images
- TODO: chakra ui

## Scripts

- `npm run dev` runs next.js in development mode
- `npm run test` runs all tests (jest for unit/integration and cypress for e2e)
- `npm run build` builds next.js application
- `npm start` starts the built next.js application
- `npm run lint` runs `eslint`
- `npm run format` runs `prettier`

# Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the
file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in
`pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
