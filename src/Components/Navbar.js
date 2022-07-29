import React from 'react' ;
import PropTypes from 'prop-types' ;
import logo from './images/favicon-96x96.png' ;
import { Link } from 'react-router-dom' ;


 function Navbar(props) {

  return (
    
    <div >
      <nav className={`navbar navbar-expand-lg  navbar-${ props.mode } bg-${props.mode}`}>
  <div className="container-fluid">
   
     
      <img src={logo} alt="" width="40" height="40"/>
      <Link className={`navbar-brand text-${props.mode==='dark' ?'light':'dark'} mx-3 `} to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='dark' ?'light':'dark'}`} aria-current="page" to="/">{props.element1}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  active text-${props.mode==='dark' ?'light':'dark'}`} to="/about">{props.element2}</Link>
        </li>
      </ul>
     { /*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
  </form> */ }

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Background Colour Pallet
  </button>
  <div className="d-flex" >
  <ul class="dropdown-menu mx-2">
    <li> <div  class="bg-primary rounded mx-2 my-2"  onClick={() => {props.toggleMode2('primary')}} style={{height:'30px' , width:'30px' , cursor: 'pointer'}}></div></li>
    <li> <div  class="bg-success rounded mx-2 my-2" onClick={() => {props.toggleMode2('success')}} style={{height:'30px' , width:'30px'}}></div></li>
    <li> <div  class="bg-danger rounded mx-2 my-2"  onClick={() => {props.toggleMode2('danger')}} style={{height:'30px' , width:'30px'}}></div></li>
    <li> <div  class="bg-warning rounded mx-2 my-2"  onClick={() => {props.toggleMode2('warning')}} style={{height:'30px' , width:'30px'}}></div></li>
    <li> <div  class="bg-info rounded mx-2 my-2" onClick={() => {props.toggleMode2('info')}}  style={{height:'30px' , width:'30px'}}></div></li>
  </ul>
</div>
</div>
  <div className="form-check form-switch mx-3" >
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


