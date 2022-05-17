import './ProductCard.css';

export default function ProductCard(props) {
   return (
      <div className="col me-2">
         <div className="card mb-4 border-0">
            <div className="image-container">
               <img src={props.image} className="card-img-top p-2" alt="..." />
            </div>
            <hr className="my-0" />
            <div className="card-body">
               <h5 className="card-title mb-2">{props.name}</h5>
               <div className="d-flex justify-content-between align-items-end ">
                  <h5 className="card-text m-0">₹{props.price}</h5>
                  {props.children}
               </div>
               <ul>
                  {
                     props.description.map((item, index) => <li key={index}>{item}</li>)
                  }
               </ul>
            </div>
         </div>
      </div>
   );
}
