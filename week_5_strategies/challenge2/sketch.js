// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// draws a rectangle, where you tell it to!

let amplitude_slider;
let frequency_slider;
let time_slider;

let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

function setup() {
	createCanvas(500, 300);

	createP("Frequency");
	frequency_slider = createSlider(0, 20, 2);

	createP("Amplitude");
	amplitude_slider = createSlider(0, 40, 20);

	createP("Time Speed");
	time_slider = createSlider(0, 10, 5);
}

function draw() {
	background(50);
	ellipseMode(CENTER);

	let amplitude = amplitude_slider.value() / 100; // noise level - play with around 50 - 250?
	let timeSpeed = (millis() * time_slider.value()) / 1000;
	let frequency = frequency_slider.value() / 100; // noise scale - around 0.01 good?

	// noiseDetail(1, 0.5);
	noiseDetail(6, 0.25);

	fill(255);
	noStroke();

	// study this loop. do you understand how the line of ellipses is created?
	for (i = 0; i < 1; i += 0.02) {
		let x = lerp(startX, endX, i);
		let y = lerp(startY, endY, i);

		// add noise to the x and y positions
		// hint: use noise() instead of random()
		// introduce sin to get a wave?

		let offsetX = noise(i * 15, frequency * x, timeSpeed) * amplitude * 100;
		// let offsetY = sin(x * frequency + timeSpeed) * amplitude * 100;
		let offsetY =
			sin(x * frequency + timeSpeed) * amplitude * 100 +
			noise(i * x * frequency * 0.5, timeSpeed) * amplitude * 100;

		ellipse(x + offsetX, y + offsetY, 10, 10);
	}
}

// let offsetX = (noise(i * frequency, timeSpeed) - 0.5) * amplitude * 200;
// let offsetY = (noise(i * frequency + 100, timeSpeed) - 0.5) * amplitude * 200;
