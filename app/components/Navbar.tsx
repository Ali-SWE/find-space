"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='text-primary'>
      <nav className="w-full cona top-0 left-0 right-0 z-10">
        <div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                
            {/* ORGANIZATION NAME */}
            <h2 className="text-xl text-center font-bold font-aclonic">Find Space</h2>

            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 