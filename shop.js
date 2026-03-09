const products = [

{
title: "Stoneware Bowl",
price: "£45",
image: "images/bowl1.jpg",
description: "Wheel-thrown stoneware bowl."
},

{
title: "Thrown Vase",
price: "£65",
image: "images/vase1.jpg",
description: "Wheel-thrown vase."
}

];

const grid = document.getElementById("productGrid");

if(grid){

products.forEach(product => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `

<div class="card-media">
<img src="${product.image}" alt="${product.title}">
</div>

<div class="card-meta">
<span>${product.title}</span>
<span class="price">${product.price}</span>
</div>

`;

grid.appendChild(card);

});

}
