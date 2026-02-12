console.dir(document.body);
console.log(document.body);
console.log(document.body.childNodes[1]);

// // HTML me kuch change lane ke liye ham DOM ka use karte hain.

// Dynamic changes manipulation 

// HTML me kuch change lane ke liye ham DOM KA USE KARTE HAI

// NULL KA MATLAB HOTA HAI KHALI OBJECT 

// AGAR HAM BODY SE PAHLE JS KO LINK KAR LETE HAI TO DOM ACCESSIBLE NAHI HOTI.

// This is the reason ke ham apni Java script ko body me last me add karte hain.

// DOM MANIPULATION 
// selecting with id 
// document.getElementById("myId) 

// Istrah  ham id ko use karke document access kar sakte hai.
// Kisi specific code ko.

// Id hame unique rakhni chahiye 

// Class same rakh sakte hain

// Agar hame class ko access karna ho through DOM to ham likh sakte hai like 
// document.getElementsByClassName("myClass")

// Aur agar ham saare ke saare paragraph ya h1 koi bhi tag ham access karna chahte hain to ham is trah likh sakte hai like
// document.getElementsByTagName("p")

// phir ham js me likh sakte hai 
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);