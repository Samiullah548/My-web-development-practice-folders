// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// console.log(newBtn);

// let p = document.querySelector("p.para");
// p.append(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>HI, you are learning DOM</i>";

document.querySelector("body").prepend(newHeading);

document.querySelector("p.para").remove();