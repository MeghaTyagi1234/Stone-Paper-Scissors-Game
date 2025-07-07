let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const compScores = document.querySelector("#comp-score");

const GenCompChoice = () => {
const options = ["Rock","Paper","Scissors"];
 const RandomNumber = Math.floor(Math.random()*3);
return options[RandomNumber];
};

let DrawGame = () => {
// console.log("Game Was Draw");
msg.innerText="Game Was Draw";
msg.style.backgroundColor="brown";
};

const ShowWinner=(UserWin)=>{
    if(UserWin){
        userScore++;
        userScores.innerText = userScore;
        // console.log("You Win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScores.innerText=compScore;

        console.log("You Lost!");
        msg.innerText="You Lost!";
        msg.style.backgroundColor="red";
    }
}

const playgame =(UserChoice)=>{
console.log("User Choice=",UserChoice); 
//Generate computer choice
const CompChoice = GenCompChoice();
console.log("Computer Choice=",CompChoice);


if(UserChoice === CompChoice){;
DrawGame();
} else{
    let UserWin=true;
    if(UserChoice==="Rock"){
        //scissors,paper
       UserWin = CompChoice==="Paper"? false : true;
    }
    else if(UserChoice==="Paper"){
        //rock,scissors
        UserWin = CompChoice==="Scissors"?false:true;
    }
    else{
        //rock,paper
        UserWin = CompChoice==="Rock"?false:true;
    }
    ShowWinner(UserWin);
}
};

choices.forEach((choice)=>{
    // console.log(choice);
choice.addEventListener("click",()=>{
    const UserChoice=choice.getAttribute("id");
    // console.log("choice was clicked",UserChoice);
    playgame(UserChoice);
});
});