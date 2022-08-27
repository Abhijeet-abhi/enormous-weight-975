import {navbar ,footer} from "../components/export.js"
document.getElementById("fgnav").innerHTML=navbar()
document.getElementById("fgfoot").innerHTML=footer()
console.log(footer())
console.log(navbar())


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
button.style.cursor="pointer"
button.addEventListener("click",()=>{
    callme()

})

function callme(){
    let cont=document.getElementById("fer")
    
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


document.getElementById("f").addEventListener("click",()=>{
    window.location.href="featurepro.html"
})

document.getElementById("r").addEventListener("click",()=>{
    window.location.href="resumeWriting.html"
})
document.getElementById("c").addEventListener("click",()=>{
    window.location.href="careerbooster.html"
})
document.getElementById("p").addEventListener("click",()=>{
    window.location.href="profileHilighter.html"
    
})
document.getElementById("l").addEventListener("click",()=>{
    window.location.href="profileHilighter.html"
})
document.getElementById("m").addEventListener("click",()=>{
    window.location.href="profileHilighter.html"

})




