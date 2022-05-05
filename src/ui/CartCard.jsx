import React from 'react';
import './CartCard.css';

export default function CartCard(props) {
   return (
      <div className="card mb-2 shadow">
         <div className="card-body">

            {props.children}

            <div id="grand-total" className="d-flex justify-content-between align-items-end">
               {
                  props.grandTotal ?
                     <React.Fragment>
                        <h4 className="mb-0">Grand Total:</h4>
                        <h5 className="mb-0">₹{props.grandTotal}</h5>
                     </React.Fragment>
                     :
                     <div>
                        <h4 className="mb-0">Your cart is empty</h4>
                     </div>
               }
            </div>
         </div>
      </div >
   );
}
