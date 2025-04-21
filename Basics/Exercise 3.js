// Check eligibility based on age
var age = parseInt(prompt("Enter your age"));
if (isNaN(age)) {
  alert("Invalid input");
} 
else if (age>=18) {
  alert("age " + age + " is eligible to vote");
}
else {
  alert("age " + age + " is not eligible to vote");
}