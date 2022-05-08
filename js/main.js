
//define magic 8 ball answers

let answers = [  
    "Yes", 
    "No",
    "It is certain.",
    "It is decidely so.",
    "Reply hazy, try again.",
    "My reply is no",
    "Not clear.",
    "Yes, definitely!",
    "Ask your Mom.",
    "You betcha!"
];
//intro to user
window.onload = function() {
    const answerBtn = document.getElementById("answerBtn");
    let answer = document.getElementById("answer");
    let questionArea = document.getElementById("questionArea");

    answerBtn.addEventListener("click", function() {
        if (questionArea.value.length < 4) {
            alert("Enter a question.");
        } else {
            answer.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });

};



















 
   
  
   
    


    



