// https://editor.p5js.org/oliviakasmin/sketches/q3un_pCZx

// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let headR = 20;
let armLength = 30;
let legLength = 50;
let bodyLength = 40;
let width = 400;
let height = 400;

let params = {
	headAmplitude: 7.5,
	hipsAmplitude: 15,
	shoulderAmplitude: 7.5,
	headCircleSpeed: 100,
	pendulumAmplitude: 0.5,
};

const pane = new Tweakpane.Pane();

pane.addInput(params, "headAmplitude", { min: 0, max: 12 });
pane.addInput(params, "hipsAmplitude", { min: 0, max: 30 });
pane.addInput(params, "shoulderAmplitude", { min: 0, max: 15 });
pane.addInput(params, "headCircleSpeed", { min: 50, max: 400 });
pane.addInput(params, "pendulumAmplitude", { min: 0, max: 1 });

function setup() {
	createCanvas(400, 400);
	frameRate(60);
	frameRateSlider = createSlider(0, 60, 60);
	frameRateSlider.input(function updateFPS() {
		frameRate(this.value());
	});

	strokeWeight(6);
	stroke("white");
	noFill();
}

function draw() {
	background("pink");

	const theta = map(millis(), 0, 1000, 0, 2 * PI);
	const pendulumAngle = sin(theta) * params.pendulumAmplitude;

	const row1Y = 75;
	const row2Y = 250;

	person1(100, row1Y, pendulumAngle);
	person2(200, row1Y, pendulumAngle);
	person3(300, row1Y, pendulumAngle);

	person4(100, row2Y, pendulumAngle);
	person5(200, row2Y, pendulumAngle);
	person6(300, row2Y, pendulumAngle);
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
	const angle = (millis() / params.headCircleSpeed) * params.pendulumAmplitude;
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
