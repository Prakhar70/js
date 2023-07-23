//2015
//hoisting
console.log("line number3", varName);
//declare
var varName;
//assign
varName=10;
console.log("line numer 8",varName);
//reassign
varName=20;
console.log("line numer 11",varName);
var varName;//this line will not even run;
console.log("line number 13",varName);