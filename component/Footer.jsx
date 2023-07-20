import React from "react";
import '@/app/globals.css'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 bg-gray-900 space-x-3">
      <div className="container mx-auto flex justify-between ">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold animate-gradient bg-300% bg-gradient-radial from-cyan-500 to-indigo-500">My Website</a>
          <span className="ml-4 ">© 2023 My Website</span>
        </div>
        <div className="flex justify-content-between">
          <a href="https://twitter.com/my_twitter" className="mr-4">a
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/my_facebook" className="mr-4">b
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/my_instagram" className="mr-4">c
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
