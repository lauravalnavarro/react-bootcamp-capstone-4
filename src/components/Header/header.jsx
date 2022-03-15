import React, { Component } from 'react';
import ShoppingIcon from '../../Utilidades/Shopping.svg';
import Hamburger from '../../Utilidades/hamburger.svg';
import Logo from '../../Utilidades/ecommerceLogo.png';

import './header.css'


const Header = (props) => {
    return ( 
        <div className='header-container'>
            <div className='header-parent'>
                <div className='left-header'>
                    <div className='header-logo' onClick={props.handlerAllProducts()}>
                        <img src={Logo} alt="Shopping logo" />
                    </div>
                </div>                
                <div className='right-header'>
                    <div className='header-shoppingIcon'>
                        <img src={ShoppingIcon} alt="Shopping logo" />
                    </div>
                </div>               
              

            </div>
            
        </div>
        
     );
}
 
export default Header;