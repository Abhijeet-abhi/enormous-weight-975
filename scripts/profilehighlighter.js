import {Jobs} from "./jobserchhtml.js"
document.getElementById("jobloc").innerHTML=Jobs()

let btn1=document.getElementById("one")
btn1.addEventListener("click",()=>{
    console.log("hello")
})

let btn2=document.getElementById("two")
console.log(btn2)
btn1.addEventListener("click",()=>{
    console.log("hello")
})

// let btn3=document.getElementById("three")
// btn1.addEventListener("click",()=>{
//     console.log("hello")
// })
