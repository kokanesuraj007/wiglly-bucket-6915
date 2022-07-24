"use strict";

var confirmComp = document.getElementById("confirmPage");
confirmComp.style.display = "none";
var otpComp = document.getElementById("otp");
otpComp.style.display = "none";
var card = document.getElementById("pCard");
card.style.display = "none";
var shiMeth = localStorage.getItem("shipMethod");
display();

function display() {
  if (shiMeth == "card") {
    card.style.display = "block";
    card.innerHTML = payCard();
  }

  if (shiMeth == "cod") {
    codComp();
  }
}

function codComp() {
  var otpComp = document.getElementById("otp");
  otpComp.style.display = "block";
  otpComp.innerHTML = otp(); //   let otpNum = document.getElementById("otpNum");

  document.getElementById("otpVerify").addEventListener("click", verifyFun);
}

function verifyFun() {
  var otpNumber = document.getElementById("otpNum").value;
  console.log(otpNumber);

  if (Number(otpNumber) === 1008) {
    otpComp.style.display = "none"; // console.log("karan  ");

    confirmPage();
  }
}

function confirmPage() {
  document.title = "Order Confirmed";
  confirmComp.style.display = "block";
  confirmComp.innerHTML = confirm();
  var cart = [];
  localStorage.setItem("cartItem", JSON.stringify(cart));
  var i = 3;
  setInterval(function () {
    location.href = "../index.html";
  }, 5000);
} // cardData();


var btn = document.getElementById("cardSubmit");
btn.addEventListener("click", cardData);

function cardData() {
  var data = {
    cNum: document.getElementById("cardNumber").value,
    mmyy: document.getElementById("month").value,
    cvv: document.getElementById("cvv").value,
    cName: document.getElementById("hName").value
  };
  console.log(data);

  if (cardDataConfir(data)) {
    card.style.display = "none";
    codComp();
  }
}

function cardDataConfir(data) {
  if (data.cNum.length === 6 && data.mmyy.length === 5 && data.cvv.length === 3) {
    return true;
  } else {
    alert("Invalid Card Details");
  }
}
//# sourceMappingURL=confirmpayment.dev.js.map
