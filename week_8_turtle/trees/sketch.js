// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;

let width = 850;
let height = 600;

let leafNodes = [];

function setup() {
	createCanvas(width, height);
	angleMode(DEGREES);
	myTurtle = new Turtle();
	ellipseMode(CENTER);
	noLoop();
}

function draw() {
	background("#fdf6e3");
	noFill();
	strokeWeight(3);

	//big right leaning tree
	myTurtle.penUp();
	myTurtle.moveTo(100, 600);
	myTurtle.turnTo(-90);
	myTurtle.penDown();
	drawBranch1(150);

	//small right leaning tree
	myTurtle.penUp();
	myTurtle.moveTo(650, 600);
	myTurtle.turnTo(-90);
	myTurtle.penDown();
	drawBranch1(75);

	//big tree
	myTurtle.penUp();
	myTurtle.moveTo(500, 600);
	myTurtle.turnTo(-70);
	myTurtle.penDown();
	drawTree();

	//small tree
	myTurtle.penUp();
	myTurtle.moveTo(300, 600);
	myTurtle.turnTo(-70);
	myTurtle.penDown();
	drawTree(50);

	//right bush
	myTurtle.penUp();
	myTurtle.moveTo(500, 600);
	myTurtle.turnTo(-90);
	myTurtle.penDown();
	drawBush(80);

	//far right bush
	myTurtle.penUp();
	myTurtle.moveTo(700, 600);
	myTurtle.turnTo(-90);
	myTurtle.penDown();
	drawBush(80);

	//left bush
	myTurtle.penUp();
	myTurtle.moveTo(200, 600);
	myTurtle.turnTo(-90);
	myTurtle.penDown();
	drawBush(80);

	drawGrass();
}

const drawTree = (length = 100) => {
	push();
	stroke("#80461B");
	drawBranch(length);
	leafNodes.forEach((node) => {
		drawLeaf(node.x, node.y, node.angle);
	});
	pop();
};

const drawBranch = (length) => {
	if (length < 10) {
		leafNodes.push({ x: myTurtle.x, y: myTurtle.y, angle: myTurtle.bearing });
		return;
	}

	// draw this branch
	strokeWeight(length / 4);
	myTurtle.moveForward(length * 0.8);
	myTurtle.turnLeft(10);
	myTurtle.moveForward(length * 0.8);

	// left child
	myTurtle.pushState();
	myTurtle.turnLeft(random(20, 40));
	drawBranch(length * random(0.6, 0.8));

	myTurtle.popState();

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(random(20, 40));
	drawBranch(length * random(0.6, 0.8));
	myTurtle.popState();
};

const drawLeaf = (x, y, angle) => {
	push();
	stroke(239, random(255), 93);
	myTurtle.penUp();
	myTurtle.moveTo(x, y);
	myTurtle.turnTo(angle);
	myTurtle.penDown();

	for (let i = 0; i < 5; i++) {
		myTurtle.moveForward(1);
		myTurtle.turnRight(2);
	}
	pop();
};

const drawGrass = () => {
	push();
	myTurtle.penUp();

	myTurtle.moveTo(5, 600);

	myTurtle.turnTo(90);
	myTurtle.penDown();

	myTurtle.moveForward(200);

	for (let i = 0; i < width; i++) {
		push();

		stroke(random(220), 200, 93);
		strokeWeight(1);

		myTurtle.penUp();
		myTurtle.moveTo(i, 600);
		myTurtle.turnTo(-90);
		myTurtle.turnRight(random(-30, 30));
		myTurtle.penDown();
		myTurtle.moveForward(random(10, 15));

		pop();
	}

	pop();
};

const drawBranch1 = (length) => {
	if (length < 5) {
		return;
	}

	push();
	stroke(239, random(255), 93);

	// draw this branch
	myTurtle.moveForward(length);

	// left child
	myTurtle.pushState();
	myTurtle.turnLeft(20);
	drawBranch1(length * 0.5);
	myTurtle.popState();

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(20);
	drawBranch1(length * 0.8);
	myTurtle.popState();
	pop();
};

const drawBush = (length) => {
	if (length < 5) {
		return;
	}

	push();
	stroke(random(255), 200, 93);

	// draw this branch
	myTurtle.moveForward(length * 0.3);

	// left child
	myTurtle.pushState();
	myTurtle.turnLeft(40);
	drawBush(length * 0.75);
	myTurtle.popState();

	// right child
	myTurtle.pushState();
	myTurtle.turnRight(40);
	drawBush(length * 0.75);
	myTurtle.popState();
	pop();
};
