// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;

let width = 600;
let height = 600;

const palette = [
	"#BE6E46", // copper
	"#A3BFA8", // sage green
	"#475841", // dark green
	// "#475841", // gray
	"#CDE7B0", // light green
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

	myTurtle.penUp();
	myTurtle.moveTo(60, 100);
	myTurtle.turnTo(60);
	myTurtle.penDown();

	// drawRowTriangles(100, "squigglyForward");
	// drawRowTriangles(100, "dottedForward");
	drawRowTriangles(100, "zigzagForward");

	myTurtle.penUp();
	myTurtle.moveTo(60, 300);
	myTurtle.turnTo(60);
	myTurtle.penDown();

	// drawRowTriangles(100, "squigglyForward");
	// drawRowTriangles(100, "dottedForward");
	drawRowTriangles(100, "zigzagForward");

	myTurtle.penUp();
	myTurtle.moveTo(60, 500);
	myTurtle.turnTo(60);
	myTurtle.penDown();

	// drawRowTriangles(100, "squigglyForward");
	// drawRowTriangles(100, "dottedForward");
	drawRowTriangles(100, "zigzagForward");

	// console.log("Turtle State:");
	// console.log("x:", myTurtle.x, "y:", myTurtle.y);
	// console.log("bearing:", myTurtle.bearing);
	// console.log("penIsDown:", myTurtle.penIsDown);
	noLoop();
}

const drawTriangle = (length, method) => {
	for (let i = 0; i < 3; i++) {
		if (method === "squigglyForward") {
			myTurtle.squigglyForward(length);
		} else if (method === "dottedForward") {
			myTurtle.dottedForward(length);
		} else if (method === "zigzagForward") {
			myTurtle.zigzagForward(length);
		} else {
			myTurtle.moveForward(length);
		}
		// myTurtle.moveForward(length);
		myTurtle.turnRight(120);
	}
};

const drawRowTriangles = (length, method) => {
	for (let i = 0; i < 4; i++) {
		myTurtle.penDown();
		push();
		stroke(palette[i]);
		drawTriangle(length, method);
		myTurtle.turnRight(180);
		myTurtle.penUp();
		myTurtle.moveTo(myTurtle.x + (length * 2) / 3, myTurtle.y);
		pop();
	}
	for (let i = 0; i < 4; i++) {
		myTurtle.penDown();
		push();
		stroke(palette[i]);
		drawTriangle(length, method);
		myTurtle.turnRight(180);
		myTurtle.penUp();
		myTurtle.moveTo(myTurtle.x + (length * 2) / 3, myTurtle.y);
		pop();
	}
};
