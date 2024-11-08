import React from 'react';

const Footer = () => {
    return (
        <div>


<footer className="footer flex flex-col p-10 bg-gray-200 text-gray-700 mt-28">

                   <div className='flex flex-col justify-center items-center w-full '>

                    <h1 className='text-2xl font-bold '>Gadget Heaven</h1>
                    <p >Leading the way in cutting-edge technology and innovation.</p>
                    </div> 


  <div className="flex justify-around w-full text-center">
    <nav className="space-y-2">
      <h6 className="footer-title font-bold text-lg mb-2">Services</h6>
      <a href="#" className="link link-hover block">Product Support</a>
      <a href="#" className="link link-hover block">Order Tracking</a>
      <a href="#" className="link link-hover block">Shipping & Delivery</a>
      <a href="#" className="link link-hover block">Returns</a>
    </nav>

    <nav className="space-y-2">
      <h6 className="footer-title font-bold text-lg mb-2">Company</h6>
      <a href="#" className="link link-hover block">About Us</a>
      <a href="#" className="link link-hover block">Careers</a>
      <a href="#" className="link link-hover block">Contact</a>
    </nav>

    <nav className="space-y-2">
      <h6 className="footer-title font-bold text-lg mb-2">Legal</h6>
      <a href="#" className="link link-hover block">Terms of Use</a>
      <a href="#" className="link link-hover block">Privacy Policy</a>
      <a href="#" className="link link-hover block">Cookie Policy</a>
    </nav>
  </div>

</footer>

        </div>
    );
};

export default Footer;