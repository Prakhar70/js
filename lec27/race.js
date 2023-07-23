let p1=new Promise(function(resolve,reject){
    resolve("Promise 1 is resolved");
})

let p2=new Promise(function(resolve,reject){
    resolve("Promise 2 is resolved");
})

let p3=new Promise(function(resolve,reject){
    resolve("Promise 3 is resolved");
})
Promise.race([p1,p2,p3]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})

// let p11 = new Promise((function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Promise 1 is resolved")
//     }, 500)
// }))

// let p22 = new Promise((function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Promise 2 is resolved")
//     }, 1000)
// }))

// Promise.race([p11,p22]).then((val)=>{
//     console.log(val);
// })