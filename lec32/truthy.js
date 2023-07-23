//==double equal
//===triple equal

// let check = 2 == "2";//loose comparsion operator
// console.log(check)


// let check2 = 2 === "2";//strong comparsion operator
// console.log(check2)


// let a = 2;
// if (a) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }


function testTruthyFalsy(val){
    return val?console.log("truthy"):console.log("flasy");
}
testTruthyFalsy(false);
testTruthyFalsy('');
testTruthyFalsy(-0);

testTruthyFalsy(null);
testTruthyFalsy(NaN);
testTruthyFalsy(undefined);



//truthy
testTruthyFalsy({});//truthy , number other 0 ,even negative
testTruthyFalsy(4);
testTruthyFalsy(new Boolean(false));

