function rpsGame(yourChoice) {
    console.log(yourChoice);
    //var humanChoice, botChoice;
    // humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt());
    // alert(botChoice);
    //results = decideWinner(humanChoice, botChoice);
//message = finalMessage(results); // you won
//rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt () {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return [ 'rock', 'paper', 'scissors'][number];
}
 function decideWinner(yourChoice, computerChoice) {
     var rpsDatabase = {
         
     }
 }
