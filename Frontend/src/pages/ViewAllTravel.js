import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form, Modal } from "react-bootstrap";
import axios from "axios";
import "../Banner/Banner.css";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
function ViewAllTravel() {
    const [travel, settravel] = useState([]);
    const [_id, setid] = useState(" ");
    const [show, setShow] = useState(false);
    


    const parentToChild = (_id) => {
        setid(_id)
        localStorage.setItem("TID", _id);
        window.location = '/viewsingletravel'
    }


    useEffect(() => {
        //get funtion
        function getallBlog() {
            axios.get("http://localhost:8070/travel/").then((res) => {
                settravel(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallBlog();
    }, [])

    return (
        <div>
            <div className="video-container">
                <video autoPlay loop muted>
                    <source
                        src="https://res.cloudinary.com/iplus/video/upload/v1681584799/New_videos_c6oqir.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="content">
                    <div style={{ paddingTop: '15vh' }}>
                        <center>
                            <h1 style={{ color: "white", fontSize: '80px' }}>
                                Travel                            </h1>
                        </center>
                    </div>
                </div>
            </div>


            {travel.map((travel) => {
                return (
                    <div>
                        <div key={travel._id} style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
                            <Card  >
                                <Card.Body>
                                    <Row>
                                        <Col sm={6}>
                                            <img src={travel.imageURL} alt="logo" style={{ width: '40%' }} />
                                        </Col>
                                        <Col sm={6}>
                                            <Card.Text>
                                                <br />
                                                {travel.partnerName}
                                            </Card.Text>
                                            <div style={{ float: 'right', paddingRight: '1px' }}>
                                                <Button primary onClick={() => parentToChild(travel._id)}>More</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                );
            })}
            
        </div>
    );

}
export default ViewAllTravel;

