function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Grand Central Terminal, Park Avenue, New York is the world's ", ["largest railway station", "highest railway station","longest railway station", "None of the above"], "longest railway station"),
    new Question("Garampani sanctuary is located at ", ["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"], "Kohima, Nagaland"),
    new Question("FFC stands for ", ["Foreign Finance Corporation", "Film Finance Corporation","Federation of Football Council", "None of the above"], "Film Finance Corporation"),
    new Question("Fastest shorthand writer was", ["Dr. G. D. Bist", "J.R.D. Tata", "J.M. Tagore", "Khudada Khan"], "Dr. G. D. Bist"),
    new Question("Galileo was an Italian astronomer who", ["developed the telescope", "discovered four satellites of Jupiter", "discovered that the movement of pendulum produces a regular time measurement", "All of the above"], "All of the above")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
