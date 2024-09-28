const colors = [
	"#65312e",
	"#d95232",
	"#f29541",
	"#e3db9a",
	"#c2aa3e",
	"#555432",
];

function setup() {
	createCanvas(600, 600);
	frameRate(3);
}

const drawLeaf = (x, y) => {
	beginShape();
	vertex(x, y);
	bezierVertex(x - 20, y + 40, x - 15, y + 50, x, y + 60);
	vertex(x, y);
	bezierVertex(x + 20, y + 40, x + 15, y + 50, x, y + 60);
	endShape();
};

const getRandomNormalInt = (num, range) => {
	const num1 = num + range;
	const num2 = num - range;

	return Math.floor(
		(random(num1, num2) + random(num1, num2) + random(num1, num2)) / 3
	);
};

const drawStem = (x, y) => {
	const length = getRandomNormalInt(8, 4);
	line(x, y, x, y + length);
};

const drawRandomLeaf = (x, y) => {
	push();
	const rotation = random(TWO_PI);
	rotate(rotation);

	const fillColor = random(colors);
	fill(fillColor);

	const xRange = 15;
	const yRange = 10;

	const x1Diff = getRandomNormalInt(20, xRange);
	const x2Diff = getRandomNormalInt(15, xRange);

	const y1Diff = getRandomNormalInt(40, yRange);
	const y1 = y + y1Diff;
	const y2Diff = getRandomNormalInt(50, yRange);
	const y2 = y + y2Diff;
	const y3Diff = getRandomNormalInt(60, yRange);
	const y3 = y + y3Diff;

	beginShape();
	vertex(x, y);
	bezierVertex(x - x1Diff, y1, x - x2Diff, y2, x, y3);
	vertex(x, y);
	bezierVertex(x + x1Diff, y1, x + x2Diff, y2, x, y3);
	drawStem(x, y3);
	endShape();

	pop();
};

function draw() {
	background("#CEE5ED");
	for (let i = 0; i < 200; i++) {
		const x = random(width);
		const y = random(height);
		drawRandomLeaf(x, y);
	}
}
