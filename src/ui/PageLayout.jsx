import ProductSection from "../components/ProductSection";

export default function PageLayout(props) {
   return (
      <div className="row mt-4 px-4">
         <div className="col-md-8 col-7">
            {props.productSection}
         </div>
         <div className="col-md-4 col-5 border-start">
            {props.cartSection}
         </div>
      </div>
   );
}
