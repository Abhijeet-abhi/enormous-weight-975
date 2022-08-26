import {Jobs} from "./jobserchhtml.js"
document.getElementById("jobloc").innerHTML=Jobs()


let btn1=document.getElementById("Rbtn")
btn1.addEventListener("click",()=>{
    let month=document.getElementById("month1").innerText
    let price=document.getElementById("price1").innerText
    let data={
        month,
        price
    }
    console.log(data)
    window.location.href="#"
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