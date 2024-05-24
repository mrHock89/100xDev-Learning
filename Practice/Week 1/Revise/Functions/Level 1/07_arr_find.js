// function findExample(arr){
//     console.log("Original arr:", arr);
//     let found = arr.find(function(item){
//         return item > 3;
//     });
//     console.log("After find:", found);
// }

// findExample([2, 4, 5, 5, 1, 10]);

function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);