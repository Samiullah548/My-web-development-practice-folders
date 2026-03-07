let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked!");
    let a = 24;
    a++;
    console.log("a")
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Mouse is over the div!");
}