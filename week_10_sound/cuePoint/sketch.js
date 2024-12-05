// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.sound.js

let mySound;
let bright = 0;
let width = 500;
let height = 500;
let imagex = width;
let imagey = height - 50;
let startTime;
let displayBaby = false;
let babyStopTime;

function preload() {
	mySound = loadSound("CarolinePolache-BunnyIsARider.wav");
	baby = loadImage("baby.png");
}

const palette = [
	"#292E1E", //black olive
	"#D0F1BF", //tea green
	"#B6D7B9", //celadon
	"#C57B57", //brown sugar
	"#F1AB86", //light salmon
];

function setup() {
	createCanvas(width, height);

	fft = new p5.FFT(0, 128);
	fft.setInput(mySound);

	const startButton = createButton("start");
	startButton.mousePressed(start);

	const stopButton = createButton("stop");
	stopButton.mousePressed(stop);

	mySound.addCue(8, cueBaby);
}

function start() {
	mySound.loop(0, 1, 1, 0, 19);
	startTime = millis();
}

function stop() {
	console.log("stop");
	mySound.pause();
}

function draw() {
	background(palette[0]);
	fill(255);
	noStroke();

	// if (mySound.isPlaying()) {
	// 	let elapsedTime = (millis() - startTime) / 1000;
	// 	textSize(32);
	// 	textAlign(CENTER, CENTER);
	// 	text(elapsedTime.toFixed(2) + " seconds", width / 2, height / 2);
	// }

	const data = fft.waveform();

	for (let i = 0; i < 100; i++) {
		push();

		const x = map(i, 0, 100, 0, 500);
		const y = map(data[i], -1, 1, 490, 10);
		if (y > 400) {
			fill(palette[1]);
		} else if (y > 300) {
			fill(palette[2]);
		} else if (y > 200) {
			fill(palette[3]);
		} else {
			fill(palette[4]);
		}

		ellipse(y, x, 5, 5);

		if (y > 260 && y < 300 && x % 2 === 0) {
			push();
			let c = color(255, 255, 255);
			c.setAlpha(60);
			fill(c);
			ellipse(y, x, 20, 20);
			pop();
		}

		if (y > 270 && y < 350 && x % 20 === 0) {
			ellipse(x, y - 100, 20, 20);
			ellipse(x, y + 100, 20, 20);
		}

		if ((y > 300 || y < 100) && x % 100 === 0) {
			push();
			let c = color(255, 255, 255);
			c.setAlpha(75);
			fill(c);
			rect(x, y, 100, 100);
			rect(x, y - 300, 100, 100);
			pop();
		}

		pop();
	}

	// Display the baby image if the flag is set and the current time is less than the stop time
	if (displayBaby && millis() < babyStopTime) {
		if (millis() < babyStopTime - 1500) {
			imagex -= 2; // Move left for the first half of the display time
		} else {
			imagex += 2; // Move right for the second half of the display time
		}
		image(baby, imagex, imagey, 50, 50);
	} else {
		displayBaby = false; // Reset the flag when the baby image is no longer displayed
	}
}

const cueBaby = () => {
	displayBaby = true;
	babyStopTime = millis() + 3000; // Display the baby image for 3 seconds
};
