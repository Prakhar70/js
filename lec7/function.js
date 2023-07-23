function fn(){
    console.log("Hello from fn");
}
fn();
fn.prop="property of function";
fn.myFn=function fn(){
    console.log("I am a method of a function");
}
console.log(fn);
fn();
console.log(fn.prop)
fn.myFn();


//function is a object ith extra property k/as code property that can execute when you invoke that function

//everthing is objects
//except for six primitive type
//Number, string, boolean ,undefined , null,symbol(come at last)