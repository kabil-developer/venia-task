document.addEventListener('DOMContentLoaded', async ()=>{
  await fetchProductsByCategory("men's clothing").then((res)=>{
    APP_STORE.product_list = res;
    renderer();
  });
});