let height = 400;
let width = 600;
let bottomTriangles = [];
let topTriangles = [];
let sideLength;
let maxTriangles = 12;
let bottomY;
let myFont;
let fontSize = 36;

const palette = [
	"#474B24", //dark moss green
	"#5FBB97", //mint
];

function preload() {
	myFont = loadFont("MiriamLibre-Bold.ttf");
}

function setup() {
	createCanvas(width, height);

	textFont(myFont);
	textSize(fontSize);

	sideLength = width / maxTriangles;
	bottomTriangles.push({ x: 0, y: height - sideLength / 2, type: "up" });
	topTriangles.push({ x: width - sideLength, y: sideLength / 2, type: "down" });
}

function draw() {
	background("#eeeeee");

	noStroke();

	bottomY = height - sideLength / 2;

	text("COMP", width + 95 - frameCount, 200);
	text("FORM", -200 + frameCount, 230);

	// Add a new triangle to bottom row after the previous triangle has moved the distance of one sideLength
	if (bottomTriangles.length < maxTriangles / 2) {
		let lastTriangle = bottomTriangles[0];
		if (lastTriangle.x >= sideLength * 2) {
			bottomTriangles.unshift({ x: 0, y: bottomY, type: "up" });
		}
	}

	// Add a new triangle to top row after the previous triangle has moved the distance of one sideLength
	if (topTriangles.length < maxTriangles / 2) {
		let lastTriangle = topTriangles[0];
		if (lastTriangle.x <= width - sideLength * 3) {
			topTriangles.unshift({
				x: width - sideLength,
				y: sideLength / 2,
				type: "down",
			});
		}
	}

	// Update and draw each triangle in bottom row
	for (let i = 0; i < bottomTriangles.length; i++) {
		push();
		fill(i % 2 === 0 ? palette[0] : palette[1]);

		let triangle = bottomTriangles[i];
		triangle.x += 1;

		if (bottomTriangles.length === 5 && i === 0) {
			triangle.y -= 2;
			sierpinskiTriangle(triangle.x, triangle.y, sideLength, 1);
		}
		if (bottomTriangles.length === 6 && i === 1) {
			push();
			fill("black");
			sierpinskiTriangle(triangle.x, triangle.y, sideLength, 2);
			pop();
		} else if (bottomTriangles.length === 6) {
			// do nothing
		} else {
			// equilateralTriangle(triangle.x, triangle.y, sideLength);
			sierpinskiTriangle(triangle.x, triangle.y, sideLength, 1);
		}

		pop();
	}

	// Update and draw each triangle in top row
	for (let i = 0; i < topTriangles.length; i++) {
		push();
		fill(i % 2 === 0 ? palette[1] : palette[0]);
		let triangle = topTriangles[i];
		triangle.x -= 1;

		if (topTriangles.length === 6) {
			// do nothing
		} else {
			sierpinskiTriangle2(triangle.x, triangle.y, sideLength, 1);
		}
		pop();
	}

	if (bottomTriangles.length === maxTriangles / 2) {
		noLoop();
	}
}

const equilateralTriangle = (x, y, sideLength) => {
	const height = sideLength * (Math.sqrt(3) / 2);
	triangle(x, y, x + sideLength, y, x + sideLength / 2, y - height);
};

const equilateralTriangle2 = (x, y, sideLength) => {
	const height = sideLength * (Math.sqrt(3) / 2);
	triangle(x, y, x + sideLength, y, x + sideLength / 2, y + height);
};

const sierpinskiTriangle = (x, y, sideLength, depth) => {
	if (depth === 0) {
		equilateralTriangle(x, y, sideLength);
	} else {
		const height = sideLength * (Math.sqrt(3) / 2);
		sierpinskiTriangle(x, y, sideLength / 2, depth - 1);
		sierpinskiTriangle(x + sideLength / 2, y, sideLength / 2, depth - 1);
		sierpinskiTriangle(
			x + sideLength / 4,
			y - height / 2,
			sideLength / 2,
			depth - 1
		);
	}
};

const sierpinskiTriangle2 = (x, y, sideLength, depth) => {
	if (depth === 0) {
		equilateralTriangle2(x, y, sideLength);
	} else {
		const height = sideLength * (Math.sqrt(3) / 2);
		sierpinskiTriangle2(x, y, sideLength / 2, depth - 1);
		sierpinskiTriangle2(x + sideLength / 2, y, sideLength / 2, depth - 1);
		sierpinskiTriangle2(
			x + sideLength / 4,
			y + height / 2,
			sideLength / 2,
			depth - 1
		);
	}
};
