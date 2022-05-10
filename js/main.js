
//define magic 8 ball answers

let answers = [  
    "Yepperdoodles!", 
    "No",
    "Of course!",
    "It is decidely so.",
    "Reply hazy, try again.",
    "No, not yet.",
    "Humm, not clear.",
    "Yes, definitely!",
    "Ask your Mom.",
    "You betcha!"
];
//intro to user

    const answerBtn = document.getElementById("answerBtn");
    let answer = document.getElementById("answer");
    let questionArea = document.getElementById("questionArea");
//button with random answer
    answerBtn.addEventListener("click", function() {
        if (questionArea.value.length < 4) {
            alert("Please enter your question in the box below.");
        } else {
            answer.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }

    });




















 
   
  
   
    


    



