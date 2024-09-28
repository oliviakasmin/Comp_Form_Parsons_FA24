// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

const colors = [
	"#274001",
	"#828a00",
	"#f29f05",
	"#f25c05",
	"#d6568c",
	"#4d8584",
	"#a62f03",
	"#400d01",
];

window.setup = function () {
	createCanvas(600, 600);
	frameRate(60);
	noLoop();
};

window.draw = function () {
	background("#fefaee");

	circle_1(20, 200, 200, 100, 80, colors[0]);
	circle_1(20, 200, 200, 50, 80, colors[0]);

	circle_1(10, 425, 330, 70, 20, colors[1]);
	circle_1(10, 425, 330, 35, 20, colors[1]);

	circle_1(15, 400, 100, 100, 40, colors[4]);
	circle_1(15, 400, 100, 60, 40, colors[4]);

	circle_1(40, 100, 425, 90, 90, colors[5]);
	circle_1(40, 100, 425, 20, 90, colors[5]);

	circle_1(30, 75, 75, 60, 5, colors[3]);
	circle_1(30, 75, 75, 30, 5, colors[3]);

	circle_1(30, 475, 500, 60, 15, colors[2]);
	circle_1(30, 475, 500, 20, 15, colors[2]);
};

function circle_1(steps, centerX, centerY, radius, noiseFactor, fillColor) {
	push();
	stroke(fillColor);
	strokeWeight(6);

	for (let step = 1; step <= steps; step++) {
		let x1Noise = noise(step - 1, 5) * noiseFactor;
		let x2Noise = noise(step, 5) * noiseFactor;

		let y1Noise = noise(step - 1, 5) * noiseFactor;
		let y2Noise = noise(step, 5) * noiseFactor;

		// connect the last point to the first
		if (step === steps) {
			x2Noise = noise(0, 5) * noiseFactor;
			y2Noise = noise(0, 5) * noiseFactor;
		}

		const a1 = map(step - 1, 0, steps, 0, 2 * PI);
		const a2 = map(step, 0, steps, 0, 2 * PI);
		const x1 = centerX + x1Noise + sin(a1) * radius;
		const x2 = centerX + x2Noise + sin(a2) * radius;
		const y1 = centerY + y1Noise + cos(a1) * radius;
		const y2 = centerY + y2Noise + cos(a2) * radius;
		line(x1, y1, x2, y2);
	}

	pop();
}
