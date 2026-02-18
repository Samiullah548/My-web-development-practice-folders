 // Practice Set 1
 
 
 
 
//  let h1 = document.querySelector("h1");

//  console.dir(h1.innerText);

//  h1.innerText = h1.innerText + " and welcome to javascript";

 // Practice Set 2

 let divs = document.querySelectorAll(".box");

 let idx = 1;
 for (div of divs) {
        div.innerText = `I am the ${idx} div`;
        idx++;
 }


//  console.dir(divs);
// divs[0].innerText = "I am the first div";
// divs[1].innerText = "I am the second div";
// divs[2].innerText = "I am the third div";