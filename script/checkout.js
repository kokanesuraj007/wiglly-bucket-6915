let userAddress =function (e)  {
    e.preventDefault();
    let data = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      address: document.getElementById("address").value,
      aptNo: document.getElementById("apartment").value,
      pincode: document.getElementById("pinCode").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      phoneNum: document.getElementById("phoneNumber").value,
    };
    localStorage.setItem("shippingAddress", JSON.stringify(data));
    location.href = "shiping.html";
  };
  
  document.getElementById("submit").addEventListener("click", userAddress);
  
  let userData = document.getElementById("showUserData");
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    userData.innerText = "demo@xyz.com";
  } else {
    userData.innerHTML = `${user.fname} ${user.lname} (${user.email}) `;
  }
  
  let logout = document.getElementById("logOut");
  logout.addEventListener("click", function() {
    location.replace("./login.html");
  });
  // Return to cart
  let returncart = document.getElementById("returnCart");
  returncart.addEventListener("click",function ()  {
    location.href = "../cart.html";
  });
  