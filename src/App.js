import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./View/Signup";
import Login from "./View/Login";
import Home from './View/Home';
import Nav from './Component/Nav';
import About from './View/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
