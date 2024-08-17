document.addEventListener("DOMContentLoaded", function () {
    let productList = localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [];

    const cardContainer = document.querySelector(".card");

    const productCard = ({ title, img, price, desc }, index) => {
        return `
        <div class="w-full max-w-sm border rounded-lg text-white relative" data-index="${index}">
            <a href="#"><img class="p-8 rounded-t-lg" src="${img}" alt="" /></a>
            <div class="px-5 pb-5">
                <a href="#"><h5 class="text-2xl font-semibold">${title}</h5></a>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold">$${price}</span>
                    <a href="#" class="text-white bg-blue-700 outline-none font-medium rounded-lg text-sm px-5 py-3 text-center">Add to cart</a>
                </div>
                <p>${desc}</p>
            </div>
            <button class="absolute text-white top-1 right-3 text-xl delete-btn"><i class="fa-solid fa-xmark"></i></button>
        </div>
        `;
    };

    const renderData = (data, container, fun) => {
        container.innerHTML = `${data.map(fun).join("")}`;
    };

    const deleteProduct = (index) => {
        productList.splice(index, 1);
        localStorage.setItem("productList", JSON.stringify(productList));
        renderData(productList, cardContainer, productCard);
    };

    cardContainer.addEventListener("click", function (e) {
        if (e.target.closest(".delete-btn")) {
            const card = e.target.closest("[data-index]");
            const index = card.getAttribute("data-index");
            deleteProduct(index);
        }
    });

    renderData(productList, cardContainer, productCard);
});







// local storage 3 methods 
// 1 localStorage.setItem() // pass 2 arguments key,value for add new or modify
// 2 localStorage.getItem() // pass 1 arguments key
// 3 localStorage.clear() // no arguments clear all 
//save array or object in localStorage use JSON Methods  json.stringfy to covert in string jsao.parse convert to orignal format 



