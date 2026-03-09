// =============================
// CERAMICS SHOP DROP CONTROL
// =============================

// CHANGE THIS VALUE

const SHOP_OPEN = false;

// true = shop visible
// false = coming soon screen



document.addEventListener("DOMContentLoaded", function () {

const shop = document.getElementById("shop-items");
const comingSoon = document.getElementById("coming-soon");

if (!shop || !comingSoon) return;

if (SHOP_OPEN === true) {

shop.style.display = "grid";
comingSoon.style.display = "none";

}

else {

shop.style.display = "none";
comingSoon.style.display = "flex";

}

});
