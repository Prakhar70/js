// let arr=[1,2,3,4,5];

let person1 = {
    name: "adam",
    age: 25,
    showDetails: function () {
        console.log(this.name + "  " + this.age);
    }
}
let person2 = {
    name: 'Steve'
}

person2.__proto__ = person1;

console.log(person2.name)
console.log(person2.age)
person2.showDetails()

