function greet(personName, age, callback, callback2) {
    let msg = "Hello " + personName;
    let ageOfPerson = age
    callback(msg);
    callback2(ageOfPerson);
}

function logGreeting(greeting) {
    console.log(greeting);
}

function showAge(age) {
    console.log(age);
}
greet('Steve', 25, logGreeting, showAge);