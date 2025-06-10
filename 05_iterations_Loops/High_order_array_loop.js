// for of loop

const arr = [1 , 2 , 3 , 4 , 5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hellow world!"
for (const greet of greetings) {
    //  console.log(`Each char is ${greet}`);
     
}

// map
const map_ = new Map()

map_.set("IN" , "India")
map_.set("UK" , "United Kingdom")
map_.set("Fr" , "France")
map_.set("IN" , "India")

// console.log(map_)
for(const name of map_){
    // console.log(name);   
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// object 

const myObject = {
   game1 : "NFS",
   game2 : "COD"
}

// for (const game of myObject) {
//     // console.log(game);   
// }

/////// NOTE :- Object is not iterable by "for of" loop 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// For in loop

const shortForm = {
    js  : "javscript" ,
    cpp : "c++",
    rb  : "ruby",
    swift: "swift by apple"
}
for (const key in shortForm) {
    // console.log(`${key} is short form of ${shortForm[key]}`)
}


const programming = ["js" , "rb", "c++","java" , "py"]

for (const key in programming) {
    // console.log(key);
    
}
for (const element of programming) {
    //  console.log(element);
}

