import React from "react";

import cartIcon from '../assets/images/cart3.svg';
import smokeIcon from '../assets/images/cloud-haze2.svg'
import CartCard from "../ui/CartCard";
import CartLayout from "../ui/CartSectionLayout";
import CartItem from "./CartItem";
import './CartSection.css';

export default class CartSection extends React.Component {
   render() {
      const cartItems = this.props.cartItems;
      let sum = 0;
      for (let item of cartItems) {
         sum += item.price * item.qty;
      }

      return (
         <section id="cart-items" className="container-fluid rounded mt-2">
            <h2>
               <img id="haze" src={smokeIcon} style={{ width: '40px', marginRight: '8px' }} alt="..."/>
               <img src={cartIcon} style={{ width: '50px' }} alt="..."/>
            </h2>
            <CartLayout>
               <CartCard grandTotal={sum}>
                  {
                     cartItems.map((item) =>
                        <CartItem
                           key={item.pID}
                           item={item}
                           onRemove={this.props.onRemove}
                           onQuantityChange={this.props.onQuantityChange}
                        />
                     )
                  }
               </CartCard>
            </CartLayout>
         </section>
      );
   }
}
