document.addEventListener('DOMContentLoaded', async ()=>{
  await fetchProductsByCategory("electronics").then((res)=>{
    APP_STORE.product_list = res;
    renderer();
  });
});