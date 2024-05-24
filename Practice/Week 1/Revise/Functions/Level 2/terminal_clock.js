function calculateTime() {
    console.log(new Date().getMinutes());
}

setInterval(calculateTime, 1000);