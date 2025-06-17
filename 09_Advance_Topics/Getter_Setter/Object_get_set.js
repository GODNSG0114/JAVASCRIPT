const User = {
    _email: 'n@ikhil.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const nikhil = Object.create(User)
console.log(nikhil.email);