// require https://cdn.jsdelivr.net/npm/tweakpane@3.0.7/dist/tweakpane.min.js
// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js

//https://www.nationalgeographic.com/adventure/article/famous-women-artists-self-portraits-culture

let w = 400;
let h = 500;

function preload() {
	face1 = loadImage("face_images/1_full_face.png");
	face2 = loadImage("face_images/2_full_face.png");
	face3 = loadImage("face_images/3_full_face.png");
	glasses1 = loadImage("face_images/1_glasses.png");
	glasses2 = loadImage("face_images/glasses2.png");
	hat1 = loadImage("face_images/bunnyHat.png");
	hat2 = loadImage("face_images/topHat.png");
	hat3 = loadImage("face_images/partyHat.png");
}

params = {
	glassesX: 243,
	glassesY: 263,
	hatX: 214,
	hatY: 100,
	face: "frida",
	glasses: "heart",
	hat: "party",
};

const pane = new Tweakpane.Pane();

pane.addInput(params, "glassesX", { min: 200, max: 300 });
pane.addInput(params, "glassesY", { min: 200, max: 300 });

pane.addInput(params, "hatX", { min: 100, max: 300 });
pane.addInput(params, "hatY", { min: 100, max: 300 });

pane.addInput(params, "face", {
	options: {
		Frida: "face1",
		Loïs: "face2",
		Judith: "face3",
	},
});

pane.addInput(params, "glasses", {
	options: {
		heart: "glasses1",
		frames: "glasses2",
	},
});

pane.addInput(params, "hat", {
	options: {
		party: "hat3",
		top: "hat2",
		bunny: "hat1",
	},
});

function setup() {
	createCanvas(w, h);
}

function draw() {
	glasses1.resize(150, 0);
	glasses2.resize(150, 0);
	hat1.resize(220, 0);
	hat2.resize(0, 150);
	hat3.resize(0, 160);

	background("pink");
	imageMode(CENTER);
	image(eval(params.face), w / 2, h / 2);
	image(eval(params.glasses), params.glassesX, params.glassesY);
	image(eval(params.hat), params.hatX, params.hatY);
}
