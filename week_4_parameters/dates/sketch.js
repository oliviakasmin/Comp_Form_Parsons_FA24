// require https://cdn.jsdelivr.net/npm/tweakpane@3.0.7/dist/tweakpane.min.js
// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js

//https://artviewer.org/on-kawara-at-museum-dhondt-dhaenens/

const pane = new Tweakpane.Pane();

let canvasWidth = 300;

let h = 400;
let w = 1000;
let margin = 20;

const canvasHeight = 200;

let myFont;
let blueCanvas;
let greenCanvas;
let blackCanvas;
let wall;

function preload() {
	myFont = loadFont("KAWARA_CAPS/KawaraCaps.ttf");
	blueCanvas = loadImage("canvases/blue-canvas.png");
	greenCanvas = loadImage("canvases/green-canvas.png");
	blackCanvas = loadImage("canvases/black-canvas.png");
	wall = loadImage("canvases/wall.png");
}

function setup() {
	createCanvas(w, h);
	noLoop();
}

let paintings = [];

const canvasY = 100;
const canvasX = {
	first: margin,
	second: canvasWidth + margin * 3,
	third: canvasWidth * 2 + margin * 4,
};

const onKawarabirthday = "Dec24,1932";
const moonLanding = "July16,1969";
const womensSuffrageUSA = "Aug26,1920";

const params = {
	color: "blue",
	date: "onKawarabirthday",
};

const addBtn = pane.addButton({
	title: "Add painting",
});

addBtn.on("click", () => {
	console.log("add painting clicked");
	createPainting();
});

pane.addInput(params, "color", {
	options: {
		blue: "blueCanvas",
		green: "greenCanvas",
		black: "blackCanvas",
	},
});

pane.addInput(params, "date", {
	options: {
		onKawarabirthday,
		moonLanding,
		womensSuffrageUSA,
	},
});

const createPainting = () => {
	switch (paintings.length) {
		case 0:
			image(eval(params.color), canvasX.first, canvasY);
			text(params.date, canvasX.first + 40, height / 2 + 10);
			break;
		case 1:
			image(eval(params.color), canvasX.second, canvasY);
			text(params.date, canvasX.second + 40, height / 2 + 10);
			break;
		case 2:
			image(eval(params.color), canvasX.third, canvasY);
			text(params.date, canvasX.third + 40, height / 2 + 10);
			break;
		default:
			break;
	}
	paintings.push(params.color);
};

function draw() {
	wall.resize(w, h);
	blueCanvas.resize(0, canvasHeight);
	greenCanvas.resize(0, canvasHeight);
	blackCanvas.resize(0, canvasHeight);

	background("white");

	textFont(myFont);
	textSize(28);

	fill("white");
	image(wall, 0, 0);
}
