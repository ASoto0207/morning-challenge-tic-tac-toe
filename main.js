
//the clickers to allow you pick your x and o and also reset the game. and restart. 
let playerOne = 'x'
let resetBtn = document.querySelector('#doOver')
let boxSelection = document.querySelectorAll('#blocks') 


boxSelection= Array.from(boxSelection)


boxSelection.forEach(element => {
    element.addEventListener('click',() => {
        if(element.innerText != ''){
            return
        }
        const battleField = new BattleField ()
        element.innerText = playerOne
        battleField.checkDraw()

        battleField.winnerWinnerChickenDinner()
        
        playerOne = playerOne == 'x' ? 'o': 'x';
    })
    
})

class BattleField{
    // // return an alert saying "Draw" when no one wins. 
    checkDraw(){
        let draw= boxSelection.every((element,index)=> boxSelection[index].innerText == 'x' || boxSelection[index].innerText == 'o'); 
        
         if(draw){
            alert('DRAW! YALL NOT TRYING HARD ENOUGHT!')
            }
        
    }
    // // there are 8 possible wins 3 vertical and 3 horizal 2 dianlog
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     // the vertical wins 
//     [0,3,6],
//     [1,4,7],
//     [2,5,8]
//     // the diagnoal wins 
//     [2,4,6],
//     [0,4,8]

    winnerWinnerChickenDinner(){
        if (boxSelection[0].innerText == playerOne && boxSelection[1].innerText == playerOne && boxSelection[2].innerText==playerOne){
            alert(`${playerOne} Wins!`)
        }else if(boxSelection[3].innerText == playerOne && boxSelection[4].innerText == playerOne && boxSelection[5].innerText==playerOne){
            alert(`${playerOne} Wins!`)
        }else if(boxSelection[6].innerText == playerOne && boxSelection[7].innerText == playerOne && boxSelection[8].innerText== playerOne){
         alert(`${playerOne} Wins!`)
        }else if(boxSelection[1].innerText == playerOne && boxSelection[4].innerText == playerOne && boxSelection[7].innerText== playerOne){
            alert(`${playerOne} Wins!`)
           }else if(boxSelection[0].innerText == playerOne && boxSelection[3].innerText == playerOne && boxSelection[6].innerText== playerOne){
            alert(`${playerOne} Wins!`)
           }else if(boxSelection[2].innerText == playerOne && boxSelection[5].innerText == playerOne && boxSelection[8].innerText== playerOne){
            alert(`${playerOne} Wins!`)
           }else if(boxSelection[2].innerText == playerOne && boxSelection[4].innerText == playerOne && boxSelection[6].innerText== playerOne){
            alert(`${playerOne} Wins!`)
           }else if(boxSelection[0].innerText == playerOne && boxSelection[4].innerText == playerOne && boxSelection[8].innerText== playerOne){
            alert(`${playerOne} Wins!`)
           }
        
    }
    wannaGoAgain(){
        window.location.reload()
    }
}
// here is the reset button. 
const battleScore = new BattleField()
resetBtn.addEventListener('click', battleScore.wannaGoAgain)



  

