const colors = [
	"#658a95",
	"#b2bc99",
	"#cce3e4",
	"#58926f",
	"#a1a19c",
	"#517691",
];

function setup() {
	createCanvas(600, 400);
	const backgroundColor = color(colors[2]);
	backgroundColor.setAlpha(100);
	background(backgroundColor);
	noLoop();
	strokeWeight(1);
}

const drawMountain = (y, dimension, strokeColor, alphaNum) => {
	let mountainColor = color(strokeColor);
	let noiseLevel = random(100, 150);
	let noiseScale = random(0.001, 0.02);

	for (let x = 0; x < width; x++) {
		mountainColor.setAlpha(alphaNum);
		stroke(mountainColor);
		let nx = noiseScale * x;
		let ny = noiseLevel * noise(nx, dimension);
		line(x, height, x, ny + y);
	}
};

const drawLadder = (x, y) => {
	let x1 = x;
	let x2 = x + 20;

	let y1 = y;
	let y2 = y + 60;

	//   vertical lines
	line(x1, y1, x1, y2);
	line(x2, y1, x2, y2);

	//   horizontal lines
	for (let i = 1; i < 6; i++) {
		line(x1, y1 + i * 10, x2, y1 + i * 10);
	}
};

const drawPath = () => {
	stroke("black");

	text("start", 35, height - 5);

	// ladders
	drawLadder(10, height - 60);
	drawLadder(450, 240);
	drawLadder(380, 145);

	// paths
	drawingContext.setLineDash([5, 10]);
	line(35, 325, 450, 300);
	line(460, 240, 400, 200);
	line(400, 140, 550, 120);

	text("end", 560, 120);
};

function draw() {
	drawMountain(0, 0, colors[4], 240);
	drawMountain(50, 0, colors[0], 150);
	drawMountain(100, 1, colors[1], 150);
	drawMountain(150, 3, colors[5], 240);
	drawMountain(200, 2, colors[2], 145);
	drawMountain(300, 3, colors[3], 240);

	drawPath();
}
