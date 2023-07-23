let p = new Promise(function(resolve,reject){
    reject(new Error("same error"));
    setTimeout(function(){
        reject(new Error("some error"));
    },1000)
    reject(new Error("some error"));
});
//then takes two parameter first is success callback and other is failure callback
p.then(null,function(err){
    console.log(1);
    console.log(err);
}).catch(function(err){
    console.log(2);
    console.log(err);
})