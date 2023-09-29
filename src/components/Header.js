import React, { useContext } from 'react';
// sibebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import icons
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return <div>
    <header className='bg-pink-200'>Header
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <BsBag className='text-2xl' />
      </div>
    </header>
  </div>;
};

export default Header;
