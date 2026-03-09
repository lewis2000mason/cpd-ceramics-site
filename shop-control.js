const SHOP_OPEN = false;

document.addEventListener("DOMContentLoaded", () => {

const grid = document.getElementById("productGrid");
const comingSoon = document.getElementById("comingSoon");

if(!grid || !comingSoon) return;

if(SHOP_OPEN){

grid.style.display = "grid";
comingSoon.style.display = "none";

}

else{

grid.style.display = "none";
comingSoon.style.display = "flex";

}

});
