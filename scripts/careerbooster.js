import {Jobs} from "./jobserchhtml.js"
document.getElementById("jobloc").innerHTML=Jobs()
import {navbar,footer} from "../components/export.js"
document.getElementById("Gnav").innerHTML=navbar()
document.getElementById("cgfoot").innerHTML=footer()

let btn1=document.getElementById("GRbtn")
btn1.style.cursor="pointer"
btn1.addEventListener("click",()=>{
    let level=document.getElementById("h3").innerText
    let experience=document.getElementById("p2").innerText
    let price=document.getElementById("p3").innerText
    let data={
        level,
        experience,
        price
    }
    console.log(data)
    window.location.href="index.html"
});


function rrr(){
    return `<div id="div">
    <img src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/success.svg" alt="">
    <p>We’ve received your request and will call you back within 48 hours.</p>
    </div>`
}
let button=document.getElementById("callm")
button.addEventListener("click",()=>{
    callme()

})

function callme(){
    let cont=document.getElementById("rigt")
    
    let name=document.getElementById("name").value
    let mobile=document.getElementById("mobile").value
    let email=document.getElementById("email").value
    
    if(name==""||mobile==""|| email==""){
        alert("Fill All Data")
    }
    else{
        cont.innerHTML=null
        cont.innerHTML=rrr()
        AddData(name,email,mobile)
    }
    // console.log(data)
}
let AddData=async(name,email,mobile)=>{
    let data={
       name,
       email,
       mobile,
       id:Date.now()
    }
    let res=await fetch(`https://fierce-gorge-77743.herokuapp.com/userCall`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
        
    })
    res=await res.json()
    console.log(res)

}


document.getElementById("f").addEventListener("click",()=> {
    window.location.href="featurepro.html"
    console.log("feature")
})



document.getElementById("r").addEventListener("click",()=>{
    window.location.href="resumeWriting.html"
})
document.getElementById("c").addEventListener("click",()=>{
    window.location.href="careerbooster.html"
})
document.getElementById("h").addEventListener("click",()=>{
    window.location.href="profileHilighter.html"
})
document.getElementById("l").addEventListener("click",()=>{
    window.location.href="featurepro.html"
    console.log("linkdn")
})
document.getElementById("m").addEventListener("click",()=>{
    window.location.href="careerbooster.html"
})


let getData=async()=>{
    let todo=document.getElementById('todo')
    let res=await fetch("https://fierce-gorge-77743.herokuapp.com/image")
    let data=await res.json();
    return data
}
let images= await getData()
let imgtag1=document.getElementById("img1")
let imgtag2=document.getElementById("img2")
let imgtag3=document.getElementById("img3")
let imgNum=0;
let Gbtn1=document.getElementById("btt1");
Gbtn1.addEventListener("click",()=>{
    
    if(imgNum>2){
        imgtag1.src=images[imgNum--]
    imgtag2.src=images[imgNum--]
    imgtag3.src=images[imgNum--]
    }
    if(imgNum===0){
        Gbtn1.style.backgroundColor="#72619f"
    }
})


let Gbbt=document.getElementById("btt2")
Gbbt.addEventListener("click",()=>{
    if(imgNum<images.length-2){
        imgtag1.src=images[imgNum++]
    imgtag2.src=images[imgNum++]
    imgtag3.src=images[imgNum++]
    }
    if(imgNum===images.length-3){
        Gbbt.style.backgroundColor="#72619f"
    }
})
