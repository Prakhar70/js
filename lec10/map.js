let myArr = [1, 2, 3, 4, 5];
let newArr = myArr.map(function (x) {
    return x * x;
})

console.log(myArr);
console.log(newArr);

//filter
let filtered_arr = myArr.filter(function (x) {
    return x % 2 == 0;
});
console.log(myArr);
console.log(filtered_arr);

//reduce

let sumArray = myArr.reduce(function (accumultor, x) {
    return accumultor + x;
}, 0)
console.log(sumArray);