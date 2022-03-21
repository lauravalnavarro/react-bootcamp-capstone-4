import Grid from './Grid/Grid';
import CarouselField from './Carousel/Carousel';

import featuredProducts from '../../mocks/es-mx/featured-products.json';
import banners from '../../mocks/es-mx/featured-banners.json';

const HomeContent = ({handlerAllProducts, carouselCategories}) => {
    const products = featuredProducts.results;
    const carouselProducts = banners.results;

    return ( 
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
                        onClick={handlerAllProducts()}>
                            View all products
                    </button>                
                </div>
                <div className='product-categories'>
                    <CarouselField
                        products={carouselCategories}
                    />
                </div>
        </div>

     );
}
 
export default HomeContent;