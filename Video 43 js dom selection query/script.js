// For example If we want the first paragraph, we write document.querySelector("p")
// let firstEl = document.querySelector("p"); //1st element 
// console.dir(firstEl);

// And if we need the whole paragraph, we write it.
// document.querySelectorAll("p"); 
// let allEl = document.querySelectorAll("p"); //all elements 
// console.dir(allEl);

// Dom manipulation 
// Properties 
// tagName: return tag for element node

// firstEl.tagName
// firstEl ek button hai to print hoga.
// 'BUTTON'
// kisi bhi element ka tag print karane ke liye ham .tagName kar sakte hai.

// 2. Returns the text content of the element and all its children.
// The content written in the element will be printed, as well as the content in the children of the element.

// 3. InnerText : isme jo content likha hoga sirf vo hi print hoga.
// Jaise div.innerText : div me Jo content hoga vo print ho jayega.

// Aur ham . innerText ka use karke kuch bhi change kar sakte hai 

// Jaise hame koi heading change karni hai to ham likh sakte hai 
// heading.innerText = "new Heading"; 
// Ham chahe to ise bold bana sakte hai italic bana sakte. Jo marzi karen. 
// 4. div.INNERHTML: isme jo content hai vo to print ho gya hi aur saath hi jo tags use kiye honge vo bhi print honge.
//        INNERHTML ka fayda ye hota hai ke ham tags likh sakte hain jaise ki 
// heading.innerHTML = "<i>new Heading</i>";

// 4. .textContent : text content ka sabse bada fayda ye hota ke agar hamne css se kisi element ki visibility hide ki hui hai to textContent ka use karke ham usko dekh sakte hai kya likha hai. That's it.
// textContent: returns textual content even for hidden elements.