
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductCard } from './../components/ProductCar';

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

      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={ 'valid TITLE' } />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product2}>
        <ProductImage />
        <ProductTitle title={ product2.title } />
        <ProductButtons />
      </ProductCard>
    </div>
  </div>
)
