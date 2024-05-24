// get length
// function getLength(str){
//     console.log("Original STring:", str);
//     console.log("Length:", str.length);
// }

// function getLength1(str){
//     console.log("Original STring:" + str);
//     console.log("Length: " + str.length);
// }


// getLength("Hello World");
// getLength1("Hello World");

// indexOf 
// function findIndexOf(str, target){
//     console.log("Original String:", str);
//     console.log("Index:", str.indexOf(target));
// }

// findIndexOf("Hello, World", "World");

// lastIndexOf
// function findIndexOf(str, target){
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
// }

// findIndexOf("Hello, World", "World");

// function findLastIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
//   }
//   findLastIndexOf("Hello World World", "World");


// function findLastIndexOf(str, start, end) {
//     console.log("Original String:", str);
//     console.log("Index:", str.slice(start, end));
//   }
//   findLastIndexOf("Hello World World", 3, 5);

//   function findSUbString(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After substring: ", str.substring(start, end));
//   }
//   findSUbString("Hello World World", 3, 5);



// REplace

// function replaceStr(str, target, replacement){
//     console.log("Original String:", str);
//     console.log("After Replacement:", str.replace(target,replacement));
// }

// replaceStr("Hello, World!", "World", "HI");

// split 
// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
// splitString("Hello World Hi", " ");



// function trimString(str) {
//     console.log("Original String:", str);
//     console.log("After trim:", str.trim());
//   }
//   trimString(" Hello World ");


// function toUpper(str) {
//     console.log("Original String:", str);
//     console.log("After toUpperCase:", str.toUpperCase());
//   }
//   toUpper("Hello World");

// function explainParseInt(value) {
//     console.log("Original Value:", value);
//     let result = parseInt(value);
//     console.log("After parseInt:", result);
//   }
  
  // Example Usage for parseInt
//   explainParseInt("42");
//   explainParseInt("42px");
//   explainParseInt("3.14");


//   Parsing to Float

// function parseToFloat(value) {
//     console.log("Original NUmber:", value);
//     let result = parseFloat(value);
//     console.log("After ParseFloat:", result);
// }

// parseToFloat("3.14");
// parseToFloat("42");
// parseToFloat("t42px");

const str = "Hello world";
const characters = str.split(' ');
console.log(characters[1]);
console.log(characters); // Output: ["H", "e", "l", "l", "o"]
