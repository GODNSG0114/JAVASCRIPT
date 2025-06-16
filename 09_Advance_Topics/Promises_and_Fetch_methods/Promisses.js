// Bluebird: Popular third-party Promise library before ES6.

// Native Promises: Added in ES6 (2015), slowly replaced Bluebird in most apps.

// Bluebird was not merged into JS, but JS adopted similar features natively.

// NOTE : Promise is an object

// NOTE : Async function is mostly used to get responce. ex. is in 5th approach

/* NOTE :  if request doesn't go to server or cancel in between due some
          reason then it is promise's reject section but when request is reached server and    
          server doesnt understand this request and send some error(server error ) then it
          also consider as response and goes to promise's resolve section 
*/

/*    HAND WRITTEN NOTE IMAGES LINKS :-
   Drive link:  "https://drive.google.com/drive/u/0/folders/1HvFsoLjHsoUn_MZuwD6KCS2wpM3_mK87"
*/


//////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1st approach
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 1 is completed");
        resolve();
    }, 2000)
});

promiseOne.then(function () {
    console.log("'then' execute for promise 1")
});

//////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2nd approach
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise 2 is completed");
        resolve();
    }, 2000)
}).then(function () {
    console.log("'then' execute for promise 2")
})

//////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3rd approach
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("promise 3 executed");
        resolve({ "name": "Nikhil", "Email": "nikhil@gmail.com" })
    }, 2000);
})

promiseThree.then(function (user) {
    console.log(user);
})

//////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//4rth approach
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        console.log("promise 4 executed")
        if (!error) {
            resolve({ username: "nikhil", password: "12345" })
        }
        else {
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})

/// chaining-> 
promiseFour.then((user) => {
    console.log(user);
    return user.username;             // <= this return value is going to "then" which is below  
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(()=>{console.log("promise is resolved or rejected ")})


//////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 5th approach
const promiseFive = new Promise((resolve, reject)=>{
      setTimeout(function () {
let error = !true;
        console.log("promise 5 executed")
        if (!error) {
            console.log("Resolved and send to catch")
            resolve({ username: "javascript", password: "12345" })
        }
        else {
            reject("ERROR: Javascript went wrong")
        }
    }, 2000)  
})

async function consumePromiseFive(){
  try {
    const responce =  await promiseFive
   console.log(responce);
  } catch (error) {
    console.log(error)
  } 
}

consumePromiseFive()

//////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// fetch() method
// 1st method => By  Async await 
/*    
async function getAllUsers(){
 try {
    const responce =  await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await  responce.json();
    console.log(data)
 } catch (error) {
     console.log("E: " , error)
 } 
}
getAllUsers();
*/


// 2nd method => .then .catch() method

fetch("https://jsonplaceholder.typicode.com/users")
.then((responce)=>{
    console.log(responce)
    return responce.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("E: Error in Fetching")
})