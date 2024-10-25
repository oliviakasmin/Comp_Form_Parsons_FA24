// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;
let g;
let letterHeight;
let letterStartY;
let distanceBetween;
let tWidth;
let eWidth;

const palette = [
	// "#475841", // dark green
	"#006400", // dark green
	"#A3BFA8", // sage green
];

function setup() {
	createCanvas(800, 400);

	angleMode(DEGREES);
	noFill();
	background("#f1ece5");
	strokeWeight(10);

	myTurtle = new Turtle();
	myTurtle.show();

	frameRate(0.01);

	g = drawGenerator(); // create a generator object using the generator function
	noLoop();
}

function mousePressed() {
	redraw();
}

function draw() {
	g.next();
}

function* drawGenerator() {
	yield;
	letterHeight = 100;
	letterStartY = 150;
	distanceBetween = 40;
	tWidth = 80;
	eWidth = 60;

	let from = color(palette[0]);
	let to = color(palette[1]);

	// lerp colors between palette start and finish
	let interA = lerpColor(from, to, 0.2);
	let interB = lerpColor(from, to, 0.4);
	let interC = lerpColor(from, to, 0.6);
	let interD = lerpColor(from, to, 0.8);

	//draw T
	let startT = { x: 100, y: letterStartY };
	push();
	stroke(palette[0]);
	// drawT(startT);
	//vertical line
	myTurtle.penUp();
	myTurtle.moveTo(startT.x, startT.y);

	yield;

	myTurtle.turnTo(90);

	yield;

	myTurtle.penDown();
	myTurtle.moveForward(letterHeight);

	yield;

	//horizontal line
	myTurtle.penUp();
	myTurtle.moveTo(startT.x - tWidth / 2, startT.y);

	yield;

	myTurtle.turnTo(0);

	yield;

	myTurtle.penDown();
	myTurtle.moveForward(tWidth);

	pop();

	yield;

	// draw U
	let startU = { x: myTurtle.x + distanceBetween, y: letterStartY };
	push();
	stroke(interA);
	// drawU(startU);
	myTurtle.penUp();
	myTurtle.moveTo(startU.x, startU.y);

	yield;

	myTurtle.turnTo(90);

	yield;

	myTurtle.penDown();

	yield;

	//left vertical line
	myTurtle.moveForward(letterHeight - 40);

	yield;

	// bottom semi circle
	for (let i = 0; i < 18; i++) {
		myTurtle.moveForward(6.5);
		myTurtle.turnLeft(10);
	}

	yield;

	//right vertical line
	myTurtle.moveTo(myTurtle.x, letterStartY);
	pop();

	yield;

	// draw R
	let startR = { x: myTurtle.x + distanceBetween + 20, y: letterStartY };
	push();
	stroke(interB);
	// drawR(startR);
	myTurtle.penUp();
	myTurtle.moveTo(startR.x, startR.y + letterHeight);
	myTurtle.turnTo(270);

	yield;

	myTurtle.penDown();

	yield;

	//vertical line
	myTurtle.moveForward(letterHeight);

	yield;

	myTurtle.turnRight(90);

	//right semi circle
	for (let i = 0; i < 180; i++) {
		myTurtle.moveForward(0.65);
		myTurtle.turnRight(1);
	}

	yield;

	//tail
	myTurtle.turnLeft(160);
	myTurtle.moveTo(startR.x + 40, letterStartY + letterHeight);
	pop();

	yield;

	// draw T2
	let startT2 = {
		x: myTurtle.x + distanceBetween + tWidth / 2,
		y: letterStartY,
	};
	push();
	stroke(interC);
	// drawT(startT2);
	//vertical line
	myTurtle.penUp();
	myTurtle.moveTo(startT2.x, startT2.y);

	yield;

	myTurtle.turnTo(90);
	myTurtle.penDown();
	myTurtle.moveForward(letterHeight);

	yield;

	//horizontal line
	myTurtle.penUp();
	myTurtle.moveTo(startT2.x - tWidth / 2, startT2.y);

	yield;

	myTurtle.turnTo(0);
	myTurtle.penDown();
	myTurtle.moveForward(tWidth);
	pop();

	yield;

	let startL = { x: myTurtle.x + distanceBetween, y: letterStartY };
	push();
	stroke(interD);
	// drawL(startL);
	myTurtle.penUp();
	myTurtle.moveTo(startL.x, startL.y);
	myTurtle.turnTo(90);

	yield;

	myTurtle.penDown();
	myTurtle.moveForward(letterHeight);
	myTurtle.turnLeft(90);

	yield;

	myTurtle.moveForward(tWidth - 20);
	pop();

	yield;

	let startE = { x: myTurtle.x + distanceBetween, y: letterStartY };
	push();
	stroke(palette[1]);
	// drawE(startE);
	myTurtle.penUp();
	myTurtle.moveTo(startE.x + eWidth, startE.y);
	myTurtle.turnTo(180);

	yield;

	myTurtle.penDown();
	myTurtle.moveForward(eWidth);

	yield;

	myTurtle.turnLeft(90);
	myTurtle.moveForward(letterHeight);

	yield;

	myTurtle.turnLeft(90);
	myTurtle.moveForward(eWidth);

	yield;

	myTurtle.penUp();
	myTurtle.moveTo(startE.x, startE.y + letterHeight / 2);

	yield;

	myTurtle.penDown();
	myTurtle.moveForward((eWidth * 2) / 3);

	pop();

	yield;

	// drawUnderline(startT.x - tWidth / 2, startE.x + eWidth);

	let underlineStart = {
		startX: startT.x - tWidth / 2,
		endX: startE.x + eWidth,
	};

	push();
	strokeWeight(4);
	myTurtle.penUp();
	myTurtle.moveTo(underlineStart.startX, letterStartY + letterHeight + 40);

	yield;

	myTurtle.turnTo(0);

	yield;

	myTurtle.penDown();
	myTurtle.zigzagForward(underlineStart.endX - underlineStart.startX + 20);
	pop();
}

// const drawT = (start) => {
// 	//vertical line
// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x, start.y);
// 	myTurtle.turnTo(90);
// 	myTurtle.penDown();
// 	myTurtle.moveForward(letterHeight);

// 	//horizontal line
// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x - tWidth / 2, start.y);
// 	myTurtle.turnTo(0);
// 	myTurtle.penDown();
// 	myTurtle.moveForward(tWidth);
// };

// const drawU = (start) => {
// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x, start.y);
// 	myTurtle.turnTo(90);
// 	myTurtle.penDown();

// 	//left vertical line
// 	myTurtle.moveForward(letterHeight - 40);

// 	// bottom semi circle
// 	for (let i = 0; i < 18; i++) {
// 		myTurtle.moveForward(6.5);
// 		myTurtle.turnLeft(10);
// 	}

// 	//right vertical line
// 	myTurtle.moveTo(myTurtle.x, letterStartY);
// };

// const drawR = (start) => {
// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x, start.y + letterHeight);
// 	myTurtle.turnTo(270);
// 	myTurtle.penDown();

// 	//vertical line
// 	myTurtle.moveForward(letterHeight);

// 	myTurtle.turnRight(90);

// 	//right semi circle
// 	for (let i = 0; i < 180; i++) {
// 		myTurtle.moveForward(0.65);
// 		myTurtle.turnRight(1);
// 	}

// 	//tail
// 	myTurtle.turnLeft(160);
// 	myTurtle.moveTo(start.x + 40, letterStartY + letterHeight);
// };

// const drawL = (start) => {
// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x, start.y);
// 	myTurtle.turnTo(90);
// 	myTurtle.penDown();
// 	myTurtle.moveForward(letterHeight);
// 	myTurtle.turnLeft(90);
// 	myTurtle.moveForward(tWidth - 20);
// };

// const drawE = (start) => {
// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x + eWidth, start.y);
// 	myTurtle.turnTo(180);
// 	myTurtle.penDown();
// 	myTurtle.moveForward(eWidth);

// 	myTurtle.turnLeft(90);
// 	myTurtle.moveForward(letterHeight);

// 	myTurtle.turnLeft(90);
// 	myTurtle.moveForward(eWidth);

// 	myTurtle.penUp();
// 	myTurtle.moveTo(start.x, start.y + letterHeight / 2);
// 	myTurtle.penDown();
// 	myTurtle.moveForward((eWidth * 2) / 3);
// };

// const drawUnderline = (startX, endX) => {
// 	push();
// 	strokeWeight(4);
// 	myTurtle.penUp();
// 	myTurtle.moveTo(startX, letterStartY + letterHeight + 40);
// 	myTurtle.turnTo(0);
// 	myTurtle.penDown();
// 	myTurtle.zigzagForward(endX - startX + 20);
// 	pop();
// };
