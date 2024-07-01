let selection = document.querySelector(".selection");
let list = document.querySelector(".list");

let country =[
    {
        name: "felicia",
        live: "士林區"
    },
    {
        name: "jack",
        live: "士林區"
    },
    {
        name: "luna",
        live: "中正區"
    }
]

// 點擊option 會根據相對應的地區
// 在ul顯示name
// 要先設一個空字串在for迴圈外面
// 點擊change的時候會觸發一次function upDateList
// 然後在for迴圈裡面判斷選擇的地區
// 再帶回去空字串裡
// 如果沒有寫空字串在for迴圈外 li就會持續記錄不會清空之前點擊的資料

function upDateList(e){
    let option = e.target.value;
    let str= "";
    for(let i=0;country.length>i;i++){
        if(option == country[i].live){
            str += "<li>" + country[i].name+ "</li>";
            console.log(str);
            list.innerHTML = str;
        }
    }
}
// function upDateList(e){
//     let option = e.target.value;
//     for(let i=0;country.length>i;i++){
//         if(option == country[i].live){
//             console.log(country[i].name);
//             list.innerHTML += "<li>" + country[i].name+ "</li>";
//         }
//     }
// }

selection.addEventListener("change",upDateList,false);