function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(Username, email, password){
    SetUserName.call(this.username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fbi.com", "123")
console.log(chai);