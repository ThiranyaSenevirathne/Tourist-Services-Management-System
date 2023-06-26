import React, { useState, useEffect } from "react";
import { Button, Table, Card } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import "../Banner/Banner.css";

export default function FReport() {
    const [femaleGuide, setfemaleGuide] = useState([]);

    useEffect(() => {

        //get bus details funtion
        function getguide() {
            axios.get("http://localhost:8070/femaleGuide/").then((res) => {
                setfemaleGuide(res.data);
                console.log(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }


        getguide();
    }, [])


    const generateorderReport = () => {
        const doc = new jsPDF();
        const title = "Female Guide Data Summary";
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
                "Full Name",
                "Location",
                "Languages",
                "Description",
                "Contact No",
                "Email",
            ],
        ];

        const data = femaleGuide.map((femaleGuide, index) => [

            femaleGuide.fullName,
            femaleGuide.location,
            femaleGuide.languages,
            femaleGuide.description,
            femaleGuide.contactNo,
            femaleGuide.Email,


        ]);
        let contents = {
            startY: 20,
            head: headers,
            body: data,
        };
        doc.autoTable(contents);
        doc.save("Female_Guide_Data_Report.pdf");
    };



    return (
        <div>
            <div className="video-container">
                <video autoPlay loop muted>
                    <source
                        src="https://res.cloudinary.com/dmwjqzywv/video/upload/v1684143784/j2hn6atty5wtt0paah8s.mp4"
                        type="video/mp4"

                    />
                </video>

                <div className="content">





                    <div style={{ paddingTop: '1vh' }}>
                        <i> <h4 style={{ color: "white" }}>
                            #Visit Sri Lanka
                        </h4></i>
                    </div>
                    <div style={{ paddingTop: '10vh' }}>
                        <center>

                            <h1 style={{ color: "white" }}>
                                Report                            </h1>
                        </center>
                    </div>


                </div>

            </div>
            <div style={{paddingTop:'4vh',paddingBottom:'2vh',paddingLeft:'5vh',paddingRight:'5vh'}}>
                <Card  style={{borderColor:'black'}}>

                    <div style={{paddingTop:'1vh',paddingLeft:'90%',paddingRight:'1vh'}}>
                        <Button onClick={() => generateorderReport()} style={{backgroundColor:'#187bcd',border:'black'}}> Print </Button>
                    </div>
                    <div>



                        {femaleGuide.map((femaleGuide) => {


                            return (
                                <div key={femaleGuide._id} style={{ paddingBottom: '1vh', paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '1vh' }}>
                                    <Card  >
                                        <div style={{ paddingTop: '1vh', paddingBottom: '1vh', paddingLeft: '1vh', paddingRight: '1vh' }}>
                                            <h5>&nbsp;{femaleGuide.fullName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {femaleGuide.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {femaleGuide.languages}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {femaleGuide.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {femaleGuide.contactNo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {femaleGuide.Email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </h5>
                                        </div>

                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </div>



        </div>
    );
}