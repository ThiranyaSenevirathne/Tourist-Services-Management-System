import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "../Banner/Banner.css";
import { Link } from 'react-router-dom'

function ViewAllFGuide() {
    const [femaleGuide, setfemaleGuide] = useState([]);
    const [_id, setfid] = useState(" ");
    const [search, setSearch] = useState("");
    console.log(search);

    const parentToChild = (_id) => {
        setfid(_id)
        localStorage.setItem("FID", _id);
        window.location = '/ViewSingleFGuide'

    }



    useEffect(() => {

        //get funtion
        function getallFGuide() {
            axios.get("http://localhost:8070/femaleGuide/").then((res) => {
                setfemaleGuide(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallFGuide();
    }, [])

    return (
        <div>


            <div className="video-container">
                <video autoPlay loop muted>
                    <source
                        src="https://res.cloudinary.com/dmwjqzywv/video/upload/v1684140115/pexels-peter-fowler-1093662-1920x1080-30fps_onkan0.mp4"
                        type="video/mp4"

                    />
                </video>

                <div className="content">

                    <div style={{ paddingBottom: "1vh", paddingTop: "35vh", paddingLeft: '3vh', opacity: 0.5, color: 'black' }}>
                        <center>
                            <input type="text" placeholder="  Search For 'Guides' " style={{
                                width: '66vh', borderRadius: '25px', border: '2px', color: 'black', paddingLeft: '2vh', paddingTop: '1vh', paddingBottom: '1vh'
                            }}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }} />
                        </center>

                    </div>

                    <center>

                        <i> <h4 style={{ color: "white" }}>
                            #Visit Sri Lanka
                        </h4></i>
                    </center>

                </div>

            </div>


            {femaleGuide.filter(femaleGuide => {
                if (search === "") {
                    return femaleGuide
                }
                else if (femaleGuide.fullName.toLowerCase().includes(search.toLowerCase())) {
                    return femaleGuide
                }
            }).map((femaleGuide) => {

                return (
                    <div key={femaleGuide._id} style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
                        <Card  >
                            <Card.Img variant="top" src=" https://res.cloudinary.com/dmwjqzywv/image/upload/v1684141896/wbgnrzv9nvb72ocqrkyc.jpg" style={{ height: '60vh', backgroundSize: 'cover', }} />
                            <Card.Body>
                                <Card.Title>{femaleGuide.fullName}</Card.Title>
                                <Card.Text>
                                    {femaleGuide.location}
                                    {femaleGuide.description}
                                
                                </Card.Text>
                                <div style={{ float: 'right', paddingRight: '1vh' }}>

                                    <Button primary onClick={() => parentToChild(femaleGuide._id)}>More</Button>

                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                );
            })}

        </div>
    );

}
export default ViewAllFGuide;
