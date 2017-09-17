var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "/" + quiz.questions.length + "</h2>";
        gameOverHTML += "<h3>Reload the page to replay</h3>";
        if(quiz.score >= 12 && quiz.score < 15){
          gameOverHTML += "<div><p>good</p></div>";
          setTimeout(function(){alert("It is time!")});
          $(function(){
            $("img").attr({
              src:"star2.jpg",
              alt:"good"
            });
            // $("img").attr('title',"GOOD");
            $("img").dialog();
          });
        }else if(quiz.score >= 15 && quiz.score < 18){
          gameOverHTML += "<p>very good</p>";
          setTimeout(function(){alert("It is time!")});
          $(function(){
            $("img").attr({
              src:"star3.jpeg",
              alt:"very good"
            });
            // $("img").attr('title',"VERY GOOD");
            $("img").dialog();
          });
        }else if(quiz.score >= 18){
          gameOverHTML += "<div><p>excellent</p></div>";
          setTimeout(function(){alert("It is time!")});
          $(function(){
            $("img").attr({
              src:"stargold.jpeg",
              alt:"excellent"
            });
            // $("img").attr('title',"EXCELLENT");
            $("img").dialog();
            $("img").toggleClass('flip');
          });
        }else{
          gameOverHTML += "<div><p>failed</p></div>";
          setTimeout(function(){alert("It is time!")});
          $(function(){
            $("img").attr({
              src:"star1.jpeg",
              alt:"failed"
            });
            // $("img").attr('title',"FAILED");
            $("img").dialog();
            // $("img").mouseout(function(){$(this).css({
            //   'transform':'rotate(100deg)'
            // });});
          });
        }
        gameOverHTML += "<img src='gold.jpg'/>"
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },

    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};
