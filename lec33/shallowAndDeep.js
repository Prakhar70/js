// let arr=[1,2,3,4]


// copyArr[1]=4;
// console.log(arr);
// console.log(copyArr);


//spread Operator method//shallow copies

// let sports=['Cricket', 'Football', "Swimming",{a:'hockey',b:'Tennis'}]

// let copySports=[...sports];
// copySports[3]['a']="basketball";

// copySports[1]='BaseBall'
// console.log(sports);
// console.log(copySports);

//Shallow copies

// let sports=['Cricket', 'Football', "Swimming",{a:'hockey',b:'Tennis'}]

// let copySports=Array.from(sports);
// copySports[3]['a']="basketball";

// copySports[1]='BaseBall'
// console.log(sports);
// console.log(copySports);

//shallow copies

// let sports=['Cricket', 'Football', "Swimming",{a:'hockey',b:'Tennis'}]

// let copySports=sports.slice(0);
// copySports[3]['a']="basketball";

// copySports[1]='BaseBall'
// console.log(sports);
// console.log(copySports);


//Deep copy

// let sports = ['Cricket', 'Football', "Swimming", { a: 'hockey', b: 'Tennis' }]

// let copySports = JSON.parse(JSON.stringify(sports));
// copySports[3]['a'] = "basketball";

// copySports[1] = 'BaseBall'
// console.log(sports);
// console.log(copySports);

