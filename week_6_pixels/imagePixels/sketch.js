// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
/* exported preload setup draw */

let cactus1;
let skyBlue;
let lightGreen;
let greyBlue;
let circleCactus;

let palette;
let palette2;

function preload() {
	cactus1 = loadImage("cactus1.jpeg");
}

function areColorsClose(c1, c2, threshold) {
	let r1 = c1.r;
	let g1 = c1.g;
	let b1 = c1.b;

	let r2 = c2.r;
	let g2 = c2.g;
	let b2 = c2.b;

	// Calculate distance between the two colors
	let distance = dist(r1, g1, b1, r2, g2, b2);

	// If the distance is below the threshold, the colors are close
	return distance < threshold;
}

function setup() {
	createCanvas(cactus1.width, cactus1.height);
	noSmooth();
	noLoop();
}

// colors picked from cactus1.jpeg
skyBlue = { r: 98, g: 156, b: 246 };
lightGreen = { r: 146, g: 157, b: 68 };
greyBlue = { r: 88, g: 95, b: 78 };
circleCactus = { r: 94, g: 83, b: 36 };

palette = [
	"#1BE7FF", // electric blue
	"#6EEB83", // light green
	"#E4FF1A", // electric lime
	"#FFB800", // yellow
	"#008941", // spanish green
	"#FF5714", // red orange
];

palette2 = [
	"#DDD1C7", // beige
	"#C2CFB2", // ash grey
	"#8DB580", //light olive
	"#7E8987", //grey
	"#4B4A67", // violet
];

function draw() {
	background(0);

	cactus1.loadPixels();

	for (let y = 0; y < cactus1.height; y++) {
		for (let x = 0; x < cactus1.width; x++) {
			const in_color = cactus1.get(x, y);

			const r = red(in_color);
			const g = green(in_color);
			const b = blue(in_color);

			const in_color_obj = { r, g, b };

			let out_color;

			const threshold = 40;

			if (areColorsClose(in_color_obj, skyBlue, threshold)) {
				out_color = color(palette[4]); // electric lime
			} else if (areColorsClose(in_color_obj, lightGreen, threshold)) {
				out_color = color(palette[0]);
			} else if (areColorsClose(in_color_obj, greyBlue, threshold)) {
				out_color = color(palette[1]);
			} else if (areColorsClose(in_color_obj, circleCactus, threshold)) {
				out_color = color(palette[3]);
			} else {
				out_color = in_color;
			}
			cactus1.set(x, y, out_color);
		}
	}

	cactus1.updatePixels();

	image(cactus1, 0, 0, width, height);
}
