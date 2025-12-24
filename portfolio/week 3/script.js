// 1. Create an array of possile answers (Classic + Fun/Sarcastic)
const answers = [
    "It is certain.",
    "Yes definitely.",
    "Chances are good.",
    "Signs point tro yes.",
    "Chances say no.",
    "My sources say no.",
    "Chancesare not so good.",
    "Very doubtful.",
    "404 Error: Fate not found.",
    "Only if you do a little dance first.",
    "You are about die!",
    "The stars say... meh.",
    "Ask your dog, they know better.",
    "Computer says no.",
    "I'm on a coffee break, as later.",
    "Yes, but you won't like the consequencies.",
    "You need to consult a doctor.",
    "Your WiFi connection to destiny is weak.",
    "Fate is currently stuck...",
    "Chances are great... for someone else."
];

// 2. Select the important HTML elements
const getAnswerButton = document.querySelector("#get-answer-btn");
const answerDisplay = document.querySelector("#answer");


// 3. The function that runs on click
function showRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
}

// 4. We use the variable 'getAnswerbutton' we defined above.
getAnswerButton.addEventListener("click", showRandomAnswer);













