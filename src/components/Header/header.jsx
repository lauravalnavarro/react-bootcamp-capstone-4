import React, { useState } from 'react';
import ShoppingIcon from '../../Utilidades/Shopping.svg';
import Logo from '../../Utilidades/ecommerceLogo.png';

import './Header.css'


const Header = (props) => {

    const [valueTerm, setValueTerm] = useState('');

    const hanlderSearchInput = (e)=>{
        setValueTerm(e.target.value);
    }

    return ( 
        <div className='header-container'>
            <div className='header-parent'>
                <div className='left-header'>
                    <div className='header-logo' onClick={props.handlerAllProducts()}>
                        <img src={Logo} alt="Shopping logo" />
                    </div>
                </div>
                <div className='input-header'>
                    <input
                        type="text"
                        placeholder='Search'
                        value={valueTerm}
                        onChange={hanlderSearchInput}
                    />
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