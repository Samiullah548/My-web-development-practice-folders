const coding = ["js", "ruby", "python", "java", "c++", "c#", "go", "rust", "php", "swift"];


// coding.forEach(function(language) {
//     // console.log(language);
// })

// coding.forEach( (language) => console.log(language) );

// coding.forEach( language => console.log(language) );


// function printLanguage(language) {
//     console.log(language);
// }

// coding.forEach(printLanguage);

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "index.js"
    },
    {
        languageName: "java",
        languageFileName: "index.java"
    },
    {
        languageName: "Python",
        languageFileName: "index.py"
    },
]

myCoding.forEach( (item) => console.log(item.languageFileName));