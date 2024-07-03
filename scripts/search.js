/* Search Implementation */
const searchInput = document.getElementById("venia-product-search");
searchInput.addEventListener('input', (event)=>{
  APP_STORE.search_term = event.target.value;
  renderer();
});

function searchHandler(value) {
  APP_STORE.search_term = value;
  const data = APP_STORE.product_list.filter((product)=>{
    return product.title.toLowerCase().includes(APP_STORE.search_term.toLowerCase());
  });
  return data;
}