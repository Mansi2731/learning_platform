import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Login from "./Login";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from 'react-router-dom';

import { Button } from 'react-bootstrap';


function Navbar() {


    return (
        <div >

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <img className='mylogo ' size='sm' src="../images/nitw_logo.jpeg " alt="" />
                <NavLink class="navbar-brand" to="#"> LEARNING PLATFORM </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* <div class="gcse-search "></div> */}

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to="/about">About</NavLink>
                        </li>
                        <li class="nav-item ">
                            <NavLink class="nav-link dropdown-toggle" to="/course" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                courses
                            </NavLink>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown"  >
                                <a class="dropdown-item " href="#">DSA </a>

                                <a class="dropdown-item" href="#">Developement</a>
                                {/* <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </li>

                        <Button variant="outline-success " className='btn-login' size="sm" >
            <NavLink class="nav-link" to="/login">Login/SignUp</NavLink>
            </Button>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    
                        {/* <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"  />
                        <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button> */}
                         {/* {<script async src="https://cse.google.com/cse.js?cx=206d20c724861484c"></script>}
                        <div class="gcse-search"></div> */}
                       
                    </form>
                </div>
            </nav>

        </div>
    );
}

export default Navbar