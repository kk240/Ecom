import React from 'react';

import { Counter } from './features/counter/Counter';
import { ProductList } from './features/product-list/components/ProductList'
import ProductDetailPage from './pages/ProductDetailPage'
import Checkout from './pages/Checkout';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import ProductDetails from './features/product-list/components/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
