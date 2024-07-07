// focus在焦點內
// blur移出焦點
// 未輸入資料 且鼠標移出則會觸發alert

document.querySelector(".name").addEventListener("blur",checkContent);
document.querySelector(".old").addEventListener("blur",checkContent);

function checkContent(e){
    let str = e.target.value
    if(str == ""){
        alert("請輸入資料")
    }
}