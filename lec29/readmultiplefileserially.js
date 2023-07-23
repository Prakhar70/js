
const fs = require('fs').promises

let arr = ['./f1.txt', './f2.txt', './f3.txt', './f4.txt']


let promise = fs.readFile(arr[0]);
for (let i = 1; i < arr.length; i++) {
    promise = promise.then((data) => {
        console.log(data + "");
        return fs.readFile(arr[i])
    })
}

promise.then((data)=>{
    console.log(data+"");
})
