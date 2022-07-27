import React from 'react' ;
import PropTypes from 'prop-types' ;
import logo from './images/favicon-96x96.png' ;
//import { Link } from 'react-router-dom' ;


 function Navbar(props) {


  return (
    
    <div >
      <nav className={`navbar navbar-expand-lg  navbar-${ props.mode } bg-${props.mode}`}>
  <div className="container-fluid">
   
     
      <img src={logo} alt="" width="40" height="40"/>
      <a className={`navbar-brand text-${props.mode==='dark' ?'light':'dark'} mx-3 `} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='dark' ?'light':'dark'}`} aria-current="page" href="#">{props.element1}</a>
        </li>
        <li className="nav-item">
          {/* <a className={`nav-link  active text-${props.mode==='dark' ?'light':'dark'}`} href="#">{props.element2}</a> */}
        </li>
      </ul>
     { /*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
  </form> */ }
  <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className= {`form-check-label text-${props.mode==='dark' ?'light':'dark'}` } htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar ;
Navbar.propTypes=
{
  title: PropTypes.string.isRequired,
  element1 : PropTypes.string.isRequired,
  element2 : PropTypes.string.isRequired
}

Navbar.defaultProps =
{
  title: 'Set title here',
  elementt1: 'Set home here',
  elementt2: 'Set about here',
  
}


