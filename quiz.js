var questions = [
  {
    prompt: "What is your name?\n(a) James\n (b)Sara",
    answer: "a",
  },

  {
    prompt: "How old are you?\n(a) Fifty\n (b)Thirty Seven",
    answer: "b",
  },

  {
    prompt: "Where are you from?\n(a) Uganda\n (b)Serbia",
    answer: "b",
  },
];
var score = 0;
for (var i = 0; i < questions.length; i++) {
  // window.prompt opens a new window for user to see the prompt

  var response = window.prompt(questions[i].prompt);
  if (response === questions[i].answer) {
    alert("correct!");
    score++;
  } else {
    alert("Wrong!");
  }
}
// tells score at the end
alert("You got" + " " + score + "/" + " " + questions.length);
