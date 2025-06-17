console.log(Math.PI)

// we can't change some property's discriptor like value of PI of object Math. To know which discriptor we can't change, we use following method

let discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discriptor)

const user = {
    "name": "nikhil",
    "age": 20,
    "isAvailable": "No",
    getUser: function () {
        console.log("function call")
    }
}
console.log(`Print by direct console:->`, user)

// manually eliminate getUser function
for (let [key, value] of Object.entries(user)) {
    if (typeof (value) !== 'function') {
        console.log(`${key} , ${value}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(user))                     // it print "undefined"
console.log(Object.getOwnPropertyDescriptor(user, "getUser"))

Object.defineProperty(user, "getUser", {
    writable: false,
    enumerable: false
})
Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false
})

console.log(user.name)
user.name = "gauri"       // we can't change user.name due to we make "writable : false" . so it doesn't allow to change (line : 32-35)
console.log(user.name)


// with the help ' discriptor of properties ' we disable to iterate on the "getUser" function (line : 28-31)

for (let [key, value] of Object.entries(user)) {

    console.log(`${key} , ${value}`)      // we can't acces "name" while traversing because we make "enumerable : false"  
}