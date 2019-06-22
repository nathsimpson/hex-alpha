# HEX-ALPHA

A really simple package that enables you to specify an opacity for your HEX colours.

```
HEX + Alpha = RGBA
```

## Installation

```
npm install hex-alpha
// or
yarn add hex-alpha
```

## Examples

```javascript
import hexAlpha from 'hex-alpha'

hexAlpha("#fa6d01", 0.1))
// returns "rgba(250,109,1, 0.1)"

hexAlpha("#000000", 1))
// returns "rgba(0,0,0,1)"

hexAlpha("#ffffff"))
// returns "rgb(255,255,255)"
```
