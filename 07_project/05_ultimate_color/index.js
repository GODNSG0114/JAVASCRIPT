function generateColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    console.log(color)
    return color;
};
let stopInterval;
document.querySelector("#start").addEventListener("click", () => {
   if(!stopInterval) {
        stopInterval = setInterval(() => {
            document.body.style.backgroundColor = generateColor();
        }, 1000)
    }
})

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(stopInterval)
    console.log(stopInterval)
    stopInterval = null;
    console.log(stopInterval)
    console.log("color changing stopped")

})

