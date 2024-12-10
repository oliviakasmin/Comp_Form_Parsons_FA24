class Rope {
	constructor(x, y, body) {
		const options = {
			pointA: { x: x, y: y },
			bodyB: body,
			stiffness: 0.65,
			// length: 100,
		};
		this.sling = Matter.Constraint.create(options);
		Composite.add(engine.world, this.sling);
	}

	show() {
		push();
		if (this.sling.bodyB) {
			const posA = this.sling.pointA;
			const posB = this.sling.bodyB.position;
			stroke("#9a929a");
			strokeWeight(1);
			line(posA.x, posA.y, posB.x, posB.y);
		}
		pop();
	}
}
