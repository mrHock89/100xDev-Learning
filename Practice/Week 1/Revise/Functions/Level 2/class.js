// // Objects

// const dog = {
//     name: "dog",
//     speak: "bhow bhow",
//     leg: 4
// };

// console.log(dog ["speak"]);

// // Array of objects

// const animal = [
//     {
//         name: "dog",
//         speak: "bhow bhow",
//         leg: 4
//     },
//     {
//         name: "cat",
//         speak: "mow mow",
//         leg: 4
//     }
// ];

// console.log(animal[1].name);


// Class
class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    
    greet() {
        // console.log(`Hello, I have a ${this.name} and it has ${this.legCount} and it speaks ${this.speaks} .`)
        console.log("Hello, I have a " + this.name + "and it has " + this.legCount + " and it speaks " + this.speaks)
    }

    static greet2() {
        console.log("Hello World!");
    }
};

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "mew mew");

cat.greet();
Animal.greet2();
 
