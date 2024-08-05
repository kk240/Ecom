import React from 'react';

import { Counter } from './features/counter/Counter';
import { ProductList } from './features/product-list/ProductList'
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
