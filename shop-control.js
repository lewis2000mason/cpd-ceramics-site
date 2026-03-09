// SHOP CONTROL
// Change this to true or false depending on whether the shop is open

const shopOpen = false;

document.addEventListener("DOMContentLoaded", () => {

    const shopSection = document.getElementById("shop-items");
    const comingSoon = document.getElementById("shop-coming-soon");

    if (shopOpen) {
        shopSection.style.display = "grid";
        comingSoon.style.display = "none";
    } else {
        shopSection.style.display = "none";
        comingSoon.style.display = "flex";
    }

});
