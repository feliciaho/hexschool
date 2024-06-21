// document.getElementById("countId").onclick = function(){
//   // alert("點餐成功");
//   let hamNum = document.getElementById("hamburger").value;
//   let colaNum = document.getElementById("cola").value;
//   console.log(typeof(hamNum));
//   let total = (hamNum*100)+ (colaNum*50);
//   document.getElementById("total").value = total;
// }
document.getElementById("countId").onclick = function(){
  let humPrice = 100;
  let colaPrice = 50;
  let hamNum = parseInt(document.getElementById("hamburger").value) * humPrice;
  let colaNum = parseInt(document.getElementById("cola").value) * colaPrice;
  // console.log(typeof(hamNum));
  let total = hamNum + colaNum;
  document.getElementById("total").value = total;
  // let total = (hamNum*100)+ (colaNum*50);
  // document.getElementById("total").value = total;
}

function getHamPrice(num){
  let hamPrice = 100;
  let total = hamPrice * num ;
  // return total;
  console.log(total);
}
let tom = getHamPrice(5);
console.log(tom);