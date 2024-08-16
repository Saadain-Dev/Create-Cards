const productForm = document.querySelector("form");
const productList = [];
const product = {
  title: "",
  img: "",
  price:"",
  desc: "",
};
const getData =  (e) => product[e.id] = e.id == "img" ? URL.createObjectURL(e.files[0]):e.value;
const Submit = (e) => {
  e.preventDefault();
  productList.push({...product});
  localStorage.setItem("productList",JSON.stringify(productList))
  window.location.href = "/";
  productForm.reset();
}
productForm.addEventListener("submit",Submit);


