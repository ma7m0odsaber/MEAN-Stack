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

let items = ["apple", "juice"];
function submit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let sell = document.getElementById("sell");
  let buy = document.getElementById("buy");
  let rbtn = document.getElementById("rbtn");

  let login = document.getElementById("login");

  if (username === "ma7m0od_saber") {
    if (password === "12345678") {
      alert("Welcome " + username);
      login.style.display = "none";
      sell.style.display = "block";
      rbtn.style.display = "block";
    } else {
      alert("Sorry, Password is incorrect!");
    }
  } else {
    alert("Welcome " + username);
    login.style.display = "none";
    buy.style.display = "block";
    rbtn.style.display = "block";

    let z = document.getElementById("itemList");

    z.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      let t = document.createElement("button");
      t.onclick = buyingItems;
      t.id = "item";
      t.textContent = items[i];
      z.appendChild(t);
    }
  }
}

function sellingItems() {
  let y = document.getElementById("sellItem").value;

  items.push(y);
  alert("Now, you can sell " + y);
}

function buyingItems() {
  let item = document.getElementById("item");

  alert("You succesfully bought " + item.textContent);

  //   switch (z.value) {
  //     case "apple":
  //       alert("apple bought successfully");
  //       break;
  //     case "juice":
  //       alert("juice bought successfully");
  //       break;
  //     default:
  //       let f = 0;
  //       for (let i = 0; i < items.length; i++) {
  //         if (z.value == items[i]) {
  //           f = 1;
  //           alert(z.value + " bought successfully");
  //           break;
  //         }
  //       }
  //       if (f == 0) alert("You can not buy this item!");
  //   }
}

function returnbtn() {
  let sell = document.getElementById("sell");
  let buy = document.getElementById("buy");
  let login = document.getElementById("login");
  let rbtn = document.getElementById("rbtn");

  login.style.display = "block";
  sell.style.display = "none";
  buy.style.display = "none";
  rbtn.style.display = "none";
}

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

// let arr = ['apple', 'lemon'];

// for (const i of arr) {
//     alert('I will eat ' + i);
// }
