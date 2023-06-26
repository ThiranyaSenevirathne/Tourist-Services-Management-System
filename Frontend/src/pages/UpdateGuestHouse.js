import React  , {useState , useEffect}from "react";
import axios from "axios";
import {Link, link} from 'react-router-dom';
import AddImg from '../images/AddHotel.png';


import './AddHotel.css';

export default function UpdateGuestHouse(props){
      
    const [Name , setName] = useState("");
    const [Category , setCategory] = useState("");
    const [Location , setLocation] = useState("");
    const [Contact , setContact] = useState("");
    const [Booking, setBooking] = useState("");
    
  

    function sendData(e){
        e.preventDefault();
        alert("Successfuly inserted");

        let Name = document.getElementById('name').value;
        let Category = document.getElementById('category').value;
        let Location = document.getElementById('Location').value;
        let Contact = document.getElementById('Contact').value;
        let Booking = document.getElementById('Booking').value;
       
       
        const editGuest={

            Name:Name,
            Category:Category,
            Location:Location,
            Contact:Contact,
            Booking:Booking,
          
          }

         
     axios.put(`http://localhost:8070/GuestHouse/updateGuest/${sessionStorage.editGuest_id}`,editGuest).then(()=>{
     

        let editGuest_id=sessionStorage.editGuest_id;
        console.log(editGuest_id);
      window.location.reload(false);//refresh the value field


     }).catch((err) =>{
        alert(err)
     })

}

useEffect(() =>{
    const id = props.id;
    let editGuest_id=sessionStorage.editGuest_id;
    axios.get(`http://localhost:8070/GuestHouse/get/Guest/${editGuest_id}`).then((res) => {
        console.log(res);
        let data=res.data.guesthouses;
        document.getElementById('name').value=data.Name;
        document.getElementById('category').value=data.Category;  
        document.getElementById('Location').value=data.Location;
        document.getElementById('Contact').value=data.Contact;
        document.getElementById('Booking').value=data.Booking;

        
       
      })
    }, []);

    return(

      
<div className = "aaaaa">

<div className="AddImage">
<img src={AddImg} class="FormImg" alt="Image"/>

<div class="conatiner">
<div class= "form">
<div className="form-title">
     Update Hotel
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
         
         <label for="Contact">Contact</label>
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



  <button id="button1" type="submit" className="btn btn-primary">submit</button>
  </form>
  </div>
  </div>
  </div>
  </div>


)
}

