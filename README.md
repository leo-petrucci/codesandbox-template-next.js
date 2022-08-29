# Next.js Codesandbox Projects Prettier Issue

This repo was generated with `create-next-app` and contains a minimal reproduction of a Prettier issue within Codesandbox Projects.

The only file that was added is at `pages/api/posts/[slug].ts`, there is also a copy at `pages/api/posts/index.ts`

For some reason, this file will not be formatted on save or when manually running "Format document". 

The same file, however, will format correctly if named `index.ts`.

Running Prettier CLI does not return any errors.

### Changes

From the default `create-next-app` these are the changes:

- added "baseUrl" property to tsconfig
- installed Prettier
- added `.prettierrc`
- added API files