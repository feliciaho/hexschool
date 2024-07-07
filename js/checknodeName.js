document.addEventListener("click",function(e){
    if(e.target.nodeName !== 'LI'){
        return;
    }
    console.log(e.target.nodeName);
})