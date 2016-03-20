import coordinate from 'coordinate-systems'

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
			startAngle = 0,
			endAngle = 90,
		} = {}
	) {
		this._x = x
		this._y = y
		this._radius = radius
		this._startAngle = startAngle
		this._endAngle = endAngle
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

	get startAngle () { return this._startAngle }
	set startAngle (startAngle) { this._startAngle = startAngle }
	setStartAngle (startAngle) { this.startAngle = startAngle; return this }

	get endAngle () { return this._endAngle }
	set endAngle (endAngle) { this._endAngle = endAngle }
	setEndAngle (endAngle) { this.endAngle = endAngle; return this }

	get svgPath () {
		const arcStart = coordinate.polar([this.radius, this.startAngle]).cart()
		const arcEnd = coordinate.polar([this.radius, this.endAngle]).cart()
		const diff = (this.endAngle - this.startAngle + 360) % 360
		const largeArc = (diff > 180) ? 1 : 0
		return compress
			`M${this.x},${this.y}
			l${arcStart[0]},${arcStart[1]}
			a${this.radius},${this.radius}
				0 ${largeArc} 1
				${arcEnd[0]},${arcEnd[1]}
			z`
	}

	get string () {
		return `new CircleSector({ ` +
			`x: ${this.x}, ` +
			`y: ${this.y}, ` +
			`radius: ${this.radius}, ` +
			`startAngle: ${this.startAngle}, ` +
			`endAngle: ${this.endAngle}` +
		` })`
	}
	toString () { return this.string }

	get object () {
		return {
			x: this.x,
			y: this.y,
			radius: this.radius,
			startAngle: this.startAngle,
			endAngle: this.endAngle,
		}
	}
	toJSON () { return this.object }
}
