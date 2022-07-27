import React from 'react';
import Card from '../components/Card';
import useProducts from '../hooks/useProducts';

const Home = () => {
  const products = useProducts('https://fakestoreapi.com/products');

  return (
    <div className="md:container md:mx-auto">
      <div className="grid sm:auto-cols-max md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2">
        {products.map((product) => (
          <Card image={product.image} title={product.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
