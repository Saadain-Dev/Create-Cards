const productList = localStorage.getItem("productList") ? localStorage.getItem(JSON.parse("productList"))  : [];

const cardContainer = document.querySelector(".card");
const productCard = ({title,img,price,desc}) => {
    return`
    <div class="w-full max-w-sm border rounded-lg text-white">
  <a href="#"><img class="p-8 rounded-t-lg" src="${img}" alt="" /></a>
  <div class="px-5 pb-5">
  <a href="#"><h5 class="text-2xl font-semibold">${title}</h5></a>
  <div class="flex items-center justify-between">
    <span class="text-xl font-bold">$${price}</span>
     <a href="#" class="text-white bg-blue-700 outline-none font-medium rounded-lg text-sm px-5 py-3 text-center">Add to cart</a>
  </div>
  <p>${desc}</p>
  </div>
  </div>
  `}
  
  const renderData = (data, container, fun) => {
  container.innerHTML = `${data.map(fun).join("")}`;
  };

// renderData(ProductList,cardContainer,productCard);





// local storage 3 methods 
// 1 localStorage.setItem() // pass 2 arguments key,value for add new or modify
// 2 localStorage.getItem() // pass 1 arguments key
// 3 localStorage.clear() // no arguments clear all 
//save array or object in localStorage use JSON Methods  json.stringfy to covert in string jsao.parse convert to orignal format 



