
let confirmComp = document.getElementById("confirmPage");
confirmComp.style.display = "none";
let otpComp = document.getElementById("otp");
otpComp.style.display = "none";
let card = document.getElementById("pCard");
card.style.display = "none";
let shiMeth = localStorage.getItem("shipMethod");
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
  let otpComp = document.getElementById("otp");
  otpComp.style.display = "block";

  otpComp.innerHTML = otp();

  //   let otpNum = document.getElementById("otpNum");
  document.getElementById("otpVerify").addEventListener("click", verifyFun);
}
function verifyFun() {
  let otpNumber = document.getElementById("otpNum").value;
  console.log(otpNumber);
  if (Number(otpNumber) === 1008) {
    otpComp.style.display = "none";
    // console.log("karan  ");
    confirmPage();
  }
}

function confirmPage() {
  document.title = "Order Confirmed";
  confirmComp.style.display = "block";
  confirmComp.innerHTML = confirm();
  let cart = [];
  localStorage.setItem("cartItem", JSON.stringify(cart));
  let i = 3;
  setInterval(function() {
    location.href = "../index.html";
  }, 5000);
}
// cardData();

let btn = document.getElementById("cardSubmit");
btn.addEventListener("click", cardData);
function cardData() {
  let data = {
    cNum: document.getElementById("cardNumber").value,
    mmyy: document.getElementById("month").value,
    cvv: document.getElementById("cvv").value,
    cName: document.getElementById("hName").value,
  };
  console.log(data);
  if (cardDataConfir(data)) {
    card.style.display = "none";
    codComp();
  }
}
function cardDataConfir(data) {
  if (
    data.cNum.length === 6 &&
    data.mmyy.length === 5 &&
    data.cvv.length === 3
  ) {
    return true;
  } else {
    alert("Invalid Card Details");
  }
}
