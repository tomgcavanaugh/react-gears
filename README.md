# react-gears

[![npm](https://badge.fury.io/js/@cavcon%2Freact-gears.svg?style=flat-square)](https://www.npmjs.com/package/@cavcon/react-gears)
[![Downloads](https://img.shields.io/npm/dm/@cavcon/react-gears.svg)](https://npmjs.org/package/@cavcon/react-gears)

React-gears is a JavaScript library for creating a React component that displays an animated SVG gear.

# Installation

```bash
npm install @cavcon/react-gears
```

# Documentation

```javascript
<Gear
  numTeeth="12"
  toothHeight="0.2"
  outSideDegrees="13"
  insideDegrees="15"
  holeRadius="0.3"
/>
```

| Parameter      | Default | Description                                                                                         |
| -------------- | ------- | --------------------------------------------------------------------------------------------------- |
| numTeeth       | 12      | The number of teeth on the gear                                                                     |
| toothHeight    | 0.2     | The height of the teeth                                                                             |
| outsideDegrees | 13      | The number of degrees of the circle for the tip of each teeth. Value of 0 will be a pointed tooth.  |
| insideDegrees  | 15      | The number of degrees of the circle for the gap between each teeth. Value of 0 will display no gap. |
| holeRadius     | 0.3     | Radius of the internal hole. Value of 0 will hide the internal hole.                                |

## License

Copyright (c) 2024 Cavanaugh Consulting LLC and individual contributors. Licensed under MIT license, see [LICENSE](LICENSE.md) for the full license.
