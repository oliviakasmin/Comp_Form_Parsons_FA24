// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;

let width = 1000;
let height = 1000;

function setup() {
	createCanvas(width, height);
	angleMode(DEGREES);
	myTurtle = new Turtle();
	ellipseMode(CENTER);
}

function draw() {
	background("#c9975d");
	noFill();
	stroke("black");
	strokeWeight(3);

	drawCenterLine();
	drawEyes();
	drawTopHeadLeft();
	drawTopHeadRight();
	drawTopHeadFur();
	drawEars();
	drawNose();

	// console.log("Turtle State:");
	// console.log("x:", myTurtle.x, "y:", myTurtle.y);
	// console.log("bearing:", myTurtle.bearing);
	// console.log("penIsDown:", myTurtle.penIsDown);
	noLoop();
}

const drawCenterLine = () => {
	// draw center line
	push();
	strokeWeight(5);
	myTurtle.penUp();
	myTurtle.moveTo(width / 2, 100);
	myTurtle.turnRight(91);
	myTurtle.penDown();
	myTurtle.moveForward(150);
	myTurtle.turnLeft(2);
	myTurtle.moveForward(100);
	myTurtle.turnRight(1);
	myTurtle.moveForward(100);
	pop();
	console.log("x:", myTurtle.x, "y:", myTurtle.y);
};

const drawTopHeadLeft = () => {
	myTurtle.penUp();
	myTurtle.moveTo(width / 2, 100);
	myTurtle.turnTo(180 - 10);
	myTurtle.penDown();
	myTurtle.moveForward(100);
	myTurtle.turnLeft(5);
	myTurtle.moveForward(100);
	// console.log("x:", myTurtle.x, "y:", myTurtle.y);
};

const drawTopHeadRight = () => {
	myTurtle.penUp();
	myTurtle.moveTo(width / 2, 100);
	myTurtle.turnTo(10);
	myTurtle.penDown();
	myTurtle.moveForward(100);
	myTurtle.turnRight(5);
	myTurtle.moveForward(100);
	// console.log("x:", myTurtle.x, "y:", myTurtle.y);
};

const drawTopHeadFur = () => {
	const start = { x: 305, y: 143 };

	myTurtle.penUp();
	myTurtle.moveTo(start.x, start.y);
	myTurtle.turnTo(-110);
	myTurtle.penDown();

	push();
	strokeWeight(0.5);
	for (let i = 0; i < 40; i++) {
		myTurtle.penUp();
		myTurtle.moveTo(start.x + 5 * i, start.y - 0.9 * i);
		myTurtle.penDown();
		myTurtle.moveForward(random(40, 50));
		myTurtle.turnRight(random(0.4, 0.5));
	}

	for (let i = 0; i < 40; i++) {
		myTurtle.penUp();
		myTurtle.moveTo(width / 2 + 5 * i, 100 + 0.95 * i);
		myTurtle.penDown();
		myTurtle.moveForward(random(40, 50));
		myTurtle.turnRight(random(0.4, 0.6));
	}

	pop();
};

const drawEyes = () => {
	// draw eyes roughly
	push();
	strokeWeight(10);
	fill("#d29632");
	ellipse(width / 2 - 150, 400, 75, 60);
	ellipse(width / 2 + 150, 400, 75, 60);
	pop();

	push();
	fill("black");
	ellipse(width / 2 - 150, 400 - 5, 15, 18);
	ellipse(width / 2 + 150, 400 - 5, 15, 18);
	pop();
};

const drawEars = () => {
	//right ear
	myTurtle.penUp();
	myTurtle.moveTo(695, 143);
	myTurtle.turnTo(-75);
	// console.log("bearing:", myTurtle.bearing);
	myTurtle.penDown();

	for (let i = 0; i < 200; i++) {
		myTurtle.moveForward(2);
		myTurtle.turnRight(1.1);
	}

	myTurtle.turnLeft(60);

	for (let i = 0; i < 40; i++) {
		myTurtle.moveForward(2);
		myTurtle.turnRight(1);
	}

	//fur
	myTurtle.penUp();
	let startRightEar = { x: 695, y: 160 };
	myTurtle.moveTo(startRightEar.x, startRightEar.y);
	myTurtle.turnTo(-50);
	push();
	strokeWeight(0.5);
	myTurtle.penDown();
	for (let i = 0; i < 10; i++) {
		myTurtle.penUp();
		myTurtle.moveTo(startRightEar.x + i * 5, startRightEar.y + i * 5);
		myTurtle.penDown();
		myTurtle.moveForward(random(100, 150));
		myTurtle.turnRight(6);
	}
	pop();

	//left ear
	myTurtle.penUp();
	myTurtle.moveTo(305, 143);
	myTurtle.turnTo(75 + 180);
	myTurtle.penDown();

	for (let i = 0; i < 200; i++) {
		myTurtle.moveForward(2);
		myTurtle.turnLeft(1.1);
	}

	myTurtle.turnRight(60);

	for (let i = 0; i < 40; i++) {
		myTurtle.moveForward(2);
		myTurtle.turnLeft(1);
	}

	//fur
	myTurtle.penUp();
	let startLeftEar = { x: 305, y: 160 };
	myTurtle.moveTo(startLeftEar.x, startLeftEar.y);
	myTurtle.turnTo(50 + 180);
	push();
	strokeWeight(0.5);
	myTurtle.penDown();
	for (let i = 0; i < 10; i++) {
		myTurtle.penUp();
		myTurtle.moveTo(startLeftEar.x - i * 5, startLeftEar.y + i * 5);
		myTurtle.penDown();
		myTurtle.moveForward(random(100, 150));
		myTurtle.turnLeft(6);
	}
	pop();
};

const drawNose = () => {
	// draw nose
	push();
	strokeWeight(5);
	myTurtle.penUp();
	myTurtle.moveTo(499 - 55, 550);
	myTurtle.turnTo(0);
	myTurtle.penDown();

	myTurtle.moveForward(110);
	myTurtle.turnRight(140);
	myTurtle.moveForward(70);
	myTurtle.turnRight(80);
	myTurtle.moveForward(70);

	pop();
};
