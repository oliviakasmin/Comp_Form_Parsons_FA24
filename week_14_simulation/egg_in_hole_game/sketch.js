const width = 800;
const height = 400;

let img;
const gravity = { x: 0, y: 2 };
const kRestituion = 0.3;
const friction = 0.99;
const egg = {
	x: width - 50,
	y: 50,
	velocity: { x: 0, y: 0 },
};
const eggSize = 50;

const hole = {
	x: 600,
	y: height - 10,
	width: 60,
	height: 10,
};

const star = {
	x: 100,
	y: 100,
	radius1: 15,
	radius2: 30,
};

const trampoline = {
	x: star.x - 50,
	y: height - 65,
	width: 100,
	height: 10,
};

// Load the image.
function preload() {
	img = loadImage("egg.png");
}

function setup() {
	createCanvas(800, 400);

	background("#e7f5fb");
	// Draw the image 50x50.
	image(img, egg.x, egg.y, eggSize, eggSize);
}

function draw() {
	// Apply gravity.
	egg.velocity.y += gravity.y;

	// Move the egg.
	egg.y += egg.velocity.y;
	egg.x += egg.velocity.x;

	egg.velocity.x *= friction;

	// egg can fall through the hole
	if (
		egg.x > hole.x &&
		egg.x < hole.x + hole.width - eggSize &&
		egg.y > height - 100
	) {
		egg.velocity.x = 0;
		console.log("in the hole");
		setTimeout(() => {
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

	//egg doesn't fall trough the trampoline if it's on top
	if (
		egg.x > trampoline.x &&
		egg.x < trampoline.x + trampoline.width - eggSize &&
		egg.y > trampoline.y + trampoline.height
	) {
		egg.y = trampoline.y - eggSize;
		egg.velocity.y *= -kRestituion;
	}

	// left wall
	if (egg.x < 0) {
		egg.x = 0;
	}
	// right wall
	if (egg.x > width - eggSize) {
		egg.x = width - eggSize;
	}

	background("#e7f5fb");
	image(img, egg.x, egg.y, 50, 50);

	drawHole();

	drawTrampoline();

	push();
	translate(star.x, star.y);
	rotate(frameCount / 100.0);
	drawStar();
	pop();
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

const drawHole = () => {
	push();
	fill(0);
	rect(hole.x, hole.y, hole.width, hole.height);
	pop();
};

const drawTrampoline = () => {
	push();
	fill(0);
	rect(trampoline.x, trampoline.y, trampoline.width, trampoline.height);
	pop();
};

const drawStar = () => {
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
};
