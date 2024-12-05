//basic setup: //https://www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6akvoNKE4GAxf6ZeBYoJ4uh

let Engine = Matter.Engine,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

let engine;
let world;
let boxA;
let circles = [];
let stairs;
let ground;
let leftWall;

const palette = [
	"#898952", //moss green
	"#B2945B", //light brown
	"#D0E562", //bright green
	"#B6D369", //light green
	"#93C48B", //pistachio
];

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();

	ground = Bodies.rectangle(200, height, width, 50, { isStatic: true });

	leftWall = Bodies.rectangle(0, height / 2, 10, height, { isStatic: true });

	Composite.add(engine.world, [leftWall, ground]);

	stairs = new Stairs();

	Engine.run(engine);
}

function mousePressed() {
	circles.push(
		new Circle(
			50,
			0,
			random(20, 30),
			palette[circles.length % palette.length],
			palette[(circles.length + 1) % palette.length]
		)
	);
}

function draw() {
	background("#FAF9F6");
	Engine.update(engine);
	circles.forEach((circle) => circle.show());
	stairs.show();

	push();
	fill(0);
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y, width, 50);
	pop();
}
