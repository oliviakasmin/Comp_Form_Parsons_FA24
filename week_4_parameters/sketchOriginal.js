// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js

let points = []; //store noisy y heights here
let offset = 0;
let inc = 0.001;
let yGap = 8;
let numLines;

//input parameters
// const params = {
// 	offset: 0,
// 	inc: 0.001,
// 	yGap: 8,
// 	// numLines: 30
// };
// const pane = new Tweakpane.Pane();

// pane.addInput(params, "offset", { min: 0, max: 5, step: 1 });
// pane.addInput(params, "inc", { min: 0.0001, max: 0.1, step: 1 });
// pane.addInput(params, "yGap", { min: 0, max: 16, step: 1 });

let pos_x_slider;

createP("Horizontal Position");
pos_x_slider = createSlider(0, width, width * 0.5);

function setup() {
	createCanvas(600, 600);
	for (let i = 0; i < width; i++) {
		points[i] = map(noise(offset, inc), 0, 1, 0, height);
		offset = offset + inc;
	}
}

const drawWavyLines = () => {
	const numLines = 30;

	for (let i = 0; i < width - 1; i++) {
		for (let j = 0; j < numLines; j++) {
			line(i, points[i] + j * yGap, i + 1, points[i + 1] + j * yGap);
		}
	}
};

function draw() {
	background("#F1ECE5");
	drawWavyLines();
}
