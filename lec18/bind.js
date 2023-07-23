let person1 = {
    name: "Adam",
    age: "25"
}

let showDetails = function (city, state) {
    console.log(this.name + " " + this.age + " " + city + " " + state);
}

let showDetailsBind = showDetails.bind(person1,"Prakhar");
showDetailsBind(25,"lko","UP");

Function.prototype.myBind = function (...args) {
    let Func = this;
    params = args.slice(1);
    return function (...args2) {
        Func.apply(args[0], [...params, ...args2]);
    }
}
let showDetailsMyBind = showDetails.myBind(person1, 'noida');
showDetailsMyBind('UP');