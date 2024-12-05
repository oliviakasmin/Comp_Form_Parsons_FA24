let height = 400;
let width = 600;

function preload() {
	myFont = loadFont("Sniglet-ExtraBold.ttf");
}

function setup() {
	createCanvas(width, height);

	textFont(myFont);
	textSize(44);
}

function draw() {
	background("#eeeeee");

	noStroke();

	text("COMP", 200, 200);
	text("FORM", 200, 300);
}
