import React, { Component } from 'react';
import ShoppingIcon from '../../Utilidades/Shopping.svg';
import Hamburger from '../../Utilidades/hamburger.svg';

import './header.css'


const Header = () => {
    return ( 
        <div className='header-container'>
            <div className='header-parent'>
                <div className='left-header'>
                    <div className='header-logo'>
                        Ecommerce Lau
                    </div>
                </div>                
                <div className='right-header'>
                    <div className='header-shoppingIcon'>
                        <img src={ShoppingIcon} alt="Shopping logo" />
                    </div>
                    <div className='header-hamburger'>
                        <img src={Hamburger} alt="Hamburger logo" />
                    </div>
                </div>               
              

            </div>
            
        </div>
        
     );
}
 
export default Header;