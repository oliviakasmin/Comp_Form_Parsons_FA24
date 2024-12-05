class Circle {
	constructor(x, y, radius, color, color2) {
		const options = {
			friction: 0,
			restitution: 0,
		};
		this.body = Bodies.circle(x, y, radius, options);
		this.radius = radius;
		this.color = color;
		this.color2 = color2;
		Composite.add(engine.world, this.body);
	}

	show() {
		const pos = this.body.position;
		const angle = this.body.angle;

		push();
		noStroke();
		translate(pos.x, pos.y);
		rotate(angle);
		ellipseMode(CENTER);

		push();
		fill(this.color);
		ellipse(0, 0, this.radius * 2);
		pop();

		push();
		fill(this.color2);
		ellipse(0, 0, this.radius - 5);
		pop();

		pop();
	}
}
