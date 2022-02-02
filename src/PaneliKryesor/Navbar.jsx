import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return <div>

           
         
          <nav className="navbar navbar-expand-lg navigation-wrap bg-warning">
            <div className="container">
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
              
              <input style={{width:"40%"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas-fa-stream navbar-toggler-icon"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">AGJENSIA:</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about"><b>TIRANA</b></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#explore-food">ROLI:</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials"><b>KLIENT</b></a>
                  </li>
                  
                  
                 
                </ul>
               <a className='navbar-icons'><i className="fa fa-shopping-bag ms-5 " aria-hidden="true"></i></a>
               <a className='navbar-icons'><i className="fa fa-bell ms-5 fa-1x" aria-hidden="true"></i></a>
               <a className='navbar-icons'><i className="fa fa-bug fa-1x ms-5" aria-hidden="true"></i></a>
              </div>
            </div>
          </nav>

        </div>


}