// https://www.youtube.com/watch?v=iIWH3IUYHzM

const traceyEminNeonQuotes = [
	"I Can't Believe How Much I Loved You",
	"You Forgot to Kiss My Soul",
	"I Promise To Love You",
	"My Heart Is With You Always",
	"You Touch My Soul",
	"More Passion",
	"People Like You Need to Fuck People Like Me",
	"Love Is What You Want",
	"The Last Great Adventure Is You",
	"I Whisper to My Past, Do I Have Another Choice?",
	"Meet Me in Heaven I Will Wait For You",
	"I Listen to the Ocean and All I Hear is You",
	"I Know I Know I Know",
	"I Can't Love Anyone Else",
	"I Followed You to the Sun",
	"And I Said I Love You",
	"I Cried Because I Love You",
	"It’s Not You",
	"You Made Me Feel Like This",
	"Sorry Flowers Die",
	"When I Think About Sex I Think About You",
	"I Think of You Every Day",
	"You Make Me Feel Beautiful",
	"I Felt You and I Knew You Loved Me",
	"You Forgot My Favorite Color",
	"Just Love Me the Way I Am",
	"I Can Feel Your Smile",
	"I Want My Time With You",
	"I Waited for You",
	"My Favourite Little Bird",
	"Suffering From Love",
	"One Thousand Times",
	"Trust Yourself",
	"Kiss Me Kiss Me Cover My Body in Love",
	"I Said Don't Leave Me",
	"With You I Breathe",
	"I Loved My Innocence",
	"Sometimes I Feel Beautiful",
	"Thinking of You Keeps Me Awake",
];

const emin = traceyEminNeonQuotes.join(". ");

const markovModel = generateModel(emin);

let font;
let glowColor;

let output_text;

function preload() {
	font = loadFont("AlexBrush-Regular.ttf");
}

const width = 1000;
const height = 600;

function setup() {
	createCanvas(width, height);
	colorMode(HSB, 360, 100, 100, 100);

	noFill();
	stroke(255);
	strokeWeight(3);

	textFont(font);
	textAlign(CENTER, CENTER);

	glowColor = color(332, 58, 91, 100);
	output_text = generateText(markovModel);
	if (output_text[output_text.length - 1] === ".") {
		output_text = output_text.slice(0, -1);
	}
}

function draw() {
	background("black");
	textSize(80);

	let height1 = 200;
	let height2 = height1 + 75;
	let height3 = height2 + 75;
	let height4 = height3 + 75;

	if (output_text.split(" ").length > 12) {
		const part1 = output_text.split(" ").slice(0, 4).join(" ");
		const part2 = output_text.split(" ").slice(4, 8).join(" ");
		const part3 = output_text.split(" ").slice(8, 12).join(" ");
		const part4 = output_text.split(" ").slice(12).join(" ");

		height1 = 100;
		height2 = height1 + 75;
		height3 = height2 + 75;
		height4 = height3 + 75;

		textNeon(part1, width / 2, height1, glowColor);
		push();
		textNeon(part2, width / 2, height2, glowColor);
		pop();
		push();
		textSize(70);
		textNeon(part3, width / 2, height3, glowColor);
		textNeon(part4, width / 2, height4, glowColor);
		pop();
		lineNeon(200, height4 + 100 + 10, width - 200, height4 + 100, glowColor);
		lineNeon(
			200,
			height4 + 100 + 35,
			width - 200,
			height4 + 100 + 5,
			glowColor
		);
	} else if (output_text.split(" ").length > 8) {
		const part1 = output_text.split(" ").slice(0, 4).join(" ");
		const part2 = output_text.split(" ").slice(4, 8).join(" ");
		const part3 = output_text.split(" ").slice(8).join(" ");

		textNeon(part1, width / 2, height1, glowColor);

		textNeon(part2, width / 2, height2, glowColor);

		push();
		textSize(70);
		textNeon(part3, width / 2, height3, glowColor);
		pop();
		lineNeon(200, height3 + 100 + 10, width - 200, height3 + 100, glowColor);
		lineNeon(
			200,
			height3 + 100 + 35,
			width - 200,
			height3 + 100 + 5,
			glowColor
		);
	} else if (output_text.split(" ").length > 4) {
		const part1 = output_text.split(" ").slice(0, 4).join(" ");
		const part2 = output_text.split(" ").slice(4).join(" ");
		textNeon(part1, width / 2, height1, glowColor);
		push();
		textSize(70);
		textNeon(part2, width / 2, height2, glowColor);
		pop();
		lineNeon(200, height2 + 100 + 10, width - 200, height2 + 100, glowColor);
		lineNeon(
			200,
			height2 + 100 + 35,
			width - 200,
			height2 + 100 + 5,
			glowColor
		);
	} else {
		textNeon(output_text, width / 2, height1, glowColor);
		lineNeon(200, height1 + 100 + 10, width - 200, height1 + 100, glowColor);
		lineNeon(
			200,
			height1 + 100 + 35,
			width - 200,
			height1 + 100 + 5,
			glowColor
		);
	}
}

function textNeon(glowText, x, y, glowColor) {
	glow(glowColor, 400);
	text(glowText, x, y);
	text(glowText, x, y);
	text(glowText, x, y);
	glow(glowColor, 80);
	text(glowText, x, y);
	text(glowText, x, y);
	glow(glowColor, 12);
	text(glowText, x, y);
	text(glowText, x, y);
	text(glowText, x, y);
	glow(glowColor, 4);
	text(glowText, x, y);
	text(glowText, x, y);
	text(glowText, x, y);
}

const lineNeon = (x1, y1, x2, y2, glowColor) => {
	glow(glowColor, 400);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	glow(glowColor, 80);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	glow(glowColor, 12);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	glow(glowColor, 4);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
	line(x1, y1, x2, y2);
};

function glow(glowColor, blurriness) {
	drawingContext.shadowBlur = blurriness;
	drawingContext.shadowColor = glowColor;
}

function generateModel(...args) {
	const words = args.join(" ").split(" ");
	const model = {};

	// loop through all the words except the last one.
	for (let i = 0; i < words.length - 1; i++) {
		const target_word = words[i];
		const next_word = words[i + 1];

		// if the model doesn't contain the target word, add it.
		if (!model[target_word]) {
			model[target_word] = [];
		}

		// add the next word to the possibilities for target_word
		model[target_word].push(next_word);
	}

	return model;
}

function generateText(model, first_word) {
	// if first_word isn't provided use a random word in the model object
	first_word = first_word ?? pick(Object.keys(model));

	// start with the word passed in
	let output_text = first_word;
	let current_word = first_word;
	for (let i = 0; i < 120; i++) {
		// verify that the current word is in the model
		if (!model[current_word]) break;

		// choose the next word by sampling from options in the model
		current_word = pick(model[current_word]);

		// append word to output
		output_text += " ";
		output_text += current_word;

		// if we get to a word that ends with "." we are done.
		const last_character = current_word.substr(current_word.length - 1);
		if (last_character === ".") {
			break;
		}
	}
	return output_text;
}

function pick(array) {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}
