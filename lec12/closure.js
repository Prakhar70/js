function add(){
    let a=5;
    function addChild(){
        a++;
        return a;
    }
    return addChild;
}

console.log(add()());
console.log(add()());
//function is always bundled with its lexical scope forms a closures