let data = JSON.parse(localStorage.getItem("cartItem"));
if (!data) {
  document.getElementById("finalTotal").innerText = 0;
  document.getElementById("subTotal").innerText = 0;
} else {
  let total = 0;
  data.map((el) => {
    total += el.price;
  });
  if (total !== 0) {
    document.getElementById("finalTotal").innerText = `₹ ${total}`;
  } else {
    document.getElementById("finalTotal").innerText = 0;
  }

  document.getElementById("subTotal").innerText = `₹ ${total}` || 0;

  append(data);
  function append(data) {
    let app = document.getElementById("productAppend");

    data.forEach((el) => {
      let div = document.createElement("div");
      div.classList = "productCard";
      let image = document.createElement("img");
      image.src = el.image_url;
      let div2 = document.createElement("div");
      div2.classList = "productText";
      let p = document.createElement("p");
      p.innerText = el.name;
      let span = document.createElement("span");
      span.innerText = el.p_price || el.price;
      div2.append(p);
      div.append(image, div2, span);
      app.append(div);
    });
  }
}
