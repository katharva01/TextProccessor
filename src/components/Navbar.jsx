import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.darkMode===true? 'dark' : 'light'}` } >
      <div className="container-fluid">
        <Link className= {`navbar-brand text-${props.darkMode===true? 'light' : 'dark'} `} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className= {`nav-link active text-${props.darkMode===true? 'light' : 'dark'} `} aria-current="page" to="/Blog">
               {props.link1}
              </Link>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link disabled">Disabled</a> */}
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>
   
  </>
  )
}

Navbar.propTypes = {title: PropTypes.string,
                    link1 : PropTypes.string 
                    }

Navbar.defaultProps ={
  title : "Title"
}
