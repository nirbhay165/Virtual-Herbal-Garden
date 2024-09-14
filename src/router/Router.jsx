import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.jsx";
import Home from "../pages/home/HomePage.jsx";
import Signup from "../pages/Signup.jsx"
import UpdateProfile from "../pages/home/UpadteProfile.jsx";
import HealthWellnessPage from "../pages/HealthWellnessPage.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import ContactUs from "../pages/ContactUS.jsx"
import Skincare from "../pages/Benifits/Skincare.jsx";
import Haircare from "../pages/Benifits/Haircare.jsx";
import FitnessPage from "../pages/Benifits/Fitness.jsx";
import Nutrition from "../pages/Benifits/Nutrition.jsx";
import HerbalPage from "../pages/Benifits/Herbal_Practice.jsx";
import Explore from "../pages/Explore.jsx";
import VirtualTour from "../pages/Virtual Tour/MainPage.jsx";
import AddProduct from "../Admin/AddProduct.jsx";
import ListProduct from "../Admin/ListProduct.jsx";
import Admin_Navbar from "../Admin/Navbar.jsx";
import Admin_Sidebar from "../Admin/Sidebar.jsx";
import Admin from "../Admin/Page/Admin.jsx";
// import Your_tour from "../pages/Your_tour.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add_product",
        element: <AddProduct />,
      },
      {
        path: "/list_product",
        element: <ListProduct />,
      },
      {
        path: "/admin_page",
        element: <Admin />,
      },
      
      {
        path: "/admin_sidebar",
        element: <Admin_Sidebar/>,
      },
      
      {
        path: "/admin_navbar",
        element: <Admin_Navbar />,
      },
      
      {
        path: "/update-profile",
        element: <UpdateProfile/>
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  // {
  //   path:"/amala",
  //    element:<AmalaPage />
  // },
  // {
  //   path:"/amala" ,
  //   element:<AmalaPage />
  // },
  // {
  //   path:"/tulsi",
  //    element:<TulsiPage />
  // },
  // {
  //   path:"/neem",
  //    element:<NeemPage />
  // },
  // {
  //   path:"/aloevera" ,
  //   element:<AloeVeraPage />
  // },
  {
    path:"/health-wellness" ,
    element:<HealthWellnessPage />
  },
  {
    path:"/skincare" ,
    element:<Skincare />
  },
  {
    path:"/haircare" ,
    element:<Haircare />
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>

  },
  {
    path: "/ContactUS",
    element: <ContactUs/>

  },
  {
    path: "/herbal_practice",
    element: <HerbalPage/>

  },

  {
    path: "/explore_ayurveda",
    element: <Explore/>

  },
  {
    path: "/nutrition",
    element: <Nutrition/>

  },
  {
    path: "/fitness",
    element: <FitnessPage/>

  },
  {
    path: "/virtual_tour",
    element: <VirtualTour/>

  },
  // {
  //   path: "/your_tour",
  //   element: <Your_tour/>

  // },

]);

export default router;