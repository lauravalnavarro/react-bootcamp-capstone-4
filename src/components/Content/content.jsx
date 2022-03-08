import React, { Component } from 'react';
import banners from '../../mocks/es-mx/featured-banners.json'

import './content.css'

import Grid from './Grid/grid';

const Content = () => {
    return ( 
        <div className='content-container'>
            <div className='grid-container'>
                <Grid/>
            </div>            
        </div>
     );
}
 
export default Content;