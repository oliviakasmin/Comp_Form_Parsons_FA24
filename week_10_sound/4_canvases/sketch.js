const width = 100;
const height = 100;

function sketch_canvas1(p) {
	let mySound;
	const slices = 7;
	const size = 200;
	let randomWeights = [];

	p.preload = function () {
		mySound = p.loadSound("sounds/aaaah-hq.wav");
	};

	function start() {
		mySound.loop(0, 1, 1, 0, 5);
		// startTime = p.millis();
	}

	function stop() {
		mySound.pause();
	}

	p.setup = function () {
		p.createCanvas(width, height);

		fft = new p5.FFT(0.8, 128); // smoothing, bins
		fft.setInput(mySound); // connect the sound to the fft

		const startButton = p.createButton("start");
		startButton.mousePressed(start);

		const stopButton = p.createButton("stop");
		stopButton.mousePressed(stop);
	};

	p.draw = function () {
		p.background(0);
		// p.translate(width / 2, height / 2);
		// p.rotate(p.millis() / 1000); // Rotate based on time
		p.circle(width / 2, height / 2, 20);

		const data = fft.waveform();

		let lastX;
		let lastY;

		// p.beginShape();

		// p.endShape();
	};
}
new p5(sketch_canvas1, "canvas1");

function sketch_canvas2(p) {
	p.setup = function () {
		p.createCanvas(width, height);
	};

	p.draw = function () {
		p.background(0);
		p.circle(width / 2, height / 2, 20);
	};
}

new p5(sketch_canvas2, "canvas2");
