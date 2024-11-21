import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About" ,
    },
    {
      id: 3,
      text:"Skills",
    },
    {
      id: 4,
      text: "Contact",
    },
    {
      id: 5,
      text: "Footer",
    },
  ];

  return (
    <>
    <div className='bg-gradient-to-r from-orange-300 to-pink-300 '>
    <div className='bg-gradient-to-r from-orange-300 to-pink-300'>
    <div className='bg-gradient-to-r from-orange-300 to-pink-300'>
    <div className=' block pt-6 block w-full max-w-screen-lg px-4 py-2 mx-auto bg-opacity-90 sticky  top-3 p-6 bg-gradient-to-r from-pink-500 to-orange-500 ... flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#000]'>SAQUIB.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to={item.text}
            smooth={true}
            offset={-70}
            activeClass="active">
            {item.text}
            </Link>
            
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gradient-to-r from-pink-300 to-lime-300 ... ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-black m-4'>SAQUIB.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.text}
            smooth={true}
            offset={-70}
            activeClass="active">
            {item.text}
            </Link>
            
          </li>
        ))}
      </ul> 
      {/* <div>
        <Link to='/'>Home</Link>
        <Link to='/Skills'>Skills</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
        <Link to='/Footer'>Footer</Link>      
        </div> */}
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;