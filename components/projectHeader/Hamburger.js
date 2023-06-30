import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    console.log("Clicked")
    setShowMenu(!showMenu);
  }

  return (
    <nav className='navHam'>
      <div className="menu-icon" onClick={handleMenuClick}>
        {!showMenu ? <FaBars /> : <AiOutlineClose/>}
      </div>
     {showMenu &&  <ul className={`menu-list ${showMenu ? 'open' : ''}`}>
        {/* <li className='text-white py-1'><a href="/">Home</a></li>
        <li className='text-white py-1'><a href="/career">Projects</a></li>
        <li className='text-white py-1'><a href="/career">Career</a></li>
        <li className='text-white py-1'><a href="/contact">Contacts</a></li>
        <li className='text-white py-1'><a href="/blog">Blogs</a></li> */}
      </ul>}
    </nav>
  );
}

export default HamburgerMenu;
