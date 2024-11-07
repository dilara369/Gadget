import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* navber  */}
            <div >    <Navbar></Navbar> </div>
           
         
    
<div className="min-h-[calc(100vh-232px)] container mx-auto">
       <Outlet></Outlet>
 </div>

            {/* footer  */}

        </div>
    );
};

export default MainLayout;