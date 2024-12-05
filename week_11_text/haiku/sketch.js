// require https://unpkg.com/rita

// /* globals RiTa */

const beauvoirWords = [
	"existentialism",
	"freedom",
	"feminism",
	"ethics",
	"otherness",
	"ambiguity",
	"alienation",
	"autonomy",
	"patriarchy",
	"authenticity",
	"oppress",
	"subordinate",
	"transcendence",
	"immanence",
	"oppression",
	"selfhood",
	"identity",
	"subjectivity",
	"agency",
	"responsibility",
	"solidarity",
	"liberation",
	"duality",
	"self",
	"other",
	"oppressor",
	"oppressed",
	"embodiment",
	"gender",
	"maturity",
	"humanism",
	"equality",
	"consciousness",
	"situation",
	"actualize",
	"reality",
	"anxiety",
	"struggle",
	"morality",
	"violence",
	"institution",
	"privilege",
	"desire",
	"sexuality",
	"marriage",
	"motherhood",
	"stereotype",
	"roles",
	"womanhood",
	"destiny",
	"expression",
	"futility",
	"limitation",
	"progress",
	"absurd",
	"contingency",
	"virtue",
	"doubt",
	"society",
	"expectation",
	"hierarchy",
	"culture",
	"reflection",
	"intellect",
	"reason",
	"intuition",
	"emotion",
	"dread",
	"salvation",
	"deceive",
	"guilt",
	"shame",
	"ambiguously",
	"political",
	"power",
	"dynamics",
	"authority",
	"justice",
	"community",
	"betrayal",
	"transformation",
	"empathy",
	"hope",
	"mystery",
	"history",
	"future",
	"rebellion",
	"independence",
	"conflict",
	"resolve",
	"gendered",
	"choice",
	"virtues",
	"believe",
	"desperation",
	"reflect",
	"transform",
	"perceive",
	"transcendent",
	"passionate",
	"submissive",
	"active",
	"passive",
	"role",
	"contemplate",
	"suffering",
	"assume",
	"assert",
	"sacrifice",
	"independently",
	"universally",
	"absurdly",
	"necessarily",
	"deliberate",
	"oppressive",
	"manipulative",
	"subservient",
	"interdependence",
	"mutual",
	"collective",
	"resistance",
	"insight",
	"passion",
	"subject",
	"object",
	"endure",
	"reflective",
	"autonomous",
	"exist",
	"conform",
	"define",
	"assimilate",
	"rebel",
	"misogyny",
	"bind",
	"discover",
	"existential",
	"relationship",
	"redefine",
	"rebellious",
	"courage",
	"vulnerability",
	"achieve",
	"seek",
	"dream",
	"claim",
	"compromise",
	"strength",
	"ambivalent",
	"clarity",
	"objective",
	"subjective",
	"escape",
	"justify",
	"challenge",
	"reaffirm",
	"redeem",
	"empower",
	"perception",
	"embrace",
	"evolve",
	"compassionate",
	"rational",
	"irrational",
	"alienated",
	"subjugate",
	"patriarchal",
	"historically",
	"philosophical",
	"socioeconomic",
	"determined",
	"contextual",
	"create",
	"express",
	"invisible",
	"internal",
	"external",
	"defined",
	"truth",
	"action",
	"meaning",
	"essence",
	"life",
	"become",
	"pursue",
	"ethical",
	"right",
	"wrong",
	"construct",
	"navigate",
	"free",
	"self",
	"love",
	"fear",
	"role",
	"sex",
	"mind",
	"body",
	"soul",
	"pain",
	"loss",
	"gain",
	"want",
	"give",
	"take",
	"live",
	"die",
	"grow",
	"help",
	"hurt",
	"care",
	"hate",
	"judge",
	"feel",
	"rise",
	"fall",
	"show",
	"speak",
	"act",
	"value",
	"fight",
	"harm",
	"risk",
	"fate",
	"rule",
	"law",
	"work",
	"study",
	"earn",
	"wait",
	"trust",
	"wish",
	"reach",
	"stand",
	"see",
	"sense",
	"time",
	"find",
	"share",
	"face",
	"touch",
	"learn",
	"teach",
	"move",
	"join",
	"hold",
	"believe",
	"view",
	"flaw",
	"norm",
	"bond",
	"equal",
	"pure",
	"judge",
	"real",
	"harsh",
	"bold",
	"whole",
	"sure",
	"look",
	"hear",
	"cold",
	"safe",
	"just",
	"endurance",
	"joy",
	"knowledge",
	"wisdom",
	"peace",
	"justice",
	"principle",
	"equity",
	"defiance",
	"individual",
	"indifference",
	"trustworthy",
	"insightful",
	"graceful",
	"cruel",
	"compassion",
	"understand",
	"forgive",
	"question",
	"reflect",
	"pride",
	"tradition",
	"ambition",
	"progressive",
	"inclusive",
	"dignity",
	"honesty",
	"imagination",
	"exist",
	"purpose",
	"freedom",
	"spirit",
	"light",
	"grounded",
	"awareness",
	"emotion",
	"beauty",
	"dreamer",
	"intention",
	"perception",
	"wonder",
	"brave",
	"fall",
	"determined",
	"complex",
	"simplicity",
	"ethical",
	"resilience",
	"modesty",
	"sincerity",
	"ambiguous",
	"sensitive",
	"respect",
	"hopeful",
	"critical",
	"skeptical",
	"enlighten",
	"liberate",
	"guide",
	"mentor",
	"wander",
	"inspire",
	"uplift",
	"meaning",
	"grateful",
	"fortunate",
	"aware",
	"open",
	"humble",
	"powerful",
	"perspective",
	"embrace",
	"realization",
	"self-reflection",
	"overcome",
	"creative",
	"essential",
	"acceptance",
	"authentic",
];

const one = [];
const two = [];
const three = [];
const four = [];
const five = [];
const six = [];
const seven = [];

const analyzeWords = (beauvoirWords) => {
	const analyzedWords = beauvoirWords.filter((word) => {
		console.log(RiTa.analyze(word));
		let count = RiTa.syllables(word).split("/").length;
		if (count === 1) {
			one.push(word);
		} else if (count === 2) {
			two.push(word);
		} else if (count === 3) {
			three.push(word);
		} else if (count === 4) {
			four.push(word);
		} else if (count === 5) {
			five.push(word);
		} else if (count === 6) {
			six.push(word);
		} else if (count === 7) {
			seven.push(word);
		}
		return count <= 7;
	});
	return analyzedWords;
};

const validWords = analyzeWords(beauvoirWords);

function generateHaiku() {
	const syllablePattern = [5, 7, 5];
	const haiku = [];

	syllablePattern.forEach((syllables, i) => {
		haiku.push(getLine(syllables, i + 1));
	});

	return haiku;
}

const getLine = (syllableCount, lineNum) => {
	let line = [];
	let firstWord = "";
	if (syllableCount === 5) {
		const options = [...five, ...four, ...three, ...two, ...one];
		firstWord = options[Math.floor(Math.random() * options.length)];
	} else {
		firstWord = validWords[Math.floor(Math.random() * validWords.length)];
	}
	line.push(firstWord);

	let currentSyllables = RiTa.syllables(firstWord).split("/").length;

	if (lineNum === 1 && currentSyllables < 4) {
		line.push("our");
		currentSyllables += 1;
	}

	if (lineNum === 2 && currentSyllables < 6) {
		line.push("and");
		currentSyllables += 1;
	}

	if (lineNum === 3 && currentSyllables < 4) {
		line.push("the");
		currentSyllables += 1;
	}

	while (currentSyllables < syllableCount) {
		const diff = syllableCount - currentSyllables;
		const nextWordSyllables = Math.floor(Math.random() * diff) + 1;

		let nextWord = "";

		if (nextWordSyllables === 1) {
			nextWord = one[Math.floor(Math.random() * one.length)];
		} else if (nextWordSyllables === 2) {
			nextWord = two[Math.floor(Math.random() * two.length)];
		} else if (nextWordSyllables === 3) {
			nextWord = three[Math.floor(Math.random() * three.length)];
		} else if (nextWordSyllables === 4) {
			nextWord = four[Math.floor(Math.random() * four.length)];
		} else if (nextWordSyllables === 5) {
			nextWord = five[Math.floor(Math.random() * five.length)];
		} else if (nextWordSyllables === 6) {
			nextWord = six[Math.floor(Math.random() * six.length)];
		}

		line.push(nextWord);

		currentSyllables += RiTa.syllables(nextWord).split("/").length;
	}
	return line.join(" ");
};

function display(haiku) {
	const div = document.createElement("div");
	div.classList.add("haiku");
	div.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
	document.body.append(div);
	haiku.forEach((line) => {
		const p = document.createElement("p");
		p.classList.add("haiku-line");
		p.innerText = line;
		div.append(p);
	});
}

display(generateHaiku());
