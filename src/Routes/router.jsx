import {
  Navigate,
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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserHome from "../Pages/Dashboard/User/UserHome";
import UserAppointments from "../Pages/Dashboard/User/UserAppointments";
import UserProfile from "../Pages/Dashboard/User/UserProfile";
import UserTestResults from "../Pages/Dashboard/User/UserTestResults";
import TestDetails from "../Components/TestDetails";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AllTest from "../Pages/Dashboard/Admin/AllTest";
import AddBanner from "../Pages/Dashboard/Admin/AddBanner";
import AllBanner from "../Pages/Dashboard/Admin/AllBanner";
import AddTest from "../Pages/Dashboard/Admin/AddTest";
import Reservation from "../Pages/Dashboard/Admin/Reservation";

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
          path: '/testDetails/:id',
          element: <TestDetails></TestDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/allTests/${params.id}`)
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
          path: 'dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: '', // Empty path for the default route
              element: <Navigate to="userHome" />
            },
            {
              path: 'userHome',
              element: <UserHome></UserHome>
            },
            {
              path: 'userAppointments',
              element: <UserAppointments></UserAppointments>,
              loader: ()=> fetch(`http://localhost:5000/myAppointments`)
            },
            {
              path: 'userProfile',
              element: <UserProfile></UserProfile>,
              loader: ()=> fetch(`http://localhost:5000/users`)
            },
            {
              path: 'userTestResults',
              element: <UserTestResults></UserTestResults>
            },
            {
              path: 'allUsers',
              element : <AllUsers></AllUsers>,
              loader: ()=> fetch(`http://localhost:5000/users`)
            },
            {
              path: 'allTest',
              element : <AllTest></AllTest>
            },
            {
              path: 'addBanner',
              element : <AddBanner></AddBanner>
            },
            {
              path: 'allBanners',
              element : <AllBanner></AllBanner>
            },
            {
              path: 'addTest',
              element : <AddTest></AddTest>
            },
            {
              path: 'reservation',
              element : <Reservation></Reservation>
            },
          ]
        }
      ]
    },
  ]);