// getAttribute() //method is used to get the value of an attribute of an element. It takes the name of the attribute as a parameter and returns the value of that attribute.
// setAttribute() //method is used to set the value of an attribute of an element. It takes the name of the attribute and the value to be set as parameters.


// for example:

// let div = document.querySelector("div");
// console.log(div);

// let classValue =div.getAttribute("id"); 
// console.log(classValue);

let para = document.querySelector("p");
console.log(para.setAttribute("class", "para1"));