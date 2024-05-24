const numbers = [3, 6, 1, 0, 9, 23];

const reverse_array = [];

for(let i = numbers.length - 1,  j = 0; i >= 0; i--, j++){
    reverse_array[j] = numbers[i];
}
console.log("reverse:", reverse_array);