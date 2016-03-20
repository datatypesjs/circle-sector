import expect from 'unexpected'
import CircleSector from '..'

const sector = new CircleSector({
	x: 10,
	y: 15,
	radius: 5,
	startAngleInDeg: 30,
	endAngleInDeg: 85,
})

expect(
	sector.object,
	'to equal',
	{
		x: 10,
		y: 15,
		radius: 5,
		startAngleInDeg: 30,
		endAngleInDeg: 85,
	}
)

expect(
	'Sector: ' + sector,
	'to equal',
	'Sector: new CircleSector(' +
	'{ x: 10, y: 15, radius: 5, ' +
	'startAngleInDeg: 30, endAngleInDeg: 85 })'
)

expect(
	sector.svgPath,
	'to equal',
	'M10,15' +
	'L14.330127018922195,12.5' +
	'A5,5 0 0 0 10.43577871373829,10.019026509541273Z'
)

console.log('All tests passed ✔︎')
