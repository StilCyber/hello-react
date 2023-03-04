import React from 'react';
import h from './Header.module.css';

const Header = () => {
   return (
      <header className={h.header}>
         <a href='#'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/400px-Vanamo_Logo.svg.png" alt="#"/>
         </a>
      </header>
   );
};

export default Header;