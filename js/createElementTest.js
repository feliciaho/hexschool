// 選取em的元素塞入字串
// 並且使用for迴圈塞入不同字串
var el = document.querySelectorAll(".titleClass em");
el[0].textContent = "Hello World";
for (let i = 0; i < el.length; i++) {
  el[i].textContent = "Hello World" + i;
}
console.log(el);

// 選取a元素並將連結網址塞入a裡
let el2 = document.querySelector(".link a");
console.log(el2);
el2.setAttribute("href", "https://www.google.com");

let el4 = document.querySelector(".link a").getAttribute("href");
console.log(el4);

//選取div id 換css樣式
let el3 = document.querySelector(".color");
// el3.setAttribute('style', 'color: red;');
el3.setAttribute("id", "color");

// 選取元素並用innerHtml增加東西
let el5 = document.querySelector(".innerTest");
let link2 = "https://www.google.com";
let name2 = "Hello World";

console.log(el5.innerHTML);
el5.innerHTML = '<a href="'+link2+'">'+name2+'</a>'
