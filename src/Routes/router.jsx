import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllTests from "../Pages/AllTests/AllTests";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/aboutUs',
            element: <AboutUs></AboutUs>
        },
        {
          path: '/allTests',
          element: <AllTests></AllTests>
        }
      ]
    },
  ]);