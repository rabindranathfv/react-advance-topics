
import { ProductCar } from './../components/ProductCar';

const product = {
  id: '1',
  title: 'coffe-mug 1 INFO!',
  // img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>SHOPPING PAGE</h1>
      <br />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      <ProductCar product={product}/>
      </div>
    </div>
  )
}
