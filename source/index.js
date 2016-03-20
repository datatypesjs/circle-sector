import coordinate from 'coordinate-systems'
import deg2rad from 'deg2rad'

function compress (strings, ...values) {
	const toString = (combined, string, stringIndex) => combined += string +
		(values[stringIndex] != null ? values[stringIndex] : '')

	return strings
		.reduce(toString, '')
		.replace(/[\n\t]+([\d+-.])/g, ' $1')
		.replace(/[\n\t]+([^\d+-.])/g, '$1')
}

export default class CircleSector {
	constructor (
		{
			x = 0,
			y = 0,
			radius = 1,
			startAngleInDeg = 0,
			endAngleInDeg = 90,
		} = {}
	) {
		this.x = x
		this.y = y
		this.radius = radius
		this.startAngleInDeg = startAngleInDeg
		this.endAngleInDeg = endAngleInDeg
	}

	get x () { return this._x }
	set x (x) { this._x = x }
	setX (x) { this.x = x; return this }

	get y () { return this._y }
	set y (y) { this._y = y }
	setY (y) { this.y = y; return this }

	get radius () { return this._radius }
	set radius (radius) { this._radius = radius }
	setRadius (radius) { this.radius = radius; return this }

	get startAngleInDeg () { return this._startAngleInDeg }
	set startAngleInDeg (startAngleInDeg) {
		this._startAngleInDeg = startAngleInDeg
	}
	setStartAngleInDeg (startAngleInDeg) {
		this._startAngleInDeg = startAngleInDeg
		return this
	}

	get endAngleInDeg () { return this._endAngleInDeg }
	set endAngleInDeg (endAngleInDeg) {
		this._endAngleInDeg = endAngleInDeg
	}
	setEndAngleInDeg (endAngleInDeg) {
		this._endAngleInDeg = endAngleInDeg
		return this
	}

	get svgPath () {
		const arcStart = coordinate
			.polar([this.radius, -deg2rad(this.startAngleInDeg)])
			.cart()
		const arcEnd = coordinate
			.polar([this.radius, -deg2rad(this.endAngleInDeg)])
			.cart()
		const angleDifference = this.endAngleInDeg - this.startAngleInDeg
		const diffModulo = (angleDifference + 360) % 360
		const largeArc = (diffModulo > 180) ? 1 : 0
		return compress
			`M${this.x},${this.y}
			L${this.x + arcStart[0]},${this.y + arcStart[1]}
			A${this.radius},${this.radius}
				0 ${largeArc} 0
				${this.x + arcEnd[0]},${this.y + arcEnd[1]}
			Z`
	}

	get string () {
		return `new CircleSector({ ` +
			`x: ${this.x}, ` +
			`y: ${this.y}, ` +
			`radius: ${this.radius}, ` +
			`startAngleInDeg: ${this.startAngleInDeg}, ` +
			`endAngleInDeg: ${this.endAngleInDeg}` +
		` })`
	}
	toString () { return this.string }

	get object () {
		return {
			x: this.x,
			y: this.y,
			radius: this.radius,
			startAngleInDeg: this.startAngleInDeg,
			endAngleInDeg: this.endAngleInDeg,
		}
	}
	toJSON () { return this.object }
}
