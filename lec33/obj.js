let obj = {
    name: 'Adam',
    age: 25
}
// let newObj=obj;

// newObj.name='Steve';
// console.log(obj);
// console.log(newObj);

//shallow copy

// let newObj={...obj};
// newObj.name='Steve';
// console.log(obj);
// console.log(newObj);


let person = {
    name: "Mrinal",
    age: 22,
    hobbies: ['sports', 'coding', 'music']
}

// let newPerson = JSON.parse(JSON.stringify(person));//deep copy
let newPerson=Object.assign({},person)//shallow copy

newPerson.age=23

newPerson.hobbies[0]='dancing'
console.log(person);
console.log(newPerson);
