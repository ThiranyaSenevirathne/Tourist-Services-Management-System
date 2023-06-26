import React,{useEffect, useState} from "react";
import {Link, link} from 'react-router-dom';
import axios from "axios";
import './StarClass.css';
import StarMain from '../images/StarMain.png';


 function StarClass(){

    const[StarClass,setHotel]= useState([]);

    


    useEffect(()=>{
        function getStarHotel(){
            axios.get("http://localhost:8070/Hotel/view/").then((res)=>{
            console.log(res.data);
                setHotel(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
            
        }getStarHotel();
    },[])
   

    const[searchTerm,setSearchTerm]=useState("");

    return(

       <div className="hfbehbf">
<div className="StarImage">
   <img src ={StarMain} class="StarMain" alt="Image"/>
   <div class="topic">#Visit Sri Lanka</div>
   <div class="title">Star Class Hotels</div>
   


   < a href="http://localhost:3000/Reportpdf" id="report"> Report</a>
   <div class= "search">
      <input  type="text"  placeholder="Search By Place" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      
      </div>

   </div>

    <div className="table-class">
  <table class="table">
    <thead></thead>
   <tbody>


   {
    StarClass.filter(val=>{
        if(searchTerm===""){
            return val; }
          else if(
            val.Location.toLowerCase().includes(searchTerm.toLowerCase()) )
            {
             return val
             }
            }).map((addhotels,key)=>(
        <tr key={key}>
            <td>
          <div className ="image-wrapper"  >
            <img src={addhotels.Image} class="ImageUpload"alt={addhotels.Name}   />
            </div>
            </td>
            <td>
            <div className="details-wrapper">
            <div className="hotel-name">{addhotels.Name}</div>
            <div className="hotel-category"> Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; &nbsp; {  addhotels.Category}</div>
            <div className="hotel-location"> Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   :&nbsp;&nbsp;&nbsp;  {addhotels.Location}</div>
            <div className="hotel-contact">  Contact No&nbsp; :&nbsp;&nbsp;  {addhotels.Contact}</div>
            <div className="hotel-booking"><a href={addhotels.Booking}>For Bookings</a></div>
             </div>
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
export default StarClass