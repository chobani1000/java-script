




const numbers = ["42" , "150", "81", "42","87"]

let total = 0


for(let i=0; i < numbers.length; i++) {
 total = total + numbers[i];
  console.log("inside for loop", total);
}

console.log("Grand total:", total);