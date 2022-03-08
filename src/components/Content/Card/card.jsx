import React, { Component } from 'react';

import './card.css';

const Card = (imgUrl, alt, text) => {
    return ( 
        <div className='card-container'>
            <div className='card-image'>
                <img src={imgUrl} alt={alt}/>
            </div>
            <div className='card-text'>
                <span>{text}</span>
            </div>
        </div>
     );
}
 
export default Card;