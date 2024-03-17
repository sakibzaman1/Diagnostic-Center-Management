import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllTests from "../Pages/AllTests/AllTests";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);