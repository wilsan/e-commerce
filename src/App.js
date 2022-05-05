import './App.css';
import NavBar from './components/NavBar';
import ProductSection from './components/ProductSection';
import PageLayout from './ui/PageLayout';
import CartSection from './components/CartSection';

import jbl from './assets/images/jblcharge4.jpg';
import bose1 from './assets/images/soundlink3.jpg';
import marshall from './assets/images/marshall.jpg';
import bose2 from './assets/images/soundlinkmini.jpg';
import sony1 from './assets/images/sonyportable.jpg'
import sony2 from './assets/images/sonyparty.jpg';
import React from 'react';

const products = {
  1: {
    image: jbl,
    name: 'JBL Charge 4',
    price: 15000,
    description: ['Up to 20 hours of playtime.', 'IPX7 waterproof.']
  },
  2: {
    image: bose1,
    name: 'Bose Soundlink III',
    price: 25000,
    description: ['Plays up to 14 hours.', 'Wraparound metal grille.', 'Curved edges and thin profile.']
  },
  3: {
    image: marshall,
    name: 'Marshall Acton II',
    price: 22000,
    description: ['Iconic Marshall design.', 'Customize your sound.']
  },
  4: {
    image: bose2,
    name: 'Bose Soundlink Mini',
    price: 16000,
    description: ['Engineered to travel.', 'Dual passive radiators.', 'Better sound in the palm of your hand.']
  },
  5: {
    image: sony1,
    name: 'Sony XB23 EXTRA BASS',
    price: 9000,
    description: ['Plays up to 14 hours.', 'Wraparound metal grille.', 'Curved edges and thin profile.']
  },
  6: {
    image: sony2,
    name: 'Sony SRS-XG500',
    price: 32000,
    description: ['Engineered to travel.', 'Dual passive radiators.', 'Better sound in the palm of your hand.']
  },
};

// Cart Model
// const cart = [
//   {
//     pID: 6,
//     image: sony2,
//     name: 'Sony SRS-XG500',
//     price: 32000,
//     qty: 1,
//   },
//   {
//     pID: 5,
//     image: sony1,
//     name: 'Sony XB23 EXTRA BASS',
//     price: 9000,
//     qty: 1,
//   },
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleAddToCart(productID) {
    const itemObject = {
      pID: productID,
      image: products[productID].image,
      name: products[productID].name,
      price: products[productID].price,
      qty: 1,
    }

    const updatedCart = this.state.cart;
    updatedCart.push(itemObject);
    this.setState({
      cart: updatedCart
    });
  }

  handleRemoveItem(productID) {
    const updatedCart = this.state.cart.filter((item) => item.pID !== productID)
    this.setState({
      cart: updatedCart
    })
  }

  handleQuantity(quantity, productID) {
    const updatedCart = this.state.cart.map(item => {
      if (item.pID === productID) {
        item.qty = quantity
        return item;
      }
      return item;
    });
    this.setState({
      cart: updatedCart
    });
  }

  render() {
    console.log('App render() called');
    return (
      <div className="App">
        <NavBar />

        <PageLayout
          productSection={
            <ProductSection
              products={products}
              cartItems={this.state.cart}
              onAddToCart={this.handleAddToCart} />
          }
          cartSection={
            <CartSection
              cartItems={this.state.cart}
              onRemove={this.handleRemoveItem}
              onQuantityChange={this.handleQuantity} />
          }
        />
      </div>
    );
  }
}

export default App;
