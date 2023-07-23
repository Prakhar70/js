//Map

let myArr = [1, 2, 3, 4, 5];
let squaredArr = myArr.map(function (x) {
    return x * x;
})
console.log(myArr);
console.log(squaredArr);

//custom Map
function myPolyfillMap(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

function square(x) {
    return x * x;
}
console.log(myPolyfillMap(myArr, square));

//Filter

let fArr = [2, 4, 6, 7, 9, 13, 14, 16];
let evenArr = fArr.filter(function (x) {
    return x % 2 === 0;
})

function myPolyfillFilter(arr, cb) {
    myArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (cb(arr[i])) {
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
function myPolyFillReduce(arr, cb, intial) {
    let sum = intial;
    for (let i = 0; i < arr.length; i++) {
        sum=cb(sum,arr[i]);
    }
    return sum;

}
arr=[1,2,3,4,5]
console.log(myPolyFillReduce(arr,function (accumultor, x) {
    return accumultor + x;
},0));