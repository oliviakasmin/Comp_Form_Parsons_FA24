let points = []; //store noisy y heights here
let circles = [];
let offset;
let inc;
let yGap;
let numLines;
let lineWidth;
let circleRadius;

let offsetSlider;
let incSlider;

let positionSlider;
let sizeSlider;

let palette = [
	"#75c8ae", //teal
	"#5a3d2b", //brown
	"#e5771e", //orange
	"#f4a127", // yellow
];
let backgroundColor = "#ffecb4"; //beige

function setup() {
	createCanvas(800, 800);

	offsetSlider = createSlider(0, 5, 1);
	offsetSlider.position(10, 20);
	offsetSlider.size(60);

	incSlider = createSlider(0, 5, 2);
	incSlider.position(90, 20);
	incSlider.size(60);

	yGapSlider = createSlider(5, 50, 15);
	yGapSlider.position(170, 20);
	yGapSlider.size(60);

	numLinesSlider = createSlider(15, 45, 30);
	numLinesSlider.position(250, 20);
	numLinesSlider.size(60);

	lineWidthSlider = createSlider(5, 30, 10);
	lineWidthSlider.position(330, 20);
	lineWidthSlider.size(60);

	circleRadiusSlider = createSlider(40, 160, 100);
	circleRadiusSlider.position(410, 20);
	circleRadiusSlider.size(60);
}

const drawWavyLines = (numLines, lineWidth) => {
	for (let i = 0; i < width; i++) {
		for (let j = 0; j < numLines; j++) {
			push();
			let color = palette[j % 4];
			stroke(color);
			strokeWeight(lineWidth);
			line(i, points[i] + j * yGap, i + 1, points[i + 1] + j * yGap);
			pop();
		}
	}
};

const drawCircle = (x, y, r) => {
	console.log("drawCircle");
	console.log(x);
	console.log(y);
	console.log(r);
	let diference = r / 5;

	for (let i = 0; i < 4; i++) {
		push();
		noStroke();
		let color = palette[i];
		fill(color);
		console.log("ellipse here");
		ellipse(x, y, r - i * diference, r - i * diference);
		pop();
	}
};

function mousePressed() {
	if (mouseY > 80) {
		circles.push([mouseX, mouseY, circleRadius]);
	}
}

function draw() {
	background(backgroundColor);
	text("offset", 10, 15);
	offset = offsetSlider.value();

	text("increment", 90, 15);
	inc = incSlider.value() / 1000;

	text("yGap", 170, 15);
	yGap = yGapSlider.value();

	text("numLines", 250, 15);
	numLines = numLinesSlider.value();

	text("lineWidth", 330, 15);
	lineWidth = lineWidthSlider.value();

	text("circleRadius", 410, 15);
	circleRadius = circleRadiusSlider.value();

	for (let i = 0; i < width; i++) {
		points[i] = map(noise(offset, inc), 0, 1, 0, height - 200);
		offset = offset + inc;
	}

	drawWavyLines(numLines, lineWidth);

	for (let i = 0; i < circles.length; i++) {
		drawCircle(circles[i][0], circles[i][1], circles[i][2]);
	}
}
