/* Category Implementation */

const categoryForm = document.getElementById('category-form');
const categoryFormMobile = document.getElementById('category-form-mob');

function synchronizeForms(sourceForm, targetForm) {
  const checkboxes = sourceForm.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    const value = checkbox.value;
    const targetCheckbox = targetForm.querySelector(`input[type="checkbox"][value="${value}"]`);
    if (targetCheckbox) {
      targetCheckbox.checked = checkbox.checked;
    }
  });
}

categoryForm.addEventListener('change', async (event)=>{
  synchronizeForms(categoryForm, categoryFormMobile);
  await handleCategory(event.target.value);
});

categoryFormMobile.addEventListener('change', async (event)=>{
  synchronizeForms(categoryFormMobile, categoryForm);
  await handleCategory(event.target.value);
});

async function handleCategory(category) {
  lazyLoaderButton.style.visibility = 'hidden';
  const idx = APP_STORE.selected_categories.findIndex(x=>x===category);
  if(idx>-1) {
    APP_STORE.selected_categories.splice(idx, 1);
    if(APP_STORE.selected_categories.length>0) {
      APP_STORE.product_list = APP_STORE.product_list.filter((p)=>p.category!==category);
      renderer();
    }
    else {
      await fetchProducts(APP_STORE.lazy_loading_limit);
      lazyLoaderButton.style.visibility = 'visible';
    }
  }
  else {
    APP_STORE.selected_categories.push(category);

    if(APP_STORE.selected_categories.length===1) {
      APP_STORE.product_list = await fetchProductsByCategory(category);
      renderer();
    }
    else if(APP_STORE.selected_categories.length>1){
      const data = await fetchProductsByCategory(category);
      APP_STORE.product_list = APP_STORE.product_list.concat(data);
      renderer();
    }
  }
}