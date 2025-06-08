// Array
 
// NOTE: SINGLE ARRAY CAN TAKE DIFFERENT DATA TYPES
const myArray = [5,3,2,1,43,9,8,1,"nikhil" , true]; 

// console.log(myArray[0])
// console.log(myArray)
// console.log(myArray.length)

// myArray.push(21);
// console.log(myArray)
// console.log(myArray.length)
// myArray.pop()
// console.log(myArray)
// console.log(myArray.length)

// myArray.unshift(20)
// myArray.shift()
// console.log(myArray)

//  console.log(myArray.includes(30));
//  console.log(myArray.indexOf(30));
//  console.log(myArray.indexOf(1));

         // TO CONVERT ARRAY ONTO STRING DATA TYPE WE USE *JOIN*
// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);
// console.log(typeof(myArray));
// console.log(typeof(newArray));

const myn1 = myArray.slice(1,3)
console.log("A " ,myArray)
console.log("slice -  " , myn1)

const myn2 = myArray.splice(1,3)
console.log("b " ,myArray)
console.log("splice -  " ,myn2)

