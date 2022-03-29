import Card from '../Card/Card';

import './Grid.css';

const Grid = ({products}) => {
    console.log(products);
    return ( 
        <div className='grid-container'>
           {
                products.results.map((product) => {
                    return <div className='node' key={product.id}>
                        <Card                                
                        imgUrl = {product.data.mainimage.url}
                        alt={product.data.mainimage.alt}
                        text={product.data}
                        />                   
                    </div>
                    
                })               
               
            }
        </div>
     );
}
 
export default Grid;