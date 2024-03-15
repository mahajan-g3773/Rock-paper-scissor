const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

let pScore = 0; 
let cScore = 0; 

playBtn.addEventListener("click", ()=>{
    setInterval(() => {
        introScreen.style.display="none";
    }, 400);
 
    setTimeout(()=>{
        match.style.display="flex";
    } , 400)
} )

// play match function 
function playMatch(){

    const options = document.querySelectorAll(".options button");
    const computerOptions = ["rock", "paper", "scissors"];
   const playerHand = document.querySelector(".player-hand");
   const computerHand = document.querySelector(".computer-hand"); 
    


    options.forEach((option)=>{
    option.addEventListener("click", function(){
        const computerNumber=Math.floor(Math.random()*3);
       const computerChoice = computerOptions[computerNumber];
      
       // call compare function
       comparing(this.innerText.toLowerCase(), computerChoice);

     

    if(this.innerText.toLowerCase()=="rock")
    {
        playerHand.src = `./images1/rock.png`;  
    }
    if(this.innerText.toLowerCase()=="paper")
    {
        playerHand.src = `./images1/paper.png`;  
    }
    if(this.innerText.toLowerCase()=="scissors")
    {
        playerHand.src = `./images1/scissors.png`;  
    }
           
     computerHand.src = `./images1/${computerChoice}.png`;
    });
   });
    

}
playMatch();



//compare 
function comparing(playerChoice, computerChoice)
{
    const winner = document.querySelector(".winner");
    if(playerChoice===computerChoice)
    {
        winner.innerText="It is a Tie";
        return;
    }

    if(playerChoice==="rock")  // checking for rock
    {
        if(computerChoice==="scissors")
        {
            winner.innerText="Player Wins";
           pScore++;
           updateScore();
            return;
        }
        else{
            winner.innerText="Computer Wins";
             cScore++;
             updateScore();
            return;
        }
    }

    if(playerChoice==="paper") //checking for paper
    {
        if(computerChoice==="scissors")
        {
            winner.innerText="Computer Wins";
           cScore++;
           updateScore();
            return;
        }
        else{
            winner.innerText="Player Wins";
            pScore++;
            updateScore();
            return;
        }
    }

    if(playerChoice==="scissors") //checking for scissor
    {
        if(computerChoice==="rock")
        {
            winner.innerText="Computer Wins";
           cScore++;
           updateScore();
            return;
        }
        else{
            winner.innerText="Player Wins";
            pScore++;
            updateScore();
            return;
        }
    }
}


// score
function updateScore(){
    const playerScore= document.querySelector(".player-score p");
    const computerScore=document.querySelector(".computer-score p");
  
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;
}




