"use strict";

var addressData = JSON.parse(localStorage.getItem("shippingAddress"));
var user = JSON.parse(localStorage.getItem("user"));
console.log(addressData, user);
var address = addressData.address,
    pincode = addressData.pincode,
    aptNo = addressData.aptNo,
    city = addressData.city;
var addressTag = document.getElementById("shipmentAddress");
addressTag.innerHTML = "".concat(address, ",").concat(city, ",").concat(pincode);
var emailAdd = document.getElementById("userEmail");

if (user === null) {
  emailAdd.innerText = "demo@xyz.com";
} else {
  emailAdd.innerHTML = "".concat(user.email, " ");
}

document.getElementById("submit").addEventListener("click", finalPayment);
var cod = document.getElementById("cashOndelivery");
var card = document.getElementById("cardsPayment");

function finalPayment() {
  if (cod.checked) {
    localStorage.setItem("shipMethod", "cod");
    location.href = "confirmPayment.html";
  }

  if (card.checked) {
    location.href = "confirmPayment.html";
    localStorage.setItem("shipMethod", "card");
    alert("your order confirm");
  }
} // Return to cart


var returncart = document.getElementById("returnCart");
returncart.addEventListener("click", function () {
  location.href = "../cart.html";
});
//# sourceMappingURL=payment.dev.js.map
