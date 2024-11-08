import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import  { Toaster } from 'react-hot-toast';
import Footer from "../component/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* navber  */}
            <div >    <Navbar></Navbar> </div>
           
         
    
<div className="min-h-[calc(100vh-232px)] container mx-auto">
       <Outlet></Outlet>
 </div>
        
            {/* footer  */}
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;