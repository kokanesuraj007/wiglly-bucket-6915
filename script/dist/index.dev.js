"use strict";

var imgLink = ["https://d32baadbbpueqt.cloudfront.net/Homepage/cab9a296-0188-45c0-903a-c2da1c84fdbb.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/be784c39-2c84-45d0-89c4-e79f72b380b0.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/5dfdfad9-7419-46b3-85dc-1cde9429619d.gif"];
var middle_slide_bar_arr = [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
  name: "METTLE PRIMING BALM",
  price: "1099",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
  name: "AIR KISS POWDER LIPISTICK",
  price: "499",
  text: "SELECT SHADE"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
  name: "BLING LEADER ILLUMINATING",
  price: "599",
  text: "SELECT SHADE"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
  name: "SMUDGE ME NOT LIQUID LIPSTICK",
  price: "499",
  text: "SELECT SHADE"
}];
var bestSellersRightArr = [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
  name: "SET THE TONE TINTED POWDER",
  price: "699",
  text: "SELECT SHADE"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
  name: "LIP ZIP MATTE TOPPER",
  price: "499"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
  name: "MATTE AS HELL CRAYON LIPSTICK",
  price: "799",
  text: "SELECT SHADE"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
  name: "GODDESS OF FLAWLESS SPF30+ BB CREAM",
  price: "699",
  text: "SELECT SHADE"
}];
var imgLink3 = ["https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/10821512-ceff-4594-934a-86cbde6c6a44.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/64f2889d-e2d9-4047-82cd-e0e820230a77.jpg"];
var hotDealsarr = [[{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/d81e88d8-712e-4e18-90f2-93bd27236050.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/7b817474-27aa-4c69-816d-960bfbc1d2a9.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/8cd53b0d-bb7e-4842-9ddf-1c8666484ee0.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/7145deaa-8296-49ba-9964-061fded28226.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/2cd03446-33d8-47df-982a-3991ac582be1.jpg"
}]];
var imgLinkk = ["https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif", "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"];
var videoPlayArr = [{
  src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836045-uerkdvpa/watermarked/540/InShot_20220309_1844460631.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644919919-drjtghip/watermarked/540/EasyEyelinerHackusingaSpoon.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4"
}, {
  src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4"
}];
var superSaversarr = [[{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219_96fa87f4-f71d-4f8b-9daf-884d71db68e6.jpg?v=1657634758",
  name: "CHEAT SHEET CLARIFYING MASK",
  price: "49",
  text: "ADD TO CART",
  stoffPrice: "99",
  disPer: "(50% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283",
  name: "SHINE AND POUT MAKEUP VALUE SET",
  price: "999",
  text: "ADD TO CART",
  stoffPrice: "1090",
  disPer: "(16% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
  name: "GLAM EYE MAKEUP VALUE SET",
  price: "1249",
  text: "ADD TO CART",
  stoffPrice: "1546",
  disPer: "(19% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
  name: "SET OF 4 KAJAL SET",
  price: "799",
  text: "ADD TO CART",
  stoffPrice: "996",
  disPer: "(19% Off)",
  rupee: "₹"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
  name: "SET OF 4 KAJAL SET",
  price: "799",
  text: "ADD TO CART",
  stoffPrice: "996",
  disPer: "(19% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012",
  name: "RED CARPET MAKEUP TRIO",
  price: "799",
  text: "SELECT SHADE",
  stoffPrice: "1047",
  disPer: "(23% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-set-wbg.jpg?v=1627055238",
  name: "SUNSCREEN + KOHL VALUE SET",
  price: "549",
  text: "ADD TO CART",
  stoffPrice: "890",
  disPer: "(38% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222",
  name: "LIP BALM + SHEET MASK",
  price: "299",
  text: "ADD TO CART",
  stoffPrice: "340",
  disPer: "(14% Off)",
  rupee: "₹"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
  name: "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)",
  price: "549",
  text: "ADD TO CART",
  stoffPrice: "1099",
  disPer: "(50% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-55-americano-deep-12775603372115.jpg?v=1619106493",
  name: "DREAM COVER SPF15 MATTIFYING COMPACT - 55...",
  price: "249",
  text: "ADD TO CART",
  stoffPrice: "499",
  disPer: "(50% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
  name: "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...",
  price: "359",
  text: "ADD TO CART",
  stoffPrice: "599",
  disPer: "(40% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-45-grape-drape-deep-mauve-with-hints-of-purple-15384300027987.jpg?v=1619107024",
  name: "SMUDGE ME NOT LIQUID LIPSTICK - 45 GRAPE DRAPE...",
  price: "249",
  text: "ADD TO CART",
  stoffPrice: "499",
  disPer: "(50% Off)",
  rupee: "₹"
}]];
var topPicksArr = [[{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/fd0f6532-a765-49b0-9f37-589767135b8c.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/8f437065-e285-4235-b03d-373c62ed8fb6.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/ea865de7-450b-4aa0-8b01-33603f23b625.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/9fd423af-a5cb-4f1a-ab12-1f6b52aab0e6.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/f178bd9f-daf0-4988-9671-55170f892ff8.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/9ea33475-7063-4301-aab5-260928211b80.jpg"
}]];
var giftSetsArr = [[{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051",
  name: "MATTE AS HELL CRAYON LIPSTICK..",
  price: "1099",
  text: "SELECT VALUE",
  stoffPrice: "1799",
  disPer: "(38% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1649692645",
  name: "DATE NIGHT MAKEUP KIT",
  price: "1599",
  text: "SHOP NOW",
  stoffPrice: "2193",
  disPer: "(27% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
  name: "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET",
  price: "799",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "999",
  disPer: "(20% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
  name: "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET",
  price: "849",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "1048",
  disPer: "(18% Off)",
  rupee: "₹"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
  name: "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET",
  price: "799",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "999",
  disPer: "(20% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
  name: "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET",
  price: "849",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "1048",
  disPer: "(18% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1649260645",
  name: "ANNIVERSARY KIT",
  price: "1999",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "2793",
  disPer: "(28% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
  name: "HI-5 KIT",
  price: "999",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "1295",
  disPer: "(22% Off)",
  rupee: "₹"
}]]; // top side img frame

var leftbtn = document.getElementById("leftbtn");
var rightbtn = document.getElementById("rightbtn");
var crauser = document.getElementById("crauser");
var imagestate = 0;
rightbtn.addEventListener("click", function () {
  imagestate++;

  if (imagestate === imgLink.length) {
    imagestate = 0;
  }

  crauser.src = imgLink[imagestate];
});
leftbtn.addEventListener("click", function () {
  imagestate--;

  if (imagestate < 0) {
    imagestate = imgLink.length - 1;
  }

  crauser.src = imgLink[imagestate];
}); //forth box bestseller

var pro_div = document.querySelector(".best_seller_products");

var bestSeller = function bestSeller(middle_slide_bar_arr, container) {
  container.innerText = "";
  middle_slide_bar_arr.forEach(function (el) {
    // console.log(el)
    var div = document.createElement("div");
    div.className = "four_pro_div";
    var bsimg = document.createElement("img");
    bsimg.src = el.img_url;
    bsimg.style.height = "250px";
    bsimg.style.width = "100%";
    var bsname = document.createElement("div");
    bsname.className = "pro_name";
    bsname.innerText = el.name;
    var pdiv = document.createElement("div");
    pdiv.className = "pdiv";
    var bsprice = document.createElement("p");
    bsprice.innerText = "\u20B9 ".concat(el.price);
    pdiv.append(bsprice);
    var bstag = document.createElement("div");
    bstag.className = "text_tag";
    bstag.innerText = el.text;
    var img_name_price_div = document.createElement("div");
    img_name_price_div.className = "img_name_price_div";
    img_name_price_div.append(bsimg, bsname, pdiv);
    div.append(img_name_price_div, bstag); // console.log(div)

    container.append(div);
  });
};

bestSeller(middle_slide_bar_arr, pro_div);
var flag1 = true;
document.querySelector(".left_arr_div").addEventListener("click", function () {
  flag1 = !flag1;

  if (flag1) {
    bestSeller(middle_slide_bar_arr, pro_div);
  } else {
    bestSeller(bestSellersRightArr, pro_div);
  }
});
var flag2 = false;
document.querySelector(".right_arr_div").addEventListener("click", function () {
  flag2 = !flag2;

  if (flag2) {
    bestSeller(bestSellersRightArr, pro_div);
  } else {
    bestSeller(middle_slide_bar_arr, pro_div);
  }
}); //  beauty tips

var leftbtn3 = document.getElementById("leftbtn3");
var rightbtn3 = document.getElementById("rightbtn3");
var crauser3 = document.getElementById("crauser3");
var imagestate3 = 0;
rightbtn3.addEventListener("click", function () {
  imagestate3++;

  if (imagestate3 === imgLink3.length) {
    imagestate3 = 0;
  }

  crauser3.src = imgLink3[imagestate3];
});
leftbtn3.addEventListener("click", function () {
  imagestate3--;

  if (imagestate3 < 0) {
    imagestate3 = imgLink3.length - 1;
  }

  crauser3.src = imgLink3[imagestate3];
}); // Hot deals

var main_div = document.querySelector(".slider");

var imageSlide = function imageSlide(arr, container) {
  container.innerText = "";

  for (var i = 0; i < arr.length; i++) {
    //    console.log(arr)
    arr[i].map(function (el) {
      var sliding_div = document.createElement("div");
      sliding_div.className = "sliding_div";
      var img_div = document.createElement("img");
      img_div.className = "bannerimg";
      img_div.src = el.img_url;
      sliding_div.append(img_div);
      container.append(sliding_div);
    });
  }
};

imageSlide(hotDealsarr, main_div);
var hdSlide = document.querySelector(".slider");
var temp = 0;
document.querySelector(".hdLarr").addEventListener("click", function () {
  var winWidth = 1263;
  temp = temp - winWidth;

  var _final = winWidth * (hotDealsarr.length - 1);

  if (temp > 0) {
    console.group("left", temp);
    hdSlide.style.transform = "translate3d(".concat(-temp, "px,0px,0px)");
    hdSlide.style.transition = ".4s";
  } else {
    hdSlide.style.transform = "translate3d(".concat(-_final, "px,0px,0px)");
    hdSlide.style.transition = "0.2s";
    temp = _final;
  }
});
document.querySelector(".hdRarr").addEventListener("click", function () {
  var winWidth = 1263;
  temp = temp + winWidth;
  console.group("right", temp);

  if (temp < winWidth * 7) {
    hdSlide.style.transform = "translate3d(".concat(-temp, "px,0px,0px)");
    hdSlide.style.transition = ".4s";
  } else {
    hdSlide.style.transform = "translate3d(".concat(-0, "px,0px,0px)");
    hdSlide.style.transition = "0.2s";
    temp = 0;
  }
}); //new lunched

var leftbtnn = document.getElementById("leftbtnn");
var rightbtnn = document.getElementById("rightbtnn");
var crauserr = document.getElementById("crauserr");
var imagestatee = 0;
rightbtnn.addEventListener("click", function () {
  imagestatee++;

  if (imagestatee === imgLinkk.length) {
    imagestatee = 0;
  }

  crauserr.src = imgLinkk[imagestatee];
});
leftbtnn.addEventListener("click", function () {
  imagestatee--;

  if (imagestatee < 0) {
    imagestatee = imgLinkk.length - 1;
  }

  crauserr.src = imgLinkk[imagestatee];
}); //  Sugar streaming 

var vid_div = document.querySelector(".vidSlider");

var videoPlay = function videoPlay(data) {
  data.forEach(function (el) {
    var video_div = document.createElement("div");
    video_div.className = "video_div";
    var video = document.createElement("video");
    video.src = el.src;
    video.style.border = "0";
    video.className = "videoshorts";
    video.style.cursor = "pointer"; // console.log(video)

    vid_div.append(video);
  });
};

videoPlay(videoPlayArr);
var clip = document.querySelectorAll(".videoshorts");

var _loop = function _loop(i) {
  clip[i].addEventListener("mouseover", function (e) {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
};

for (var i = 0; i < clip.length; i++) {
  _loop(i);
}

var vidTemp = 0;
document.querySelector("#left").addEventListener("click", function () {
  var winWidth = window.outerWidth;
  vidTemp = vidTemp - winWidth * 0.74;

  if (vidTemp > 0) {
    console.group("left", vidTemp);
    vid_div.style.transform = "translateX(".concat(-vidTemp, "px)");
    vid_div.style.transition = ".4s";
  } else {
    vid_div.style.transform = "translateX(".concat(-0, "px)");
    vid_div.style.transition = ".4s";
    vidTemp = 0;
  }
});
document.querySelector("#right").addEventListener("click", function () {
  var winWidth = window.outerWidth;
  vidTemp = vidTemp + winWidth * 0.74;
  console.group("right", vidTemp, winWidth);

  if (vidTemp < winWidth * 3) {
    vid_div.style.transform = "translateX(".concat(-vidTemp, "px)");
    vid_div.style.transition = ".4s";
  } else {
    vidTemp = vidTemp - winWidth * 0.74;
  }
}); // Super savers 

var superSaversdiv = document.querySelector(".ninth_box_slide_div");

var superSavers = function superSavers(superSaversarr, container) {
  container.innerText = "";
  superSaversarr.forEach(function (el) {
    // console.log(el)
    var div = document.createElement("div");
    div.className = "four_pro_div";
    var bsimg = document.createElement("img");
    bsimg.src = el.img_url;
    bsimg.style.height = "250px";
    bsimg.style.width = "100%";
    var bsname = document.createElement("div");
    bsname.className = "pro_name";
    bsname.innerText = el.name;
    var main_price_div = document.createElement("div");
    main_price_div.className = "ssprice_div";
    var stoffdiv = document.createElement("div");
    stoffdiv.className = "stoffdiv";
    var rupee = document.createElement("p");
    rupee.innerText = el.rupee;
    var stoffPrice = document.createElement("p");
    stoffPrice.innerText = "".concat(el.stoffPrice);
    stoffdiv.append(rupee, stoffPrice);
    var pdiv = document.createElement("div");
    pdiv.className = "pdiv";
    var bsprice = document.createElement("p");
    bsprice.innerText = " \u20B9 ".concat(el.price);
    pdiv.append(bsprice);
    var disPer = document.createElement("p");
    disPer.style.color = "#fc3183";
    disPer.innerText = el.disPer;
    main_price_div.append(stoffdiv, pdiv, disPer);
    var bstag = document.createElement("div");
    bstag.className = "text_tag";
    bstag.innerText = el.text;
    var img_name_price_div = document.createElement("div");
    img_name_price_div.className = "img_name_price_div";
    img_name_price_div.append(bsimg, bsname, main_price_div);
    div.append(img_name_price_div, bstag); // console.log(div)

    container.append(div);
  });
};

superSavers(superSaversarr[0], superSaversdiv);
var ssleft = 0;
var ssright = 0;
document.querySelector(".ssleft_arr_div").addEventListener("click", function () {
  ssleft--;

  if (ssleft >= 0) {
    ssright--;
    superSavers(superSaversarr[ssleft], superSaversdiv);
  } else {
    ssleft = 2;
    ssright = 2;
    superSavers(superSaversarr[2], superSaversdiv);
  }
});
document.querySelector(".ssright_arr_div").addEventListener("click", function () {
  ssright++;

  if (ssright < 3) {
    ssleft++;
    superSavers(superSaversarr[ssright], superSaversdiv);
  } else {
    ssleft = 0;
    ssright = 0;
    superSavers(superSaversarr[0], superSaversdiv);
  }
}); // Top pics of the week

var topPicksdiv = document.querySelector(".tpSlider");
imageSlide(topPicksArr, topPicksdiv);
var tpTemp = 0;
document.querySelector(".tpLarr").addEventListener("click", function () {
  tpTemp = tpTemp - winWidth;

  var _final2 = winWidth * (topPicksArr.length - 1);

  if (tpTemp >= 0) {
    console.group("left", tpTemp);
    topPicksdiv.style.transform = "translate3d(".concat(-tpTemp, "px,0px,0px)");
    topPicksdiv.style.transition = ".4s";
  } else {
    topPicksdiv.style.transform = "translate3d(".concat(-_final2, "px,0px,0px)");
    topPicksdiv.style.transition = "0.2s";
    tpTemp = _final2;
  }
});
document.querySelector(".tpRarr").addEventListener("click", function () {
  tpTemp = tpTemp + winWidth;
  console.group("right", tpTemp);

  if (tpTemp < winWidth * topPicksArr.length) {
    topPicksdiv.style.transform = "translate3d(".concat(-tpTemp, "px,0px,0px)");
    topPicksdiv.style.transition = ".4s";
  } else {
    topPicksdiv.style.transform = "translate3d(".concat(-0, "px,0px,0px)");
    topPicksdiv.style.transition = "0.2s";
    tpTemp = 0;
  }
}); //GIFTING

var giftSetsdiv = document.querySelector(".eleventh_box_slide_div");
superSavers(giftSetsArr[0], giftSetsdiv);
var gsleft = 0;
var gsright = 0;
document.querySelector(".gsleft_arr_div").addEventListener("click", function () {
  gsleft--;

  if (gsleft >= 0) {
    gsright--;
    superSavers(giftSetsArr[gsleft], giftSetsdiv);
  } else {
    gsleft = 1;
    gsright = 1;
    superSavers(giftSetsArr[1], giftSetsdiv);
  }
});
document.querySelector(".gsright_arr_div").addEventListener("click", function () {
  gsright++;

  if (gsright < 2) {
    gsleft++;
    superSavers(giftSetsArr[gsright], giftSetsdiv);
  } else {
    gsleft = 0;
    gsright = 0;
    superSavers(giftSetsArr[0], giftSetsdiv);
  }
}); //This or That

var thisorthatarr = [[{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/6b7c68f2-b4ae-45cd-9009-4fd44f810858.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/f0fb178d-021b-4e83-95c6-ee4fa373ebfc.jpg"
}]];
var thisorthatdiv = document.querySelector(".twelth_box_div");
imageSlide(thisorthatarr, thisorthatdiv); // //  Just in

var justInArr = [[{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460",
  name: "VINEET'S FAVOURITE MAKEUP KIT",
  price: "2999",
  text: "SELECT SHADE",
  stoffPrice: "4243",
  disPer: "(29% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108",
  name: "CONTOUR DE FORCE EYES AND FACE PALETTE ",
  price: "1099",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/399160329-9-to-5-makeup-kit-wbg-01.jpg?v=1654013564",
  name: "9 TO 5 MAKEUP KIT ",
  price: "999",
  text: "ADD TO CART ",
  stoffPrice: "1346",
  disPer: "(25% Off)",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Monsoon-Makeup-Kit---WBG-Images_1_66ba2237-0dad-42dc-88ea-c2d45555dd6a.jpg?v=1657814549",
  name: "MONSOON MAKEUP KIT",
  price: "1799",
  text: "SHOP NOW",
  stoffPrice: "2344",
  disPer: "(23% Off)",
  rupee: "₹"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021",
  name: "THE MOST ELIGIBLUR CORRECTING PRIMER",
  price: "799",
  text: "CHOOSE PRODUTS",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1d9f20a6-69b8-4585-9d09-d4d1f8f309d6.jpg?v=1649433263",
  name: "FLAW LESS FACE MAKEUP TRIO SET",
  price: "1199",
  text: "CHOOSE PRODUTS",
  stoffPrice: "1390",
  disPer: "(14% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
  name: "BLING LEADER ILLUMINATING SUNSCREEN SPF35 PA+++",
  price: "599",
  text: "SELECT SHADE",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-1.jpg?v=1642089034",
  name: "BEGINNERS MAKEUP COMBO",
  price: "999",
  text: "ADD TO CART",
  stoffPrice: "1190",
  disPer: "(16% Off)",
  rupee: "₹"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638200716",
  name: "TOO GOOD TO BE TRUE DUAL EYESHADOW",
  price: "499",
  text: "SHOP NOW",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
  name: "OWN THE HIGH LIQUID HIGHLIGHTER",
  price: "649",
  text: "SHOP NOW",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
  name: "TRIPLE DELIGHT MAKEUP SET",
  price: "649",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "847",
  disPer: "(23% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
  name: "PARTY READY KIT",
  price: "1299",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "1994",
  disPer: "(34% Off)",
  rupee: "₹"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
  name: "OWN THE HIGH LIQUID HIGHLIGHTER",
  price: "649",
  text: "SHOP NOW",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
  name: "TRIPLE DELIGHT MAKEUP SET",
  price: "649",
  text: "CHOOSE PRODUCTS",
  stoffPrice: "847",
  disPer: "(23% Off)",
  rupee: "₹"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
  name: "DOUBLE DATE EXTREME VOLUME MASCARA DUO 01...",
  price: "799",
  text: "SHOP NOW",
  stoffPrice: "",
  disPer: "",
  rupee: ""
}]];
var justInDiv = document.querySelector(".thirteenth_box_slide_div");
superSavers(justInArr[0], justInDiv);
var jileft = 0;
var jiright = 0;
document.querySelector(".jileft_arr_div").addEventListener("click", function () {
  jileft--;

  if (jileft >= 0) {
    jiright--;
    superSavers(justInArr[jileft], justInDiv);
  } else {
    jileft = 3;
    jiright = 3;
    superSavers(justInArr[3], justInDiv);
  }
});
document.querySelector(".jiright_arr_div").addEventListener("click", function () {
  jiright++;

  if (jiright < 4) {
    jileft++;
    superSavers(justInArr[jiright], justInDiv);
  } else {
    jileft = 0;
    jiright = 0;
    superSavers(justInArr[0], justInDiv);
  }
}); //sugar beauty blog

var sugarbeautyArr = [[{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/3d42df13-a169-43e3-82a0-e134d709aeb1.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/b3028e28-128b-43a5-be63-de299bdeb1c0.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/159edce9-3429-4cf2-b0cf-573c147f8307.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/5ebe522a-6ae1-440c-bc34-51ddcd47b2a2.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/0f3af3fe-9286-466f-b67f-97e868d1b916.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/26d8c9c5-65f0-4a0b-8eea-3956649cf793.jpg"
}]];
var sugarbeautydiv = document.querySelector(".fourteenth_box_div");
imageSlide(sugarbeautyArr, sugarbeautydiv); //skincare Basic

var skincareBasicsArr = [[{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315",
  name: "COFFEE CULTURE LIP SCRUB",
  price: "299",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-cleansing-balm-stick-01.jpg?v=1643375708",
  name: "COFFEE CULTURE CLEANING BALM STICK",
  price: "699",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyaluronic-Serum-3_1.jpg?v=1626423730",
  name: "AQUAHOLIC HYALURONIC SERUM",
  price: "499",
  text: "SELECT SHADE"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
  name: "BLING LEADER ILLUMINATING SUNSCREEN SPF35 PA+++",
  price: "599",
  text: "ADD TO CART"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
  name: "AQUAHOLIC HYDRATING PRIMER",
  price: "699",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
  name: "POWER CLAY MASK STICK",
  price: "699",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
  name: "AQUAHOLIC INSTATNT PORE CLEANSING MASK",
  price: "499",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
  name: "COFFEE CULTURE EYE FIRMING CREAM",
  price: "399",
  text: "ADD TO CART"
}], [{
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
  name: "POWER CLAY MASK STICK",
  price: "699",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
  name: "AQUAHOLIC INSTATNT PORE CLEANSING MASK",
  price: "499",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
  name: "COFFEE CULTURE EYE FIRMING CREAM",
  price: "399",
  text: "ADD TO CART"
}, {
  img_url: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
  name: "CHEAT SHEET CLARIFYING MASK",
  price: "99",
  text: "ADD TO CART"
}]];
var skincareBasicDiv = document.querySelector(".fifteenth_box_slide_div");
bestSeller(skincareBasicsArr[0], skincareBasicDiv);
var sbleft = 0;
var sbright = 0;
document.querySelector(".sbleft_arr_div").addEventListener("click", function () {
  console.log("i am in");
  sbleft--;

  if (sbleft >= 0) {
    sbright--;
    bestSeller(skincareBasicsArr[sbleft], skincareBasicDiv);
  } else {
    sbleft = 2;
    sbright = 2;
    bestSeller(skincareBasicsArr[2], skincareBasicDiv);
  }
});
document.querySelector(".sbright_arr_div").addEventListener("click", function () {
  console.log("i am in");
  sbright++;

  if (sbright < 3) {
    sbleft++;
    bestSeller(skincareBasicsArr[sbright], skincareBasicDiv);
  } else {
    sbleft = 0;
    sbright = 0;
    bestSeller(skincareBasicsArr[0], skincareBasicDiv);
  }
}); //   Explore 

var exploreArr = [[{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c6b8c7af-0f0c-480a-b386-e6ce2985e103.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/0a350df5-ba89-40a5-8a8e-e3e617139597.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/3f3d8635-7613-4dab-8c99-a62b05db784f.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/94392987-596e-4b14-b378-86a4b43544c0.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/76b4a358-adfb-4f52-944b-8bb49f57b4a9.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c94a0d07-3912-4b78-a502-ee10907b3a63.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/17ea5862-3403-4b13-a7fc-e7736aaeee97.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c6b8c7af-0f0c-480a-b386-e6ce2985e103.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/0a350df5-ba89-40a5-8a8e-e3e617139597.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/3f3d8635-7613-4dab-8c99-a62b05db784f.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/94392987-596e-4b14-b378-86a4b43544c0.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/76b4a358-adfb-4f52-944b-8bb49f57b4a9.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c94a0d07-3912-4b78-a502-ee10907b3a63.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/17ea5862-3403-4b13-a7fc-e7736aaeee97.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c6b8c7af-0f0c-480a-b386-e6ce2985e103.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/0a350df5-ba89-40a5-8a8e-e3e617139597.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/3f3d8635-7613-4dab-8c99-a62b05db784f.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/94392987-596e-4b14-b378-86a4b43544c0.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/76b4a358-adfb-4f52-944b-8bb49f57b4a9.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c94a0d07-3912-4b78-a502-ee10907b3a63.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/17ea5862-3403-4b13-a7fc-e7736aaeee97.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c6b8c7af-0f0c-480a-b386-e6ce2985e103.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/0a350df5-ba89-40a5-8a8e-e3e617139597.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/3f3d8635-7613-4dab-8c99-a62b05db784f.jpg"
}], [{
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/94392987-596e-4b14-b378-86a4b43544c0.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/76b4a358-adfb-4f52-944b-8bb49f57b4a9.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/c94a0d07-3912-4b78-a502-ee10907b3a63.jpg"
}, {
  img_url: "https://d32baadbbpueqt.cloudfront.net/Homepage/17ea5862-3403-4b13-a7fc-e7736aaeee97.jpg"
}]];
var exploreDiv = document.querySelector(".exSlider");
imageSlide(exploreArr, exploreDiv);
var exTemp = 0;
var winWidth = 1263;
document.querySelector(".exLarr").addEventListener("click", function () {
  exTemp = exTemp - winWidth;

  var _final3 = winWidth * (exploreArr.length - 1);

  if (exTemp >= 0) {
    console.group("left", exTemp);
    exploreDiv.style.transform = "translate3d(".concat(-exTemp, "px,0px,0px)");
    exploreDiv.style.transition = ".4s";
  } else {
    exploreDiv.style.transform = "translate3d(".concat(-_final3, "px,0px,0px)");
    exploreDiv.style.transition = "0.2s";
    exTemp = _final3;
  }
});
document.querySelector(".exRarr").addEventListener("click", function () {
  exTemp = exTemp + winWidth;
  console.group("right", exTemp);

  if (exTemp < winWidth * exploreArr.length) {
    exploreDiv.style.transform = "translate3d(".concat(-exTemp, "px,0px,0px)");
    exploreDiv.style.transition = ".4s";
  } else {
    exploreDiv.style.transform = "translate3d(".concat(-0, "px,0px,0px)");
    exploreDiv.style.transition = "0.2s";
    exTemp = 0;
  }
});
//# sourceMappingURL=index.dev.js.map
