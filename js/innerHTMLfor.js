
let farm = [
  {
    farm_name:"查理",
    pet:"貓"
  },
  {
    farm_name:"戴維",
    pet:"狗"
  }
]

// innerHTML 特性是會將上一個FOR迴圈的內容刪除
// 所以要用累加的方式+=
let el = document.querySelector(".list");
for(let i=0;i<farm.length;i++){
  el.innerHTML += "<li>"+farm[i].farm_name+"的寵物是" +farm[i].pet+ "</li>";
}