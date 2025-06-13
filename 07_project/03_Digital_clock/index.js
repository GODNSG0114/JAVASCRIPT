const clock = document.getElementById("clock");

let mydate = new Date()
console.log(mydate.toLocaleString);


setInterval( function display () {
    let mydate = new Date()
   let time =  mydate.toLocaleTimeString()
    clock.textContent = time;
    console.log("h");
    if(time ==="5:04:30 AM") console.log("hi")

}, 1000);


