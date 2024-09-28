//require https://cdn.jsdelivr.net/npm/p5@1.9.4/lib/p5.js

// Inspiration: Anni Albers - Black-White-Yellow; Original 1926 (lost), re-woven by Gunta Stölzl in 1965

const beige = "#d6bfa1";
const yellow = "#d6b965";
const black = "#252521";
const green = "#74682e";
const grey = "#696359";

const solidColors = [beige, yellow, grey];
const stripedColors = [black, green, grey];

const solid = "solid";
const striped = "striped";

const drawnRows = [];

const solidOrStriped = (i, j, currentRow = []) => {
	//   want about 50/50 distribution
	//   but a solid cannot go next to or above/below another solid

	//   check left neighbor
	let leftNeighbor;

	if (i !== 0) {
		leftNeighbor = currentRow[i - 1];
	}

	//   check above neighbor
	let aboveNeighbor;
	if (j !== 0) {
		aboveNeighbor = drawnRows[j - 1][i];
	}

	if (leftNeighbor === solid || aboveNeighbor === solid) {
		return striped;
	}

	const num = Math.floor(random(1, 3));
	if (num === 1) {
		return solid;
	} else {
		return striped;
	}
};

const chooseSolidColor = () => {
	const idx = Math.floor(random(0, 3));
	return solidColors[idx];
};

const chooseStripedColors = () => {
	const idx = Math.floor(random(0, 3));
	const color1 = stripedColors[idx];

	// remove first chosen color from options
	const remainingColors = stripedColors.filter((el, i) => i !== idx);
	const idx2 = Math.floor(random(0, 2));
	const color2 = remainingColors[idx2];

	return [color1, color2];
};

const totalWidth = 368;
const totalHeight = 600;

const numRectsWide = 12;
const numRectsHeight = 7;

const rectWidth = totalWidth / numRectsWide;
const rectHeight = totalHeight / numRectsHeight;

const drawSolidRectangle = (x, y) => {
	const fillColor = chooseSolidColor();
	fill(fillColor);
	rect(x, y, rectWidth, rectHeight);
};

const drawStripedRectangle = (x, y) => {
	const numStripes = 6;
	const [color1, color2] = chooseStripedColors();
	const heightRow = rectHeight / numStripes;

	for (let i = 0; i < numStripes; i++) {
		if (i % 2 === 0) {
			fill(color1);
			rect(x, y + i * heightRow, rectWidth, heightRow);
		} else {
			fill(color2);
			rect(x, y + i * heightRow, rectWidth, heightRow);
		}
	}
};

const drawRow = (y, j) => {
	const currentRow = [];
	for (let i = 0; i < numRectsWide; i++) {
		const fillPattern = solidOrStriped(i, j, currentRow);

		//     store the chosen fill for reference by future rectangles
		currentRow.push(fillPattern);

		if (fillPattern === solid) {
			drawSolidRectangle(i * rectWidth, y);
		} else {
			drawStripedRectangle(i * rectWidth, y);
		}
	}

	drawnRows.push(currentRow);
};

const drawGrid = () => {
	for (let j = 0; j < numRectsHeight; j++) {
		drawRow(j * rectHeight, j);
	}
};

function setup() {
	createCanvas(totalWidth, totalHeight);
	noLoop();
	noStroke();
}

function draw() {
	drawGrid();
}
