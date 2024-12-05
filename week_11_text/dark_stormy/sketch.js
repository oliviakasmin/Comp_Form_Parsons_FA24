// require https://unpkg.com/rita

// /* globals RiTa */

const storyGrammar = {
	start: "$phrase1, $phrase2. $phrase3.",
	phrase1: "When the $pluralnoun were put to bed the $noun seeemed $adjective",
	phrase2:
		"but then the $spookypluralnoun started $ingverbs $adverb and the $pluralnoun became $adjective2",
	phrase3:
		"In the end, it seemed the only thing for the $pluralnoun to do was to $pluralverb and hope not to be $spookyverb",
	adjective:
		"quiet | normal | weird | wet | dry | cold | hot | dark | light | bright | strange | small | tall | big | bold | clever | strong | wild | friendly | cold | loud | quick | smooth | sharp | rough | safe | dark | light | smart | kind | tough | soft | hot | cool | quiet | dry  | nice | gentle | crazy | sweet | harsh | heavy | light  | sleek | fancy | funny | nice | spicy  | quiet | clean",
	adjective2:
		"terrified | frightened | panicked | horrified | startled | petrified | alarmed | uneasy | haunted | trembly | fearful | aghast | spooked | jumpy | wary | nervous | tense | anxious | mortified | shocked | distressed | edgy | disturbed | unnerved | shaken | horrified | suspicious | jittery | pale | queasy  | bloodless | skittish | dread-filled  | ghastly | aghast | breathless | apprehensive",
	noun: "sky | house | room | forest | street | hallway | attic | cellar | building | cave | garden | window | chamber | bridge | park | dungeon | meadow | shore | temple | mansion | office | courtyard | tower | tunnel | island | streetlight | barn | lake | church | hall | doorway",
	verb: "escape | run away | hide | take cover | find shelter | flee | dodge | vanish | retreat | evade | avoid | slip away | bolt | duck | elude | disappear | withdraw | dash | sneak | sidestep | hurry | escape | get away | sneak out | bolt for safety | rush away | cover up | back off | slide away | hurry off | seek refuge",
	"#pluralnoun":
		" sisters | parents | children | grandparents | ancestors | descendants | relatives | siblings | great-nieces | dogs | horses | kittens | rabbits | mice",
	spookyverb:
		"eaten | captured | trapped | devoured | seized | haunted | stalked | cursed | terrorized | frightened | ambushed | chased | ensnared | consumed | hunted | grabbed | smothered | possessed | strangled | infected | attacked | bitten | taunted | crushed | pursued | dragged | clawed | ensnared | suffocated",
	spookypluralnoun:
		"mummies | zombies | ghosts | ghouls | vampires | werewolves | skeletons | demons | witches | warlocks | banshees | poltergeists | spirits | phantoms | specters | apparitions | wraiths | zombies | revenants | undead | monsters | fiends | beasts | creatures | horrors | abominations | terrors | nightmares | shadows | shades | bogeymen | bogeywomen | bogeybeasts | bogeythings | bogeycreatures | bogeyhorrors | bogeyabominations | bogeyterrors | bogeynightmares | bogeyshadows | bogeyshades | bogeybogeymen | bogeybogeywomen | bogeybogeybeasts | bogeybogeythings | bogeybogeycreatures | bogeybogeyhorrors | bogeybogeyabominations | bogeybogeyterrors | bogeybogeynightmares | bogeybogeyshadows | bogeybogeyshades | bogeybogeybogeymen | bogeybogeybogeywomen | bogeybogeybogeybeasts | bogeybogeybogeythings | bogeybogeybogeycreatures | bogeybogeybogeyhorrors | bogeybogeybogeyabominations | bogeybogeybogeyterrors | bogeybogeybogeynightmares | bogeybogeybogeyshadows | bogeybogeybogeyshades",
	pluralverb:
		"run | jump | dance | write | read | sing | draw | listen | learn | cook | drive | swim | fly | paint | laugh | cry | speak | think | dream | build | climb | watch | sit | stand | walk | smile | wait | buy | sell | start | stop | help | change | fix | grow | search | study | love | hate | believe | create | explore | remember | imagine | lead | follow | choose | win | lose",
	ingverbs:
		"howling | creeping | shrieking | lurking | haunting | slithering | scratching | prowling | hissing | scuttling | crawling | stalking | groaning | rattling | oozing | clanking | screeching | moaning | scraping | whispering | echoing | shuddering | thrashing | trembling | squirming | gasping | shuffling | dripping | whimpering | wailing | gnashing | chilling | murmuring | clawing | bubbling | swarming | spooking | rumbling | churning | gurgling",
	adverb:
		"eerily | ominously | ghostly | creepily | hauntingly | chillingly | darkly | menacingly | unsettlingly | quietly | dreadfully | faintly | mysteriously | grotesquely | horrifyingly | disturbingly | faintly | coldly | stealthily | shadowily | unnervingly | hauntingly | ghastly | wickedly | grimly | harshly | bleakly | savagely | fiendishly | gloomily | dismally | sorrowfully | morbidly | lifelessly | sinisterly | restlessly | hollowly | spookily | bleakly | tremblingly",
};
const context = {};

const g = RiTa.grammar(storyGrammar, context);

display(g.expand());

function display(...strings) {
	const introText = "It was a dark and stormy night. ";

	const storyElement = document.getElementById("story");
	storyElement.style = "font-size: 30px; margin: 20%; line-height: 1.5;";

	const intro = document.createElement("span");
	intro.className = "spooky";
	intro.innerText = introText;

	const story1 = document.createElement("span");
	story1.className = "story";
	const story1Last = document.createElement("span");
	story1Last.className = "spooky";

	const story2 = document.createElement("span");
	story2.className = "story";
	const story2Last = document.createElement("span");
	story2Last.className = "spooky";

	const [first, second] = strings[0].split(".");
	const firstRemoveLast = first.split(" ").slice(0, -1).join(" ");
	const lastWordFirst = first.split(" ").pop() + ".";

	const secondRemoveLast = second.split(" ").slice(0, -1).join(" ");
	const lastWordSecond = second.split(" ").pop() + ".";

	story1.innerText = firstRemoveLast;
	story1Last.innerText = " " + lastWordFirst;

	story2.innerText = secondRemoveLast;
	story2Last.innerText = " " + lastWordSecond;

	storyElement.appendChild(intro);
	storyElement.appendChild(story1);
	storyElement.appendChild(story1Last);
	storyElement.appendChild(story2);
	storyElement.appendChild(story2Last);
}
