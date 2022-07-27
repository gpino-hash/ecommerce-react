import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from '../containers/Index';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/information" element={<Information />} />
          <Route path="checkout/payment" element={<Payment />} />
          <Route path="checkout/success" element={<Success />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
