// document.querySelector(".btn").onclick =function(){
//   alert("Hello World");
// }

// 使用onclick監聽點擊事件
// 帶入e參數，可以取得事件的相關資訊
// 使用onclick只會跳出最後的那個事件
document.querySelector(".btn").onclick =function(e){
  alert("Hello World");
  console.log(e);
}

document.querySelector(".btn").onclick =function(e){
  alert("Hello World2");
  console.log(e);
}

// 使用addEventListener監聽點擊事件
// 使用addEventListener會跳出所有事件
document.querySelector(".btn2").addEventListener("click",function(){
  alert("Hello World3");
},false);

document.querySelector(".btn2").addEventListener("click",function(){
  alert("Hello World4");
},false);