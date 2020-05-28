function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // shfaqe pyetjen
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // shfaqi mundesit
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
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
    element.innerHTML = "Pyetja e " + currentQuestionNumber + " prej " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Rezultati</h1>";
    gameOverHTML += "<h2 id='score'> Piket e juaj jane: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// krijo pyetjet
var questions = [
    new Question("Si mund të bëni një listë me numra ne HTML?", ["ul", "ol", "li", "th"], "ol"),
    new Question("Në HTML, cili atribut përdoret për të specifikuar se duhet të plotësohet një fushë hyrëse?", ["placeholder", "validate", "formvalidate", "required"], "required"),
    new Question("Si shënohet ID ne HTML?", [".", "#", "/", "''"], "#"),
    new Question("Cili atribut HTML përdoret për të përcaktuar stilet e brendshme?", ["class", "style", "styles", "'src"], "style"),
    new Question("Cila vlerë e CSS kontrollon madhësinë e tekstit?", ["font", "font-weight", "font-size", "font-color"], "font-size"),
    new Question("Cila nga këto gjuhë programuse është e bazua ne OOP(Object Orieted Programming)", ["Fortran", "JAVA", "C", "Pascal"], "JAVA"),
    new Question("Cilat nga këto nevojitet për nderitmin e nje Website?", ["HTML", "CSS", "Javascript", "Të gjitha"], "Të gjitha"),
    new Question("Brenda cilit element HTML e vendosim JavaScript?", ["script", "javascript", "js", "sripting"], "script"),
    new Question("Si të shkruani një deklaratë IF në JavaScript?", ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"], "if (i == 5)"),
    new Question("Si e deklaroni një variabël JavaScript?", ["variable carName", "carName", "var carName", "v carName"], "var carName")
];

// krijo kuizin
var quiz = new Quiz(questions);

// shfaqe kuizin
populate();
