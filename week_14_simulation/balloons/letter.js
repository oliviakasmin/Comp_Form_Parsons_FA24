class Letter {
	constructor(x, y, radius, letter, i) {
		const options = {
			friction: 0.1,
			density: 0.01,
			restitution: 0.8,
			// mass: 0.005,
			mass: 1,
		};
		this.body = Bodies.circle(x, y, radius, options);
		this.letter = letter;
		this.i = i;
		this.radius = radius;
		Composite.add(engine.world, this.body);
	}

	show() {
		const palette = [
			"#898952", //moss green
			"#B2945B", //light brown
			"#D0E562", //bright green
			"#B6D369", //light green
			"#93C48B", //pistachio
		];

		const pos = this.body.position;
		push();
		textAlign(CENTER);
		strokeWeight(6);
		fill(palette[this.i % palette.length]);
		text(this.letter, pos.x, pos.y);
		pop();
	}
}
