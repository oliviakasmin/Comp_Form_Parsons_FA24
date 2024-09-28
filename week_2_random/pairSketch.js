//require https://cdn.jsdelivr.net/npm/p5@1.9.4/lib/p5.js

// create an array to hold the possible values
var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const colors = [
	{ r: 224, g: 129, b: 16 },
	{ r: 208, g: 16, b: 224 },
	{ r: 110, g: 224, b: 16 },
	{ r: 16, g: 160, b: 224 },
	{ r: 97, g: 78, b: 55 },
	{ r: 82, g: 152, b: 102 },
	{ r: 246, g: 54, b: 21 },
	{ r: 7, g: 1, b: 111 },
	{ r: 114, g: 188, b: 173 },
	{ r: 245, g: 218, b: 84 },
];

// create a variable to hold the current position in the deck
var position = 0;

function valueFromDeck() {
	// find the value at the current position in the deck
	var v = values[position];

	// change the position for next time
	position++;

	// if that was the last value, shuffle and start over from the top
	if (position == values.length) {
		values = shuffle(values);
		position = 0;
	}

	// return the value
	return v;
}

const getRotationDegrees = () => {
	return valueFromDeck() * 40;
};

const drawSingleCardFlower = (i, x, y, flowerScale) => {
	const rotation = getRotationDegrees();

	push();

	const fillAlpha = valueFromDeck() * 0.07 + 0.25;

	const fillColor = `rgba(${colors[i].r}, ${colors[i].g}, ${colors[i].b}, ${fillAlpha})`;
	fill(fillColor);
	translate(x, y);
	rotate(rotation);
	ellipse(0, 0, 100 * flowerScale, 10 * flowerScale);
	pop();
};

const drawCardFlower = (x, y) => {
	for (let i = 0; i < values.length; i++) {
		const flowerScale = valueFromDeck() * 0.15;
		drawSingleCardFlower(i, x, y, flowerScale);
	}
};

function setup() {
	values = shuffle(values);
	createCanvas(800, 800);
	angleMode(DEGREES);
	noLoop();
	ellipseMode(CENTER);
	noStroke();
}

function draw() {
	const backgroundIdx = valueFromDeck();
	const backgroundFill = `rgb(${colors[backgroundIdx].r}, ${colors[backgroundIdx].g}, ${colors[backgroundIdx].b})`;
	background(backgroundFill);

	for (let i = 0; i < 50; i++) {
		const flowerX = valueFromDeck() * 80;
		const flowerY = valueFromDeck() * 80;
		drawCardFlower(flowerX, flowerY);
	}
}
