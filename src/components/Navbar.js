import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
 
  return (
    <nav className={` text-light navbar navbar-expand-lg bg-${props.mode} `} >
    <div className="container-fluid">
      <Link className={`navbar-brand text-${props.mode==="dark"?"light":"dark"}`} to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`}  aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode==="dark"?"light":"dark"} `} to="/about">{props.about}</Link>
          </li>
          
          <li className="nav-item">
            <a className={`nav-link disabled text-${props.mode==="dark"?"light":"dark"}`} >Disabled</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success text-light" type="submit" >Search</button>
        </form> */}
       
      </div>
      <div class="form-check form-switch">
          <input   class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label class={`form-check-label text-${props.mode==="light"?"dark":"light"}`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
       </div>
      
    </div>
   
  </nav>
    
  )
}
Navbar.prototypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string

};
Navbar.defaultProps={
    about:"about"
};
