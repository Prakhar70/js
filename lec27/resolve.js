let p1 = Promise.resolve("Promise Resolved").then((val) => {
    console.log(val);
})
let p2 = Promise.resolve("Promise Rejected").catch((val) => {
    console.log(val);
})