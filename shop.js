const products = [

{
id:"p01",
title:"Landscape Slip Painted Vase",
price:"£175",
image:"images/product-01.jpg",
description:"Wheel thrown vase with dolomite glaze exterior.",
meta:["Stoneware","Watertight","One-off piece"],
soldOut:false
},

{
id:"p02",
title:"Green Interior Bowl",
price:"£95",
image:"images/product-02.jpg",
description:"Large decorative fruit bowl.",
meta:["Ø 22cm","Food safe glaze"],
soldOut:true
},

{
id:"p03",
title:"Tall Stoneware Vase",
price:"£140",
image:"images/product-01.jpg",
description:"Wheel thrown tall form.",
meta:["Stoneware","One-off piece"],
soldOut:false
},

{
id:"p04",
title:"Slip Decorated Vessel",
price:"£120",
image:"images/product-02.jpg",
description:"Slip painted ceramic vessel.",
meta:["Stoneware","Decorative"],
soldOut:false
}

];

const grid = document.getElementById("productGrid");

const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalMeta = document.getElementById("modalMeta");

function renderProducts(){

grid.innerHTML = products.map(p => `

<div class="card" data-id="${p.id}">

<div class="card-media">
${p.soldOut ? `<div class="badge">Sold out</div>` : ``}
<img src="${p.image}" alt="${p.title}">
</div>

<div class="card-meta">
<h3 class="card-title">${p.title}</h3>
<p class="price">${p.price}</p>
</div>

</div>

`).join("");

}

renderProducts();

/* PRODUCT CLICK */

grid.addEventListener("click", e => {

const card = e.target.closest(".card");
if(!card) return;

const id = card.dataset.id;
const p = products.find(x => x.id === id);

modalImg.src = p.image;
modalTitle.textContent = p.title;
modalPrice.textContent = p.price;
modalDesc.textContent = p.description;

modalMeta.innerHTML = p.meta.map(m => `<li>${m}</li>`).join("");

modal.showModal();

});
