let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")




//userchoice:

choices.forEach((choice) => {
    choice.addEventListener( "click" , () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked" , userChoice)
        playGame(userChoice)
    })
})





//generate computer choice:


const genCompChoice = () => {
    //rock , paper , scissor

    const options = ["rock" , "paper" , "scissor"]
    const randIndx = Math.floor(Math.random() * 3)
    return options[randIndx]

}







const playGame = (userChoice) =>{
    console.log("user choice = " , userChoice)

    
    const compChoice = genCompChoice()
    console.log("computer choice = " , compChoice)


    
    if(userChoice == compChoice){
        //draw
        drawGame()
    }

    
    else{
        
        let userWin = true

        if(userChoice == "rock"){

            //compchoice = scissor or paper
            if (compChoice == "paper") userWin = false

            else userWin = true
        }

        else if(userChoice == "paper"){

            //compchoice = rock or scissor
            if(compChoice == "rock") userWin = true

            else userWin = false
        }


        else{

            //compchoice is rock or paper

            if(compChoice == "rock") userWin = false

            else userWin = true
        }

        showWinner(userWin , userChoice , compChoice)
    }
    

}







const drawGame = () =>{
    console.log("Draw")
    msg.innerText = "Draw. Plain again!"
    msg.style.backgroundColor = "black"
}


const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){                                           //if userwin is true 
        console.log("You win!")
        msg.innerText = "You win!"
        msg.style.backgroundColor = "green"
        userScore++
        userScorePara.innerText = userScore
    }
    else {
        console.log("You lose!")
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red"
        compScore++
        compScorePara.innerText = compScore
        
    }
}