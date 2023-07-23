var varName=10;
function fn(){
    console.log(varName);
    var varName=20;
    console.log(varName);
}
fn();