const textarea = document.getElementById("questions");
//clear textarea value
textarea.value = "";

/*clear textarea value on click, Vinson helped me with text fade out begins line 38
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function handleClick() {
textarea.value = "";
});*/

//define magic 8 ball answers

let answers = [ 
    "No dumb questions but Zombies eat brains and your safe.",
    "Nah Brah",
    "Do or do not. There is no try.(Yoda)",
    "Negatory",
    "Damn skippy!", 
    "Never assume the obvious is true", 
    "Everything you can imagine is real.",
    "Nuh-Uh!",
    "Just do it!",
    "Hells to the No!",
    "Totes!",
    "Hahahahahahahahahahahaha...hahahaha...NO!",
    "Ummm, what was the question?",
    "The time is always right.",
    "Fo shizzle", 
    "Affirmative", 
    "Aiyeee matey"
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
        questions.classList.add("fade-out");
        setTimeout(() => {
            questions.classList.remove("fade-out");
            questions.value = "";

        } , 3000); 
        }

    });





    














 
   
  
   
    


    



