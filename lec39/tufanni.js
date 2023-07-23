const { getSystemErrorName } = require("util");

let myFunction = (function () {
    let name = ' ';//private
    getName = function () {
        return name;
    }
    setName = function (newName) {
        name = newName
    }
    return {
        getName: getName,
        setName: setName
    }
}())

myFunction.setName('Alex')
console.log(myFunction.getName())