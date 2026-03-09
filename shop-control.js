// =============================
// CERAMICS DROP SYSTEM
// =============================

// true = shop open
// false = shop closed (shows next drop message)

const SHOP_OPEN = false;


// optional drop date text
const NEXT_DROP = "Next drop announced on Instagram";



document.addEventListener("DOMContentLoaded", () => {

const grid = document.getElementById("productGrid");
const comingSoon = document.getElementById("comingSoon");
const shopTitle = document.getElementById("shopTitle");
const dropText = document.getElementById("dropText");

if (!grid || !comingSoon) return;


// SHOP OPEN

if (SHOP_OPEN) {

grid.style.display = "grid";
comingSoon.style.display = "none";

if (shopTitle) shopTitle.textContent = "Available Work";

}


// SHOP CLOSED

else {

grid.style.display = "none";
comingSoon.style.display = "flex";

if (shopTitle) shopTitle.textContent = "Next Drop";

if (dropText) dropText.textContent = NEXT_DROP;

}

});
