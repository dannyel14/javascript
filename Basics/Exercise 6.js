// Grade checker
var num = parseInt(prompt("Enter a number (1-100)"));
if (isNaN(num)) {
    alert("invalid number")
}
else if (num >= 70) {
  alert("Excellent");
} 
else if (num >= 50) {
  alert("Good");
} 
else {
  alert("Needs Improvement");
}