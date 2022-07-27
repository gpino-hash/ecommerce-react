import { useEffect, useState } from 'react';

const useProducts = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [url]);

  return products;
};

export default useProducts;
