const BASE_URL = 'https://fakestoreapi.com';

const LAZY_LOADING_LIMIT = 10

const APP_STORE = {
  lazy_loading_limit: LAZY_LOADING_LIMIT,
  product_list : [],
  selected_categories: [],
  selected_sort: 'nil',
  is_lazy_loading_done: false,
  search_term : ''
}