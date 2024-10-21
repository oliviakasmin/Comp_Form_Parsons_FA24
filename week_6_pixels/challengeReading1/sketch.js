// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

function setup() {
	createCanvas(500, 500);
}

// function to generate nicer blue values
const getRandomBlue = () => {
	const rC = random(75);
	const rG = random(75);
	const rB = random(100, 255);
	return [rC, rG, rB];
};

function draw() {
	background(0);

	// Change the image resolution to 20x20.
	// img = createImage(20, 20);

	// Change the image resolution to 500x500.
	img = createImage(500, 500);

	// Change the image resolution back to 10x10.
	// img = createImage(10, 10);
	img.loadPixels();

	for (let y = 0; y < img.height; y++) {
		for (let x = 0; x < img.width; x++) {
			// Make each pixel a random shade of blue.
			// from pure blue to black
			// let c = color(0, 0, random(255));
			// nice blue values
			// const [rC, rG, rB] = getRandomBlue();
			// let c = color(rC, rG, rB);

			// Make each pixel a random shade of gray.
			// const greyC = random(255);
			// let c = color(greyC, greyC, greyC);

			// Color each pixel with noise() to visualize its values.
			let noiseLevel = 255;
			let noiseScale = 0.01;
			let nx = noiseScale * x;
			let ny = noiseScale * y;
			let c = noiseLevel * noise(nx, ny);

			// original color
			// let c = color(random(255), random(255), random(255));
			img.set(x, y, c);
		}
	}

	img.updatePixels();

	noSmooth();
	image(img, 0, 0, width, height);
	noLoop();
}
