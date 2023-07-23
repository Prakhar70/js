var varName=10;
function fn(){
    console.log(varName);
    var varName=20;
    function b(){
        console.log(varName);
    }
    b();
    console.log(varName);
}
fn();