// //though provking question
// const arr=[1,2,3,4];
// arr.shift();

// //how this is possible
// console.log(arr);
// // arr=2

// //objects are key column pair
// let object={
//     name:"Prakhar",
//     lastName:"Agarwal",
//     sayHi:function(){
//         console.log("Jasbir say's Hi");
//     }
// }
// console.log(object);

// //loop
// for(let key in object) {
//     console.log(key," ",object[key]);
// }
// object.sayHi();//object["sayHi"]();


//arrays
let arr = [1, 2, 3, 4, 5];
 arr.myprop = "Hello";
 arr.PrintName=function (){
    console.log("Hello from array");
}
arr[15]="asda";
arr.PrintName=function (){
    console.log("Hello from array dqw");
}
console.log(arr[90]);//uf
for(let key in arr) {
    console.log(key," ",arr[key]);
}
console.log(arr.length);
arr.PrintName();

console.log(arr);



