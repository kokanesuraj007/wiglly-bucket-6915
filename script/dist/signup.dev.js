"use strict";

document.getElementById("form").addEventListener("submit", myfun);
var UserData = JSON.parse(localStorage.getItem("SignUpData")) || [];

function myfun(event) {
  event.preventDefault();
  console.log("yes");
  var Fname = document.getElementById("Fname").value;
  var Lname = document.getElementById("Lname").value;
  var Email = document.getElementById("Email").value;
  var Password = document.getElementById("Password").value;
  var obj = {
    FirstName: Fname,
    LastName: Lname,
    email: Email,
    userPd: Password
  };
  UserData.push(obj);
  localStorage.setItem("SignUpData", JSON.stringify(UserData));
  window.location.href = "login.html";
}
//# sourceMappingURL=signup.dev.js.map
