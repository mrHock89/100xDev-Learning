const users = [
    {
        firstName: "Manoj",
        Age: 24,
        Gender: "Male"
    },
    {
        firstName: "Trisha",
        Age: 15,
        Gender: "Female"
    },
    {
        firstName: "Raj",
        Age: 13,
        Gender: "Male"
    }
]

for(let i = 0; i < users.length; i++) {
    if(users[i]["Gender"] == "Male"){
        console.log("Hey," + users[i]["firstName"] + ".");
    }
}

console.log(users.length);