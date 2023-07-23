let person1 = {
    name: 'Adam',
    age: 25,

}
let person2 = {
    name: 'Steve',
    age: 20,
}

let showDetails = function (city, car) {
    console.log(`${this.name} is ${this.age} years old , he lives in ${city} and drives ${car}`);
}

// person1.showDetails();
// person2.showDetails();

//function borrowing
// showDetails.call(person2, "Noida", "BMW");
// showDetails.apply(person2, ["Noida", "BMW"]);
let showDetailsBind = showDetails.bind(person2, ["Noida", "BMW"]);
console.log(showDetailsBind);
showDetailsBind();

