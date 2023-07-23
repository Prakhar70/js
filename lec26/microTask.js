console.log("Program starts")

setTimeout(()=>{
    console.log("I am set time out");
},100)

Promise.resolve().then((val)=>{
    console.log(val);
})//Promise gets  into micro task queue which =>have higher priority

console.log("Program Ends")