# Wildlife explorer

**[https://wildlife-explorer.vercel.app/](https://wildlife-explorer.vercel.app/)**

This is the frontend UI that let's you explore the wildlife animals and their details. It is build with React + Typescript + Vite. The API used for this is [API Ninjas Animals API](https://api-ninjas.com/api/animals). To secure the API key, the api is proxied from a cloudflare worker. The Proxy worker code can be found [here](https://github.com/VinitSarvade/wildlife-explorer/blob/main/cloudflare/worker.js)

## To run this code locally

1. Clone or download the repository to the desired location
2. Run `pnpm install --frozen-lockfile` to install the dependencies
3. Run `pnpm dev` to start the development server
4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## To run the test cases

1. Run `pnpm test` to run the test cases

## To build the code

1. Run `pnpm build` to build the code
2. Run `pnpx server -l 3200 ./dist` to serve the build code
3. Open [http://localhost:3200](http://localhost:3200) to view it in the browser.
