const colors = [
	"#064273",
	"#76b6c4",
	"#def3f6",
	"#cce3e4",
	"#7fcdff",
	"#1da2d8",
	"#def3f6",
];

const mountainSpecs = [
	{
		y: 0,
		dimension: 0,
		strokeColor: colors[4],
		alphaNum: 50,
		noiseLevel: 100,
		noiseScale: 0.01,
	},
	{
		y: 25,
		dimension: 0,
		strokeColor: colors[1],
		alphaNum: 100,
		noiseLevel: 133,
		noiseScale: 0.01,
	},
	{
		y: 50,
		dimension: 0,
		strokeColor: colors[0],
		alphaNum: 75,
		noiseLevel: 122,
		noiseScale: 0.009,
	},
	{
		y: 75,
		dimension: 0,
		strokeColor: colors[5],
		alphaNum: 150,
		noiseLevel: 225,
		noiseScale: 0.009,
	},
	{
		y: 100,
		dimension: 1,
		strokeColor: colors[1],
		alphaNum: 125,
		noiseLevel: 108,
		noiseScale: 0.015,
	},
	{
		y: 125,
		dimension: 2,
		strokeColor: colors[4],
		alphaNum: 200,
		noiseLevel: 108,
		noiseScale: 0.015,
	},
	{
		y: 150,
		dimension: 3,
		strokeColor: colors[5],
		alphaNum: 200,
		noiseLevel: 105,
		noiseScale: 0.02,
	},
	{
		y: 175,
		dimension: 2,
		strokeColor: colors[5],
		alphaNum: 40,
		noiseLevel: 100,
		noiseScale: 0.017,
	},
	{
		y: 200,
		dimension: 2,
		strokeColor: colors[0],
		alphaNum: 145,
		noiseLevel: 75,
		noiseScale: 0.017,
	},
	{
		y: 250,
		dimension: 0,
		strokeColor: colors[1],
		alphaNum: 200,
		noiseLevel: 100,
		noiseScale: 0.007,
	},
	{
		y: 300,
		dimension: 3,
		strokeColor: colors[3],
		alphaNum: 255,
		noiseLevel: 140,
		noiseScale: 0.007,
	},
];

function setup() {
	createCanvas(600, 400);
	const backgroundColor = color(colors[4]);
	backgroundColor.setAlpha(100);
	background(backgroundColor);
	strokeWeight(1);
}

const drawMountain = (mountain) => {
	const { y, dimension, strokeColor, alphaNum, noiseLevel, noiseScale } =
		mountain;
	let mountainColor = color(strokeColor);
	let nt = noiseScale * frameCount;

	for (let x = 0; x < width; x++) {
		mountainColor.setAlpha(alphaNum * 0.1);
		stroke(mountainColor);
		let nx = noiseScale * x;
		let ny = noiseLevel * noise(nx, dimension, nt);
		line(x, height, x, ny + y);
	}
};

function draw() {
	for (let i = 0; i < mountainSpecs.length; i++) {
		drawMountain(mountainSpecs[i]);

		for (let j = 0; j < 3; j++) {
			// cascade melting effect
			// const spec = mountainSpecs[i];
			// spec.y += 1 * j;
			// drawMountain(spec);

			// change speed as draws new mountains (and flashes a bit)
			setTimeout(() => {
				drawMountain(mountainSpecs[i]);
			}, j * 2000 + 2000);
		}
	}
}
