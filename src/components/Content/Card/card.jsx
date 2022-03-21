import React from 'react';

import './Card.css';

const Card = (imgUrl, alt, text) => {
    return ( 
        <div className='card-container'>
            <div className='card-image'>
                <img src={imgUrl.imgUrl} alt={alt} />
            </div>
            <div className='card-text'>
                <div className='name'>{imgUrl.text.name}</div>
                <div className='category'>{`Categoría: ${imgUrl.text.category.slug}`}</div>
                <div className='price'>{`Precio: $${imgUrl.text.price}`}</div>
            </div>
        </div>
     );
}
 
export default Card;