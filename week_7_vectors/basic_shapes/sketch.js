paper.setup(document.getElementById("myCanvas"));

const params = {
	totalShapes: 15,
	minPoints: 3,
	maxPoints: 10,
	minRadius: 20,
	maxRadius: 100,
};

const palette = [
	"#f29122", //orange
	"#3fac98", //teal
	"#f12e83", //magenta
	"#3748b4", //blue
	"#e663b6", //light pink
	"#6ca83d", //green
	"#f4b943", //yellow
	"#f01d47", //red
	"#3b3029", //black
];

const createCircleShape = (center, color) => {
	const radius =
		params.minRadius + Math.random() * (params.maxRadius - params.minRadius);
	const circle = new paper.Path.Circle(center, radius);
	circle.fillColor = color;
};

const createStarShape = (center, color) => {
	const points =
		params.minPoints +
		Math.floor(Math.random() * (params.maxPoints - params.minPoints));
	const radius1 =
		params.minRadius + Math.random() * (params.maxRadius - params.minRadius);
	const radius2 = radius1 / 2;
	const path = new paper.Path.Star(center, points, radius1, radius2);
	path.fillColor = color;
};

const createRegularPolygon = (center, color) => {
	const points =
		params.minPoints +
		Math.floor(Math.random() * (params.maxPoints - params.minPoints));
	const radius =
		params.minRadius + Math.random() * (params.maxRadius - params.minRadius);
	const path = new paper.Path.RegularPolygon(center, points, radius);
	path.fillColor = color;
};

const createRectangleShape = (center, color) => {
	const size = new paper.Size(
		params.minRadius + Math.random() * (params.maxRadius - params.minRadius),
		params.minRadius + Math.random() * (params.maxRadius - params.minRadius)
	);
	const rectangle = new paper.Path.Rectangle(center, size);
	rectangle.fillColor = color;
};

const createRandomShape = () => {
	const color = palette[Math.floor(Math.random() * palette.length)];
	const center = paper.Point.random().multiply(paper.view.size);
	const r = Math.random();
	if (r < 0.25) {
		createCircleShape(center, color);
	} else if (r < 0.5) {
		createRegularPolygon(center, color);
	} else if (r < 0.75) {
		createRectangleShape(center, color);
	} else {
		createStarShape(center, color);
	}
};

const drawShapes = () => {
	for (let i = 0; i < params.totalShapes; i++) {
		createRandomShape();
	}
};

drawShapes();

////////////////////////////

paper.project.activeLayer.name = "content";

paper.view.draw();
