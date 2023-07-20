import './globals.css'
import React from 'react';
import FeaturedCard from "../component/FeaturedCard"
import Link from 'next/link'
const LandingPage = () => {

  const image1='https://autohexa.com/wp-content/uploads/2023/05/Nissan-Skyline-GT-R-R34-1-1024x683.jpg'
  const image2='https://autohexa.com/wp-content/uploads/2023/05/Nissan-Skyline-GT-R-R34-1-1024x683.jpg'
  const image3='https://autohexa.com/wp-content/uploads/2023/05/Nissan-Skyline-GT-R-R34-1-1024x683.jpg'

  return (
      <main className="container mx-auto mt-10">
        <section className="text-center">
          <h1 className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text bg-300% animate-gradient ">Welcome to Our Website</h1>
          {/* <h1 className="text-4xl font-semibold mb-4 text-gradient text-center">Welcome to Our Website</h1> */}
          <p className="pt-10 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex ut justo volutpat elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
         <Link href="/register" className="mt-6 inline-block px-6 py-3 rounded bg-gradient-to-r from-blue-600 via-green-500 bg-300% animate-gradient">Learn More</Link>
          {/* <a href="#" className="mt-6 inline-block px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Learn More</a> */}
        </section>

        <section className="mt-16">
          {/* Add more content here */}

          <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-6">
        <FeaturedCard
          title="Featured 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex ut justo volutpat elementum."
          image={image1}
        />
        
        <FeaturedCard
          title="Featured 2"
          description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          image={image2}
        />

        <FeaturedCard
          title="Featured 3"
          description="Sed euismod ex ut justo volutpat elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          image={image3}
        />
      </div>
    </div>
        </section>
        {/* <Footer/> */}
      </main>
    // </div>
  );
};

export default LandingPage;
