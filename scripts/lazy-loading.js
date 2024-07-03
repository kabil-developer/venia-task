const lazyLoaderButton = document.getElementById('lazy-loading');
lazyLoaderButton.addEventListener('click', async ()=>{
  if(APP_STORE.lazy_loading_limit<20) {
    APP_STORE.lazy_loading_limit = APP_STORE.lazy_loading_limit + LAZY_LOADING_LIMIT;
    await fetchProducts(APP_STORE.lazy_loading_limit);
    if(APP_STORE.lazy_loading_limit>=20) {
      lazyLoaderButton.innerText = 'Show less';
    }
  }
  else {
    APP_STORE.lazy_loading_limit = LAZY_LOADING_LIMIT;
    await fetchProducts(APP_STORE.lazy_loading_limit);
    lazyLoaderButton.innerText = 'Show more'
  }
})