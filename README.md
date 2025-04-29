# GRVT

**This package is deprecated. Please use the new [@grvt/client](https://www.npmjs.com/package/@grvt/client) package instead.**

## Installing

Using npm:

```bash
npm install grvt
```

Using yarn:

```bash
yarn add grvt
```

Using pnpm:

```bash
pnpm add grvt
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import GRVT from 'grvt'
```

You can also use the default export, since the named export is just a re-export from the GRVT factory:

```js
import GRVT from 'grvt'
console.log(
  new GRVT.MDG({
    host: 'https://market-data.dev.gravitymarkets.io',
    version: 'v1'
  })
)
```

If you use `require` for importing:

```js
const GRVT =  require('grvt')
console.log(
  new GRVT.MDG({
    host: 'https://market-data.dev.gravitymarkets.io',
    version: 'v1'
  })
)
```

## To use WebSocket (available only in browsers that support WebSocket)

[Browsers supported](https://caniuse.com/websockets)

```js
import { EStreamEndpoints, WS } from 'grvt/ws'
console.log(new WS('wss://market-data.dev.gravitymarkets.io/ws'))
```
