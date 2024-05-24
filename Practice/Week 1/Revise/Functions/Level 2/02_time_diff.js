function calculatSum() {
    let a = 0;
    for(let i = 0; i < 100000000; i++){
        a += i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

console.log(calculatSum(10.1));

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log("Time take:", afterTimeInMs - beforeTimeInMs);