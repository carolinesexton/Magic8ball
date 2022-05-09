
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
//button with answer
    answerBtn.addEventListener("click", function() {
        if (questionArea.value.length < 4) {
            alert("Please enter your question in the box below.");
        } else {
            answer.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });

};



















 
   
  
   
    


    



