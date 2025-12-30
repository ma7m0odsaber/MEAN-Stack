// let a = "10";
// let b = +"20";
// let c = -a;

// console.log(a+b);
// console.log(b+c);

// console.log("10"+20+true);

// console.log(parseInt("100.1ai"));
// console.log(parseInt("ss100.1ai"));
// console.log(parseFloat("100.1ai"));

// let encoded = encodeURI("https://blog.webdevsimplified.com/2022-07/ react-folder-structure/"); //Remove Spaces only
// let encoded_c = encodeURIComponent("https://blog.webdevsimplified.com/2022-07/ &react-folder-structure/"); //Remove Spaces and expressions like \/:@&

// console.log(encoded);
// console.log(encoded_c);

// isFinite
// isNaN

// let arr = [10,20,30,40,50];
// arr.forEach(function(value,index){
//     console.log(value);
//     console.log(index);
// });
// console.log(arr.map(function(val,idx){
//     console.log(val*2);
//     return val*2;
// }));

// let c = arr.filter(fun => fun > 30);
// console.log(c);

// let found = arr.find(num => num === 50);
// console.log(found);

// let c = arr.slice(0,3);
// console.log(c);

// let c = arr.splice(0,3);
// console.log(c);
// console.log(arr);

let x = parseInt(prompt('Enter the size of the array: '));
let arr = [];
for(let i=0; i<x; i++){
    arr.push(parseInt(prompt(`Enter element number ${i+1} :`)));
}

function myfun(arr){
    let array = [];
    let inc = 1;
    do{
        array = arr.filter(x => x > inc)
        inc++;
    }while(array.length > 1)
    return array;
}

console.log(myfun(arr));