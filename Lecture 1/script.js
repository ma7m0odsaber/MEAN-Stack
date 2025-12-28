// console.log(x);
// var x = 5;
// console.log(x);

// var x = 'mmmmmm';
// console.log(x);

// let x1 = 10, x2 = 'hhhhhhhh', x3 = NULL;
// console.log(x1 + x2);
// console.log(x1 * x2);
// console.log(x1 * 20);
// console.log(x3 / x2);

// let btn = document.getElementById('submit');
// addEventListener(btn, submit());

// let items = ['Apple', 'Juice'];

// function submit() {
//   let username = document.getElementById("username");
//   let password = document.getElementById("password");

//   let user = username.value;
//   let pass = password.value;
//   console.log(user);
//   console.log(pass);

//     let sell = document.getElementById('sell');
//     let buy = document.getElementById('buy');

//     let login = document.getElementById('login');

//     if (user === "ma7m0od_saber") {
//         if (pass === "12345678") {
//             alert("Welcome " + user);
//             // login.setAttribute(hidden);
//             // sell.removeAttribute(hidden);
//         } else {
//             alert("Sorry, Password is incorrect!");
//         }
//     } else {
//         // buy.removeAttribute(hidden);
//     }
// }

// let z = document.getElementById('itemList');
// function sellingItems() {
//   let y = document.getElementById('sellItem').value;
//   items.push(y);
//   alert("Now, you can sell " + y);
//   for(let i=0;i<3;i++){
//       let t = document.createElement('Option', 'value'=items[i]);
//       z.appendChild(t);
//   }
// }

// function buyingItems() {
//   switch (z) {
//     case "apple":
//       alert("apple bought successfully");
//       break;
//     case "juice":
//       alert("juice bought successfully");
//       break;
//     case "tomatoes":
//       alert("tomatoes bought successfully");
//       break;
//     default:
//       alert("You can not buy this item!");
//   }
// }

// btn = document.getElementsByTagName('button');
// addEventListener(btn, alertUser());
// function alertUser(){
//     alert('Mahmoud Saber');
// }

// let sum=0;
// for(let i=1; i<=7; i++){
//     sum+=i;
// }
// alert(sum);

let arr = ['apple', 'lemon'];

for (const i of arr) {
    alert('I will eat ' + i);
}