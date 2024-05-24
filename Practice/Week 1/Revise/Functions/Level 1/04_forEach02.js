const students = [
    {name: 'Manoj', age: 23},
    {name: 'Trisha', age: 15},
    {name: 'Raj', age: 13}
];

// students.forEach(function(student){
//     console.log(student.name);
// })

let totalaAge = 0;
students.forEach(function(student){
    console.log(student);
    totalaAge += student.age;
});

console.log

const averageAge = totalaAge / students.length;
console.log('Average age:', averageAge);