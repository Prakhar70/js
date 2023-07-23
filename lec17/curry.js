// function add(a, b) {
//     console.log(a + b);
// }
// let addwith2 = add.bind(this,2);
// addwith2(7);
//write definition of curring


//Function curring using closure
function add(x){
    return function(y){
        return x+y;
    }
}
let addwith2 = add(2);
console.log(addwith2(7));