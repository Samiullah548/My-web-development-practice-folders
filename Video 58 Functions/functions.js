function sayMyName(){
    console.log("S")
    // console.log("A")
    // console.log("M")
    // console.log("I")
    // console.log("U")
    // console.log("L")
    // console.log("L")
    // console.log("A")
    // console.log("H")
}

// sayMyName()

function addTwoNumbers(number1, number2){ // jo isme ham number1 aur number2 likh rahe hai wo parameters hai
   let result = number1 + number2
//    console.log(result) // 30 aayega kyuki number1 aur number2 ke value 10 aur 20 hai
   return result
}

// addTwoNumbers()
// addTwoNumbers(10, null)  // aur jo isme ham 10 aur null likh rahe hai wo arguments hai

const result = addTwoNumbers(10, 20)
// console.log(result) // 30 aayega kyuki function ke andar return statement hai

function loginUserMessage(username){
    if(username === undefined){
        // console.log("Please enter username")
        return "Please enter username"
    }
    return `Hello ${username}, you are logged in`
}   
// console.log(loginUserMessage()) // Hello Samiullah, you are logged in aayega kyuki function ke andar return statement hai aur username ke jagah Samiullah pass kiya gaya hai 
// agar ham koi bhi parameter na dete to undefined aayega kyuki function ke andar return statement hai lekin username ke jagah koi value pass nahi kiya gaya hai

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100, 200, 400, 1000)) // [100, 200, 400, 1000] aayega kyuki function ke andar return statement hai aur num1 ke jagah 100, 200, 400, 1000 pass kiye gaye hai