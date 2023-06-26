import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
// import Banner from "../Banner/Banner";
function ManageGuide() {
    const [guide, setguide] = useState([]);
    const [_id, setid] = useState(" ");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [fullName, setfullName] = useState(false);
    const [location, setlocation] = useState(false);
    const [languages, setlanguages] = useState(false);
    const [description, setdescription] = useState(false);
    const [contactNo, setcontactNo] = useState(false);
    const [Email, setEmail] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (_id, fullName, location, languages, 
        description, contactNo, Email) => {
        setShow(true);
        setid(_id);
        setfullName(fullName);
        setlocation(location);
        setlanguages(languages);
        setdescription(description);
        setcontactNo(contactNo);
        setEmail(Email);

    }


    useEffect(() => {

        //get funtion
        function getallguide() {
            axios.get("http://localhost:8070/guide").then((res) => {
                setguide(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallguide();
    }, [])

    //delete funtion
    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:8070/guide/delete/" + _id).then((res) => {
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
            fullName,
            location,
            languages,
            description,
            contactNo,
            Email
        }

        axios.put("http://localhost:8070/guide/update/" + _id, newData).then(() => {
            setfullName("");
            setlocation("");
            setlanguages("");
            setdescription("");
            setcontactNo("");
            setEmail("");
            

            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))


    }

    return (
        <div>
            <div style={{ paddingRight: '1px', paddingBottom: '1px', paddingTop: '1px', paddingLeft: '87%' }}>

                <a href="./CreateMaleGuide">
                    <Button style={{ backgroundColor: "#5c2903", border: "#1dbf99", opacity: 0.7, color: 'white' }}>
                        Create Guide
                    </Button> </a> {' '}
                <a href="./MReport"><Button style={{ backgroundColor: "#4a2617", border: "#1dbf99", opacity: 0.7, color: 'white' }}>
                    Reports
                </Button></a>
            </div>
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

            {guide.filter(guide => {
                if (search === "") {
                    return guide
                }
                else if (guide.fullName.toLowerCase().includes(search.toLowerCase())) {
                    return guide
                }
            }).
                map((guide) => {
console.log("my id : ", guide._id)
                    return (
                        <div key={guide._id} style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
                            <Card  >
                                <Card.Img variant="top" src= "https://res.cloudinary.com/dmwjqzywv/image/upload/v1684141073/bwjzcpcj6ggrxguazmry.jpg" style={{ height: '60vh', backgroundSize: 'cover', }} />
                                <Card.Body>
                                    <Card.Title>{guide.fullName}</Card.Title>
                                    <Card.Text>
                                        {guide.location}
                                        {guide.description}
                                    </Card.Text>

                                    {/* <div style={{ float: 'right', paddingRight: '1vh' }}>
                                        <button type='submit'><a href={'/ViewSingleMGuide/' +_id}> Read More... </a></button>
                                    </div> */}

                                    <div style={{ float: 'right', paddingRight: '1vh' }}>
                                        <Button variant="primary" onClick={() => handleShow(guide._id, guide.fullName,
                                            guide.location,
                                            guide.languages,
                                            guide.description, 
                                            guide.contactNo, guide.Email )}>Edit</Button>{' '}
                                            
                                    <Modal show={show} onHide={handleClose}>
                                        <div style={{ paddingLeft: '10vh', paddingTop: '10vh', paddingBottom: '8vh', paddingRight: '10vh' }}>

                                            <Card style={{
                                                backgroundColor: 'lightblue',
                                                opacity: 0.8
                                            }} >
                                                <Card.Body>


                                                    <Form >

                                                        <br />
                                                        <div >

                                                            <Form.Group className="mb-3" controlId="name">
                                                                <Form.Label style={{ color: 'black' }}>Full Name:</Form.Label>
                                                                <Form.Control type="text" name='name' style={{ color: 'black' }} value={fullName}
                                                                    onChange={(e) => setfullName(e.target.value)}
                                                                    placeholder=" Full Name  .." required />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="userid">
                                                                <Form.Label style={{ color: 'black' }}>Location : </Form.Label>
                                                                <Form.Control type="text" style={{ color: 'black' }} value={location}
                                                                    onChange={(e) => setlocation(e.target.value)}
                                                                    placeholder=" location .." />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }} > Languages : </Form.Label>
                                                                <Form.Control type="text" style={{ color: 'black' }} value={languages}
                                                                    onChange={(e) => setlanguages(e.target.value)}
                                                                    placeholder=" Languages .." required />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }}>Description : </Form.Label>
                                                                <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }} value={description}
                                                                    onChange={(e) => setdescription(e.target.value)}
                                                                    placeholder=" Description  .." required />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }}> contactNo : </Form.Label>
                                                                <Form.Control type="text" style={{ color: 'black' }} value={contactNo}
                                                                    onChange={(e) => setcontactNo(e.target.value)} 
                                                                    placeholder=" Contact .." required />
                                                            </Form.Group>


                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }}> Email : </Form.Label>
                                                                <Form.Control type="text"  style={{ color: 'black' }}
                                                                    onChange={(e) => setEmail(e.target.value)} value={Email}
                                                                    placeholder=" Email .." required />
                                                            </Form.Group>

                                                        </div>

                                                        <div style={{ paddingLeft: "40%" }}>
                                                            <Button type="submit" onClick={(e) => updateUser(e)} > Update </Button>
                                                            {' '} <Button variant="secondary" onClick={handleClose}>Close
                                                            </Button>

                                                        </div>
                                                    </Form>

                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Modal>
                                        <Button onClick={() => onDelete(guide._id)}>Delete</Button> {' '}

                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}

        </div>
    );

}
export default ManageGuide;
