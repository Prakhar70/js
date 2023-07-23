Array.prototype.myFunction=function(){
    console.log(this);
}

let arr=[1,3,4,7];
arr.myFunction();

Array.prototype.myMap=function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
}

function square(x){
    return x*x;
}