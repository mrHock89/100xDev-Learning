// Write a Program to to find biggest number in an array.

let numbers = [2, 5, 8, 3, 10, 20];
let biggestNumber = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > biggestNumber){
        biggestNumber  = numbers[i];
    }
};

console.log(biggestNumber);