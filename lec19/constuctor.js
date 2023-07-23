// let car1={
//     brand:"BMW",
//     model:"X5",
//     color:'white'
// }
// let car2={
//     brand:"Tigor",
//     model:"X5",
//     color:'white'
// }
//Constructor Function
function car(brand, model, color) {
    this.Brand = brand;
    this.Model = model;
    this.Color = color;
    this.drive = function () {
        console.log(this.Brand + "I am driving " + this.Model)
    }
}

let car1 = new car('BMW', "X5", 'white')//this==>{},aise to glboal deta h
let car2 = new car('Mercedes', "iCNG", 'white')

car1.Brand = "Jaguar"
console.log(car1);
console.log(car2);
car1.drive();
car2.drive();