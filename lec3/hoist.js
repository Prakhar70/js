console.log(a);
var a;
console.log(a);
a = 10;
console.log(a);
//function statement 
fn();
function fn() {
    console.log(" I can be called before my declaration");
}
fn();
console.log(ob);
var ob = { a: "prak", c: "prakk" }
console.log(ob);

console.log(fn123);
var fn123 = function () {
    console.log(" I can be called before my declaration");
}
console.log(fn123);