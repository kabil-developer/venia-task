document.addEventListener('DOMContentLoaded', async ()=>{
  await fetchProductsByCategory("jewelery").then((res)=>{
    APP_STORE.product_list = res;
    renderer();
  });
});