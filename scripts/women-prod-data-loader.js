document.addEventListener('DOMContentLoaded', async ()=>{
  await fetchProductsByCategory("women's clothing").then((res)=>{
    APP_STORE.product_list = res;
    renderer();
  });
});