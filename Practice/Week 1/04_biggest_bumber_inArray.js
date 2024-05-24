const numbers = [10, 5, 20, 8, 15];

let largest_Num = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest_Num){
        largest_Num = numbers[i];
    }
}

console.log(largest_Num);