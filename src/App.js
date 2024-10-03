import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './View/Signup';
import Login from './View/Login';
import Home from './View/Home';
import About from './View/About';
import CreateRecipe from './View/AdminCreate';
import Breakfast from './View/Breakfast';
import Meal from './View/Meal';
import Dessert from './View/Dessert';
import ErrorPage from './View/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/adminPanel',
      element: <CreateRecipe />
    },
    {
      path: '/breakfast',
      element: <Breakfast />
    },
    {
      path: '/meal',
      element: <Meal />
    },
    {
      path: '/dessert',
      element: <Dessert />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
