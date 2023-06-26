import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import "jspdf-autotable";
import {Link, link} from 'react-router-dom';
import './Report.css';


export default function PdfGenerator() {
       const[report,setreport]= useState([]);

       useEffect(()=>{
        function getStarHotel(){
            axios.get("http://localhost:8070/Boutique/Display/").then((res)=>{
            console.log(res.data);
                setreport(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
            
        }getStarHotel();
    },[])
    const generateorderReport = () => {
      const doc = new jsPDF();
      const title = "Boutique Hotels ";
      doc.setFontSize(15);
      doc.setTextColor(128, 0, 0);
      doc.text(title, 100, 10, null, null, "center");
      doc.setTextColor(0);
      doc.setFontSize(12);

      doc.setFontSize(8);
      doc.text(
          `*This Report is automatically generated.`,
          20,
          35,
          null,
          null
      );

      const headers = [
        [
            "Hotel Name",
            "Location",
            "Contact",
            "Booking",

        ],
    ];

    const data = report.map((report, index) => [
              report.Name,
              report.Location,
              report.Contact,
              report.Booking,



    ]);
    let contents = {
        startY: 20,
        head: headers,
        body: data,
    };
    doc.autoTable(contents);
    doc.save("Hotel_Data_Report.pdf");
};

    




    return(
        
      <div className="wrapper1">
 
              <h2 >Report</h2>
<table className="table1"  class="table table-striped text-dark" >

          <thead>
            <tr>
              
            <th class="th1" scope="col">&nbsp;&nbsp;Hotel Name</th>
              <th class="th1" scope="col">Location</th>
              <th class="th1" scope="col">Contact No</th>
              <th class="th1" scope="col">Web</th>
           
             
            </tr>
          </thead>
          <tbody>
          

   {report.map((boutiquehotels,key)=>(
        <tr key={key}>
            
         
          
            <td scope="row">&nbsp;&nbsp;{boutiquehotels.Name}</td>
            <td> {boutiquehotels.Location}</td>
            <td> &nbsp;&nbsp;  {boutiquehotels.Contact}</td>
            <td><a href={boutiquehotels.Booking}>For Bookings</a></td>
             
        </tr>

   ))}
   </tbody>
   </table>
{ <button id="Print"   onClick={() => generateorderReport()} > Print </button>}
   
</div>
 )

}