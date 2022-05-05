export default function ProductLayout(props) {
   return (
      <div className="row row-cols-auto">
         {props.children}
      </div>
   );
}
