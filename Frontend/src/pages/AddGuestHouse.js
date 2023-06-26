import React,{useState} from "react";
import axios from "axios";
import './AddHotel.css';
import {Link, link} from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import './AddHotel.css';
import AddImg from '../images/AddHotel.png';

function GuestHouse(){

const [Name , setName] = useState("");
const [Category , setCategory] = useState("");
const [Location , setLocation] = useState("");
const [Contact , setContact] = useState("");
const [Booking , setBooking] = useState("");
const [Image , setImage] = useState("");


function sendData(e){
    e.preventDefault();


    const GuestHouse={
        Name,
        Category,
        Location,
        Contact,
        Booking,
        Image,
    }

  axios.post('http://localhost:8070/GuestHouse/addGuestHouse',GuestHouse).then(()=>{

  alert("Hotel Added");

   }).catch((err)=>{
   alert(err)
   });

}

return(

<div className = "aaaaa">

<div className="AddImage">
<img src={AddImg} class="FormImg" alt="Image"/>

<div class="conatiner">
<div class= "form">
<div className="form-title">
     Add Hotel
</div>
<form onSubmit ={sendData}>
<div className="form-group">
    
    <label for="name">Hotel Name</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>{
         setName(e.target.value);
    }}/>

</div>

<div className="form-group">
   
    <label for="Category">Category</label>
    <select id="category" className="form-control"  onChange={(e)=>{
         setCategory(e.target.value);
    }}>
      <option value="Star Class Hotel">Star Class Hotel</option>
      <option value="Boutique Hotel">Boutique Hotel</option>
      <option value="Guest House">Guest House</option>

   </select>

</div>


<div className="form-group">
   
    <label for="Location">Location</label>
    <input type="text" className="form-control" id="Location" onChange={(e)=>{
         setLocation(e.target.value);
    }}/>

  </div>
  
  <div className="form-group">
   
   <label for="Contact">Contact No</label>
   <input type="text" className="form-control" id="Contact" onChange={(e)=>{
        setContact(e.target.value);
   }}/>

 </div>

  <div className="form-group">
   
    <label for="Booking">Booking</label>
    <input type="url" className="form-control" id="Booking" onChange={(e)=>{
         setBooking(e.target.value);
    }}/>

  </div>


  <div className="form-group"  >
  < FileBase64
        multiple={ false } 
        onDone={({base64})=>{setImage(base64);
        } }/>
</div>

  <button id="button1" type="submit" className="btn btn-primary">submit</button>
  </form>
  </div>
  </div>
  </div>
  </div>


)
}


export default GuestHouse