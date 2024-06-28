// e.preventDefault()可已取消元素默認事件

document.querySelector(".link").addEventListener("click",function(e){
    // 假設案例
    // submit按鈕，先透過js查詢表單有無錯誤，若有錯誤則不執行submit
    // 若沒有錯誤，則post過去後端
    e.preventDefault();
})
document.querySelector(".link2").addEventListener("click",function(e){
    e.preventDefault();
})


