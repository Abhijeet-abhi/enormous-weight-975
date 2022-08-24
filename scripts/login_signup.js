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
