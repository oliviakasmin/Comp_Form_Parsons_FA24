let w = 400;
let h = 500;

function setup() {
	createCanvas(w, h);
}

function draw() {
	background(255);
	noFill();
	stroke(0);
	strokeWeight(2);
	beginShape();
	for (let i = 0; i < 10; i++) {
		let x = random(w);
		let y = random(h);
		curveVertex(x, y);
	}
	endShape();
}
