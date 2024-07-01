
document.querySelector(".box").addEventListener("click",function(e){
    console.log(e.target.nodeName);
},false);   

// mousemove偵測滑鼠
document.querySelector(".box1").addEventListener("mousemove",function(){
    alert("12332");
})