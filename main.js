var types = ["location"];
var questions = {
    "location": ["Where did you grow up?", "Where do you live now?", "Where do you want to live?", "Where do you want to go on vacation?",
        "What's a location you dispise?", "What's a location you love?", "What's a location you've always wanted to visit?", "What's a location you've always wanted to live in?",
        "What's the last place you have been?", "What is a great place to eat?", "What is a great place to shop?", "What is a great place to visit?", "What is a great place to live?"],
};
var twists = { "location": ["What is a place you would want destroyed?", "Where did you lose your virginity?", "Best place to hide drugs?", "Where would you want to be burried if you died?"] };
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
console.log(getType())

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