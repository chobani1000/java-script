let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,];
let reversedList = [];
    let tempVariable = arrayNumbers.pop();
reversedList.push(tempVariable);
let arrayLength = arrayNumbers.length
for(let i = 0; i < arrayLength; i++) {
    let tempVariable = arrayNumbers.pop();
    reversedList.push(tempVariable);
    
}
console.log('arrayNumbers', arrayNumbers);
console.log('reversedList', reversedList);
let revlist = numberArray.reverse();
