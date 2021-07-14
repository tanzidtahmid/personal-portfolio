import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-white ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon navbar-light"></span> */}
      {/* <i class="fa fa-bars" aria-hidden="true" style="color:#e6e6ff"></i> */}
      <span class="text-white" role="button" ><FontAwesomeIcon icon = {faBars}></FontAwesomeIcon> </span>
{/* </button> */}
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className = 'nav-link text-white'  to ='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link className = 'nav-link text-white' to ='/projects'>Projects</Link>
        </li>
       
        <li class="nav-item">
          <Link className = 'nav-link text-white' to ='/blogs'>Blogs</Link>
        
        </li>
        <li class="nav-item">
          <Link className = 'nav-link text-white' to ='/aboutMe'>About Me</Link>
        
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;