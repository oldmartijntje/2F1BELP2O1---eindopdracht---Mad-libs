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
        "Best movie ever?", "The most annoying thing you have ever seen?", "What's the most annoying thing you have ever heard?", "What's the most annoying thing you have ever smelled?"]
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
var typeIDName = "type";
var answerIDName = "answer";
var labelIDName = "label";
var amount = 5;

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

for (let index = 1; index < amount + 1; index++) {
    type = getType();
    document.getElementById(formID(index, typeIDName)).value = type;
    document.getElementById(formID(index, labelIDName)).innerText = getQuestion(type);

}