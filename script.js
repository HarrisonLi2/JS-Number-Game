//set number
var num = 5;

//prompt for a guess
var guess = prompt("Guess a number");

//check for high
if(Number(guess)>num){
    alert("too high");
}
//check for low
else if(Number(guess)<num){
    alert("too low");
}
//else correct
else{
    alert("You Guessed it!")
}