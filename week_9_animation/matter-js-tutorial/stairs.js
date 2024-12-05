class Stairs {
	constructor(stairWidth = 50, stairHeight = 50, startY = 150) {
		const options = {
			friction: 0.5,
			restitution: 0.5,
			isStatic: true,
		};

		this.stairWidth = stairWidth;
		this.stairHeight = stairHeight;
		this.startY = startY;

		this.bodies = [];
		this.stairPoints = [];

		this.bodies.push(
			Bodies.rectangle(
				this.stairWidth / 2,
				this.startY,
				this.stairWidth,
				this.stairHeight,
				options
			)
		);

		for (let i = 0; i < 6; i++) {
			this.stairPoints.push({
				x: this.stairWidth + this.stairWidth / 2 + i * this.stairWidth,
				y: this.startY + i * this.stairHeight,
			});
		}

		for (let i = 0; i < this.stairPoints.length; i++) {
			const stair = Bodies.rectangle(
				this.stairPoints[i].x,
				this.stairPoints[i].y,
				this.stairWidth,
				this.stairHeight,
				options
			);
			this.bodies.push(stair);
		}

		Composite.add(engine.world, this.bodies);
	}

	show() {
		push();
		translate(0, -this.stairWidth / 4);
		for (let i = 0; i < this.bodies.length; i++) {
			const pos = this.bodies[i].position;
			rectMode(CENTER);
			noStroke();
			fill(0);
			rect(pos.x, pos.y, this.stairWidth, this.stairWidth / 2);
		}
		pop();
	}
}
