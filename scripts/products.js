async function fetchProducts(limit) {
  try {
    showShimmerLoader();
    let response = await fetch(`${BASE_URL}/products/?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    APP_STORE.product_list = data;
    renderer();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function fetchProductsByCategory(category) {
  try {
    showShimmerLoader();
    let response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    // APP_STORE.product_list = data;
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }
}


document.addEventListener('DOMContentLoaded', async ()=>{
  await fetchProducts(APP_STORE.lazy_loading_limit);
});

function renderProductList(productList) {
   const productListContainer = document.getElementById('product-list');
   productListContainer.innerHTML = '';
   const productContainerFragment = document.createDocumentFragment();
   productList.innerHTML = '';
   if(productList.length>0) {
     productList.forEach((product)=>{
       const productCard = createProductCard(product);
       productContainerFragment.appendChild(productCard)
     });
   }
   else {
     const noResultsCard = document.createElement('div');
     noResultsCard.style.fontSize = '24px';
     noResultsCard.style.fontWeight = 'bolder';
     noResultsCard.style.display = 'flex';
     noResultsCard.style.alignItems = 'center';
     noResultsCard.style.gridColumn = 'span 3';
     noResultsCard.style.justifyContent = 'center';

     const noResultsTag = document.createElement('p');
     noResultsTag.innerText = 'No Results Found ';
     noResultsTag.style.marginRight = '10px';

     const icon = document.createElement('i');
     icon.classList.add('fa-regular');
     icon.classList.add('fa-face-frown');

     noResultsCard.appendChild(noResultsTag);
     noResultsCard.appendChild(icon);



     productContainerFragment.appendChild(noResultsCard);
   }

  let resultsTags = document.querySelectorAll(".result-count");
  resultsTags.forEach((resultTags)=>{
    resultTags.innerText = productList.length+ " Results";
  })

  productListContainer.append(productContainerFragment);
}


function createProductCard(product) {

  const productCard = document.createElement('div');

  const productFragment = document.createDocumentFragment();

  productCard.className = 'product'

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.title;
  productFragment.appendChild(img);

  const title = document.createElement('p');
  title.className = 'title';
  title.innerText = product.title;
  productFragment.appendChild(title);

  const price = document.createElement('p');
  price.className = 'price';
  price.innerText = "$"+ product.price;

  productFragment.appendChild(price);
  productCard.appendChild(productFragment);
  return productCard;
}

function renderer(sortValue=APP_STORE.selected_sort, searchValue=APP_STORE.search_term) {
  sortProductList(sortValue);
  const data = searchHandler(searchValue);
  renderProductList(data);
}


/* Showloader */
const showShimmerLoader = () => {
  const shimmerLoaders = document.createDocumentFragment();

  for (let i = 0; i < 6; i++) {
    const productShimmer = document.createElement('div');
    productShimmer.className='product-shimmer';
    shimmerLoaders.appendChild(productShimmer);
  }
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';
  productListContainer.appendChild(shimmerLoaders);
}

