let p1=new Promise(function(resolve,reject){
    resolve("Promise 1 is resolved");
})

let p2=new Promise(function(resolve,reject){
    resolve("Promise 2 is rejected");
})

let p3=new Promise(function(resolve,reject){
    resolve("Promise 3 is resolved");
})

let promiseAll=Promise.all([p1,p2,p3]);
// console.log(promiseAll);
promiseAll.then((PromiseArr)=>{
    console.log(PromiseArr)
}).catch((err)=>{
    console.log(err)
})