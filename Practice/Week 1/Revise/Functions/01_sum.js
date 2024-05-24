function addNUmbers(a,b){
    return a + b;
}

function displayResult(a, b){
    const sum = addNUmbers(a,b);
    console.log("The sum of " + a + " and " + b + " is " + sum);
}

function passiveRes(a,b){
    const sum = addNUmbers(a,b);
    console.log("The sum of " + a + " and " + b + " is represented by " + sum);
}

addNUmbers(4,5);
displayResult(4,5);
passiveRes(4,5);