// objects literals 

const mySym = Symbol("key1");
const JsUser = {
    name: "Hitesh",
    "Full name": "Hitesh Choudhary",
    [mySym]: "key1",
    age: 22,
    location: "India",
    email: "hitesh@edu.in",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser["Full name"]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);


// Agar change karna ho
JsUser.email = "Samiullah@edu.in";
// console.log(JsUser.email);

// agar ham chahte hai ki koi change na kar sake to ham freeze kar sakte hain
// Object.freeze(JsUser);
JsUser.email = "newemail@edu.in"; // This will not change the email
JsUser.email = "Samiullah@microedu.in";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greeting());



// Object part 2


const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Hitesh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sammm@edu.in",
    fullname: {
        userFullname: {
            firstName: "Samiullah",
            lastName: "Khan"
        }
    }
}
// console.log(regularUser.fullname);


// Object ko merge karna

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: 3};
// const obj4 = Object.assign({}, obj1, obj2, obj3); // assighn method
// console.log(obj4);
const obj4 = {...obj1, ...obj2, ...obj3};  // spread
// console.log(obj4);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // keys
// console.log(Object.values(tinderUser)); // values
// console.log(Object.entries(tinderUser)); // entries
// console.log(tinderUser.hasOwnProperty("name")); // hasOwnProperty

// Object de structuring

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}

// console.log(course.coursename);

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "Samiullah"
//     "coursename": "js in hindi",            JSon
//     "price": 999,
// }

