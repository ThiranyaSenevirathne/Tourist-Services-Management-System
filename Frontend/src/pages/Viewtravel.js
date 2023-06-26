import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form, Modal } from "react-bootstrap";
import axios from "axios";
import "../Banner/Banner.css";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
function Viewtravel() {
    const [travel, settravel] = useState([]);
    const [_id, setid] = useState(" ");
    const [show, setShow] = useState(false);
    const [partnerName, setpartnerName] = useState("");
    const [address, setaddress] = useState("");
    const [imageURL, setimageURL] = useState(" ");
    const [contactNumber, setcontactNumber] = useState(" ");
    const [rate, setrate] = useState(" ");
    const [description, setdescription] = useState(" ");


    const parentToChild = (_id) => {
        setid(_id)
        localStorage.setItem("TID", _id);
        window.location = '/viewsingletravel'
    }

    const handleClose = () => setShow(false);
    const handleShow = (_id, partnerName,
        address,
        contactNumber,
        rate,
        imageURL,
        description) => {
        setShow(true);
        setid(_id);
        setpartnerName(partnerName);
        setaddress(address);
        setcontactNumber(contactNumber);
        setrate(rate);
        setimageURL(imageURL);
        setdescription(description);
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


    //delete funtion
    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:8070/travel/delete/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }

    const updateUser = (e) => {
        e.preventDefault();
        update(e)
    };

    function update() {
        const newData = {
            address,
            contactNumber,
            rate,
            imageURL,
            description
        }

        axios.put("http://localhost:8070/travel/update/" + _id, newData).then(() => {
            setpartnerName('');
            setaddress('');
            setimageURL('');
            setcontactNumber('');
            setrate('');
            setdescription('');

            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))
    }

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

            <div style={{ paddingRight: '1px', paddingBottom: '1px', paddingTop: '5px', paddingLeft: '87%' }}>
                <a href="./createtravel">
                    <Button style={{ backgroundColor: "red", border: "red", opacity: 0.7, color: 'black' }}>
                        Create
                    </Button> </a> {' '}
                <a href="./travelreport"><Button style={{ backgroundColor: "green", border: "green", opacity: 0.7, color: 'black' }}>
                    Report
                </Button></a>
            </div>
            {travel.map((travel) => {
                return (
                    <div>
                        <div key={travel._id} style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
                            <Card  >
                                <Card.Body>
                                    <div style={{ float: 'right', paddingRight: '1vh' }}>
                                        <Button primary onClick={() => handleShow(travel._id, travel.partnerName,
                                            travel.address,
                                            travel.contactNumber,
                                            travel.rate,
                                            travel.imageURL,
                                            travel.description)}><FaPenAlt /></Button> {' '}
                                        <Button primary onClick={() => onDelete(travel._id)}><FaTrashAlt /></Button>

                                    </div>
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
            <Modal show={show} onHide={handleClose}>
                <div style={{ paddingLeft: '2vh', paddingTop: '2vh', paddingBottom: '2vh', paddingRight: '2vh' }}>

                    <Card style={{
                        backgroundColor: 'white',
                        opacity: 0.8
                    }} >
                        <Card.Body>


                            <Form >
                                <br />
                                <div >
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label style={{ color: 'black' }}>Partner Name:</Form.Label>
                                        <Form.Control type="text" name='name' style={{ color: 'black' }}
                                            onChange={(e) => setpartnerName(e.target.value)} value={partnerName}
                                            placeholder=" Partner Name  .." required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="userid">
                                        <Form.Label style={{ color: 'black' }}>Address : </Form.Label>
                                        <Form.Control type="text" style={{ color: 'black' }} value={address}
                                            onChange={(e) => setaddress(e.target.value)}
                                            placeholder=" Address  .." />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{ color: 'black' }} > Image URL: </Form.Label>
                                        <Form.Control type="text" style={{ color: 'black' }}
                                            onChange={(e) => setimageURL(e.target.value)}
                                            placeholder=" Image URL .." required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{ color: 'black' }}>Contact Number : </Form.Label>
                                        <Form.Control type="text" style={{ color: 'black' }}
                                            onChange={(e) => setcontactNumber(e.target.value)} value={contactNumber}
                                            placeholder=" Contact Number  .." required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{ color: 'black' }}>Rate : </Form.Label>
                                        <Form.Control type="text" style={{ color: 'black' }} value={rate}
                                            onChange={(e) => setrate(e.target.value)}
                                            placeholder=" Rate  .." required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{ color: 'black' }}> Description : </Form.Label>
                                        <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }}
                                            onChange={(e) => setdescription(e.target.value)} value={description}
                                            placeholder=" Description .." required />
                                    </Form.Group>


                                </div>

                                <div style={{ paddingLeft: "40%" }}>
                                    <Button type="submit" onClick={(e) => updateUser(e)} > Update </Button>

                                </div>
                            </Form>

                        </Card.Body>
                    </Card>





                </div>
            </Modal>
        </div>
    );

}
export default Viewtravel;



