"use strict";

var data = JSON.parse(localStorage.getItem("cartItem"));

if (!data) {
  document.getElementById("finalTotal").innerText = 0;
  document.getElementById("subTotal").innerText = 0;
} else {
  var append = function append(data) {
    var app = document.getElementById("productAppend");
    data.forEach(function (el) {
      var div = document.createElement("div");
      div.classList = "productCard";
      var image = document.createElement("img");
      image.src = el.image_url;
      var div2 = document.createElement("div");
      div2.classList = "productText";
      var p = document.createElement("p");
      p.innerText = el.name;
      var span = document.createElement("span");
      span.innerText = el.p_price || el.price;
      div2.append(p);
      div.append(image, div2, span);
      app.append(div);
    });
  };

  var total = 0;
  data.map(function (el) {
    total += el.price;
  });

  if (total !== 0) {
    document.getElementById("finalTotal").innerText = "\u20B9 ".concat(total);
  } else {
    document.getElementById("finalTotal").innerText = 0;
  }

  document.getElementById("subTotal").innerText = "\u20B9 ".concat(total) || 0;
  append(data);
}
//# sourceMappingURL=asideFunction.dev.js.map
