const users = [
    {
        firstName: "Manoj",
        age: 23,
        gender: "Male"
    },
    {
        firstName: "Raj",
        age: 13,
        gender: "Male"
    },
    {
        firstName: "Trisha",
        age: 15,
        gender: "Female"
    }
];

for(let i = 0; i< users.length; i++){
    if(users[i]["gender"] == "Male"){
        console.log("Hey, " + users[i]["firstName"] + ".");
    }
}