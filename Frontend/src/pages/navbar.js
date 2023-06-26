import React,{useState} from 'react';
import {Link,link} from 'react-router-dom';
import axios from "axios";
import './navbar.css';

function navbar(){
    return(
        <nav className= "navbar">
          <ul className ="navbar-nav">
            <li className ="nav-item">
             <Link to="" className ="nav-Link">
                Home
             </Link>
            </li>

             <li className ="nav-item">
              <Link to="" className ="nav-Link">
                 Guides
             </Link>
             </li>
           
             <li className ="nav-item">
             <Link to="" className ="nav-Link">
                Explore
             </Link>
            </li>

            <li className ="nav-item">
             <Link to="/" className ="nav-Link">Hotels </Link>
            </li>
            
            <li className ="nav-item">
             <Link to="" className ="nav-Link">
                Blogs
             </Link>
            </li>

          </ul>


        </nav>
    )
}
export default navbar;