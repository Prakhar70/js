//Types of function

function sayHello(){
    console.log("hello");
}
//fn invocation
sayHello(10);
sayHello("prakhar");
sayHello();
// all three same output

function sayHello1(param){
    console.log("hello",param);
}
sayHello1();
let rVal=sayHello1();//hello undefined
console.log(rVal);//undefined

//Function are first class citizen
let a=[1,2,4];
let b=a;
console.log(b);

//function expression
let fnContainer=function () {
    console.log("I am expression");
    console.log("I am an anonymous function")
}
fnContainer();

//IIFE-->Immediately Invoked Function expression
(function fn(){
    console.log("I am IIFE");
    console.log("I will run on my own");
})();
//Arrow Function -> syntax,react, this
let fn=(num)=>{
    return num*num;
}
let fn1=num=>num*num;
console.log(fn1(3));

//variable can be passed as parameter, function can also vbe

function sayHello2(param){
    console.log("hello",param);
    param();
    return "prakhar";
}
function smaller(){
    console.log("Hello i am smaller");
}
let reVal=sayHello2(smaller);
console.log(reVal);

// function can be returned from function
function outer(){
    console.log("I am outer returning inner");
    return function inner(){
        console.log("I am inner");
    }
}
let returnval=outer();
console.log("returnval",returnval);
returnval();