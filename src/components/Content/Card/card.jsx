import React from 'react';

import './card.css';

const Card = (imgUrl, alt, text) => {
    return ( 
        <div className='card-container'>
            <div className='card-image'>
                <img src={imgUrl.imgUrl} alt={alt} />
            </div>
            <div className='card-text'>
                <span>{imgUrl.text.name}</span>
            </div>
        </div>
     );
}
 
export default Card;