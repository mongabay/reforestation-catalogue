# reforestation-catalogue
## Getting started (front-end)

In order to start modifying the app, please make sure to correctly configure your workstation:

1. Make sure you you have [Node.js](https://nodejs.org/en/) installed
2. (Optional) Install [NVM](https://github.com/nvm-sh/nvm) to manage your different Node.js versions
3. (Optional) Use [Visual Studio Code](https://code.visualstudio.com/) as a text editor to benefit from automatic type checking
4. Configure your text editor with the [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [EditorConfig](https://editorconfig.org/) plugins
5. Use the correct Node.js version for this app by running `nvm use`; if you didn't install NVM (step 2), then manually install the Node.js version described in `.nvmrc`
6. Install the dependencies: `yarn` (or `npm install`)
7. Run the server: `yarn dev` (or `npm run dev`)

You can access a hot-reloaded version of the app on [http://localhost:3000](http://localhost:3000).

The application is built using [React](https://reactjs.org/) and the framework [Next.js](https://nextjs.org/). The styles use [Sass](https://sass-lang.com/) and the [Bootstrap](https://getbootstrap.com/) framework.

A continuous deployment system is in place. Each time you push to the `main` branch, the application is deployed in GitHub Pages through a GitHub Action defined in `.github/workflows/build.yml`. You can see the status of the build in the “Actions” tab of the repository on GitHub.

## Environment variables (front-end)

The application is configured via environment variables stored in a `.env` file that must be placed at the root of the `frontend` folder. You can create one by copying `.env.sample` and setting a value for each key.

Below is a description of each of the keys.

| Variable                      | Description                                                                                                                                             |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| NEXT_PUBLIC_API_URL           | Complete URL from which the API is served (including https) and without a trailing slash (e.g. https://vizzuality.com)                                  |
| NEXT_PUBLIC_MONGABAY_DATA_URL | Base path to where the `mongabay-data.json` file is server. The actual file should be available at `<NEXT_PUBLIC_MONGABAY_DATA_URL>/mongabay-data.json` |
