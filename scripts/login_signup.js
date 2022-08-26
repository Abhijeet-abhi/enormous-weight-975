let logOrNot = JSON.parse(localStorage.getItem("loginStatus")) || false;

function closeLogINSignUp() {
  let x = document.getElementById("signInForm");
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
    let x = document.getElementById("signInForm");
    x.style = "Display:none";
    let x1 = document.getElementById("login_div");
    x1.style = "Display:block";
  }
};

document.getElementById("show_login_btn").addEventListener("click", () => {
  showLogIn();
});

let names = [
  "India",
  "Iceland ",
  "Indonesia ",
  "Iran",
  "Iraq ",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Argentina",
  "Armenia",
];
//Sort names in ascending order
let sortedNames = names.sort();
//reference
let input = document.getElementById("country_input");
//Execute function on keyup
input.addEventListener("keyup", (e) => {
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
});
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
