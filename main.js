var types = ["location", "people", "activity", "objects", "activity", "objects", "people"];
var questions = {
    "location": ["Where did you grow up?", "Where do you live now?", "Where do you want to live?", "Where do you want to go on vacation?",
        "What's a location you dispise?", "What's a location you love?", "What's a location you've always wanted to visit?", "What's a location you've always wanted to live in?",
        "What's the last place you have been?", "What is a great place to eat?", "What is a great place to shop?", "What is a great place to visit?", "What is a great place to live?",
        "Last place you have pooped?", "Last place you have peed?", "Last place you have slept?", "Last place you have eaten?", "Last place you have drank?", "Last place you have smoked?"],
    "people": ["Who is your favorite person?", "Who is your least favorite person?", "Who is your best friend?", "Who is your worst enemy?", "Who is your favorite celebrity?", "Who is your least favorite celebrity?",
        "Who would you want to be stuck on a deserted island with?", "Who would you want to be stuck in a elevator with?", "Who would you want to be stuck in a car with?", "Who would you want to be stuck in a house with?",
        "What is your mom's name?", "What is your dad's name?", "What is your best friend's name?", "What is your worst enemy's name?", "What is your favorite celebrity's name?", "Who would you want to rickroll?",
        "Most annoying politician?", "A person you dispise?", "A person you love?", "A person you've always wanted to meet?", "A person you've always wanted to be friends with?", "A person you've always wanted to date?"],
    "moment": ["When was the last time you have eaten?", "When was the last time you have drank?", "When was the last time you have slept?", "When was the last time you have pooped?",
        "When did you meet your first girlfriend/boyfriend?", "When did you meet your best friend?", "When did you meet your worst enemy?", "When is your birthday?",
        "When did you get your first kiss?"],
    "numbers": ["How many fingers do you have?", "How many times have you been arrested?", "How many times have you been to jail?", "How many times have you been to prison?",
        "A random number between 1 and 100.000?", "How many dollars would you want to have?", "What's your weight?"],
    "activity": ["What's your favourite morning routine?", "What are your hobbies?", "A thing you hate to do?", "A thing you love to do?", "What's your favourite thing to do on a rainy day?",
        "Most annoying chore?", "Thing to do on a hot summer day?", "Something you can do to annoy someone?"],
    "objects": ["What do you have too many of?", "What's the weirdest movie you have ever seen?", "What is something you like to eat?", "What is something you like to drink?",
        "Best movie ever?", "The most annoying thing you have ever seen?", "What's the most annoying thing you have ever smelled?"]
};
var twists = {
    "location": ["What is a place you would want destroyed?", "[NSFW] Where did you lose your virginity?", "Best place to hide drugs?", "Where would you want to be burried if you died?",
        "Locations for the perfect date, help me out.", "Bucketlist ideas: What are some good places I should visit?", "What's your favourite place to be kissed?"],
    "people": ["Give me date ideas.", "Who would you want to date?", "Who do you want to bury alive?", "Leave names of people you have slept with in the comments.", "Most attractive person on earth.",
        "Whose pictures do you secretly have printed on your walls?", "What is something small that has caused someone to lose their life?", "What's easy to obtain, but hard to get rid of?",
        "What do you hate?", "What factors today would prevent people from having kids?"],
    "moment": ["[NSFW] When is the last time you peed in your pants?", "When was the last time you got arrested?", "[NSFW] When did you lose your virginity?", "When were you born?"],
    "numbers": ["How many children do you want/have?", "How many pushups can you do?", "How old were you when you got your first boyfriend/girlfriend?", "What is a normal amount of beers for a night out?", "How many kidneys do you have?",],
    "activity": ["[NSFW] What's something sexual you tried but realized you were not into?", "You witness someone stealing food while you're grocery shopping, what do you do?", "People who can afford to live alone, what do you do?",
        "What should be free for every human being?", "[NSFW] What's the most NSFW thing you did last weekend?", "What screams “I'm upper class”?", "What is something small that has caused someone to lose their life?", "What is something small that has caused someone to lose their life?",
        "[Serious] What's the most meaningful thing you can do for your parents?", "What's your favourite morning routine?", "What instantly comes to mind when you hear 'Greece'?", "What yells “I have no life”?",
        "What led you to join Reddit?", "What comes to mind when you hear Morocco?", "If you had 24 hours left to live, how would you spend it?", "What do you hate?",
        "What factors today would prevent people from having kids?", "What used to be nerdy, but is now considered cool?", "what do you do when you feel like you lose yourself?"],
    "objects": ["What do you guys put in your scrambled eggs to make them extra awesome?", "What should be free for every human being?", "What screams “I'm upper class”?", "you're forming an underwater band. What will the octopus play that isn't drums or keys?",
        "What is something small that has caused someone to lose their life?", "What is something small that has caused someone to lose their life?", "What do you have too many of?", "What instantly comes to mind when you hear 'Greece'?",
        "What yells “I have no life”?", "What led you to join Reddit?", "What comes to mind when you hear Morocco?", "What's easy to obtain, but hard to get rid of?",
        "What do you hate?", "What's the craziest thing you snuck on an airplane?", "What factors today would prevent people from having kids?", "what is that food that you don't get tired of eating?"]
};
var redditNames = ["JoeBidome", "IAmAnonymousIThink", "khsagfdglga", "Vugtman", "BBQ_Duck", "BeardMan", "FriendlyNeighbourHoodMan", 'thomas', 'thom', 'muik', 'coen', 'staninna', 'stijn', 'florida man', 'mandrex', 'bob', 'grian', 'mumbo jumbo', 'scar', '[CLASSEFIED]', 'george',
    'lianne', 'tommy', 'tiffany', 'katie', 'jase', 'lennert', 'mellodie', 'mark rutte', 'Master of scares', 'Null', 'Herobrine', 'None', 'Undefined', 'liam', 'anne', 'colorblind guy',
    'Ms.Kittens', 'attack helicopter', 'mr Blue Sky', 'joe', 'Vogeljongen', 'kaas', 'peter quill', 'Nat', 'Loki', 'Nick Furry', 'Vision', 'Eather', 'Mind Stone', 'Power Stone', 'Tesseract', 'Wanda', 'Soul Stone', 'Time Stone',
    'Dr Strange', 'Coulson', 'Banner', 'Peter Parker', 'Tony Stark', 'Scott Lang', 'pjotter', 'Thanos', 'Thor', 'GLaDOS', 'chell', 'Phileine', 'emiel', 'twan', 'david', 'joelia', 'sneal', 'pieter', 'merijn', 'marjin', 'ScuttleBug', 'Coin', 'Skeeter', 'Snailcorn', 'Snow Spike', 'Fire Piranha', 'Spike Bass', 'Sushi', 'Bee Mario', 'Fly Mario', 'Ice Mario', 'Ranbow Mario', 'Luma', 'Rosalina', 'Honeybee',
    'oldmartijntje', 'martijn', 'mercury', 'lara', 'steve jobs', 'mark zuckerburg', 'Hadassa', 'elon musk', 'sinterklaas', 'bart', 'ewood', 'mathijs', 'joris', 'zwarte piet', 'Gamora', 'Why Is Gamora?', 'I Am Groot', 'Rocket Raccoon', 'KORG', 'Crowber', 'Dry Bowser', 'Fury Bowser', 'Cat Bowser', 'Lakithunder', 'Clone Mario', 'MummiPokey', 'Monty Tank',
    'izuku', 'bakugo', 'uraraka', 'iida', 'mineta', 'todoroki', 'Eris', 'Sylphiette', 'Rudeus', 'Roxy', 'Tomori', 'Ruijerd', 'neko', 'Dr Octopus', 'NoobSlayer69', 'Jeb_', 'DinnerBone', 'debaas', 'Goomba', 'smurf', 'bomb-omb', 'koopa', 'luigi', 'daisy', 'Thwomp', 'Frog Mario', 'Cheep Chomp', 'BlockHopper', 'Unagi', 'Boo Mario', 'Spring Mario',
    'peach', 'piranha', 'Waluigi', 'shy-guy', 'toadette', 'king bob-omb', 'yoshi', 'Bullet Bill', 'birdo', 'banzai bill', 'Bowser', 'Cheep Cheep', 'chargin\' chuck', 'Buzzy Beetle', 'Dry Bones', 'Fish Bone', 'Fuzzle', 'Larry', 'Iggy', 'Lemmy', 'Ludwig', 'Morton', 'Roy', 'Wendy', 'Prinsess Toadstool', 'Mega Mole', 'Bowser jr', 'Fuzzy', 'Kamek',
    'Blargg', 'Hammer Brother', 'Blurp', 'Dino-Rhino', 'Magikoopa', 'Pokey', 'Montey Mole', 'Ninji', 'Muncher', 'Porcupuffer', 'Rex', 'Reznor', 'Spiny', 'Sumo Brother', 'Swooper', 'Big Boo', 'Thwimp', 'Urchin', 'Wiggler', 'Boomerang Boom', 'Boom-Boom', 'FireBro', 'Chain Chomp', 'Balloon Mario', 'Raccoon Mario', 'Shoe Mario', 'Hammer Mario', 'P-Wing',
    'Fire Chomp', 'Ice Bro', 'Spike', 'Rocky Wrench', 'Wart', 'Behemot King', 'Snifit', 'Phanto', 'Pidgit', 'Blooper', 'Lakitu', 'Geno', 'Hoot', 'Tuxie', 'Dorrie', 'Koopa the quick', 'Mips', 'Toad', 'Ukkiki', 'Big Bully', 'Bully', 'Wing Mario', 'Vanish Mario', 'Metal Mario', 'Bunny Mario', 'Space Mario', 'Aqua MarioBubble Mario', 'Cappy', 'Cape Mario',
    'Coud Mario', 'Rock Mario', 'Spin Drill', 'White Tanooki Mario', 'Statue Mario', 'Propeller Box', '? Box', 'Gold Block', 'White Raccoon Mario', 'Magmaargh', 'Double Mario', 'Elder Princess Shroob', 'Fawful', 'Kylie Koopa', 'Princess Shroob', 'Professor E. Gadd', 'Elvin Gadd', 'Shroob', 'Stuffwell', 'Toadiko', 'Toadbert', 'Yoob', 'Toad Doctor',
    'Blue Toad', 'Spin Drift', 'Motos', 'Piantas', 'Shadow Luigi', 'Pink-gold peach', 'Invincible Mario', 'Mini Mario', 'Mega Mario', 'Shell Mario', 'Cat Mario', 'Cosmic Mario', 'Fire Mario', 'Propeller Mario', 'Ice Mario', 'Gold Mario', 'Pinguin mario', 'Tanuki Mario', 'Toadsworth', 'Fludd', 'Petey Piranha', 'Shadow Mario', 'Klepto', 'Wriggler', 'Whomp King', 'Whomp', 'Money Bag', 'EyeRock', 'Amp',
    'Shrooblet', 'Boom Guy', 'Koopeleon', 'Boo Guy', 'Elasto-Piranha', 'Spiny Shroopa', 'Lakitufo', 'Dr. Shroob', 'Pidgit', 'Coconutter', 'Galoomba', 'Gnarantula', 'RC Shroober', 'Shrooba Diver', 'Dark Boo', 'Snifaro', 'Elite Boom Guy', 'Thwack', 'Tanoomba', 'Red Coconutter', 'Gold Koopeleon', '	Blazing Shroob',
    'Aurora Block', 'Popple', 'Blue switch', 'Dr Snoozemore', 'Control Block', 'Empty Block', 'L Block', 'Laser Block', 'M Block', 'Pi\'illoper', 'Recovery Block', 'Save Album', 'Simu-Block', 'Small Shine Block',
    'Ice Flower', 'Cannonball', 'Wiggly', 'Bros. Flower', 'Green Shell', 'Dreambunny', 'Mushroom', 'Super Mushroom', 'Mega Phil', 'Ultra Mushroom', 'Max Mushroom', 'Mole Hunt Host', 'Mushroom Drop', 'Super Drop',
    'Ultra Drop', 'Private Goomp', '1-up Mushroom', '1-up Super', 'Corporal Paraplonk', 'Refreshing Herb', 'Green Pepper', 'Red Pepper', 'Antasma', 'Lil\' Massif', 'Bedsmith', 'Big Massif', 'Luiginoid', 'Blue Pepper', 'Dream stone\'s spirit',
    'Price Dreambert', 'Time hole', 'Brickle', 'Trampoline', 'Treasure chest', 'Warp block', 'Eldream', 'Warp Pipe', 'Yellow switch', 'Hooski', 'Zeekeeper', 'Bros. Ball.', 'Starlow', 'Cush', 'Brock', 'Britta', 'Nommon', 'Mix Flower', 'Red Shell', 'Copy Flower', 'Seabury', 'Seabelle', 'Pocket Chomp', 'Smash Egg', 'Seadring', 'Shelltop',
    'Thwack Totem', 'Guardian Shroob', 'Shroid', 'Love Bubble', 'Skellokey', 'Handfake', 'Fly Guy', 'Piranha Planet', 'Wonder Thwack', 'Tashrooba', 'Snoozorb', '', 'Soul Bubble', 'Shroob Rex', 'Shroobsworth', 'Intern Shroob', 'Ghoul Guy', 'Lethal Bob-omb', 'Baby Bowser', 'Exor', 'Junior Shrooboid', 'Hammer Bros', 'Swiggler', 'Sunnycide', 'Shrooboid Brat', 'Mrs. Thwomp', 'Commander Shroob', 'Support Shroobs', 'Elder Shrooboid', 'Shrowser', 'Baby Mario', 'Baby Luigi', 'Dream Luigi', '4-Bros. Random Block', 'Adult Shine Block', 'Broggy',
    'Nebula', 'Drax', 'Hugo de Jonge', 'thierry baudet', 'Jesse Klaver', 'Djoopie', 'MisterPringleMan', 'Agent Carter', 'Misterio', 'Captain Marvel', 'Odin', 'Stan Lee', 'Fitz', 'Hawk Eye', 'Skye', 'Black Panther', 'Jemma Simmons', 'Mario', 'Quick silver', 'Wolverine', 'Deadpool', 'Flash', 'SuperMan', 'Batman', 'Mantis',
    'mandy', 'madelief', 'anne nieuwenhuis', 'stan', 'nathalie', 'djurre', 'rick', 'annieltje', 'sanne', 'elize', 'elise', 'luna', 'lianne', 'julia', 'ingrid', 'tiff', 'sven', 'lennert', 'johnny', 'kimberly', 'daniel', 'jamy', 'lynn', 'mitch', 'roos', 'lotte', 'matthew', 'emilia', 'mia', 'anna', 'lisanne', 'renske', 'ferris',
    'vivienne', 'frankaaaa', 'elvirus', 'nathan', 'simon', 'bo', 'jasmine', 'mart', 'gilli djojo', 'king papi', 'iris', 'melis', 'jelte', 'boris johnson', 'naomi', 'merlijn', 'tineke', 'mr.muffinnn', 'timo', 'niels', 'duncan', 'morris', 'donnie', 'manouk', 'jelle', 'corne', 'elke', 'mariska', 'melissa', 'luca', 'maddo', 'luuk',
    'randerkip', 'marten', 'tim', 'sam', 'samuel', 'eva', 'fernndo', 'kirsten', 'david', 'yarilin', 'fatma', 'matthijs', 'tino', 'coen', 'annefleurr', 'noa', 'adrienne', 'niels', 'kim', 'jasper', 'stevey', 'guusje', 'lone', 'xander', 'jordy', 'jochem', 'julia', 'sem', 'toine', 'mark', 'laurens', 'barbara', 'floor', 'ruben', 'aqua',
    'finn', 'frank', 'poerd', 'luna', 'ezraki', 'esther', 'alicia', 'andres', 'fenne', 'babette', 'dante', 'jonne', 'leon', 'kevin', 'rio', 'langefries', 'danique', 'virtualpeko', 'yassin', 'liz', 'sweetie', 'sb', 'raoul', 'thijs', 'arianne', 'henk', 'henk de steen', 'henkie spenkie', 'yeetus'];
var typeIDName = "type";
var answerIDName = "answer";
var labelIDName = "label";

var titleIDName = "title";
var commentIDName = "comment";
var rNameIDName = "rName";
var nameIDName = "name";
var agoTimeIDName = "agoTime";
var rCommentsIDName = "rComments";
var amount = 5;
var postIDName = "post";

function getQuestion(type) {
    var question = questions[type][Math.floor(Math.random() * questions[type].length)];
    return question;
}

function twistIt(type) {
    var twist = twists[type][Math.floor(Math.random() * twists[type].length)];
    return twist;
}

function getType() {
    return types[Math.floor(Math.random() * types.length)]
}

function formID(number, name) {
    id = `${name}${number}`;
    console.log(id)
    return id;
}

var myEle = document.getElementById("secondPage");

if (myEle) {
    for (let index = 1; index < amount + 1; index++) {
        type = document.getElementById(formID(index, postIDName)).dataset.value;
        document.getElementById(formID(index, titleIDName)).innerText = twistIt(type);
        document.getElementById(formID(index, commentIDName)).innerText = document.getElementById(formID(index, commentIDName)).dataset.value;
        document.getElementById(formID(index, rNameIDName)).innerText = `u\\${redditNames[Math.floor(Math.random() * redditNames.length)]}`;
        document.getElementById(formID(index, nameIDName)).innerText = `u\\${myEle.dataset.value}`;
        document.getElementById(formID(index, agoTimeIDName)).innerText = ` ${Math.floor(Math.random() * 59)} minutes ago`
        document.getElementById(formID(index, rCommentsIDName)).innerText = `${Math.floor(Math.random() * 14) + 2} comments`
    }
} else {
    for (let index = 1; index < amount + 1; index++) {
        type = getType();
        document.getElementById(formID(index, typeIDName)).value = type;
        document.getElementById(formID(index, labelIDName)).innerText = getQuestion(type);
    }
}

