var num1 = parseFloat(prompt("Enter your first number"));
var num2 = parseFloat(prompt("Enter your second number"));
var operator = prompt("Enter an operator(+, -, /, *)");

if (isNaN(num1) || isNaN(num2)) {
  alert("input a number")
}
else if (operator == "+") {
  result = num1 + num2;
  alert(num1 + " " + operator + " " + num2 + " = " + result);
} 
else if (operator == "-") {
  result = num1 - num2;
  alert(num1 + " " + operator + " " + num2 + " = " + result);
} 
else if (operator == "/") {
  if (num2 != 0) {
    result = num1 / num2;
    alert(num1 + " " + operator + " " + num2 + " = " + result);
  } 
  else {
    alert("Cannot divide by zero");
  }
} 
else if (operator == "*") {
  result = num1 * num2;
  alert(num1 + " " + operator + " " + num2 + " = " + result);
} 
else {
  alert("invalid operator");
}