# Expo Boilerplate with Typescript and Jest

## Features

- Jest with React Native Testing Library
- Maximum typescript supported
- Expo Localization
- SVG import support

## Available Scripts

For npm the command will be identical

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `yarn test`

Runs the test

#### `yarn ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator.

## Import SVG

Import svg like the following

```
import Atom from './assets/images/atom.svg';import
...


<Atom width={200} height={200} />
```
