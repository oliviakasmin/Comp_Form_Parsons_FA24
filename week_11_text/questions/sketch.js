// require https://unpkg.com/rita

// /* globals RiTa */

const storyGrammar = {
	start: "$question1 | $question2 | $question3 | $question4 | $question5",
	question1: "What is your favorite $noun?",
	question2: "Tell me about your $adjective $noun?",
	question3: "Where do your $pluralnoun $pluralverb?",
	question4: "How do your $pluralnoun $pluralverb?",
	question5: "What is the $superlativeadjective $noun you have ever seen?",
	adjective:
		"soft | green | bright | smooth | cold | loud | quick | sharp | rough | safe | dark | light | smart | kind | tough | brave | short | hot | cool | quiet | dry | young | old | rich | clean | fast | weak | busy | funny | new |proud | small | forgetful | handsome | comical | wild",
	noun: "brother | dog | mountain | river | city | computer | teacher | phone | ocean | tree | book | artist | planet | car | building | storm | song | garden | hero | clock | forest | bird | ship | lake | guitar | flower | road | game | painting | train | scientist | galaxy | island | elephant | robot | museum | bridge | farmer | bicycle | desert | pilot | athlete | village | inventor | factory | astronaut | chef | temple | waterfall | crown |sister | son |cousin | uncle| great-uncle | aunt | great-aunt | nephew | niece | great-nephew | great-niece | grandparent | great-grandparent | great-great-grandparent | parent | child | grandchild | great-grandchild | great-great-grandchild | ancestor | descendant | relative | sibling | parent | child | grandchild | great-grandchild | great-great-grandchild | ancestor | descendant | relative | sibling",
	verb: "runs | jumps | dances | writes | reads | sings | draws | listens | learns | cooks | drives | swims | flies | paints | laughs | cries | speaks | thinks | dreams | builds | climbs | watches | sits | stands | walks | smiles | waits | buys | sells | starts | stops | helps | changes | fixes | grows | searches | studies | loves | hates | believes | creates | explores | remembers | imagines | leads | follows | chooses | finds | wins | loses",
	pluralnoun:
		"houses | candles | beaches | kitchens | stars | rivers | paintings | headphones | drums | chairs | pencils | valleys | keyboards | blankets | poems | statues | tablets | cameras | cookies | rockets | cliffs | diamonds | necklaces | maps | phones | theaters | wallets | stadiums | recipes | pyramids | languages | gardens | markets | sandwiches | streets | banners | notebooks | mirrors | castles | cabinets | rings | pillows | bridges | backpacks | galaxies | coins | keys | sweaters | umbrellas | sisters | parents | children | grandparents | ancestors | descendants | relatives | siblings",
	pluralverb:
		"run | jump | dance | write | read | sing | draw | listen | learn | cook | drive | swim | fly | paint | laugh | cry | speak | think | dream | build | climb | watch | sit | stand | walk | smile | wait | buy | sell | start | stop | help | change | fix | grow | search | study | love | hate | believe | create | explore | remember | imagine | lead | follow | choose | find | win | lose",
	superlativeadjective:
		"brightest | strangest | smallest | tallest | boldest | cleverest | strongest | wildest | friendliest | coldest | loudest | quickest | smoothest | sharpest | roughest | safest | darkest | lightest | smartest | kindest | toughest | softest | bravest | shortest | hottest | coolest | quietest | driest | youngest | oldest | richest | poorest | fiercest | nicest | gentlest | craziest | sweetest | harshest | heaviest | lightest | bravest | busiest | fastest | sleekest | fanciest | funniest | nicest | spiciest | tastiest | quietest | cleanest",
};

const context = {};

const width = 550;
const height = 300;
let question1 = "";
let question2 = "";
let question3 = "";
let question4 = "";

let notecard;
let font;

const getQuestion = () => {
	const g = RiTa.grammar(storyGrammar, context);
	return g.expand();
};

const createNewSketchCanvas = (id) => {
	const sketch_canvas = (p) => {
		const clickButtonQuestion = () => {
			const newQuestion = getQuestion();
			if (id === 1) {
				question1 = newQuestion;
			} else if (id === 2) {
				question2 = newQuestion;
			} else if (id === 3) {
				question3 = newQuestion;
			} else if (id === 4) {
				question4 = newQuestion;
			}
		};

		p.preload = () => {
			notecard = p.loadImage("Notecard.jpg");
			font = p.loadFont("IBMPlexMono-Bold.ttf");
		};

		p.setup = () => {
			p.createCanvas(width, height);
			p.imageMode(p.CENTER);

			p.textFont(font);
			p.textSize(12);

			const questionButton = p.createButton("new question");
			questionButton.mousePressed(clickButtonQuestion);
		};

		p.draw = () => {
			p.image(notecard, width / 2, height / 2);
			p.textAlign(p.CENTER, p.CENTER);

			const questionText =
				id === 1
					? question1
					: id === 2
					? question2
					: id === 3
					? question3
					: question4;

			p.text(questionText, width / 2, height / 2 + 10);
		};
	};
	return new p5(sketch_canvas, `canvas${id}`);
};

createNewSketchCanvas(1);
createNewSketchCanvas(2);
createNewSketchCanvas(3);
createNewSketchCanvas(4);
