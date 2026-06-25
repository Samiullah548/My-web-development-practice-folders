const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this 
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);

//  return this likhe ya na likhe ye implicitly return hota hai, agar hum return this nahi likhte to bhi ye object return hota hai. Lekin agar hum return this likhte hai to ye explicitly return hota hai.

// new keyword

// Jaise hi hum new keyword ka use karte hai, to ek empty object create hota hai, jisko instance bola jata hai.

// 1. Empty object created
// 2. Constructor function call hota hai, new keyword ke karan, ye kaam karta hai ki jitne bhi arguments, function ko pack karta hai aur hame de deta hai.
// 3. this keyword ke andar jitne bhi hamne arguments likhe hai vo sab this keyword me inject ho jate hai.
// 4. Finally, ye object return hota hai, jisme hamne jitne bhi properties define kiye hai, vo sab hoti hai.
