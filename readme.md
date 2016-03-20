# Circle Sector

Class for a sector of a circle.
Supports export to SVG-path string.


## Installation

```shell
npm install --save @datatypes/circle-sector
```


## Usage

```js
import CircleSector from '@datatypes/circle-sector'

const sector = new CircleSector({
	x: 10,
	y: 15,
	radius: 5,
	startAngleInDeg: 30,
	endAngleInDeg: 85,
})

console.log(sector.svgPath)

// M10,15
// L14.330127018922195,12.5
// A5,5 0 0 0 10.43577871373829,10.019026509541273
// Z
```
