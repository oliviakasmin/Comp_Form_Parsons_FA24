// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let c;
let canvas;
let lines = [];

function setup() {
	canvas = createCanvas(800, 800);
}

// function to generate nicer blue values
const getRandomBlue = () => {
	const rC = random(75);
	const rG = random(75);
	const rB = random(100, 255);
	return [rC, rG, rB];
};

function draw() {
	background(0);
	img = createImage(300, 300);
	img.loadPixels();

	// draw noise image
	for (let y = 0; y < img.height; y++) {
		for (let x = 0; x < img.width; x++) {
			// Color each pixel with noise() to visualize its values.
			let noiseLevel = 255;
			let noiseScale = 0.01;
			let nx = noiseScale * x;
			let ny = noiseScale * y;
			c = noiseLevel * noise(nx, ny);

			canvas.mouseOut(() => {
				noTint();
			});
			img.set(x, y, c);
		}
	}

	for (let y = 0; y < img.height; y++) {
		for (let x = 0; x < img.width; x++) {}
	}

	canvas.mouseMoved(getColor);
	canvas.mouseClicked(clickHandler);

	img.updatePixels();
	noSmooth();
	image(img, 0, 0, width, height);
	noLoop();
}

const getColor = () => {
	// update color based on mouse interraction
	let r = mouseX;
	let g = mouseY;
	let b = 150;
	tint(r, g, b, 500);
};

const clickHandler = () => {
	lines.push({ x: mouseX, y: mouseY });
	drawLines();
};

const drawLines = () => {
	let radius; // Radius of the circle for lines
	let alpha;

	if (lines.length < 4) {
		radius = 80;
		alpha = 200;
	} else if (lines.length < 8) {
		radius = 60;
		alpha = 175;
	} else if (lines.length < 12) {
		radius = 40;
		alpha = 150;
	} else {
		radius = 20;
		alpha = 100;
	}

	stroke(color(mouseX, mouseY, 150, alpha));

	let totalLines = 25;

	for (let coordinates of lines) {
		for (let i = 0; i < totalLines; i++) {
			let angle = map(i, 0, totalLines, 0, TWO_PI); // Map each line to an angle around the circle

			// Calculate the x, y coordinates of the points on the circumference
			let x = coordinates.x + radius * cos(angle);
			let y = coordinates.y + radius * sin(angle);

			// Draw line from the center to the circumference
			line(coordinates.x, coordinates.y, x, y);
		}
	}
};
