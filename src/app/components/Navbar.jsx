'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white py-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">BlogApp</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          <Link href="/api-data" className="hover:text-gray-400">API Data</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="flex flex-col items-center py-4">
            <Link href="/" className="py-2 hover:text-gray-400">Home</Link>
            <Link href="/blog" className="py-2 hover:text-gray-400">Blog</Link>
            <Link href="/about" className="py-2 hover:text-gray-400">About</Link>
            <Link href="/contact" className="py-2 hover:text-gray-400">Contact</Link>
            <Link href="/api-data" className="py-2 hover:text-gray-400">API Data</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
