var square1 = document.querySelector('#square1 p'),
    square2 = document.querySelector('#square2 p'),
    square3 = document.querySelector('#square3 p'),
    square4 = document.querySelector('#square4 p'),
    square5 = document.querySelector('#square5 p'),
    square6 = document.querySelector('#square6 p'),
    square7 = document.querySelector('#square7 p'),
    square8 = document.querySelector('#square8 p'),
    square9 = document.querySelector('#square9 p');

jQuery(document).ready(function($){
    $.get("https://opentdb.com/api.php?amount=9&type=boolean", questions);
    function questions(data){
        for (var i = 0; i < 9; i++) {
            // square1 = data.results[0].question;
            square1.innerHTML = data.results[0].question;
            // square1.innerHTML = data.results[0].question + " " + "\n True \n or False";
            square2.innerHTML = data.results[1].question;
            square3.innerHTML = data.results[2].question;
            square4.innerHTML = data.results[3].question;
            square5.innerHTML = data.results[4].question;
            square6.innerHTML = data.results[5].question;
            square7.innerHTML = data.results[6].question;
            square8.innerHTML = data.results[7].question;
            square9.innerHTML = data.results[8].question;
        }
    }
});