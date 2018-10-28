# TypeScript React boilerplate

This boilerplate is turned for Webpack 4 and Typescript.

Current package version:

```json
{
  "webpack": "^4.23.1",
  "typescript": "^3.1.3",
  "react": "^16.6.0",
  "@babel/core": "^7.1.2",
  "babel-preset-react-app": "^5.0.4"
}
```

We borrowed configurations from `create-react-app <app-name> --scripts-version=react-scripts-ts`, but simplified it.<br>
See [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter) for more details.

## Quick start

Open a terminal window under root directory, and run:

```sh
# install packages
yarn

# build project
yarn build
```

To watch your app changes:

```sh
yarn start

# open another terminal window under root directory
node server
```

Then open [http://localhost:8081/](http://localhost:8081/) to see your app.<br>
We striped *hot reload* and *service worker* from `create-react-app` to make it easier to work with Node.js server.<br>
The *coverage* folder is created by `jest`. Ignore or delete it, if you don't need it.

## Output files

Unlike `create-react-app`, the `watch` command always generates actual outputs under `./dist` folder (Without hash).<br>
Go to `./config/paths.js` to change the output directory.

## Custom typing

* [react-svg-loader](https://github.com/boopathi/react-svg-loader/tree/master/packages/react-svg-loader) is used, so you can import any `*.svg`, and use it like a react component.
* We created custom Typescript typings for varied image extensions. To remove Typescript error, you can add more in `./custom_typings/images.d.ts`.

## Testing

Open a terminal window under root directory, and run:

```sh
yarn test
```

The example included a [snapshot test](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest)<br>
`enzyme` has already installed check [official document](https://airbnb.io/enzyme/docs/api/shallow.html) for more examples.

## Updates

* 10/29/2018 - update to babel 7
