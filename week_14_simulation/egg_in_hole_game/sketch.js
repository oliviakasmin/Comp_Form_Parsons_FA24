const width = 800;
const height = 400;

let img;
let losingImg;
const gravity = { x: 0, y: 2 };
const kRestituion = 0.3;
const friction = 0.99;
const egg = {
	x: width - 50,
	y: 50,
	velocity: { x: 0, y: 0 },
};
const eggSize = 50;
const holes = [];

const star = {
	x: 50,
	y: 200,
	radius1: 10,
	radius2: 25,
};

// Load the image.
function preload() {
	img = loadImage("egg.png");
	losingImg = loadImage("egg_in_hole.png");
}

function setup() {
	createCanvas(800, 400);

	background("#e7f5fb");
	image(img, egg.x, egg.y, eggSize, eggSize);

	textFont("Courier New");

	initHoles();
}

function draw() {
	// Apply gravity.
	egg.velocity.y += gravity.y;

	// Move the egg.
	egg.y += egg.velocity.y;
	egg.x += egg.velocity.x;

	egg.velocity.x *= friction;

	// egg can fall through the hole
	if (isInHole()) {
		egg.velocity.x = 0;
		setTimeout(() => {
			losingScreen();
			noLoop();
		}, 500);
	}
	// egg doesn't fall through the ground
	else {
		if (egg.y > height - eggSize) {
			egg.y = height - eggSize;
			egg.velocity.y *= -kRestituion;
		}
	}

	// left wall
	if (egg.x < 0) {
		egg.x = 0;
	}
	// right wall
	if (egg.x > width - eggSize) {
		egg.x = width - eggSize;
	}

	background("#e7f5fb"); //redraw the background everytime so don't see the previous egg
	image(img, egg.x, egg.y, 50, 50);

	drawHoles();

	push();
	translate(star.x, star.y);
	rotate(frameCount / 100.0);
	drawStar("#fdbc1e");
	pop();

	if (reachedStar()) {
		egg.velocity.x = 0;
		egg.velocity.y = 0;
		winningScreen();
		noLoop();
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		egg.velocity.y = -30;
	}

	if (keyCode === RIGHT_ARROW) {
		egg.velocity.x = 5;
	}

	if (keyCode === LEFT_ARROW) {
		egg.velocity.x = -5;
	}
}

const drawHoles = () => {
	push();
	fill(0);
	holes.forEach((hole) => {
		rect(hole.x, hole.y, hole.width, hole.height);
	});
	pop();
};

const drawStar = (color) => {
	push();
	fill(color);
	strokeWeight(2);
	stroke("#fefb00");
	const { radius1, radius2 } = star;

	let angle = TWO_PI / 5;
	let halfAngle = angle / 2.0;

	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = cos(a) * radius2;
		let sy = sin(a) * radius2;
		vertex(sx, sy);
		sx = cos(a + halfAngle) * radius1;
		sy = sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
	pop();
};

const initHoles = () => {
	for (let i = 0; i < 3; i++) {
		const hole = {
			x: i * 200 + 150,
			y: height - 5,
			width: 80,
			height: 5,
		};
		holes.push(hole);
	}
};

const isInHole = () => {
	for (let i = 0; i < holes.length; i++) {
		const hole = holes[i];
		if (
			egg.x > hole.x &&
			egg.x < hole.x + hole.width - (eggSize * 5) / 6 &&
			egg.y > height - eggSize
		) {
			return true;
		}
	}
};

const losingScreen = () => {
	push();
	textAlign(CENTER);
	imageMode(CENTER);
	rectMode(CENTER);
	noStroke();

	push();
	fill(0);
	rect(width / 2, height / 2, width, height);
	pop();
	image(losingImg, width / 2, height / 2, 100, 100);

	push();
	textSize(40);
	fill(255);
	text("Egg in the hole!", width / 2, height / 4);
	text("You lose :( ", width / 2, height - 50);
	pop();
	pop();
};

const reachedStar = () => {
	const d = dist(egg.x, egg.y, star.x, star.y);
	return d < eggSize;
};

const winningScreen = () => {
	push();
	translate(star.x, star.y);
	drawStar("#91e94f");
	pop();

	push();
	textAlign(CENTER);
	textSize(60);
	fill(0);
	text("You Win!", width / 2, height / 2);
	pop();
};
