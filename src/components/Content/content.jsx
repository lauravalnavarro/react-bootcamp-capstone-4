import React from 'react';
import './Content.css'


import ProductList from './ProductList/ProductList';


import productsCategories from '../../mocks/es-mx/product-categories.json';
import HomeContent from './HomeContent';



const Content = ({allProducts, handlerAllProducts}) => {

    const carouselCategories= productsCategories.results;
    
    return ( 
        <div className='content-container'>
            {allProducts? 
                <ProductList
                    categories ={carouselCategories}
                />
            : 
            <HomeContent
                handlerAllProducts={handlerAllProducts}
                carouselCategories={carouselCategories}
            />
            }
        </div>
     );
}
 
export default Content;