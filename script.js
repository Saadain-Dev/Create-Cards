const productForm = document.querySelector("form");
const ProductList = [];
const Product = {
  title: "",
  img: "",
  price:"",
  desc: "",
};
const getData =  (e) => Product[e.id] = e.id == "img" ? URL.createObjectURL(e.files[0]):e.value;
const Submit = (e) => {
  e.preventDefault();
  ProductList.push({...Product});
renderData(ProductList,cardContainer,productCard);
// productForm.reset();
}
productForm.addEventListener("submit",Submit);


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

renderData(ProductList,cardContainer,productCard);