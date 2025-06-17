function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const nikhil = new User("n@ikhil.com", "NSG") // this value are not set by setter
const gaurav = new User()
gaurav.email = "g@aurav.ai";                // this value is set by setter
gaurav.password = "GRS";

console.log(nikhil.email);
console.log(gaurav.email);