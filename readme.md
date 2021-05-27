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
import hexAlpha from "hex-alpha";

hexAlpha("#fa6d01", 0.1);
// returns "rgba(250,109,1,0.1)"

hexAlpha("#000000", 1);
// returns "rgba(0,0,0,1)"

hexAlpha("#f00");
// returns "rgb(255,0,0)"
```

## Meetup talk

I gave a talk about making HEX-Alpha at the Sydney Javascript meetup - SydJS. [Check it out here](https://www.youtube.com/watch?v=OQbF8Mx4iso).
