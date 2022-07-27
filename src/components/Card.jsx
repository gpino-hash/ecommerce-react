import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Card = ({ title, likes, order, image, price, desc }) => (
  <div className="max-w-sm bg-white rounded border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#top" className='max-w-screen-lg mx-auto pb-10'>
      <img className="rounded-t h-60 mx-auto" src={image} alt="" />
    </a>
    <div className="p-5">
      <a href="#top">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <a
        href="#top"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <AiOutlineArrowRight />
      </a>
    </div>
  </div>
);

export default Card;
