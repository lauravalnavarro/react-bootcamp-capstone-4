import React, { useState } from 'react';
import Header from '../Header/header';
import Content from '../Content/content';
import Footer from '../Footer/footer';

const HomePage = (props) => {

    const[allProducts, setAllProducts]= useState(false);

    const handlerAllProducts = () =>{
        setAllProducts(!allProducts);        
    };

    return ( 
        <div className='home-page'>
            <Header
                handlerAllProducts={()=>handlerAllProducts}
            />
            <Content
                allProducts={allProducts}
                handlerAllProducts={()=>handlerAllProducts}
            {...props}
            />
            <Footer/>
        </div>
        

     );
}
 
export default HomePage;