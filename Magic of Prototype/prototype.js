let myName = "hitesh";
console.log(myName.length); // 6
console.log(myName.toUpperCase()); // HITESH
console.log(myName); // hitesh


let myHeros = ["thor", "spiderman", "ironman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "suit",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log("my name is hitesh and i am present in all objects");
}

// heroPower.hitesh(); // my name is hitesh and i am present in all objects
myHeros.hitesh(); // my name is hitesh and i am present in all objects

// inheritance

const User = {
    name: "hitesh",
    email: "chai828@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;
// Modern syntax
object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()