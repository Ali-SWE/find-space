"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='text-primary'>
      <nav className="w-full fixed top-0 left-0 right-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                
            {/* ORGANIZATION NAME */}
            <h2 className="text-xl font-bold  font-aclonic">Find Space</h2>
              
              {/* HAMBURGER BUTTON FOR SMALL SCREENS */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img src= {`${isMenuOpen ? 'x.png' : 'hamburger-menu.png'}`} alt="menu"
                  className='w-10 h-10'/>

                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isMenuOpen ? 'p-12 md:p-0 block z-10 bg-white' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">

                <li className="pb-4 text-lg py-2 md:px-6 text-center hover:text-gray-500">
                  <Link href="/"> {/*This link should go to Home page section */}
                    Home
                  </Link>
                </li>

                <li className="pb-4 text-lg py-2 md:px-6 text-center hover:text-gray-500">
                  <Link href="/contactus"> {/*This link should go to Contact us page section */}
                    Contact us
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 