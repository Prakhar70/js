const fs = require('fs').promises;

// let file1Promise = fs.readFile('f1.txt');

// file1Promise.then((data) => {
//     console.log(data + "");
//     return fs.readFile("f2.txt");
// }).then((data) => {
//     console.log(data + "");
//     return fs.readFile("f3.txt");
// }).then((data) => {
//     console.log(data + "");
// }).catch((err)=>{
//     console.log("file not present");
// })


fs.readFile('f1.txt').then((data) => {
    console.log(data + "");
    return fs.readFile("f2.txt");
}).then((data) => {
    console.log(data + "");
    return fs.readFile("f3.txt");
}).then((data) => {
    console.log(data + "");
}).catch((err)=>{
    console.log("file not present");
})



