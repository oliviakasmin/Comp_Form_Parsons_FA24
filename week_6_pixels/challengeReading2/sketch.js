// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
//editor.p5js.org/oliviakasmin/sketches/S-Vri9W9x

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);

	img = createImage(10, 10);
	img.loadPixels();

	for (let y = 0; y < img.height; y++) {
		for (let x = 0; x < img.width; x++) {
			// Make a horizontal black-to-blue gradient.
			// let c = color(0, 0, x * 25);

			// Make a vertical green-to-black gradient.
			// let c = color(0, 255 - y * 25, 0);

			// Make a horizontal white-to-blue gradient.
			// let c = lerpColor(
			// 	color(255, 255, 255),
			// 	color(0, 0, 255),
			// 	map(x, 0, img.width, 0, 1)
			// );

			// Make a vertical rainbow gradient. Tip: colorMode()
			// colorMode(HSB, 100);
			// let c = color(y * 10, 100, 100);

			// Original color
			// let c = color(y * 25, x * 25, 0);

			// random color for inset gradient
			// let c = color(random(255), random(255), random(255));

			// Make a radial gradient from black to red. Tip: dist()
			// let d = dist(x, y, img.width / 2, img.height / 2);
			// let c = lerpColor(
			// 	color(0, 0, 0),
			// 	color(255, 0, 0),
			// 	map(d, 0, img.width / 2, 1, 0)
			// );

			// [extra] Make a radial gradient pink to green
			// let d = dist(x, y, img.width / 2.25, img.height / 2.25);
			// let c = lerpColor(
			// 	color(255, 0, 255),
			// 	color(0, 255, 0),
			// 	map(d, 0, img.width / 2.25, 0, 1)
			// );

			// Create a diagonal gradient.
			let c = lerpColor(
				color(255, 255, 255),
				color(0, 0, 255),
				map(x + y, 0, img.width * 2, 0, 1)
			);

			img.set(x, y, c);

			// Create an inset square with a gradient, surrounded by randomly-colored pixels.
			// if (x > 2 && x < 7 && y > 2 && y < 7) {
			// 	let insetColor = lerpColor(
			// 		color(255, 255, 255),
			// 		color(0, 0, 255),
			// 		map(x, 0, img.width, 0, 1)
			// 	);
			// 	img.set(x, y, insetColor);
			// }
		}
	}

	img.updatePixels();

	noSmooth();
	image(img, 0, 0, width, height);
	noLoop();
}
