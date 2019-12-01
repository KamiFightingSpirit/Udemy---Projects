
let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let resetButton = document.querySelector("#reset");
let p1Counter = 0;
let p2Counter = 0;
let p1Score = document.querySelector("#p1Score");
let p2Score = document.getElementById("p2Score");
let gameOver = false;
let winningScore = 5;
let winningScoreDisplay = document.getElementById("winningScore");

//selecting the input
let numInput = document.querySelector("input");


p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Counter++;
        p1Score.textContent = p1Counter;
        if(p1Counter === winningScore){
            gameOver = true;
            p1Score.classList.add("winner");
        }   
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Counter ++;    
        p2Score.textContent = p2Counter;
        if(p2Counter === winningScore) {
            gameOver = true;
            p2Score.classList.add("winner");
        }
    }
});

function reset() {    
    p1Counter = 0;
    p2Counter = 0;
    p1Score.textContent = p1Counter;
    p2Score.textContent = p2Counter;
    p1Score.classList.remove("winner");
    p2Score.classList.remove("winner");
    gameOver = false;
};

resetButton.addEventListener("click", function(){
   reset();
});


// a change event runs anytime a value changes
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
