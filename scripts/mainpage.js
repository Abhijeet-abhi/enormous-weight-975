// import { navbar } from "../components/export.js";
// import { footer } from "../components/export.js";
// document.getElementById("v_nav").innerHTML = navbar();
// document.getElementById("v_foot").innerHTML = footer();

let left = document.getElementById("leftBtn");
left.onclick = function () {
  let container = document.getElementById("box");
  sideScroll(container, "left", 25, 100, 10);
};
let right = document.getElementById("rightBtn");
right.onclick = function () {
  let container = document.getElementById("box");
  sideScroll(container, "right", 25, 100, 10);
};
function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

let index = 0;
let slideshow = () => {
  let container = document.getElementById("slideShow");

  setInterval(() => {
    if (index === 3) {
      index = 0;
    } else if (index == 0) {
      container.innerHTML = null;
      let img1 = document.createElement("img");
      img1.src =
        "https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png";
      let div1 = document.createElement("div");
      let h21 = document.createElement("h2");
      h21.innerText = "What it feels like to have 48% more interview calls?";
      let p1 = document.createElement("p");
      p1.innerText = "To get 5x more recruiter views on your profile";
      div1.append(h21, p1);
      container.append(img1, div1);
      console.log("1");
      index++;
    } else if (index == 1) {
      container.innerHTML = null;
      let img2 = document.createElement("img");
      img2.src =
        "https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-2.png";
      let div2 = document.createElement("div");
      let h22 = document.createElement("h2");
      h22.innerText = "How to stand out from the millions of other resumes?";
      let p2 = document.createElement("p");
      p2.innerText = "80% of resumes are rejected in 11 sec.";
      div2.append(h22, p2);
      container.append(img2, div2);
      console.log("2");
      index++;
    } else if (index == 2) {
      container.innerHTML = null;
      let img3 = document.createElement("img");
      img3.src =
        "https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-3.png";
      let div3 = document.createElement("div");
      let h23 = document.createElement("h2");
      h23.innerText = "Get your profile to rank on top of recruiter searches";
      let p3 = document.createElement("p");
      p3.innerText =
        "Unleash your profile's true capability to 10X your chances";
      div3.append(h23, p3);
      container.append(img3, div3);
      console.log("3");
      index++;
    }
  }, 2500);
};

slideshow();

function scrolll() {
  let left = document.querySelector("#wfhjbox");
  left.scrollBy(350, 0);
}
function scrollr() {
  let right = document.querySelector("#wfhjbox");
  right.scrollBy(-350, 0);
}

function scrolll1() {
  let left1 = document.querySelector("#wfhjbox1");
  left1.scrollBy(350, 0);
}
function scrollr1() {
  let right1 = document.querySelector("#wfhjbox1");
  right1.scrollBy(-350, 0);
}
//about search section
let y = "true";
let logout = () => {
  let x = false;
  localStorage.setItem("loginstatus", x);
  window.location.href = "login.html";
};
if (y == "true") {
  let z = JSON.parse(localStorage.getItem("UserDetails"));
  let x = document.getElementById("ifloggedIn");
  x.innerHTML = null;
  let div1 = document.createElement("div");
  let h21 = document.createElement("h4");
  h21.innerText = "Vedprakash";
  let p1 = document.createElement("p");
  p1.innerText = "5 Pending Actions";
  let p2 = document.createElement("p");
  p2.innerText = "Update Profile";
  let hr1 = document.createElement("hr");
  let div2 = document.createElement("div");
  let p3 = document.createElement("p");
  p3.innerText = "JOB ALERTS";
  let p4 = document.createElement("p");
  p4.innerText = "Update Job Alerts based on various criteria";
  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "myProfile");
  btn1.innerText = "Create Alert";
  div2.append(p3, p4, btn1);
  let hr2 = document.createElement("hr");
  let div3 = document.createElement("div");
  let p5 = document.createElement("p");
  p5.innerText = "100 Recommended Jobs for You";
  let btn2 = document.createElement("button");
  btn2.setAttribute("class", "myProfile");
  btn1.innerText = "View Jobs";
  div3.append(p5, btn2);
  div1.append(h21, p1, p2, hr1, div2, hr2, div3);
  x.append(div1);
  console.log("hi");
}

///-----------------------------------------------login and signup------------------------------------------

let logOrNot = JSON.parse(localStorage.getItem("loginStatus")) || false;

function showSignUp() {
  let x = document.querySelector("#signupForm");
  x.style = "Display:block";
  let y = document.querySelector("#logInForm");
  y.style = "Display:none";
  let z = document.getElementById("login_div");
  z.style.marginLeft = "42%";
}
document.getElementById("showSignup_btn").addEventListener("click", () => {
  showSignUp();
});
function closeLogINSignUp() {
  let x = document.getElementById("signupForm");
  x.style = "Display:none";
  let y = document.getElementById("logInForm");
  y.style = "Display:none";
  let x1 = document.getElementById("login_div");
  x1.style = "Display:none";
  document.body.style.backgroundColor = "white";
}

document
  .getElementById("closeLogINSignUp_btn")
  .addEventListener("click", () => {
    closeLogINSignUp();
  });

let showLogIn = () => {
  if (logOrNot) {
    window.location.href = "index.html";
  } else {
    let y = document.getElementById("logInForm");
    y.style = "Display:block";
    let x = document.getElementById("signupForm");
    x.style = "Display:none";
    let x1 = document.getElementById("login_div");
    x1.style = "Display:block";

    // document.body.style.backgroundColor = "rgba(0,0,0,.5)";
    // document.body.style.opacity = "0.5";
  }
};

document.getElementById("show_login_btn").addEventListener("click", () => {
  showLogIn();
});

let names = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Patna",
  "Ranchi",
  "Kolkata",
  "Punjab",
  "Chandighar",
  "Kerela",
  "Bihar",
];

//Sort names in ascending order
let sortedNames = names.sort();
//reference
let input = document.getElementById("country_input");
//Execute function on keyup
input.addEventListener("keyup", (e) => {
  let id = "counrtyNames";
  appendNamesINlist(id);
});

function appendNamesINlist(id) {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.className = "list-items";
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;

      document.querySelector(".list").appendChild(listItem);
    }
  }
}

function displayNames(value) {
  input.value = value;
  removeElements();
  console.log("hii2");
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

// -----------------------------------------------skill input---------------------------------------------------

let skillAtrr = [
  "Html",
  "Css ",
  "Javascript",
  "Java",
  "Python",
  "Ruby",
  "Excel",
  "Git",
  "Nodejs",
  "MongoDB",
  "C++",
];

let sortedskill = skillAtrr.sort();

let input2 = document.getElementById("skill_input");

input2.addEventListener("keyup", (e) => {
  appendskillsINlist();
});

function appendskillsINlist(id) {
  removeElements1();
  for (let i of sortedskill) {
    if (
      i.toLowerCase().startsWith(input2.value.toLowerCase()) &&
      input2.value != ""
    ) {
      let listItem = document.createElement("li");

      listItem.className = "list-skills";
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayskill('" + i + "')");

      let word = "<b>" + i.substr(0, input2.value.length) + "</b>";
      word += i.substr(input2.value.length);

      listItem.innerHTML = word;

      document.querySelector(".skill-list").appendChild(listItem);
    }
  }
}

function displayskill(value) {
  let p = document.createElement("p");
  p.innerText = value;
  p.style.marginTop = "3px";

  p.id = Date.now();
  p.style.cursor = "pointer";

  p.addEventListener("click", (e) => {
    let id = e.target.getAttribute("id");
    let element = document.getElementById(id);
    element.remove();
  });

  document.getElementById("skills").append(p);
  document.getElementById("skill_input").value = null;
  removeElements1();
}
function removeElements1() {
  let items = document.querySelectorAll(".list-skills");
  items.forEach((item) => {
    item.remove();
  });
}

//--------------------------------------------------- prefered industry input--------------------------------------------------

let preferedArr = [
  "Amination",
  "Engineeing/interior Design",
  "Engineering & Design",
  "Escalators",
  "Legal/Law Firm",
  "Fashion/Apparels",
  "Electrical/Switchgears",
  "Electrionics Manufacturing",
  "Engineering/Procurement/Construction",
  "Software Development",
  "Inormation Technology",
];

let sortedpreferedArr = preferedArr.sort();

let input3 = document.getElementById("prefered_input");

input3.addEventListener("keyup", (e) => {
  appendPrefered();
});
let count = 0;
function appendPrefered() {
  removeElements2();
  for (let i of sortedpreferedArr) {
    if (
      i.toLowerCase().startsWith(input3.value.toLowerCase()) &&
      input3.value != ""
    ) {
      let listItem = document.createElement("li");

      listItem.className = "list-prefered";
      listItem.style.cursor = "pointer";

      listItem.setAttribute("onclick", "displayPrefered('" + i + "')");

      let word = "<b>" + i.substr(0, input3.value.length) + "</b>";
      word += i.substr(input3.value.length);

      listItem.innerHTML = word;

      document.querySelector(".prefered-list").appendChild(listItem);
    }
  }
}

function displayPrefered(value) {
  let p = document.createElement("p");
  p.innerText = value;
  p.style.marginTop = "3px";

  p.id = Date.now();
  p.style.cursor = "pointer";

  p.addEventListener("click", (e) => {
    let id = e.target.getAttribute("id");
    let element = document.getElementById(id);
    element.remove();
  });

  if (count < 2) {
    document.getElementById("prefered").append(p);
    count++;
  }

  document.getElementById("prefered_input").value = null;
  removeElements2();
}

function removeElements2() {
  let items = document.querySelectorAll(".list-prefered");
  items.forEach((item) => {
    item.remove();
  });
}

//--------------------------------------------------- department input--------------------------------------------------

let departArr = [
  "IT/Sofware Development-Network Adminidtration/ Security",
  "IT/Sofware Development-Other",
  "IT/Sofware Development-QA & Testing",
  "IT/Sofware Development-System Programming",
  "Engineering-Electrical/Communication",
  "Engineering-Environment/Health/Safety",
  "Engineering-Mechanical/Automotive/Industrial",
  "Fashion/Apparels",
  "Engineering/Procurement/Construction",
  "Software Development",
  "Inormation Technology",
];

let sorteddepartArr = departArr.sort();

let input4 = document.getElementById("depart_input");

input4.addEventListener("keyup", (e) => {
  appendDepart();
});
let count1 = 0;
function appendDepart() {
  removeElements3();
  for (let i of sorteddepartArr) {
    if (
      i.toLowerCase().startsWith(input4.value.toLowerCase()) &&
      input4.value != ""
    ) {
      let listItem = document.createElement("li");

      listItem.className = "list-depart";
      listItem.style.cursor = "pointer";

      listItem.setAttribute("onclick", "displayDepart('" + i + "')");

      let word = "<b>" + i.substr(0, input3.value.length) + "</b>";
      word += i.substr(input3.value.length);

      listItem.innerHTML = word;

      document.querySelector(".depart-list").appendChild(listItem);
    }
  }
}

function displayDepart(value) {
  let p = document.createElement("p");
  p.innerText = value;
  p.style.marginTop = "3px";

  p.id = Date.now();
  p.style.cursor = "pointer";

  p.addEventListener("click", (e) => {
    let id = e.target.getAttribute("id");
    let element = document.getElementById(id);
    element.remove();
  });

  if (count1 < 2) {
    document.getElementById("depart").append(p);
    count1++;
  }

  document.getElementById("depart_input").value = null;
  removeElements3();
}

function removeElements3() {
  let items = document.querySelectorAll(".list-depart");
  items.forEach((item) => {
    item.remove();
  });
}

//--------------------------------------------------function for signup----------------------------------------
document.getElementById("regbtn").addEventListener("click", () => {
  signUpFunction();
});

let sign_Data_Arr = JSON.parse(localStorage.getItem("signInData")) || [];
function checkEmail() {
  let filtered = sign_Data_Arr.filter(function (el) {
    return el.email == document.getElementById("user_email").value;
  });
  if (filtered.length > 0 && sign_Data_Arr.length != 0) {
    return true;
  } else {
    return false;
  }
}
function signUpFunction() {
  event.preventDefault();
  if (checkEmail() == true) {
    alert("Email Already Exist");
  } else {
    let emailLog = document.getElementById("user_email").value;
    let passwordLog = document.getElementById("user_pass").value;
    let fullname = document.getElementById("user_name").value;
    let phone_num1 = document.getElementById("phone_num").value;

    let obj = {
      email: emailLog,
      password: passwordLog,
      firstName: fullname,
      phone: phone_num1,
    };
    sign_Data_Arr.push(obj);
    localStorage.setItem("signInData", JSON.stringify(sign_Data_Arr));
    alert("Signup Successful");
    window.location.reload();
  }
}

//--------------------login-------------------------------------------------------

function logInFunction() {
  event.preventDefault();

  let emailLog = document.querySelector("#emailId").value;
  let passwordLog = document.querySelector("#passLog").value;
  sign_Data_Arr.forEach(function (el, i) {
    if (el.email == emailLog && el.password == passwordLog) {
      alert("Login Successful\n" + "Welcome " + el.firstName);
      logOrNot = true;
      localStorage.setItem("loginStatus", JSON.stringify(logOrNot));
      localStorage.setItem("loggedIdDetails", JSON.stringify(el));
      y1 = "true";
      window.location.reload();
    } else {
      alert("login Failed");
    }
  });
}
document.getElementById("lodin_button1").addEventListener("click", () => {
  logInFunction();
});

///----------------------------------cheking login-------------------
let y1 = localStorage.getItem("loginStatus");
console.log(y1);

if (y1 == "true") {
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
