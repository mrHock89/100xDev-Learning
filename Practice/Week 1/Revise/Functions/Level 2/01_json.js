// String to Object
const users = '{"name": "Manoj", "age": 24, "gender": "male"}'

const user = JSON.parse(users);
console.log(user["gender"]);

// Object to string

const programmer = {
    name: "Manooj",
    age: 32,
    gender: "male"
}

const finalString = JSON.stringify(programmer);
console.log(programmer["name"]);
console.log(finalString);