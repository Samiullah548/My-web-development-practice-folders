function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

// Java script me har ek cheez object hoti hi hai, functions bhi objects hote hain. end of the day har cheez jakar milti hai object me. and object ka prototype null hota hai.

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`My name is ${this.username} and my score is ${this.score}`);
}

const chai = new createUser("chai", 3);
const tea = new createUser("tea", 5);

chai.printMe() 
tea.printMe() 


/* 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it does'nt return a non-primitive value (object, array, function, etc.), the newly created object, to be the intended return value. 

*/
// The new object is returned: After the constructor function has been called, if it does'nt return a non-primitive value (object, array, function, etc.), the newly created object is returned. 