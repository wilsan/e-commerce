export default function CartLayout(props) {
   return (
      <div className="col-10">
         <div className="flex-column d-flex align-items-stretch">
            {props.children}
         </div>
      </div>
   );
}
