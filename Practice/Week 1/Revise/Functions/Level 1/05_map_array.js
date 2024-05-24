// function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map(function(item) {
//       return item * 2;
//     });
//     console.log("After map:", newArr);
//   }
//   mapExample([1, 2, 3]);

// const numbers = [1, 3, 4, 5, 10];
// numbers.forEach(function(number){
//     let number2 = number * 2;
//     console.log(number2);
// })

function mapExample(arr) {
    console.log("Original Array:", arr);
    let newArr = arr.filter(function(item){
        return item > 2;
    });

    console.log("After map:", newArr);
};

mapExample([2, 5, 6, 8, 10]);