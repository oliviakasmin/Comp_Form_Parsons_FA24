// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;

let width = 600;
let height = 600;

let vaseStart = { x: width / 2 - 50, y: height - 10 };
// let vaseEnd = { x: width / 2 + 50, y: height - 10 };

const palette = [
	"#BE6E46", // copper
	"#A3BFA8", // sage green
	"#475841", // dark green
	"#475841", // gray
	"#CDE7B0", // light green
	"#3F7CAC", // dark blue
	"#95AFBA", // light blue
	"#D5E1A3", // light green 2
	"#BDC4A7", // light green 3
];

function setup() {
	createCanvas(width, height);
	angleMode(DEGREES);
	myTurtle = new Turtle();
	ellipseMode(CENTER);
}

function draw() {
	background("#f1ece5");
	noFill();
	stroke("black");
	strokeWeight(4);

	drawVase();

	//flower 1
	const flower1X = 200;
	const flower1Y = 320;

	//flower 2
	const flower2X = 400;
	const flower2Y = 310;

	//flower 3
	const flower3X = 290;
	const flower3Y = 180;

	//small flower 1
	const smallFlower1X = 410;
	const smallFlower1Y = 180;

	//small flower 2
	const smallFlower2X = 170;
	const smallFlower2Y = 200;

	//draw all stems
	drawStem(flower1X, flower1Y, 10);
	drawStem(flower2X, flower2Y, 80);
	drawStem(flower3X, flower3Y, 40);
	drawStem(smallFlower1X, smallFlower1Y, 70);
	drawStem(smallFlower2X, smallFlower2Y, 30);

	//draw all flowers
	drawFlower(flower1X, flower1Y);
	drawFlower(flower2X, flower2Y, palette[2]);
	drawFlower(flower3X, flower3Y, palette[5]);
	drawSmallFlower(smallFlower1X, smallFlower1Y, palette[0]);
	drawSmallFlower(smallFlower2X, smallFlower2Y);

	// console.log("Turtle State:");
	// console.log("x:", myTurtle.x, "y:", myTurtle.y);
	// console.log("bearing:", myTurtle.bearing);
	// console.log("penIsDown:", myTurtle.penIsDown);

	noLoop();
}

const drawPetal = (startX, startY, color = palette[0]) => {
	let forwardDistance = 20;
	let steps = 10;
	let turnAngle = 10;

	push();
	stroke(color);
	strokeWeight(3);

	for (let i = 0; i < steps; i++) {
		myTurtle.squigglyForward(forwardDistance);
		myTurtle.turnRight(turnAngle);
	}

	myTurtle.penUp();
	myTurtle.moveTo(startX, startY);
	myTurtle.penDown();

	for (let i = 0; i < steps; i++) {
		myTurtle.squigglyForward(forwardDistance);
		myTurtle.turnLeft(turnAngle);
	}

	pop();
};

const drawSmallPetal = (startX, startY, color = palette[1]) => {
	let forwardDistance = 10;

	push();
	stroke(color);
	strokeWeight(3);

	myTurtle.squigglyForward(forwardDistance * 6);

	myTurtle.penUp();
	myTurtle.moveTo(startX, startY);
	myTurtle.turnRight(90);
	myTurtle.penDown();

	myTurtle.dottedForward(forwardDistance * 4.5);

	pop();
};

const drawFlower = (startX, startY, color) => {
	myTurtle.penUp();
	myTurtle.moveTo(startX, startY);
	myTurtle.penDown();

	for (let i = 0; i < 5; i++) {
		drawPetal(startX, startY, color);
		myTurtle.penUp();
		myTurtle.moveTo(startX, startY);
		myTurtle.turnRight(70);
		myTurtle.penDown();
	}
};

const drawSmallFlower = (startX, startY, color) => {
	myTurtle.penUp();
	myTurtle.moveTo(startX, startY);
	myTurtle.penDown();

	for (let i = 0; i < 5; i++) {
		drawSmallPetal(startX, startY, color);
		myTurtle.penUp();
		myTurtle.moveTo(startX, startY);
		myTurtle.turnRight(75);
		myTurtle.penDown();
	}
};

const drawVase = () => {
	push();
	strokeWeight(1.5);
	stroke(palette[3]);

	//bottom
	myTurtle.penUp();
	myTurtle.moveTo(vaseStart.x, vaseStart.y);
	myTurtle.turnTo(0);
	myTurtle.penDown();
	myTurtle.moveForward(100);

	//right side
	myTurtle.turnLeft(90);
	myTurtle.moveForward(150);

	//left side
	myTurtle.penUp();
	myTurtle.moveTo(vaseStart.x, vaseStart.y);
	myTurtle.turnTo(270);
	myTurtle.penDown();
	myTurtle.moveForward(150);

	pop();

	//water
	for (let i = 0; i < 9; i++) {
		myTurtle.penUp();
		myTurtle.moveTo(width / 2 - 50, height - 145 + i * 15);
		myTurtle.turnTo(0);
		myTurtle.penDown();
		push();
		strokeWeight(6);
		stroke(palette[6]);
		myTurtle.squigglyForward(110);
		pop();
	}
};

const drawStem = (startX, startY, deltaX) => {
	myTurtle.penUp();
	myTurtle.moveTo(startX, startY);
	myTurtle.penDown();
	push();
	let c = color(palette[4]);
	c.setAlpha(110);
	stroke(c);
	myTurtle.moveTo(vaseStart.x + deltaX, vaseStart.y - 130);
	pop();
};
