let userScore = 0;
let compScore = 0; 

const choices =  document .querySelectorAll(".choice");
const msg = document.querySelector("#msg") ;

const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score");


choices.forEach((choice) =>{
   choice.addEventListener("click" , () => {
       const userChoice = choice.getAttribute("id");
    palyGame(userChoice);
   })
}) 

const genCompChoice = () => {
   // We store this array to use its index to choose the no using Math.randon() function
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

 
const drawGame = () => {
   // console.log("Game was draw");
    msg.innerHTML = "Game was draw Play Again";
    msg.style.backgroundColor = " #081b31";

}


const palyGame = (userChoice) => {
   //console.log("user choice =" , userChoice);
   const compChoice = genCompChoice();
   //console.log("Comp choice =" , compChoice);
   let userWin = true;
   if(userChoice === compChoice){
    drawGame();
   } else{
     if(userChoice ==="rock" && compChoice === "paper" ){
      userWin = false ;
    } else if(userChoice ==="paper" && compChoice === "scissor" ){
       userWin = false ;
    } else if (userChoice ==="scissor" && compChoice === "rock"){
       userWin = false;
    }
    showWinner(userWin, userChoice, compChoice);
   }
   
}



const showWinner = (userWin, userChoice, compChoice) =>{
   if(userWin){
      userScore++;
      userScorePara.innerText = userScore;
   // console.log("you win");
    msg.innerHTML = `You Win!! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }else{
      compScore++;
      compScorePara.innerText = compScore;
   // console.log("you lose");
    msg.innerHTML = `You lose!! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
}

