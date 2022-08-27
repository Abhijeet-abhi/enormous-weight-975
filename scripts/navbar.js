let y = "true";
let logout = () => {
  let x = false;
  localStorage.setItem("loginstatus", x);
  window.location.href = "login.html";
};
if (y == "true") {
  let z = JSON.parse(localStorage.getItem("UserDetails"));
  let x = document.getElementById("loginAndsignup");
  x.innerHTML = null;
  let btn1 = document.createElement("button");
  btn1.setAttribute("id", "myProfile");
  btn1.innerText = "MY PROFILE";
  let img1 = document.createElement("img");
  img1.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb7XeVpElaj3yF0M2zBadpBwR1H32HQQumw&usqp=CAU";
  x.append(btn1, img1);
  console.log("hi");
}
//localStorage.getItem("loginstatus");

console.log("outside");
