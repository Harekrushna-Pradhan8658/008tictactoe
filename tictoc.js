let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector ("#msg");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#cmp-score");

const gencmpchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () => {
    // console.log ("game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
};
const showWinner = (userwin,userChoice,cmpchoice) => {
    if (userwin){
        // console.log ("you win");
         msg.innerText=`You Win ! Your ${userChoice} beats ${cmpchoice}`;
         msg.style.backgroundColor="green";
         userScore++;
         us.innerText=userScore;
    }
    else{
        // console.log ("you lose");
         msg.innerText=`You lost ! ${cmpchoice} beats Your ${userChoice}`;
         msg.style.backgroundColor="red";
         compScore++;
         cs.innerText=compScore;
    }
};

const playGame = (userChoice) => {
    // console.log ("user Choice = ", userChoice);

const cmpchoice = gencmpchoice();
    // console.log ("computer choice = ", cmpchoice);

    if (userChoice === cmpchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if (userChoice === "rock"){
            userwin = cmpchoice === "paper" ? false:true;
        }
        else if (userChoice === "paper"){
            userwin = cmpchoice === "scissors" ? false:true;
        }
        else{
            userwin = cmpchoice === "rcok" ? false:true;
        }
        showWinner(userwin,userChoice,cmpchoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});