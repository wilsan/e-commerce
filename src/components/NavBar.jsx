import './NavBar.css';

export default function NavBar() {
   return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid px-5">
            <a className="navbar-brand" href="#">Online<b>Kada</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-content">
               <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                     <a className="nav-link active" href="#">Bluetooth Speakers</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Cart</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}