var addList = document.getElementById('addlist');
var addListBtn = document.getElementById('addlistbtn');

addList.style.top = "-20%";
addList.style.scale = "0";


    addListBtn.onclick = function (){
        if(addList.style.top == "20%"){
            addList.style.top = "-20%";
            addList.style.scale = "0";
        }else {
            addList.style.top = "20%";
            addList.style.scale = "1";
        }
    }