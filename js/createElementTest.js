// 用createElement創建元素並用appendChild加入至document
let str = document.createElement("em");
str.textContent = "Hello World";
document.querySelector(".titleClass").appendChild(str);

// 用createElement創建元素並用appendChild加入至document
// 用for迴圈把其他農夫名加入至li
let farm = [
  {
    farm_name: "查理",
    pet: "貓",
  },
  {
    farm_name: "戴維",
    pet: "狗",
  },
];

for (let i = 0; i < farm.length; i++) {
  let str2 = document.createElement("li");
  str2.textContent = farm[i].farm_name;
  document.querySelector(".farmList").appendChild(str2);
}
