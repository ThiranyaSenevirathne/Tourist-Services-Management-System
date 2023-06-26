import React, { useState, useEffect } from "react";
import { Button, Table, Card } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import "../Banner/Banner.css";

export default function MReport() {
    const [guide, setguide] = useState([]);

    useEffect(() => {

        //get bus details funtion
        function getguide() {
            axios.get("http://localhost:8070/guide/").then((res) => {
                setguide(res.data);
                console.log(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }


        getguide();
    }, [])


    const generateorderReport = () => {
        const doc = new jsPDF();
        const title = "Male Guide Data Summary";
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

        const data = guide.map((guide, index) => [

            guide.fullName,
            guide.location,
            guide.languages,
            guide.description,
            guide.contactNo,
            guide.Email,


        ]);
        let contents = {
            startY: 20,
            head: headers,
            body: data,
        };
        doc.autoTable(contents);
        doc.save("Male_Guide_Data_Report.pdf");
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



                        {guide.map((guide) => {


                            return (
                                <div key={guide._id} style={{ paddingBottom: '1vh', paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '1vh' }}>
                                    <Card  >
                                        <div style={{ paddingTop: '1vh', paddingBottom: '1vh', paddingLeft: '1vh', paddingRight: '1vh' }}>
                                            <h5>&nbsp;{guide.fullName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {guide.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {guide.languages}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {guide.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {guide.contactNo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {guide.Email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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