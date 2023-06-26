import React,{useState} from "react";
import {Link, link} from 'react-router-dom';
import axios from "axios";
import './HomePage.css';
import image from '../images/Home.png';
import StarImage from '../images/StarClass.png';
import BoutiqueImage from '../images/Boutique.png';
import GuestHouse from '../images/GuestHouse.png';


function Home(){
return(
  
 <div className="Container" >
 <div className="wrapper">

    <nav className="navbar ">
      <nav class="navbar navbar-expand-md ">
     
      <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
    
      <span className="navbar-toggler-icon"></span>
      </button>
   <div className=" navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
     
      <li className="nav-item ">
        <Link to = "" className="nav-link">Home</Link>
      </li>
      <li className="nav-item ">
        <Link to = '' className="nav-link">Guides</Link>
     </li>
     <li className="nav-item ">
        <Link to = '' className="nav-link">Explore</Link>
     </li>
     <li className="nav-item ">
        <Link to = '/' className="nav-link">Hotels</Link>
     </li>
     <li className="nav-item ">
        <Link to = '' className="nav-link">Blogs</Link>
     </li>
         
      </ul>
  </div>
    </nav>
    </nav>
  </div>

 <div className="mainImage">
   <img src ={image} class="HomeImage"alt="Image"/>
   <div class="topic">#Visit Sri Lanka</div>
   <div class="header">Looking For The Perfect Stay?</div>
   <div class="title1">Select your stay from the below mention categories</div>
   </div>
   <div className= "Image1">
   <a href="http://localhost:3000/View">
    <img src={StarImage} id="image1" alt="Image"/>
    <div class="text-block">Star Class Hotel</div>
    </a>
  
  </div>

    
  <div className= "Image2">
   <a href="http://localhost:3000/Boutique">
    <img src={BoutiqueImage} id="image2" alt="Image"/>
    <div class="text-block1">Boutique Hotels</div>
   </a>
  </div>

  <div className= "Image3">
   <a href="http://localhost:3000/GuestHouse">
    <img src={GuestHouse} id="image3" alt="Image"/>
    <div class="text-block2">Guest Houses</div>
   </a>
  </div>
 
  <footer>
   
  </footer>

  </div>
  
 



)
}
export default Home