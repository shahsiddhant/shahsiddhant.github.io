var num =0;
var correctAnswers=0;
var allQuestions = [
    {
        question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer:0
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        choices: ["largest railway station", "highest railway station", "longest railway station", "None of the above"],
        correctAnswer:0
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        choices: ["Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All of the above"],
        correctAnswer:3
    },
    {
        question: "The host of first Olympics in 1896 was",
        choices: ["Athens, Greece", "Paris, France", "London, Great Britain"],
        correctAnswer:0
    },
    {
        question: "The largest city of India is",
        choices: ["New Delhi", "Mumbai", "Kolkata", "Chennai","Pune"],
        correctAnswer:1
    }
];

var isChecked = function(counter){
    console.log("Correct answer is: "+allQuestions[counter].correctAnswer);
    if($('input:checked').val() == allQuestions[counter].correctAnswer){

        correctAnswers++;
    }
};


var updateQuestions = function(num) {
    $('#question').html(allQuestions[num].question);
    $('#answers').remove();
    $('.questionDiv').append("<div id='answers'></div>");
    for (var i = 0; i < allQuestions[num].choices.length; i++) {

        var choice = allQuestions[num].choices[i];
        var text1 = "<div class='radio' id='radio'><label>" +
            "<input type='radio' name='radioBtn' value="+i+">" + choice + " </label></div>";
        $('#answers').append(text1);


    } //for loop closes
}; // close updateQuestions
$(document).ready(function () {
    $('.beginBtn').click(function(){
        
        $('.introDiv').css('display','none').fadeOut();
        $('.questionDiv').css('display','block').fadeIn();
        $('.nextBtn').css('display','block').fadeIn();
        updateQuestions(num);


    });



    $('.nextBtn').click(function(){
        num++;
        if(num==allQuestions.length) {
            isChecked(num-1);
            $('.questionDiv').remove().fadeOut();
            $('.nextBtn').remove().fadeOut();
            var resultText = "Your result is " + correctAnswers;
            $('body').append("<div id='result'>" + resultText + "</div>").fadeIn();
        }



        isChecked(num-1);
        updateQuestions(num);





    });



}); //document ready closes
