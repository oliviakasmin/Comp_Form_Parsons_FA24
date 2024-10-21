// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// Dot Challenge Starting Point

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(50);

	noStroke();
	ellipseMode(CENTER);

	let noiseFrequency = 6;

	for (let i = 0; i < 100; i++) {
		let x = random(width);
		let y = random(height);

		x = noise(i * noiseFrequency, 0) * width;
		y = noise(i * noiseFrequency, 1000) * height;

		let minDiameter = 5;
		let maxDiameter = 20;

		//use noise to get a diameter
		let diameter = random(minDiameter, maxDiameter);

		let colorValue = map(diameter, minDiameter, maxDiameter, 0, 1);

		let fillColor = getColorFromDiameter(colorValue);

		fill(fillColor);

		ellipse(x, y, diameter, diameter);
	}

	noLoop();
}

//get color based on diameter
function getColorFromDiameter(colorValue) {
	let color1 = color(255, 0, 0); // red
	let color2 = color(255, 231, 0); // yellow
	let color3 = color(0, 255, 0); // green
	let color4 = color(0, 3, 255); //blue
	let color5 = color(255, 0, 169); // purple
	let color6 = color(0, 227, 255); // light blue

	if (colorValue < 0.25) {
		//from red to yellow
		return lerpColor(color1, color2, map(colorValue, 0, 0.25, 0, 1));
	} else if (colorValue < 0.5) {
		// from yellow to green
		return lerpColor(color2, color3, map(colorValue, 0.25, 0.5, 0, 1));
	} else if (colorValue < 0.75) {
		// from green to light blue
		return lerpColor(color3, color6, map(colorValue, 0.5, 0.75, 0, 1));
	} else {
		// from dark blue to purple
		return lerpColor(color4, color5, map(colorValue, 0.75, 1, 0, 1));
	}
}
