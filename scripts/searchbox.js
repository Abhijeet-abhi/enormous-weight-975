
// importing search box //

import searchOption from "../components/searchOption.js";
document.querySelector("#main-searchbox-am").innerHTML = searchOption();


let plus_btn = document.querySelector("#plus-am")
plus_btn.onclick = ()=>{
    toggle_visibility();
}

let toggle_visibility = () =>{
    let click = document.querySelector(".child-2-sidebar-am");
    click.innerHTML = null;
    let div = document.createElement("div");
    let array = ["IT","Systems/EDP/MIS","System Programming/Middleware","Customer Service/Call Centre/BPO","Sales/Business Development"];
    for( let i = 0; i < 5; i++ ){
        let check_box = document.createElement("input");
        check_box.setAttribute("type","checkbox");
        let span = document.createElement("span");
        span.innerText = array[i];
        let br = document.createElement("br");
        div.append(br,check_box,span);
    }
 


    div.setAttribute("class","append-child-div");
    click.append(div);

    let apdp = document.querySelector(".child-2-sidebar-am");
    if (apdp.style.display == 'block'){
        apdp.style.display = "none";
    } else {
        apdp.style.display = "block";
        let plus = document.querySelector("#plus-am");
        console.log(plus)
    }
}

