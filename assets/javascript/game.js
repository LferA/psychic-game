var alphabet = "abcdefghijklmnopqrstuvwxyz"
var losses = 0;
var wins = 0;
var Rguesses = 10;
var AUguess;
var ARguess;
var letterBank = [];
console.log(alphabet.length); //Testing return of length
//cmprGuess("a", "a");


document.onkeydown = function (){
    AUguess = event.key;
    if (-1 == letterBank.indexOf(AUguess)){
        listGuess();
        //console.log("Added " + AUguess + " to used letters.")
        letterBank.push(AUguess);
        rbtGuess();
        console.log("Robot guesses: " + ARguess);
        cmprGuess(AUguess, ARguess);
    }
    else{
        alert("Enter a new letter.")
    }
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}
alert("Press a letter key to start the game!")
// Functions located below
function rbtGuess() {
    if (Rguesses == 10){
    ARguess = alphabet[Math.floor(Math.random()*alphabet.length)];
    }
}

function cmprGuess(h, r){
 if (h === r){
    wins++
    letterBank = [];
    Rguesses = 10;
    document.getElementById("bank").innerHTML = ""
    document.getElementById("attempts").innerHTML = Rguesses;
    alert("You Win! Total wins: " + wins);
    
     
 } else {
    Rguesses--
    chkRGuesses();
    console.log("Guesses remaining:" + Rguesses)
    document.getElementById("attempts").innerHTML = Rguesses;
 }
}

function chkRGuesses(){
    if (Rguesses == 0){
        losses++
        alert("You lose! Total losses: " + losses);
        letterBank = []
        document.getElementById("bank").innerHTML = ""
        Rguesses = 10;
    }
};

function listGuess(){
    
    document.getElementById("bank").innerHTML += AUguess + ", ";

}


