for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
  if (i % 2 !=0){
    console.log(`${i} is odd`)
  }
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("Sum of 1 to 20:", sum);

console.log("Countdown:");
for (let i = 20; i >= 1; i--) {
  console.log(i);
}