import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Statistic from "../Pages/Statistic";
import Dashboard from "../pages/Dashboard";
import Home from "../Pages/Home";
import ProductCard from "../component/ProductCard";
import CardDetails from "../component/CardDetails";
import ShoppingCard from "../component/ShoppingCard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
             path:"/",
             element:<Home></Home>,
             loader:()=> fetch("../category.json"),
             children:[
              {
                path:'/',
                element:<ProductCard> </ProductCard>,
                loader:()=> fetch("../products.json"),
              },
              {
                path:'/product/:category',
                element:<ProductCard> </ProductCard>,
                loader:()=> fetch("../products.json"),
              },
             
              
             ]

      },
      {
               
        path:'/Details/:product_id',
        element:<CardDetails></CardDetails>,
        loader:()=> fetch("../products.json"),
      },



      {
        path:"/statistic",
        element:<Statistic></Statistic>,
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"/dashboard/:product_id",
            element: <ShoppingCard></ShoppingCard>,
            loader:()=> fetch("../products.json"),
          },
        ]
    },

    ]
    },
]);
export default router
