import React, { useState, useEffect } from "react";
import { Button, Table, Card } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import "../Banner/Banner.css";

export default function Report() {
    const [blog, setblog] = useState([]);

    useEffect(() => {

        //get bus details funtion
        function getblog() {
            axios.get("http://localhost:8070/blog/").then((res) => {
                setblog(res.data);
                console.log(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }


        getblog();
    }, [])


    const generateorderReport = () => {
        const doc = new jsPDF();
        const title = "Blogs Data Summary";
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
                "Blog Name",
                "Author Name",
                "Location",
                "Description",

            ],
        ];

        const data = blog.map((blog, index) => [

            blog.blogName,
            blog.authorName,
            blog.location,
            blog.description,


        ]);
        let contents = {
            startY: 20,
            head: headers,
            body: data,
        };
        doc.autoTable(contents);
        doc.save("Blog_Data_Report.pdf");
    };



    return (
        <div>
            <div className="video-container">
                <video autoPlay loop muted>
                    <source
                        src="https://res.cloudinary.com/iplus/video/upload/v1681570493/c26f306f-69c8-4cc8-8eb3-1600430c4f3c_enzron.mp4"
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



                        {blog.map((blog) => {


                            return (
                                <div key={blog._id} style={{ paddingBottom: '1vh', paddingLeft: '5vh', paddingRight: '5vh', paddingTop: '1vh' }}>
                                    <Card  >
                                        <div style={{ paddingTop: '1vh', paddingBottom: '1vh', paddingLeft: '1vh', paddingRight: '1vh' }}>
                                            <h5>&nbsp;{blog.blogName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {blog.authorName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {blog.location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                {blog.description}&nbsp;</h5>
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