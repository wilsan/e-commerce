import './ProductSection.css';
import React from 'react';

import ProductLayout from '../ui/ProductSectionLayout';
import Product from './Product';

export default class ProductSection extends React.Component {
   isItemInCart(id) {
      return this.props.cartItems.some((item) => item.pID === id)
   }

   render() {
      console.log('ProductSection render() called');
      const products = this.props.products
      return (
         <section id="product-list" className="container-fluid">
            <h1>Bluetooth Speakers</h1>
            <hr />
            <ProductLayout>
               {
                  Object.keys(products).map((key) =>
                     <Product
                        key={key}
                        product={products[key]}
                        productID={key}
                        isItemAdded={this.isItemInCart(key)}
                        onAddToCart={this.props.onAddToCart}
                     />
                  )
               }
            </ProductLayout>
         </section>
      );
   }
}
