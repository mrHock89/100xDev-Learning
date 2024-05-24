// Array 

console.log("****************************** Array *******************************");
const users = ["Manoj", "Trisha", "Raj"];

// printing all elements of the array.
console.log(users);
// printing one elements of the array
console.log(users[0]);

console.log("****************************** Objects *******************************");

// Declearing an Objets
const user1 = {
    firstName: "Trisha",
    gender: "female"
};
const user2 = {
    firstName: "Manoj",
    gender: "male"
}

// printing all users

console.log(user1);
console.log(user2);

// printing fisrsName of this objects
console.log(user1["firstName"]);
console.log(user2["firstName"]);

console.log("****************************** Array of Objects *******************************");
const allUsers = [
    {
        firstName: "Trisha",
        gender: "female"
    },
    {
        firstName: "Manoj",
        gender: "male"
    }
];

// printting full ayyar of objects
console.log(allUsers);
// printing only genders of all objects
console.log("Gender of all users:");
allUsers.forEach(user =>{
    console.log(user.gender);
    console.log(user.firstName);
})

console.log("****************************** Array of Objects in objects *******************************");
const allUser = [
    {
        firstName: "Trisha",
        gender: "female",
        metadata: {
            age: 22,
            village: "Bagula"
        }
    },
    {
        firstName: "Manoj",
        gender: "male"
    }
];

console.log(allUser[1]);
console.log(allUser[0].metadata);