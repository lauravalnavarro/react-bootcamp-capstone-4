import React from 'react';
import Header from '../Header/header';
import Content from '../Content/content';
import Footer from '../Footer/footer';

const HomePage = (props) => {
    return ( 
        <div className='home-page'>
            <Header/>
            <Content
            {...props}
            />
            <Footer/>
        </div>
        

     );
}
 
export default HomePage;