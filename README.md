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
getArduinoBoardPort().then(
    (port) => {
        console.log(port);
    },
    (error) => {
        console.log(error);
    }
);
```

## Authors

[@LPGeneret](https://twitter.com/LPGeneret)
[@sergebocancea](https://twitter.com/sergebocancea)
[@leochocolat](https://twitter.com/leochocolat)
