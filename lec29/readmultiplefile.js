const fs = require('fs').promises

let arr = ['./f1.txt', './f2.txt', './f3.txt', './f4.txt']



for (let i = 0; i < arr.length; i++) {
    fs.readFile(arr[i]).then((data) => {
        console.log(data + "");
    })
}
