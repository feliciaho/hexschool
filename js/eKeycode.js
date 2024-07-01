
document.querySelector(".body").addEventListener("keydown", goGo, false);


// keycode代表鍵盤上的編號
// key代表本身的按鍵鈕會轉成字串

function goGo(e) {
  switch (e.keyCode) {
    case 50:
      console.log("up");
      document.querySelector(".box2").style.left = "500px";
      break;
    case 3:
      console.log("right");
      break;
  }
}

// function goGo(e) {
//   console.log(e);
//   switch (e.key) {
//     case "4":
//       console.log("123");
//       document.querySelector(".box1").style.left = "5000px";
//       break;
//   }
// }
