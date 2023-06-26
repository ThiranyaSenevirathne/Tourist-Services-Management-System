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
 
  

 <div className="mainImage">
   <img src ={image} class="HomeImage"alt="Image"/>
   <div class="topic">#Visit Sri Lanka</div>
   <div class="header">Looking For The Perfect Stay?</div>
   <div class="title1">Select your stay from the below mention categories</div>
   </div>
   <div className= "Image1">
   <a href="http://localhost:3000/StarClassCustomer">
    <img src={StarImage} id="image1" alt="Image"/>
    <div class="text-block">Star Class Hotel</div>
    </a>
  
  </div>

    
  <div className= "Image2">
   <a href="http://localhost:3000/BoutiqueCustomer">
    <img src={BoutiqueImage} id="image2" alt="Image"/>
    <div class="text-block1">Boutique Hotels</div>
   </a>
  </div>

  <div className= "Image3">
   <a href="http://localhost:3000/GuestHouseCustomer">
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