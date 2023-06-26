
import React,{useEffect, useState,useRef} from "react";
import {Link, link} from 'react-router-dom';
import axios from "axios";
import './StarClass.css';
import BoutiqueImg from '../images/BoutiqueImg.png';


 function Boutique(){

    const[Boutique,setBoutique]= useState([]);

    
    const updateHotel=(id)=>{
    
        sessionStorage.editBoutique_id=id;
        window.location = `http://localhost:3000/updateBoutique/?${id}`;

    }


    useEffect(()=>{
        function getBoutiqueHotel(){
            axios.get("http://localhost:8070/Boutique/Display/").then((res)=>{
            console.log(res.data);
                setBoutique(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
            
        }getBoutiqueHotel();
    },[])
   


    const deleteHotel=async(id)=>{
        let result=await fetch(`http://localhost:8070/Boutique/delete/${id}`,{
            method : "Delete"
        });
        result= await result.json();
        if(result){
            alert("Hotel deleted");
        }
    }

    const[searchTerm,setSearchTerm]=useState("");

    return(

       <div className="hfbehbf">
<div className="StarImage">
   <img src ={BoutiqueImg} class="StarMain" alt="Image"/>
   <div class="topic">#Visit Sri Lanka</div>
   <div class="title">Boutique Hotels</div>
   <a href="http://localhost:3000/AddBoutique">
    <button id="addbutton" type="submit" className="btn btn-primary">Add Hotel</button>
   </a>
   < a href="http://localhost:3000/boutiquePDF" id="report"> Report</a>
   <div class= "search">
      <input  type="text"  placeholder="Search By Place" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      
      </div>


   </div>
   
    <div className="table-class">
  <table class="table">
    <thead></thead>
   <tbody>


   {Boutique.filter(val=>{
        if(searchTerm===""){
            return val; }
          else if(
            val.Location.toLowerCase().includes(searchTerm.toLowerCase()) )
            {
             return val
             }
            }).map((boutiquehotels,key)=>(
        <tr key={key}>
            <td>
          <div className ="image-wrapper"  >
            <img src={boutiquehotels.Image} class="ImageUpload"alt={boutiquehotels.Name}   />
            </div>
            </td>
            <td>
            <div className="details-wrapper">
            <div className="hotel-name">{boutiquehotels.Name}</div>
            <div className="hotel-category"> Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; &nbsp;{boutiquehotels.Category}</div>
            <div className="hotel-location"> Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  {boutiquehotels.Location}</div>
            <div className="hotel-contact">  Contact No&nbsp; :&nbsp;&nbsp;  {boutiquehotels.Contact}</div>
            <div className="hotel-booking"><a href={boutiquehotels.Booking}>For Bookings</a></div>
             </div>
        </td>
        <td>{<button id="delete"  className="btn btn-primary" onClick={() => {deleteHotel(boutiquehotels._id);
                    refreshPage()}}>Delete</button>}{<button id="update" class="button" className="btn btn-primary" onClick={() =>updateHotel(boutiquehotels._id)}>Update</button>}
                    
        </td>
        </tr>
    ))
   }
   </tbody>
    




  </table>
</div>
</div>
    )
    function refreshPage(){
        window.location.reload(false);
       }
}
export default Boutique