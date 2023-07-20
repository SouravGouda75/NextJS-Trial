import React from 'react'
import Link from 'next/link'

const Navbar = () => {
		return (
			<header className=" rounded  py-6 px-4 bg-gray-900">
        <nav className="container mx-auto flex items-center justify-between ">
          <a href="#" className="bg-300% animate-gradient text-3xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">My Website</a>
          <ul className="bg-300% animate-gradient flex space-x-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link href="/" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="/" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>
		)
}

export default Navbar