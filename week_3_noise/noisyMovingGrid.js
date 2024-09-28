function setup() {
	createCanvas(600, 600);
}

const moveDot = (xScale, yScale) => {
	const color1 = color(2, 24, 43);
	const color2 = color(83, 145, 126);

	// Set the noise level and scale.
	let noiseLevel = 100;
	let noiseScale = 0.005;

	// Scale the input coordinate.
	let nt = noiseScale * frameCount;

	// Compute the noise values.
	let x = noiseLevel * noise(nt) * xScale;
	let y = noiseLevel * noise(nt + 10000) * yScale;

	let amt = (xScale * yScale) / 30;
	let fillColor = lerpColor(color1, color2, amt);

	let r = ((xScale + yScale) / 10) * 10;

	noStroke();

	strokeWeight(r - 3);
	stroke(fillColor);

	circle(x, y, r);
};

const drawBackground = () => {};

function draw() {
	background(231, 236, 238);

	for (let i = 1; i < width / 6; i++) {
		for (let j = 1; j < width / 6; j++) {
			moveDot(i, j);
		}
	}
}
