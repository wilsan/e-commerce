import React from "react";

export default class CartItem extends React.Component {
   constructor(props) {
      super(props);
      this.handleQuantityChange = this.handleQuantityChange.bind(this);
   }

   handleQuantityChange(e) {
      this.props.onQuantityChange(e.target.value, this.props.item.pID)
   }

   render() {
      const item = this.props.item
      return (
         <React.Fragment>
            <div className="d-flex align-items-center mb-3">
               <img src={item.image} alt="" className="img-thumbnail img-fluid" />
               <div>
                  <h6 className="card-title mb-3">{item.name}</h6>
                  <h6 className="card-subtitle mb-2 me-1 text-muted d-inline-block">Quantity</h6>
                  <select
                     defaultValue={1}
                     className="form-select form-select-sm d-inline-block"
                     onChange={this.handleQuantityChange}
                  >
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </select>
               </div>
            </div>
            <div className="d-flex justify-content-between align-items-end">
               <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => this.props.onRemove(item.pID)}
               >Remove Item</button>
               <h5 className="mb-0">₹{item.price * item.qty}</h5>
            </div>
            <hr />
         </React.Fragment>
      );
   }
}
