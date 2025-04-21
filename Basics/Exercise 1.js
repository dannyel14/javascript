// Check if a number is even or odd
var number = parseFloat(prompt("Enter any integer"));

if (isNaN(number)) {
  alert("input a number");
} 
else if ((number%2)==0) {
  alert(number + " is an even number");
}
else {
  alert(number + " is an odd number");
}