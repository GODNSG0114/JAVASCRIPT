
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// understanding "this" keyword and "new" keyword importance 
// NOTE:  "new" keyword create new instnace or context or object

function createUser(username, score) {
    this.username = username
    this.score = score
    // console.log("normal function call")
    return this
}

const userOne = new createUser("Nikhil", 90)    // new instnace created due to "new" keyword so its "this" keyword return a private context (line 12)
const userTwo = new createUser("gaurav", 98)    // new instnace created due to "new" keyword so its "this" keyword return a private context (line 12)
const userThree = createUser("Nikhil", 10)      // globally creted due to not created "new" keyword so its "this" keyword return a global context (line 12)
// console.log(userOne)
// console.log(userTwo)
// console.log(userThree)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// understanding prototype and creating OWN prototype
// NOTE : newly created prototype are only execute when we use "new" keyword while making new instance like in (line 19,20)


createUser.prototype.increase = function () {            // adding own prototype called increase for createuser function
    this.score++;
}
createUser.prototype.printMe = function () {         // adding own prototype called printMe for createuser function
    console.log(`scroe is ${this.score}`)
}
userOne.increase()
userOne.printMe()
userOne.increase()
userOne.printMe()


///////////////////////////////////////////////////////// MORE INFORMATION for just understanding  ///////////////////////////////////////////////////////////////////

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
