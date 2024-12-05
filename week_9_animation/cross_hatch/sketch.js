// require https://cdn.jsdelivr.net/npm/tweakpane@3.0.7/dist/tweakpane.min.js
// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js

const width = 400;
const height = 400;

const lines = [];
const diamonds = [];
let noiseOffsetX = 0;
let noiseOffsetY = 100; // Different starting point for y to ensure different noise values
let noiseLevel = 8;

let fontX = 10;
let fontY = 100;

const palette = ["#0A2342", "#474B24", "#5FBB97", "#F46197", "#CB904D"];

function setup() {
	createCanvas(width, height);
}

function draw() {
	background("#fdf6e3");

	if (frameCount % 2 === 0 && frameCount < width) {
		lines.push(frameCount);
	}

	for (let i = 0; i < lines.length; i++) {
		drawRightDiagonalLine(10 + i * 20, palette[i % palette.length]);
		drawRightDiagonalLine2(10 + i * 20, palette[i % palette.length]);
		drawLeftDiagonalLine(10 + i * 20, palette[i % palette.length]);
	}

	if (frameCount > width / 5 && frameCount % 0.25 === 0) {
		let noiseX = noise(noiseOffsetX * noiseLevel) * width;
		let noiseY = noise(noiseOffsetY * noiseLevel * 20) * height;

		// Round noiseX and noiseY to the nearest 20
		noiseX = round(noiseX / 20) * 20;
		noiseY = round(noiseY / 20) * 20;

		diamonds.push({ x: noiseX, y: noiseY });

		// Increment noise offsets for the next frame
		noiseOffsetX += 0.2;
		noiseOffsetY += 0.9;
	}

	for (let i = 0; i < diamonds.length; i++) {
		const diamond = diamonds[i];
		const randomColor = palette[i % palette.length];
		drawSquareDiamond(diamond.x, diamond.y, 20, randomColor);
	}
}

function mousePressed() {
	let x = mouseX;
	let y = mouseY;

	// Round  to the nearest 20
	x = round(x / 20) * 20;
	y = round(y / 20) * 20;

	diamonds.push({ x, y });
}

const drawLeftDiagonalLine = (x, color) => {
	push();
	stroke(color);
	let x1 = x;
	let y1 = 0;
	let y2 = x;
	let x2 = 0;
	line(x1, y1, x2, y2);
	pop();
};

const drawRightDiagonalLine = (x, color) => {
	push();
	stroke(color);
	let x1 = x;
	let y1 = 0;
	let y2 = 400 - x;
	let x2 = 400;
	line(x1, y1, x2, y2);
	pop();
};

const drawRightDiagonalLine2 = (x, color) => {
	push();
	stroke(color);
	let x1 = 0;
	let x2 = 400 - x;
	let y1 = x;
	let y2 = 400;
	line(x1, y1, x2, y2);
	pop();
};

const drawSquareDiamond = (x, y, sideLength = 20, color) => {
	const halfSide = sideLength / 2 - 1;
	push();
	fill(color);
	noStroke();
	beginShape();
	vertex(x, y - halfSide); // Top vertex
	vertex(x + halfSide, y); // Right vertex
	vertex(x, y + halfSide); // Bottom vertex
	vertex(x - halfSide, y); // Left vertex
	endShape(CLOSE);
	pop();
};
