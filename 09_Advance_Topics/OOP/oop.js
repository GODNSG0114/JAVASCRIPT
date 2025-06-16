function user (username , loginCount  , isLogged){
    this.username = username
    this.loginCount = loginCount
    this.isLogged = isLogged
    return this
}

const userOne = new user("Nikhil" , 10 , true)
const userTwo = new user("Gaurav" , 4 , false)

console.log(userOne)
console.log(userTwo)