// Multiplication table

var num = parseInt(prompt("Enter number"));
if (isNaN(num)) {
    alert("invalid number")
}
else {
  for (let i = 1; i <= 12; i++) {
  result = num * i;
  console.log(num + " * " + i + " = " + result);
  }
}
alert("Open your browser console to view results")