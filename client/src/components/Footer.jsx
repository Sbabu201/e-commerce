import React from 'react';
import git from "../assets/git1.png"
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter1.png"


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p>My E-commerce is your one-stop destination for all your Shopping needs. We strive to provide high-quality products and exceptional customer service to ensure your shopping experience is enjoyable and hassle-free.</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p>Email: [soumyasundarmohapatra@gmail.com]</p>
                        <p>Phone: +91 63727 45765</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className='flex justify-between w-40  items-center h-1/5'>
                            <a className='w-1/6  rounded-md  ' href="https://instagram.com/_babu.55_" target='blank'><img className='' src={insta} alt="" /></a>
                            <a className='w-1/6 rounded-md ' href="https://github.com/Sbabu201" target='blank'><img src={git} alt="" /></a>
                            <a className='w-1/6 rounded-md ' href="https://twitter.com/_babu55_" target='blank'>  <img src={twitter} alt="" /></a>
                            <a className='w-1/6 rounded-md ' href="https://github.com/Sbabu201" target='blank'> <img src={facebook} alt="" /></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h2 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
                        <form>
                            <input type="email" placeholder="Enter your email address" className="w-full rounded py-2 px-4 mb-4" />
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Soumya Mohapatra's E-Commerce. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
