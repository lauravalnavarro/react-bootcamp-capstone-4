import Grid from './Grid/Grid';
import CarouselField from './Carousel/Carousel';

import {useNavigate} from 'react-router-dom';

import banners from '../../mocks/es-mx/featured-banners.json';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';


const HomeContent = () => {
    const {data:featuredBanners, isLoading} = useFeaturedBanners();
    const {data:featuredProducts, isLoading:isLoadingProducts} = useFeaturedProducts();
  
    console.log(featuredProducts.results);

    const products = featuredProducts;
    const carouselProducts = banners.results;    

    const navigate = useNavigate();

    const changeRoute = ()=> {
        navigate('/products');
    }
    if(isLoading || isLoadingProducts) {return <div>Loading...</div>}
    return (          

        <div className='home-page'>                      
                <div className='welcome-container'>
                    <div className='featured-banners'>
                        <CarouselField
                            products={featuredBanners.results}
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
                        onClick={changeRoute}>
                            View all products
                    </button>                
                </div>
                <div className='product-categories'>
                    <CarouselField
                        products={featuredBanners.results}
                    />
                </div>
        </div>
   

     );
}
 
export default HomeContent;