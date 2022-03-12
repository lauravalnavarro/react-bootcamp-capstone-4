import React, { Component } from 'react';
import banners from '../../mocks/es-mx/featured-banners.json'

import './content.css'

import Grid from './Grid/grid';

import featuredProducts from '../../mocks/es-mx/featured-products.json';

const Content = () => {
    const products = featuredProducts.results;
    return ( 
        <div className='content-container'>
            <div className='grid-container'>
                <div className='grid-title'>
                    Productos de temporada
                </div>
                <div className='grid-content'>
                    <Grid
                        products ={products}
                    />
                </div>                
            </div>            
        </div>
     );
}
 
export default Content;