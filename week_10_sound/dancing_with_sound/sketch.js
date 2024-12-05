// https://editor.p5js.org/oliviakasmin/sketches/q3un_pCZx

// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let headR = 20;
let armLength = 30;
let legLength = 50;
let bodyLength = 40;
let width = 800;
let height = 600;
let period1Counter = 0;

let params = {
	headAmplitude: 7.5,
	hipsAmplitude: 15,
	shoulderAmplitude: 7.5,
	headCircleSpeed: 100,
	pendulumAmplitude: 0.5,
};

let palette = [
	"#3F4B3B", // dark green
	"#203246", // dark blue
	"#C0E0DE", // light blue
];

let backgroundColor = palette[0];

let overallAmplitude;

let aaah;
let clap;
let thump;
let percussion;

let playing = false;

function preload() {
	aaah = loadSound("sounds/aaaah-hq.wav");
	clap = loadSound("sounds/bark-clap.wav");
	thump = loadSound("sounds/low-mid-thump-perc.wav");
	percussion = loadSound("sounds/metallic-percussion-abb.wav");
}

// const pane = new Tweakpane.Pane();

// pane.addInput(params, "headAmplitude", { min: 0, max: 12 });
// pane.addInput(params, "hipsAmplitude", { min: 0, max: 30 });
// pane.addInput(params, "shoulderAmplitude", { min: 0, max: 15 });
// pane.addInput(params, "headCircleSpeed", { min: 50, max: 400 });
// pane.addInput(params, "pendulumAmplitude", { min: 0, max: 1 });

function setup() {
	createCanvas(width, height);
	frameRate(60);
	strokeWeight(6);
	stroke("white");
	noFill();

	const startButton = createButton("play");
	startButton.mousePressed(start);

	const stopButton = createButton("stop");
	stopButton.mousePressed(stop);
}

function start() {
	playing = true;
}

function stop() {
	playing = false;
	period1Counter = 0;
}

function draw() {
	background(backgroundColor);

	if (playing) {
		overallAmplitude = params.pendulumAmplitude;
	} else {
		overallAmplitude = 0;
	}

	const theta = map(millis(), 0, 1000, 0, 2 * PI);
	const pendulumAngle = sin(theta) * overallAmplitude;

	const threshold = 0.001;
	const midThreshold = 0.02;
	const maxAngle = params.pendulumAmplitude;
	const minAngle = -params.pendulumAmplitude;

	const period1 = abs(pendulumAngle - maxAngle) < threshold;
	const period2 = abs(pendulumAngle - minAngle) < threshold;
	const midPoint = pendulumAngle > 0 && pendulumAngle < midThreshold;

	if (playing) {
		if (period1) {
			backgroundColor = palette[0];
			period1Counter++;
			percussion.play();
			thump.play();
			if (period1Counter % 4 === 0) {
				aaah.play();
				backgroundColor = palette[2];
			}
		}
		if (period2) {
			backgroundColor = palette[1];
			percussion.play();
			clap.play();
		}
		if (midPoint) {
			thump.play();
		}
	}

	// seesaw hands plus head
	person1(100, 75, pendulumAngle);
	person1(200, 75, pendulumAngle);
	person1(150, 175, pendulumAngle);

	// half seesaw hands
	person2(600, 100, pendulumAngle);
	person2(525, 125, pendulumAngle);

	// duo hips + hands
	person3(300, 300, pendulumAngle);
	person3(400, 300, pendulumAngle);

	// disco
	person5(150, 400, pendulumAngle);

	// shoulders
	person6(705, 249, pendulumAngle);

	// trio hand behind head
	person4(500, 450, pendulumAngle);
	person4(575, 450, pendulumAngle);
	person4(650, 450, pendulumAngle);
}

function mouseClicked() {
	console.log({ mouseX, mouseY });
}

const person1 = (x, y, pendulumAngle) => {
	push();
	//head
	let headOffset = sin(pendulumAngle) * params.headAmplitude;
	ellipse(x + headOffset, y, headR, headR);

	//body
	line(x, y + headR / 2, x, y + headR / 2 + bodyLength);

	//arms
	line(
		x,
		y + headR / 2 + bodyLength / 2,
		x - armLength * cos(pendulumAngle),
		y + headR / 2 + bodyLength / 2 + armLength * sin(pendulumAngle)
	);
	line(
		x,
		y + headR / 2 + bodyLength / 2,
		x + armLength * cos(pendulumAngle),
		y + headR / 2 + bodyLength / 2 - armLength * sin(pendulumAngle)
	);

	//legs
	line(
		x,
		y + headR / 2 + bodyLength,
		x - legLength / 5,
		y + headR / 2 + bodyLength + legLength
	);
	line(
		x,
		y + headR / 2 + bodyLength,
		x + legLength / 5,
		y + headR / 2 + bodyLength + legLength
	);

	pop();
};

const person2 = (x, y, pendulumAngle) => {
	push();
	//head
	ellipse(x, y, headR, headR);

	//body
	line(x, y + headR / 2, x, y + headR / 2 + bodyLength);

	//arms
	//right arm
	line(
		x,
		y + headR / 2 + bodyLength / 2,
		x + armLength / 2,
		y + headR / 2 + bodyLength / 2
	);
	line(
		x + armLength / 2,
		y + headR / 2 + bodyLength / 2,
		x + armLength / 8 + armLength * cos(pendulumAngle),
		y + headR / 2 + bodyLength / 2 + armLength * sin(pendulumAngle)
	);

	//left arm
	line(
		x,
		y + headR / 2 + bodyLength / 2,
		x - armLength / 2,
		y + headR / 2 + bodyLength / 2
	);
	line(
		x - armLength / 2,
		y + headR / 2 + bodyLength / 2,
		x - armLength / 8 - armLength * cos(-pendulumAngle),
		y + headR / 2 + bodyLength / 2 + armLength * sin(-pendulumAngle)
	);

	//legs
	line(
		x,
		y + headR / 2 + bodyLength,
		x - legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);
	line(
		x,
		y + headR / 2 + bodyLength,
		x + legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);

	pop();
};

const person3 = (x, y, pendulumAngle) => {
	push();
	//head
	ellipse(x, y, headR, headR);

	let hipsOffset = sin(pendulumAngle) * params.hipsAmplitude;
	let hipsX = x + hipsOffset;

	const midPointBody = (x + hipsX) / 2;

	//body
	line(x, y + headR / 2, hipsX, y + headR / 2 + bodyLength);

	//arms
	//right arm
	line(
		midPointBody,
		y + headR / 2 + bodyLength / 2,
		midPointBody + (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2
	);
	line(
		midPointBody + (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2,
		midPointBody + (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2 - armLength * sin(pendulumAngle)
	);

	//left arm
	line(
		midPointBody,
		y + headR / 2 + bodyLength / 2,
		midPointBody - (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2
	);
	line(
		midPointBody - (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2,
		midPointBody - (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2 - armLength * sin(-pendulumAngle)
	);

	//legs
	line(
		hipsX,
		y + headR / 2 + bodyLength,
		x - legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);
	line(
		hipsX,
		y + headR / 2 + bodyLength,
		x + legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);

	pop();
};

const person4 = (x, y, pendulumAngle) => {
	push();
	//head
	ellipse(x, y, headR, headR);

	let hipsOffset = sin(pendulumAngle) * params.hipsAmplitude;
	let hipsX = x + hipsOffset;

	//body
	line(x, y + headR / 2, hipsX, y + headR / 2 + bodyLength);

	const midPointBody = (x + hipsX) / 2;

	//arms
	//right arm
	line(
		midPointBody,
		y + headR / 2 + bodyLength / 2,
		midPointBody + (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2 - 10
	);
	line(
		midPointBody + (armLength * 3) / 4,
		y + headR / 2 + bodyLength / 2 - 10,
		x + headR / 2,
		y + headR / 4
	);

	//left arm
	line(
		midPointBody,
		y + headR / 2 + bodyLength / 2,
		midPointBody - armLength,
		y + headR / 2 + bodyLength / 2
	);

	//legs
	line(
		hipsX,
		y + headR / 2 + bodyLength,
		x - legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);
	line(
		hipsX,
		y + headR / 2 + bodyLength,
		x + legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);

	pop();
};

const person5 = (x, y, pendulumAngle) => {
	push();
	//head
	const angle = (millis() / params.headCircleSpeed) * overallAmplitude;
	let headOffsetX = sin(angle) * 4;
	let headOffsetY = cos(angle) * 4;
	ellipse(x + headOffsetX, y + headOffsetY - headR / 4, headR, headR);

	//body
	line(x, y + headR / 2 + headOffsetY, x, y + headR / 2 + bodyLength);

	//arms
	//right arm
	line(
		x,
		y + headR / 2 + bodyLength / 2,
		x + (armLength * 2) / 3,
		y + headR / 2 + bodyLength / 2
	);
	line(
		x + (armLength * 2) / 3,
		y + headR / 2 + bodyLength / 2,
		x,
		y + headR / 2 + bodyLength
	);

	//left arm
	line(
		x,
		y + headR / 2 + bodyLength / 2,
		x - armLength,
		y - headR / 2 + bodyLength / 2
	);

	//legs
	line(
		x,
		y + headR / 2 + bodyLength,
		x - legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);
	line(
		x,
		y + headR / 2 + bodyLength,
		x + legLength / 3,
		y + headR / 2 + bodyLength + legLength
	);

	pop();
};

const person6 = (x, y, pendulumAngle) => {
	push();
	//head
	ellipse(x, y, headR, headR);

	//body
	line(x, y + headR / 2, x, y + headR / 2 + bodyLength);

	let shoulderOffset = sin(pendulumAngle) * params.shoulderAmplitude;
	let shoulderY = y + headR / 2 + bodyLength / 2 + shoulderOffset;

	let shoulderWidth = 12;

	//arms
	// right arm
	line(x, shoulderY, x + shoulderWidth, shoulderY);
	line(x + shoulderWidth, shoulderY, x + shoulderWidth, shoulderY + armLength);
	// left arm
	line(x, shoulderY, x - shoulderWidth, shoulderY);
	line(x - shoulderWidth, shoulderY, x - shoulderWidth, shoulderY + armLength);

	//legs
	line(
		x,
		y + headR / 2 + bodyLength,
		x - legLength / 8,
		y + headR / 2 + bodyLength + legLength
	);
	line(
		x,
		y + headR / 2 + bodyLength,
		x + legLength / 8,
		y + headR / 2 + bodyLength + legLength
	);

	pop();
};
