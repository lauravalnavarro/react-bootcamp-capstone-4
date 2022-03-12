import Card from '../Card/card';

import './grid.css';

const Grid = ({products}) => {

    const cols = 4;
    const rows = products.length/cols;
    const newCard = {};
   
      
    const grid =[];
    for (let row = 0; row < rows; row++) {
        const currentRow = [];
        for (let col = 0; col < cols; col++) {
            currentRow.push(newCard);
        }
        grid.push(currentRow);            
    }
    console.log(grid); 

    return ( 
        <div className='grid-container'>
           {
                products.map((product) => {
                    return <div className='node' key={product.id}>
                        {console.log(product.data.name)}
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