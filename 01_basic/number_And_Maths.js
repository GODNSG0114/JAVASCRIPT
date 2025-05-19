const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(3));

const otherNumber = 23.937356
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(24.74))
console.log(Math.ceil(24.74))
console.log(Math.floor(24.74))
console.log(Math.sqrt(49))
console.log(Math.max(2,3,4,5))
console.log(Math.min(2,3,4,5))

// important :->
console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) + 1)  // start always from 1

 const min = 10
 const max = 25
 console.log(Math.floor((Math.random() * (max - min + 1)) + min))
