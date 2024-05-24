// Shift

function arrShift(arr){
    console.log("Ogiginal Array:", arr);
    arr.shift();
    console.log("After shif in array:", arr);
}

arrShift([12,3,4,1]);

// Unshift

function arrUnshift(arr, element) {
    console.log("Original Array:", arr);
    arr.unshift(element);
    console.log("After Unshift:", arr);
}

arrUnshift([12,3,2,1], 9);