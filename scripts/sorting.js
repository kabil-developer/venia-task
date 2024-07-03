/* Synchronize Sort dropdowns */
const sortProducts = document.getElementById("venia-sort-products");
const sortProductsMob = document.getElementById("venia-sort-products-mob");

sortProducts.addEventListener('change', (event)=>{
  sortProductsMob.value = event.target.value;
  APP_STORE.selected_sort=event.target.value;
  renderer()
});


sortProductsMob.addEventListener('change', (event)=>{
  sortProducts.value = event.target.value;
  APP_STORE.selected_sort=event.target.value;
  renderer()
});

function sortProductList(value) {
  if(APP_STORE.product_list && APP_STORE.product_list.length>0) {
    if(value==="nil") {
      APP_STORE.product_list.sort((a,b)=>(a.id-b.id));
    }
    else {
      if(value==="price") {
        APP_STORE.product_list.sort((a,b)=>(a.price-b.price));
      }
      else if(value==="rating") {
        APP_STORE.product_list.sort((a,b)=>(a.rating.rate-b.rating.rate));
      }
    }
  }
  APP_STORE.selected_sort = value;
}