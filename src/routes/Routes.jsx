import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Statistic from "../Pages/Statistic";
import Dashboard from "../pages/Dashboard";
import Home from "../Pages/Home";
import ProductCard from "../component/ProductCard";
import CardDetails from "../component/CardDetails";
import ShoppingCard from "../component/ShoppingCard";
import AboutUs from "../pages/AboutUs";
import NotFound from "../component/404/NotFound";
import { Helmet } from "react-helmet";
import AddFavourite from "../component/AddFavourite";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
             path:"/",
             element:(
              <>
                  <Helmet>
                      <title>Home - My Website</title>
                  </Helmet>
                  <Home></Home>
              </>
          ),
             loader:()=> fetch("../category.json"),
             children:[
              {
                path:'/',
                element:(
                  <>
                      <Helmet>
                          <title>Product Cards - My Website</title>
                      </Helmet>
                      <ProductCard />
                  </>
              ),
                loader:()=> fetch("../products.json"),
              },
              {
                path:'/product/:category',
                element:(
                  <>
                      <Helmet>
                          <title>Product Category - My Website</title>
                      </Helmet>
                      <ProductCard />
                  </>
              ),
                loader:()=> fetch("../products.json"),
              },
             
              
             ]

      },
      {
               
        path:'/Details/:product_id',
        element:(
          <>
              <Helmet>
                  <title>Product Details - My Website</title>
              </Helmet>
              <CardDetails></CardDetails>
          </>
      ),
        loader:()=> fetch("../products.json"),
      },



      {
        path:"/statistic",
        element:(
          <>
              <Helmet>
                  <title>Statistics - My Website</title>
              </Helmet>
              <Statistic></Statistic>
          </>
      ),
    },
    {
        path:"/dashboard",
        element:(
          <>
              <Helmet>
                  <title>Dashboard - My Website</title>
              </Helmet>
              <Dashboard></Dashboard>
          </>
      ),
        
        children:[
          {
            path:"/dashboard/Shopping",
            element: (
              <>
                  <Helmet>
                      <title>Shopping Cart - My Website</title>
                  </Helmet>
                  <ShoppingCard></ShoppingCard>
              </>
          ),
           
            
          },
          {
            path:"/dashboard/Favourite",
            element: (
              <>
                  <Helmet>
                      <title>MyFavourite - My Website</title>
                  </Helmet>
                  <AddFavourite></AddFavourite>
              </>
          ),
           
            
          },
        ]
    },

{
  path:'/About Us',
  element:(
    <>
        <Helmet>
            <title>About Us - My Website</title>
        </Helmet>
        <AboutUs></AboutUs>
    </>
),
},

{
  path:'/404',
  element:(
    <>
        <Helmet>
            <title>404 - Page Not Found</title>
        </Helmet>
        <NotFound></NotFound>
    </>
),
}


    ]
    },
]);
export default router
