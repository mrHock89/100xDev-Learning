const currentdate = new Date();

console.log(currentdate.getMonth());

console.log(currentdate.getDay());
console.log(currentdate.getDate());
console.log(currentdate.getFullYear());
console.log(currentdate.getHours());
console.log(currentdate.getTime());
console.log(currentdate.getMinutes());

// Setting components of the date.

currentdate.setDate(23);
console.log(currentdate);

currentdate.setFullYear(2023);
console.log(currentdate);

const newDate = new Date(2023, 8, 12);
console.log(newDate);