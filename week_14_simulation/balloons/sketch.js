// https://codebrainer.com/blog/learn-matter-js-with-examples

let height = 600;
let width = 1000;

let Engine = Matter.Engine,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;
Body = Matter.Body;

let engine;
let ropes = [];
let balloons = [];

function preload() {
	myFont = loadFont("Sniglet-ExtraBold.ttf");
}

function setup() {
	createCanvas(width, height);

	textFont(myFont);
	textSize(80);
	fill(255);
	stroke(0);

	engine = Engine.create();
	engine.world.gravity.y = 0.05;

	Engine.run(engine);

	const radius = 20;

	const compForm = "COMP FORM";
	for (let i = 0; i < compForm.length; i++) {
		let letter = compForm[i];

		if (letter === " ") {
			continue;
		}

		let x = 150 + i * 80;

		if (i > 3) {
			x += 40;
		}

		let y = height - 100 + random(-30, 30);
		let balloon = new Letter(x + random(-40, 40), y, radius, letter, i);
		balloons.push(balloon);

		ropes.push(new Rope(x + random(-20, 20), height, balloon.body));
	}

	setInterval(() => {
		for (let i = 0; i < balloons.length; i++) {
			Body.applyForce(balloons[i].body, balloons[i].body.position, {
				x: 0,
				y: -balloons[i].body.mass * 0.001,
			});
		}
	}, 50);

	for (let i = 0; i < ropes.length; i++) {
		setTimeout(() => {
			let lastRope = ropes.pop();
			Composite.remove(engine.world, lastRope.sling);
		}, i * 500 + 2000);
	}
}

function draw() {
	background("#e7f5fb");

	for (let i = 0; i < balloons.length; i++) {
		const balloon = balloons[i];
		balloon.show();
	}

	for (let i = 0; i < ropes.length; i++) {
		const rope = ropes[i];
		rope.show();
	}

	Engine.update(engine);
}
