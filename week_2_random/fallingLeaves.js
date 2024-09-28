let leaves = [];

const drawSingleLeaf = (xPos, yPos) => {
	beginShape();
	vertex(xPos, yPos);
	bezierVertex(xPos - 20, yPos + 40, xPos - 15, yPos + 50, xPos, yPos + 60);
	vertex(xPos, yPos);
	bezierVertex(xPos + 20, yPos + 40, xPos + 15, yPos + 50, xPos, yPos + 60);
	endShape();
};

class Leaf1 {
	constructor(x, y) {
		this.xPos = x;
		this.yPos = y;
		this.yPos2 = y + 3;
		this.yPos3 = y + 4;
		this.size = 50;
	}

	move() {
		const randomDown = random(0.5, 0.8);
		this.yPos += randomDown + 0.1;
		this.yPos2 += randomDown;
		this.yPos3 += randomDown - 0.05;
	}

	show() {
		push();
		fill(`rgba(255, 222, 33, 0.5)`);
		drawSingleLeaf(this.xPos, this.yPos3);
		pop();

		push();
		fill(`rgba(217, 82, 50, 1)`);
		drawSingleLeaf(this.xPos, this.yPos2);
		pop();

		push();
		fill(`rgba(242, 149, 65, 0.7)`);
		drawSingleLeaf(this.xPos, this.yPos);
		pop();
	}
}

function setup() {
	createCanvas(800, 800);
	noStroke();
}

function draw() {
	background("#EDF9EB");

	for (var i = 0; i < leaves.length; i++) {
		leaves[i].show();
		leaves[i].move();

		if (leaves[i].yPos > 1000) {
			leaves.splice(i, 1);
		}
	}

	push();
	fill("#c2aa3e");
	drawSingleLeaf(mouseX, mouseY);
	pop();
}

function mousePressed() {
	leaves.push(new Leaf1(mouseX, mouseY));
}
