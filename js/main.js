const textarea = document.getElementById("questions");
//clear textarea value
textarea.value = "";
//clear textarea value on click

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function handleClick() {
   textarea.value = "";
});
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

    const answerBtn = document.getElementById("answerBtn");
    let answer = document.getElementById("answer");
    let questions = document.getElementById("questions");

//button with random answer
    answerBtn.addEventListener("click", function() {
        if (questions.value.length < 4) {
            alert("Please enter your question in the box below.");
        } else {
            answer.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        
        }

    });





    














 
   
  
   
    


    



