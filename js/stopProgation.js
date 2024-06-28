// addEventListener 新增點擊事件
// 若是兩個點擊事件的div重疊
// false 從指定元素往外找(由內往外找)
// true 從最外層開始找指定元素(由外往內找)
// 新增stopPropagation() 阻止事件冒泡

let el2 = document.querySelector(".boxS");
el2.addEventListener("click",function(e){
    alert("boxS");
    e.stopPropagation();
},false);

let el = document.querySelector(".boxL");
el.addEventListener("click",function(){
    alert("boxL");
},false);


