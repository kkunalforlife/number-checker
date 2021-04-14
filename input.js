// declartion of the global varibales 

let correctNumber = getRandomNumber();
//console.log(correctNumber);
let guesses = [];



window.onload = function(){
  initGame()
    document.getElementById('number-submit').addEventListener("click" , playGame);
    document.getElementById('restart-game').addEventListener("click" , initGame);
}



function initGame(){
  correctNumber = getRandomNumber();
  guesses = [];
  displayHistory()
  resetResultContent()

    
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";

}
function playGame(){

    var numbergame= document.getElementById('number-guess').value;
  //  console.log(numbergame);
    displayResult(numbergame)
    saveGuessHistory(numbergame)
    displayHistory()
    //initGame();

}


function displayResult(vaa1){


    if (vaa1 > correctNumber){
        console.log('this is the above guess');
        showNumberAbove();
    }
        else if (vaa1 < correctNumber)
        {
        console.log('too low ');
        showNumberBelow();
    }
    
    else if (vaar1 = correctNumber){
    
        showYouWon();
    }
        console.log(correctNumber);
        saveGuessHistory(vaa1);
        
}



function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }


  function showYouWon(){
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
  }
  
  function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
  }
  
  function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
  }
//alert('check this out');
function getRandomNumber(){

let randomnumber = Math.random()*100 +1 ;
var wholeNumber  = Math.floor(randomnumber);
console.log(wholeNumber);
return wholeNumber;
}

function saveGuessHistory(guess){
    guesses.push(guess);
   // console.log(guesses);

}

function displayHistory() {
    let index = 0 ;
    let list = "<ul class='list-group'>"
    while(index < guesses.length-1){
      list += 
        "<li class='list-group-item'>" + 
        "You guessed " + guesses[index] +
        "</li>";
      index+=1;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
    
  }