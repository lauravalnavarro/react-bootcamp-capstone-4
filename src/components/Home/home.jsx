import React, { useState } from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

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