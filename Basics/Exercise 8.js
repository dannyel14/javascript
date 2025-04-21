//fizzbuzz challenge

for (let n = 1; n <= 15; n++) {
  let t = n%3;
  let f = n%5;
  if (t==0 && f==0) {
  console.log("FizzBuzz");
} else if (t==0) {
  console.log("Fizz");
} else if (f==0) {
  console.log("Buzz");
}
  else{
  console.log(n);
}
}
alert("Open your browser console to view results")