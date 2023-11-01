// DOM => Document Object Model
// DOM Manipulation

// Getting elements
// let btn = document.getElementById("btn");
// let btns = document.getElementsByClassName("maxsus");
// let elements = document.getElementsByTagName("body");
// let elements = document.getElementsByName("street");
// let elements = document.querySelector(".maxsus");
// let elements = document.querySelectorAll("[name='street']");

// console.log(elements);
// console.log(btns.length);

// changing styles
// btn.style.backgroundColor = "black";
// btn.style.color = "#ff0000";
// btn.style.fontSize = "3rem";
// btn.style.padding = "1em";

// console.log(btn);

// let body = document.querySelector("body");

// console.log(body.classList);
// console.log(body.classList.contains("text-uppercase"));
// console.log(body.classList.add("black"));
// console.log(body.classList.remove("overflow-hidden"));
// console.log(body.classList);

// setInterval(() => {
//   body.classList.toggle("dark");
//   if (body.classList.contains("dark")) {
//     body.classList.remove("dark");
//   } else {
//     body.classList.add("dark");
//   }
// }, 1000);
// setInterval(() => {
//   let circleElements = document.querySelectorAll(".circle");
//   circleElements.forEach((elem) => {
//     let x = Math.floor(Math.random() * 1921);
//     let y = Math.floor(Math.random() * 901);
//     let color = Math.random().toString(16).slice(2, 8);
//     console.log(color)

//     elem.style.top = y + "px";
//     elem.style.left = x + "px";
//     elem.style.backgroundColor = "#" + color;
//   });
// }, 1500);

let h1 = document.querySelector("h1");
let p = document.querySelector("div");
let ul = document.querySelector("ul");

// reading content
console.log(h1.innerText);
console.log(p.innerText);
console.log(h1.textContent);
console.log(p.textContent);
console.log(h1.innerHTML);
console.log(p.innerHTML);

p.innerHTMl = "test";
// setting content
setTimeout(() => {
  ul.innerHTML = "<li>HTML</li><li>CSS</li><li>JS</li>";
  p.textContent = "<h2>Test</h2>" + p.textContent;
  // p.innerText = "<h2>Test</h2>";
}, 1000);
