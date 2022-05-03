# 🔧 Utils

## Description

Some useful functions.

## Installing

```bash
npm i github:arcade-feu/utils
```

## Usage

### getArduinoBoardPort.js

```js
const { getArduinoBoardPort } = require("utils");

// Using promise
getArduinoBoardPort().then((port) => {
    console.log(port);
});

// Within async function
const port = await getArduinoBoardPort();
console.log(port);
```

## Authors

[@LPGeneret](https://twitter.com/LPGeneret)
[@sergebocancea](https://twitter.com/sergebocancea)
[@leochocolat](https://twitter.com/leochocolat)