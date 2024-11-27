import './Navbar.css';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
const Navbar = () => {


  const[click,setClick]=useState(false);
   const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);
  return (
  
    <div className='header'>
      <div className='logo-nav'>
        <div className='logo-container'>
          <a href='#'>
            <h2 className='logo'>NEXA</h2>
          </a>
        </div>
       
      </div>
      <ul className={click ? 'nav-options active' : 'nav-options'}>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>ABOUT</a>
        </li>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>CONTACT</a>
        </li>
        <li className='option' onClick={closeMobileMenu}>
          <a href='#'>BLOG</a>
        </li>
        <li className='option mobile-option' onClick={closeMobileMenu}>
          <a href='#'>Sign-In</a>
        </li>
        <li className='option mobile-option' onClick={closeMobileMenu}>
          
          <button>sign-up</button>
        </li>
      </ul>
      <ul className='signin-up'>
        <li className='sign-in' onClick={closeMobileMenu}>
          <a href='#'>Sign-In</a>
        </li>
        <li onClick={closeMobileMenu}>
         
          <button>Sign-Up</button>
        </li>
      </ul>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? <IoClose /> : <FaBars />}
      </div>
    </div>
  );
};
export default Navbar;


