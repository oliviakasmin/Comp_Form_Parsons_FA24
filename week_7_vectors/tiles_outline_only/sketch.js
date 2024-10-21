paper.setup(document.getElementById("myCanvas"));

const palette = [
	"#033F63", //indigo
	"#28666E", //carribean blue
	"#7C9885", //medium green
	"#B5B682", //sage green
	"#FEDC97", //yellow
];

const tileSize = 100;

const createTileOutline = (x, y) => {
	var point = new paper.Point(x, y);
	var size = new paper.Size(tileSize, tileSize);
	var shape = new paper.Shape.Rectangle(point, size);
	shape.strokeColor = "black";
};

const drawCrossLines = (x, y) => {
	let line1 = new paper.Path();
	line1.moveTo([x + tileSize / 2, y]);
	line1.lineTo([x + tileSize / 2, y + tileSize]);
	let line2 = new paper.Path();
	line2.moveTo([x, y + tileSize / 2]);
	line2.lineTo([x + tileSize, y + tileSize / 2]);
	let lines = new paper.Group(line1, line2);
	lines.strokeColor = "black";
};

const drawDiagonalCrossLines = (x, y) => {
	let line1 = new paper.Path();
	line1.moveTo([x, y]);
	line1.lineTo([x + tileSize, y + tileSize]);
	let line2 = new paper.Path();
	line2.moveTo([x + tileSize, y]);
	line2.lineTo([x, y + tileSize]);
	let lines = new paper.Group(line1, line2);
	lines.strokeColor = "black";
};

const create4Petals = (x, y, color1, color2) => {
	// Define the four corners of the square
	var topLeft = new paper.Point(x, y);
	var topRight = new paper.Point(x + tileSize, y);
	var bottomLeft = new paper.Point(x, y + tileSize);
	var bottomRight = new paper.Point(x + tileSize, y + tileSize);

	var center = new paper.Point(x + tileSize / 2, y + tileSize / 2);

	// Draw petal from top-left corner to center
	var petal1Top = new paper.Path.Arc({
		from: topLeft,
		through: new paper.Point(x + (tileSize * 1) / 4, y + (tileSize * 1) / 8),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});
	var petal1Bottom = new paper.Path.Arc({
		from: topLeft,
		through: new paper.Point(x + (tileSize * 1) / 8, y + (tileSize * 1) / 4),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});

	// Draw petal from top-right corner to center
	var petal2Top = new paper.Path.Arc({
		from: topRight,
		through: new paper.Point(
			center.x + (tileSize * 1) / 8,
			center.y - (tileSize * 1) / 4
		),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});
	var petal2Bottom = new paper.Path.Arc({
		from: topRight,
		through: new paper.Point(
			center.x + (tileSize * 1) / 4,
			center.y - (tileSize * 1) / 8
		),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});

	// Draw petal from bottom-right corner to center
	var petal3Top = new paper.Path.Arc({
		from: bottomRight,
		through: new paper.Point(
			center.x + (tileSize * 1) / 4,
			center.y + (tileSize * 1) / 8
		),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});
	var petal3Bottom = new paper.Path.Arc({
		from: bottomRight,
		through: new paper.Point(
			center.x + (tileSize * 1) / 8,
			center.y + (tileSize * 1) / 4
		),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});

	// Draw petal from bottom-left corner to center
	var petal4Top = new paper.Path.Arc({
		from: bottomLeft,
		through: new paper.Point(
			center.x - (tileSize * 1) / 4,
			center.y + (tileSize * 1) / 8
		),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});
	var petal4Bottom = new paper.Path.Arc({
		from: bottomLeft,
		through: new paper.Point(
			center.x - (tileSize * 1) / 8,
			center.y + (tileSize * 1) / 4
		),
		to: center,
		strokeColor: "black",
		// strokeWidth: 2,
	});

	// let petals1 = new paper.Group([
	// 	petal2Top,
	// 	petal2Bottom,
	// 	petal4Top,
	// 	petal4Bottom,
	// ]);

	// let petals2 = new paper.Group([
	// 	petal1Top,
	// 	petal1Bottom,
	// 	petal3Top,
	// 	petal3Bottom,
	// ]);

	// petals1.fillColor = color1;
	// petals2.fillColor = color2;
};

// with circles
const createTile1 = (x, y) => {
	createTileOutline(x, y);
	create4Petals(x, y, palette[0], palette[0]);
	// drawCrossLines(x, y);
	// drawDiagonalCrossLines(x, y);

	const circleSize = 5;

	var circle1 = new paper.Shape.Circle({
		center: [x + tileSize / 2, y + tileSize / 8],
		radius: circleSize,
		strokeColor: "black",
	});

	var circle1_small = new paper.Shape.Circle({
		center: [x + tileSize / 2, y + tileSize / 8],
		radius: circleSize / 2,
		strokeColor: "black",
	});

	var circle2 = new paper.Shape.Circle({
		center: [x + tileSize / 2, y + (tileSize * 7) / 8],
		radius: circleSize,
		strokeColor: "black",
	});

	var circle2_small = new paper.Shape.Circle({
		center: [x + tileSize / 2, y + (tileSize * 7) / 8],
		radius: circleSize / 2,
		strokeColor: "black",
	});

	var circle3 = new paper.Shape.Circle({
		center: [x + tileSize / 8, y + tileSize / 2],
		radius: circleSize,
		strokeColor: "black",
	});

	var circle3_small = new paper.Shape.Circle({
		center: [x + tileSize / 8, y + tileSize / 2],
		radius: circleSize / 2,
		strokeColor: "black",
	});

	var circle4 = new paper.Shape.Circle({
		center: [x + (tileSize * 7) / 8, y + tileSize / 2],
		radius: circleSize,
		strokeColor: "black",
	});

	var circle4_small = new paper.Shape.Circle({
		center: [x + (tileSize * 7) / 8, y + tileSize / 2],
		radius: circleSize / 2,
		strokeColor: "black",
	});

	let circles = new paper.Group([circle1, circle2, circle3, circle4]);
	// circles.strokeWidth = 1;
	// circles.fillColor = palette[4];
};

// with squares
const createTile2 = (x, y) => {
	createTileOutline(x, y);
	create4Petals(x, y, palette[0], palette[0]);
	// drawCrossLines(x, y);

	const squareSize = 10;
	var center = new paper.Point(x + tileSize / 2, y + tileSize / 2);

	var square1 = new paper.Path.Rectangle({
		point: new paper.Point(center.x - squareSize / 2, y - squareSize / 2),
		size: squareSize,
		strokeColor: "black",
	});
	square1.rotate(45);

	var square2 = new paper.Path.Rectangle({
		point: new paper.Point(x - squareSize / 2, center.y - squareSize / 2),
		size: squareSize,
		strokeColor: "black",
	});
	square2.rotate(45);

	var square3 = new paper.Path.Rectangle({
		point: new paper.Point(
			x + tileSize - squareSize / 2,
			center.y - squareSize / 2
		),
		size: squareSize,
		strokeColor: "black",
	});
	square3.rotate(45);

	var square4 = new paper.Path.Rectangle({
		point: new paper.Point(
			center.x - squareSize / 2,
			y + tileSize - (squareSize * 1) / 2
		),
		size: squareSize,
		strokeColor: "black",
	});
	square4.rotate(45);

	let squares = new paper.Group([square1, square2, square3, square4]);
	// squares.fillColor = new paper.Color(0, 0, 1);
};

// with diagonal cross lines
const createTile3 = (x, y) => {
	createTileOutline(x, y);
	create4Petals(x, y, palette[1], palette[2]);
	// drawCrossLines(x, y);
	drawDiagonalCrossLines(x, y);
};

//center
createTile1(tileSize * 2, tileSize * 2);

//middle layer
for (let i = 1; i < 4; i++) {
	for (let j = 1; j < 4; j++) {
		if (i === 1 || i === 3) {
			createTile3(i * tileSize, j * tileSize);
		}
		if (j === 1 || j === 3) {
			createTile3(i * tileSize, j * tileSize);
		}
	}
}

//outer layer
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		if (i === 0 || i === 4) {
			createTile2(i * tileSize, j * tileSize);
		}
		if (j === 0 || j === 4) {
			createTile2(i * tileSize, j * tileSize);
		}
	}
}

paper.project.activeLayer.name = "content";
paper.view.draw();
