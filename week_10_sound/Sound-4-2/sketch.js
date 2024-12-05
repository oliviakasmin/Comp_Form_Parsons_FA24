// https://editor.p5js.org/mcpecommander/sketches/GPDsjtaXD
// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

const slices = 7,
	size = 200;
let randomWeights = [];

let tink0;
let tink1;
let tink2;
let music0;
let fft;
let colors = ["#5B5F97", "#FFC145", "#FF6B6C"]; // color palette addition #FFFFFB
let fillColorIdx;
let fillColor = colors[0];

function preload() {
	tink0 = loadSound("./assets/107785__hans__tink.wav");
	tink1 = loadSound("./assets/178659__hanbaal__bottle-tink.wav");
	tink2 = loadSound("./assets/178660__hanbaal__bottle-tink2.wav");
	music0 = loadSound(
		"./assets/761037__lolamoore__uplifting-rhythms-of-positivity-for-happy-moments.mp3"
	);
}

function setup() {
	createCanvas(windowWidth - 17, windowHeight - 42);

	fft = new p5.FFT(0.8, 128); // smoothing, bins
	fft.setInput(music0); // connect the sound to the fft

	startButton = createButton("start");
	startButton.mousePressed(start);

	stopButton = createButton("stop");
	stopButton.mousePressed(stop);

	for (var i = 0; i < slices * 2; i++) {
		randomWeights[i] = random(700, 1000);
	}
}

function draw() {
	background("#B8B8D1");
	noStroke();

	translate(width / 2, height / 2);

	fillColorIdx = frameCount % 30 < 10 ? 0 : frameCount % 30 < 20 ? 1 : 2;

	if (music0.isPlaying()) {
		rotate(millis() / 1000); // Rotate based on time
		fillColor = colors[fillColorIdx];
	} else {
		fillColor = colors[0];
	}

	// Get frequency data from FFT
	const data = fft.waveform();

	let lastX;
	let lastY;

	fill(fillColor);

	beginShape();

	for (var i = 0, j = 0; i < TWO_PI; i += TWO_PI / slices, j++) {
		let xOffset = map(abs(data[j * 10]), -1, 1, -30, 30); // Map data values to vertex displacement
		let yOffset = map(abs(data[j * 10 + 1]), -1, 1, -20, 20); // Another mapping for the y position

		if (j === 0) {
			lastX = xOffset;
			lastY = yOffset;
		}

		if (music0.isPlaying()) {
			xOffset = xOffset * 40;
			yOffset = yOffset * 40;
		}

		curveVertex(
			sin(i) * size +
				xOffset +
				map(cos(millis() / randomWeights[j]), 0, 1, -30, 30),
			cos(i) * size +
				yOffset +
				map(sin(millis() / randomWeights[j + slices]), 0, 1, -20, 20)
		);
	}

	//Needed to make the blob correctly shaped.
	curveVertex(
		sin(0) * size +
			lastX +
			map(cos(millis() / randomWeights[0]), 0, 1, -30, 30),
		cos(0) * size +
			lastY +
			map(sin(millis() / randomWeights[0 + slices]), 0, 1, -20, 20)
	);

	curveVertex(
		sin(TWO_PI / slices) * size +
			lastX +
			map(cos(millis() / randomWeights[1]), 0, 1, -30, 30),
		cos(TWO_PI / slices) * size +
			lastY +
			map(sin(millis() / randomWeights[1 + slices]), 0, 1, -20, 20)
	);

	curveVertex(
		sin((2 * TWO_PI) / slices) * size +
			map(cos(millis() / randomWeights[2]), 0, 1, -30, 30),
		cos((2 * TWO_PI) / slices) * size +
			map(sin(millis() / randomWeights[2 + slices]), 0, 1, -20, 20)
	);

	endShape();
}

function windowResized() {
	resizeCanvas(windowWidth - 17, windowHeight - 42);
}

function start() {
	music0.loop(0, 1, 1, 0, 15);
}

function stop() {
	music0.pause();
}
