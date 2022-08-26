let logOrNot = JSON.parse(localStorage.getItem("loginStatus")) || false;

function showSignUp() {
  let x = document.querySelector("#signupForm");
  x.style = "Display:block";
  let y = document.querySelector("#logInForm");
  y.style = "Display:none";
  let z = document.getElementById("login_div");
  z.style.marginLeft = "42%";
}

function closeLogINSignUp() {
  let x = document.getElementById("signupForm");
  x.style = "Display:none";
  let y = document.getElementById("logInForm");
  y.style = "Display:none";
  let x1 = document.getElementById("login_div");
  x1.style = "Display:none";
}

document
  .getElementById("closeLogINSignUp_btn")
  .addEventListener("click", () => {
    closeLogINSignUp();
  });

let showLogIn = () => {
  if (logOrNot) {
    window.location.href = "myAccount.html";
  } else {
    let y = document.getElementById("logInForm");
    y.style = "Display:block";
    let x = document.getElementById("signupForm");
    x.style = "Display:none";
    let x1 = document.getElementById("login_div");
    x1.style = "Display:block";
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
