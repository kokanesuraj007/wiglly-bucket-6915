let addressData = JSON.parse(localStorage.getItem("shippingAddress"));
let user = JSON.parse(localStorage.getItem("user"));
console.log(addressData, user);
let { address, pincode, aptNo, city } = addressData;
let addressTag = document.getElementById("shipmentAddress");
addressTag.innerHTML = `${address},${city},${pincode}`;
let emailAdd = document.getElementById("userEmail");
if (user === null) {
  emailAdd.innerText = "demo@xyz.com";
} else {
  emailAdd.innerHTML = `${user.email} `;
}

document.getElementById("submit").addEventListener("click",function ()  {
  location.href = "payment.html";
});

let returncart = document.getElementById("returnCart");
returncart.addEventListener("click",function ()  {
  location.href = "../cart.html";
});
