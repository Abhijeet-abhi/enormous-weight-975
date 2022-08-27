
// importing search box //

import searchOption from "../components/searchOption.js";
document.querySelector("#main-searchbox-am").innerHTML = searchOption();

import {navbar,footer} from "../components/export.js";
document.querySelector("#navbar-am").innerHTML = navbar();
document.querySelector("#footer-am").innerHTML = footer();


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


// filter by experience //

let plus_btn_2 = document.querySelector("#plus-ex-am");
plus_btn_2.onclick = ()=>{
    toggle_visibility_by_Ex();
}

let toggle_visibility_by_Ex = () =>{
    let click = document.querySelector(".child-2-sidebar-ex-am");
    click.innerHTML = null;
    let div = document.createElement("div");
    let array = ["0-1","2-3","4-5","5-6","7-8"];
    for( let i = 0; i < 5; i++ ){
        let check_box = document.createElement("input");
        // check_box.setAttribute("value",`${array_2[i]}`)
        check_box.onclick = ()=>{
            let str=array[i];
            let gt=str[str.length-1]
            let lt=str[0]
            filter_by_ex(gt,lt)
            // console.log(check_box.value)
        }
        check_box.setAttribute("type","checkbox");
        check_box.setAttribute("class","checkbox");
        let span = document.createElement("span");
        span.innerText = `${array[i]} Years`;
        let br = document.createElement("br");
        div.append(br,check_box,span);
    }
 


    div.setAttribute("class","append-child-div");
    click.append(div);

    let apdp = document.querySelector(".child-2-sidebar-ex-am");
    if (apdp.style.display == 'block'){
        apdp.style.display = "none";
    } else {
        apdp.style.display = "block";
    }
}

// ************************************************************

// filter by salary  // 

let plus_btn_3 = document.querySelector("#plus-salary-am");
plus_btn_3.onclick = ()=>{
    toggle_visibility_by_Salary();
}

let toggle_visibility_by_Salary = () =>{
    let click = document.querySelector(".child-2-sidebar-salary-am");
    click.innerHTML = null;
    let div = document.createElement("div");
    let array = ["3Lakhs - 5Lakhs","5Lakhs - 8Lakhs","8Lakhs - 10Lakhs","10Lakhs - 15Lakhs","15Lakhs - 20Lakhs"];
    let array_2 = [300000,500000,800000,1000000,1500000]
    let array_3 = [500000,800000,1000000,1500000,2000000]
    for( let i = 0; i < 5; i++ ){
        let check_box = document.createElement("input");
        // check_box.setAttribute("value",`${array_2[i]}`)
        let gt = array_2[i];
        let lt = array_3[i];
        check_box.onclick = ()=>{
            filter_by_salary(gt,lt);
        }
        check_box.setAttribute("type","checkbox");
        check_box.setAttribute("class","checkbox");
        let span = document.createElement("span");
        span.innerText = `${array[i]}`;
        let br = document.createElement("br");
        div.append(br,check_box,span);
    }
 


    div.setAttribute("class","append-child-div");
    click.append(div);

    let apdp = document.querySelector(".child-2-sidebar-salary-am");
    if (apdp.style.display == 'block'){
        apdp.style.display = "none";
    } else {
        apdp.style.display = "block";
    }
}

// ***********************************************


// filter by role  //   

let plus_btn_4 = document.querySelector("#plus-role-am");
plus_btn_4.onclick = ()=>{
    toggle_visibility_by_role();
}

let toggle_visibility_by_role = () =>{
    let click = document.querySelector(".child-2-sidebar-role-am ");
    click.innerHTML = null;
    let div = document.createElement("div");
    let array = ["Web Developer","HR Recruiter","ReactJs Developer","Senior Software Engineer","Front End Engineer"];
    for( let i = 0; i < 5; i++ ){
        let check_box = document.createElement("input");
        check_box.onclick = ()=>{
            filter_by_role(array[i]);
        }

        check_box.setAttribute("type","checkbox");
        check_box.setAttribute("class","checkbox");
        let span = document.createElement("span");
        span.innerText = `${array[i]}`;
        let br = document.createElement("br");
        div.append(br,check_box,span);
    }
 


    div.setAttribute("class","append-child-div");
    click.append(div);

    let apdp = document.querySelector(".child-2-sidebar-role-am ");
    if (apdp.style.display == 'block'){
        apdp.style.display = "none";
    } else {
        apdp.style.display = "block";
    }
}

// *******************************************









/// ****************************append part and Crud part*******************************************

let getData = async ()=>{
    let url = `https://mighty-bayou-41149.herokuapp.com/job`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    appendData(data)
}
getData();


let appendData = (data)=>{
    let container = document.querySelector("#append-data-container-am");
    container.innerHTML = null;
    data.forEach((el)=>{

        let child = document.createElement("div");
        let child_2 = document.createElement("div");
        let child_3 = document.createElement("div");
        let title = document.createElement("h3");
        let company = document.createElement("a");
        let location = document.createElement("span");
        let icon = document.createElement("i");
        let small = document.createElement("small");
        let experience = document.createElement("span");
        let icon_2 = document.createElement("i");
        let small_2 = document.createElement("small");
        let salary = document.createElement("span");
        let icon_3 = document.createElement("i");
        let small_3 = document.createElement("small");
        let descrip = document.createElement("p");
        let skills = document.createElement("p");
        let posted_time = document.createElement("p");
        let apply_btn = document.createElement("button");

        child.setAttribute("class","job-details-div");
        child_2.setAttribute("class","job-details-div-2");
        child_3.setAttribute("class","job-details-div3");
        small.setAttribute("class","small-tag");
        small_2.setAttribute("class","small-tag");
        small_3.setAttribute("class","small-tag");
        company.setAttribute("href","")
        title.innerText = el.title;
        company.innerText = el.company;
        icon.setAttribute("class","fa-solid fa-location-dot");
        icon.setAttribute("id","icon");
        small.innerText = el.place;
        location.append(icon,small);

        icon_2.setAttribute("class","fa-solid fa-briefcase");
        icon_2.setAttribute("id","icon");
        small_2.innerText = el.experience;
        experience.append(icon_2,small_2);

        icon_3.setAttribute("class","fa-solid fa-database");
        icon_3.setAttribute("id","icon");
        small_3.innerText = +el.salary;
        salary.append(icon_3,small_3);

        descrip.innerText = el.description;
        skills.innerText = ` Skills :  ${el.skills}`;
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        posted_time.innerText = `Posted:  ${date}`;
        apply_btn.innerText = "APPLY";
        apply_btn.onclick = () =>{
            let container_btn = document.querySelector("#after-click-apply");
            container_btn.innerHTML = null;
            let div = document.createElement("div");
            let img = document.createElement("img");
            let h3 = document.createElement("h3");
            h3.innerText = `You have successfully submitted your application for   "${el.title}"`;
            img.src = "https://thumbs.gfycat.com/CrazyThisFrillneckedlizard-max-1mb.gif";
            div.append(img,h3);
            div.setAttribute("class","after-apply-append-div");
            container_btn.append(div);
        }
        child_2.append(location,experience,salary);
        child_3.append(posted_time,apply_btn)
        child.append(title,company,child_2,descrip,skills,child_3)
        container.append(child);
        
    })
}


// all filtering function is here ///

let filter_by_ex = async (gt,lt) =>{
    let url = `https://mighty-bayou-41149.herokuapp.com/job?experience_gte=${lt}&experience_lte=${gt}`;
    let res = await fetch(url);
    let data = await res.json();
    appendData(data)
    console.log(data)
    
    
}

let filter_by_salary = async (gt,lt)=>{
    let url = `https://mighty-bayou-41149.herokuapp.com/job?salary_gte=${gt}&salary_lte=${lt}`;
    let res = await fetch(url);
    let data = await res.json();
    appendData(data)

}

let filter_by_role = async (role)=>{
    let url = `https://mighty-bayou-41149.herokuapp.com/job?title=${role}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendData(data);

}
