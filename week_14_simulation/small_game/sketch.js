const width = 800;
const height = 400;

let img;
let losingImg;
let bgImg;

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
	y: height - 5,
	width: 60,
	height: 5,
};

const star = {
	x: 200,
	y: 50,
	radius1: 15,
	radius2: 30,
};

const trampoline = {
	x: 50,
	y: height - 150,
	width: 100,
	height: 10,
};

const pans = [];
const panAreas = [];

function preload() {
	img = loadImage("egg.png");
	losingImg = loadImage("egg_in_hole.png");
	bgImg = loadImage("brick.png");
}

function setup() {
	createCanvas(800, 400);
	textFont("Courier New");
	textAlign(CENTER);
	background("#e7f5fb");

	initFryingPans();

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
		setTimeout(() => {
			holeLosingScreen();
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

	keepEggAboveTrampoline();

	if (touchingFryingPan()) {
		egg.velocity.x = 0;
		egg.velocity.y = 0;

		setTimeout(() => {
			panLosingScreen();
			noLoop();
		}, 100);
	}

	// draw elements
	background(bgImg);
	image(img, egg.x, egg.y, 50, 50);

	drawHole();
	drawTrampoline();
	drawFryingPans();

	push();
	translate(star.x, star.y);
	rotate(frameCount / 100.0);
	drawStar();
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

const drawStar = (color = "#fdbc1e") => {
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

const onTrampoline = () => {
	return (
		egg.x > trampoline.x - eggSize / 2 &&
		egg.x < trampoline.x + trampoline.width - eggSize / 2 &&
		egg.y >= trampoline.y - eggSize
	);
};

const keepEggAboveTrampoline = () => {
	if (onTrampoline() && egg.velocity.y > 0) {
		egg.y = trampoline.y - eggSize;
		egg.velocity.y *= -kRestituion;
		egg.velocity.x *= 0.8;
	}
};

const initFryingPans = () => {
	pans.push({
		x: 200,
		y: 220,
	});
	pans.push({
		x: 350,
		y: 370,
	});
	pans.push({
		x: 50,
		y: 70,
	});

	pans.forEach((pan) => {
		panAreas.push({ x: pan.x - 5, y: pan.y - 27, radius: eggSize - 7 });
	});
};

const drawFryingPans = () => {
	pans.forEach((pan) => {
		push();
		textAlign(CENTER);
		textSize(60);
		fill(0);
		text("🍳", pan.x, pan.y);
		pop();
	});
};

const touchingFryingPan = () => {
	let fried = false;
	panAreas.forEach((panArea) => {
		const d = dist(egg.x, egg.y, panArea.x, panArea.y);
		if (d < panArea.radius) {
			fried = true;
		}
	});
	return fried;
};

const reachedStar = () => {
	const d = dist(egg.x, egg.y, star.x, star.y);
	return d < eggSize;
};

const winningScreen = () => {
	push();
	rectMode(CENTER);
	fill(0);
	rect(width - 300, 170, 550, 150);
	pop();

	push();
	textAlign(CENTER);
	textSize(100);
	fill(255);
	text("You Win!", width - 300, height / 2);
	pop();
};

const losingScreenBase = () => {
	push();
	rectMode(CENTER);
	fill(0);
	rect(width / 2, height / 2, width, height);
	pop();
};

const holeLosingScreen = () => {
	losingScreenBase();

	push();
	imageMode(CENTER);
	noStroke();
	image(losingImg, width / 2, height / 2, 100, 100);
	pop();

	push();
	textSize(40);
	fill(255);
	text("Egg in the hole!", width / 2, height / 4);
	text("You lose :( ", width / 2, height - 50);
	pop();
};

const panLosingScreen = () => {
	losingScreenBase();
	push();
	textSize(40);
	fill(255);
	text("Fried egg!", width / 2, height / 4);

	push();
	textSize(150);
	text("🍳", width / 2, 250);
	pop();
	text("You lose :( ", width / 2, height - 50);
	pop();
};
