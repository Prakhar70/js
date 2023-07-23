(function immediateA(a){
    return (function immediateB(b){
        console.log(a);//0
    })(1);
})(0);