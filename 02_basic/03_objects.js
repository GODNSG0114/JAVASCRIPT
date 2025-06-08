// PART 01 => OBJECT LITERALS

const mySymbol  = Symbol("key1")
const jsUser = {
    name: "nikhil",
    age: 20,
    location: "vita",
    [mySymbol] : "newkey1",
    email: "nikhilgod0114@hmail.com",
    isLoggedIn : false , 
    LastLoginDays:["Mo nday" , "saturday"] 
}

// console.log(jsUser["name"])
// console.log(typeof(jsUser["mySymbol"]));
// console.log(jsUser[mySymbol]);

jsUser.age = 21;   // MODIFY THE VALUES

// Object.freeze (jsUser)   // NO FURTHER MODIFICATION ARE DONE

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hellow JS user")
}
jsUser.greetingTwo = function(){
    console.log(`hellow JS user , ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())