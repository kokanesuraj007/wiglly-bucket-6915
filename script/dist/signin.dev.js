"use strict";

var UserData = JSON.parse(localStorage.getItem("SignUpData"));
document.getElementById("form").addEventListener("submit", myfunc);

function myfunc() {
  event.preventDefault();
  console.log("yes");
  var email = document.getElementById("Email").value;
  var password = document.getElementById("Password").value;
  var user = {
    Email: email,
    Password: password
  };

  if (UserData === null) {
    alert("Create an Account");
  } else {
    var value = false;
    UserData.forEach(function (element) {
      if (element.email == user.Email && element.userPd == user.Password) {
        value = true;
        var loginData = {
          email: element.email,
          fname: element.FirstName,
          lname: element.LastName
        };
        localStorage.setItem("user", JSON.stringify(loginData));
      }
    });

    if (value) {
      alert("Login Successful");
      location.replace("../index.html"); //here paste the page link to redirect.
    } else {
      alert("Email Or Password is Incorrect");
    }
  }
}
//# sourceMappingURL=signin.dev.js.map
