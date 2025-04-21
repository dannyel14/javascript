//guessing game
// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var num=parseInt(prompt("guess a number between 1 - 5"))
var rand = getRandomNumber(1,5);
if (isNaN(num) || num>5 || num<=0) {
    alert("invalid number")
}
else if (rand===num){
  alert("you guessed right!");
}
else{
  alert("wrong guess: the number is " + rand);
}