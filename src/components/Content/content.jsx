import React from 'react';
import './content.css'

import Grid from './Grid/grid';
import CarouselField from './Carousel/carousel';
import ProductList from './ProductList/productList';

import featuredProducts from '../../mocks/es-mx/featured-products.json';
import banners from '../../mocks/es-mx/featured-banners.json';
import productsCategories from '../../mocks/es-mx/product-categories.json';



const Content = (props) => {
    const products = featuredProducts.results;
    const carouselProducts = banners.results;
    const carouselCategories= productsCategories.results;
    
    return ( 
        <div className='content-container'>
            {props.allProducts? 
                <ProductList
                    categories ={carouselCategories}
                />
            : 
            <div className='home-page'>                       
                <div className='welcome-container'>
                    <div className='featured-banners'>
                        <CarouselField
                            products={carouselProducts}
                        />
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-title'>
                        Productos de temporada
                    </div>
                    <div className='featured-products'>
                        <Grid
                            products ={products}
                        />
                    </div>
                    <button className='btn-view-all'
                        onClick={props.handlerAllProducts()}>
                            View all products
                    </button>                
                </div>
                <div className='product-categories'>
                    <CarouselField
                        products={carouselCategories}
                    />
                </div>
            </div>
            }
        </div>
     );
}
 
export default Content;