document.getElementById("form").addEventListener("submit", myfun);
var UserData = JSON.parse(localStorage.getItem("SignUpData")) || [];
function myfun() {
  event.preventDefault();
  console.log("yes");
  let Fname = document.getElementById("Fname").value;
  let Lname = document.getElementById("Lname").value;
  let Email = document.getElementById("Email").value;
  let Password = document.getElementById("Password").value;

  var obj = {
    FirstName: Fname,
    LastName: Lname,
    email: Email,
    userPd: Password,
  };
  UserData.push(obj);
  localStorage.setItem("SignUpData", JSON.stringify(UserData));
  window.location.href = "login.html";
}