import ProductCard from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'coffe-mug 1 INFO!',
  // img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'coffe-mug 2 NEW!',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => (
  <div>
    <h1>SHOPPING PAGE</h1>
    <br />

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>

      <ProductCard product={product} className="gb-dark" >
        <ProductCard.Image  className='custom-image' />
        <ProductCard.Title title={ 'valid TITLE' } />
        <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'end'}} />
      </ProductCard>

      <ProductCard product={product2} style={{ backgroundColor: '#70D1F8'}}>
        <ProductImage className='custom-image'/>
        <ProductTitle title={ product2.title } className='text-gray' style={{ textDecoration: 'underline' }}/>
        <ProductButtons className="custom-btn custmon-btn-gray" style={{ display: 'flex', justifyContent: 'end'}}/>
      </ProductCard>
    </div>
  </div>
)
