import React from "react";
import ProductCard from "../ui/ProductCard";

export default class Product extends React.PureComponent {
   render() {
      console.log(`"${this.props.product.name}" Product render() called`);
      const product = this.props.product;
      const productID = this.props.productID;
      return (
         <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
         >
            <button
               className="btn btn-outline-dark btn-sm"
               onClick={() => this.props.onAddToCart(productID)}
               disabled={this.props.isItemAdded}
            >{
               this.props.isItemAdded ? 'Item Added' : 'Add to Cart'
            }</button>
         </ProductCard>
      );
   }
}
