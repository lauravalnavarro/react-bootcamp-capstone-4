import SideBar from "./SideBar/SideBar";
import Grid from "../Grid/Grid";

import './ProductList.css'; 
import { useState } from "react";

import products from '../../../mocks/es-mx/products.json';
import {useFeaturedCategories} from '../../../utils/hooks/useFeaturedCategories';
import { useFeaturedProducts } from '../../../utils/hooks/useFeaturedProducts';

const ProductList = () => {
  const [totalProducts, setTotalProducts] = useState(products.results);
  const{data: featuredCategories, isLoading:isLoadingCategories} = useFeaturedCategories();
  const {data:featuredProducts, isLoading:isLoadingProducts} = useFeaturedProducts();

  const handlerSelectCategory = (value) =>{
    let pr=[];
    products.results.map(product=>{
      if(value === product.data.category.id){
        pr.push(product);
      }
    })
    setTotalProducts(pr);
  };
  if(isLoadingCategories || isLoadingProducts) {return <div>Loading...</div>}
    return (
      <div className="product-list-container">
        <div className="side-bar">
          <SideBar
            categories={featuredCategories.results}
            selectCategory = {handlerSelectCategory}
          />
        </div>
        <div className="content">
          <Grid
            products={featuredProducts}
          />
        </div>        
      </div>
        
      );
}
 
export default ProductList;