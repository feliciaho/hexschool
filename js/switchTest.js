let hungry = 5;
function eat(food) {
  console.log("我要吃" + food);
}

if (hungry <= 3) {
  eat("snack");
}else if (hungry <= 5 && hungry > 3) {
  eat("salad");
}else if (hungry <= 7 && hungry > 5) {
  eat("pizza");
} else {
  console.log("我吃不下了");
}


let light = "yellow";
function alertLight(str){
  console.log("發出" + str +"警戒")
}

switch (light) {
  case "red":
    alertLight(light)
    break;
  case "yellow":
    alertLight(light)
    break;
  default:
    lertLight(light)
    break;
}
