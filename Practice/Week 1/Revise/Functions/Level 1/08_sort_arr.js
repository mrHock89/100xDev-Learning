function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return b - a;
    });
    console.log("After sort:", arr);
  }
  sortExample([ 1, 2, 3, 4, 5, 6 ]);