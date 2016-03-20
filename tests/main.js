import expect from 'unexpected'
import CircleSector from '../source/index'

const sector = new CircleSector({
	x: 10,
	y: 15,
	radius: 5,
	startAngle: 30,
	endAngle: 85,
})

expect(
	sector.object,
	'to equal',
	{
		x: 10,
		y: 15,
		radius: 5,
		startAngle: 30,
		endAngle: 85,
	}
)

expect(
	'Sector: ' + sector,
	'to equal',
	'Sector: new CircleSector(' +
	'{ x: 10, y: 15, radius: 5, startAngle: 30, endAngle: 85 })'
)

expect(
	sector.svgPath,
	'to equal',
	'M10,15' +
	'l0.7712572494379202,-4.940158120464309' +
	'a5,5 0 0 1 -4.921883216970209,-0.8803780997429355z'
)

console.log('All tests passed ✔︎')
