import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProductList from '../Content/ProductList/ProductList';
import HomeContent from '../Content/HomeContent';
import ProductDetail from '../Content/ProductDetail/ProductDetail';
import Layout from '../Layout/Layout';

import { Route, Routes,useRoutes, Navigate } from "react-router-dom";

const AppRoutes = () => {

    const routes = useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            { index: true, path: '/', element: <HomeContent /> },
            { index: true, path: '/products', element: <ProductList /> },
            { index: true, path: '/product/:id', element: <ProductDetail /> },
            { path: '*', element: <Navigate to='/' /> },
          ],
        },
      ]);
   
    return (
        <>
            {routes}
        </>
    );
};




const HomePage = (props) => {

    return ( 
        <div className='home-page'>
            <AppRoutes/>
        </div>
        

     );
}
 
export default HomePage;