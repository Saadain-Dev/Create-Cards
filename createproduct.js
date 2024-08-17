const productForm = document.querySelector("form");
const productList = localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [];

const product = { title: "", img: "", price: "", desc: "" };

const getData = (e) => {
  product[e.id] = e.id === "img" ? URL.createObjectURL(e.files[0]) : e.value;
};

const Submit = (e) => {
  e.preventDefault(); 

  document.querySelectorAll("input, textarea").forEach((input) => getData(input));

  productList.push({ ...product });

  localStorage.setItem("productList", JSON.stringify(productList));

  productForm.reset();

  window.location.href = "/";
};

productForm.addEventListener("submit", Submit);



