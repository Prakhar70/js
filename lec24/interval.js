let counter = 0;
let intervaId



function greet(){
    counter++;
    console.log("Hello");
    if(counter>=3){
        clearInterval(intervaId)
    }
}

intervaId = setInterval(greet,1000);

