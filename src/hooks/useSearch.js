import { useState } from 'react';
import useDebounce from './useDebounce';
import allProducts from './../data/products'
import { searchProducts } from '../utils/search';

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const query = searchValue.trim().toLowerCase();
  const debouncedQuery = useDebounce(query);

  const products = searchProducts(debouncedQuery)

  const isDebouncing = query !== debouncedQuery;

  return { searchValue, setSearchValue, products, isDebouncing }
}

export default useSearch