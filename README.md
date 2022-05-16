# 🔧 Utils

## Description

Some useful functions for arduino + node scripts.

## Installing

```bash
npm i github:gobelins-axis/utils
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
