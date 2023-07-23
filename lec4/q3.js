console.log("lno1",varName);
var varName=10;
//fn b definition
function b(){
    console.log("lno5",varName);
}
console.log("ln7",varName);
function fn(){
    console.log("lno9",varName);
    var varName=20;
    //from fn
    b();
    console.log(varName);
}
fn();
//
/*
uf
10
uf
10
20
*/