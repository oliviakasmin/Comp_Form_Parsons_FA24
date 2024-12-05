//https://whitney.org/collection/works/6153

let img;
let cols;
let rows;
let size = 8;
let minSize = 10;
let maxSize = 75;
let bonusCircles = [];

function preload() {
	img = loadImage("87_7_cropped.jpg");
	mySound = loadSound("CarolinePolache-BunnyIsARider.wav");
}

function setup() {
	createCanvas(1000, 500);
	cols = width / size;
	rows = height / size;

	amp = new p5.Amplitude();
	mySound.connect(amp);

	const startButton = createButton("start");
	startButton.mousePressed(start);

	const stopButton = createButton("stop");
	stopButton.mousePressed(stop);
}

function draw() {
	background(0);
	img.resize(0, 500);

	let level = amp.getLevel();
	radius = map(level, 0, 1, size, maxSize);

	if (mySound.isPlaying()) {
		generateBonusCircle(level, radius);
	}

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let c = img.get(i * size, j * size);
			fill(c);
			circle(i * size, j * size, size);
		}
	}

	drawBonusCircles();
}

function start() {
	mySound.loop(0, 1, 1, 0, 15);
	startTime = millis();
}

function stop() {
	console.log("stop");
	mySound.pause();
}

const generateBonusCircle = (level, radius) => {
	let i = random(cols);
	let j = random(rows);
	let c = img.get(i * size, j * size);
	c = color(c);
	let a = map(level, 0, 1, 175, 255);
	c.setAlpha(a);
	bonusCircles.push({ i, j, c, radius });
};

const drawBonusCircles = () => {
	push();
	noStroke();
	bonusCircles.forEach((point) => {
		// let c = color(point.c);
		fill(point.c);
		// rect(point.i * size, point.j * size, point.radius);
		// circle(point.i * size, point.j * size, point.radius);
		if (point.radius % 2 === 0) {
			circle(point.i * size, point.j * size, point.radius);
		} else {
			rect(point.i * size, point.j * size, point.radius);
		}
	});
	pop();
};
