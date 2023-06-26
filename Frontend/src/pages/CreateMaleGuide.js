import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import axios from "axios";


export default function CreateMaleGuide() {
    const [fullName, setfullName] = useState(" ");
    const [location, setlocation] = useState(" ");
    const [languages, setlanguages] = useState(" ");
    const [description, setdescription] = useState(" ");
    const [contactNo, setcontactNo] = useState(" ");
    const [Email, setEmail] = useState(" ");


    function sendData(e) {


        e.preventDefault();

        const newMGuide = {
            fullName,
            location,
            languages,
            description,
            contactNo,
            Email

        }

        axios.post("http://localhost:8070/guide/add", newMGuide).then(() => {
            ("Guide  added")
            setfullName("");
            setlocation("");
            setlanguages("");
            setdescription("");
            setcontactNo("");
            setEmail("");

            alert("Guide added ..");
            window.location = './MaleGuide'

        }).catch((err) => {
            alert("error");
        })
    }
    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div style={{
            backgroundImage: `url("https://res.cloudinary.com/dmwjqzywv/image/upload/v1684143881/kvz5dqknsgnbebr4g3hg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120%'
        }}>

            <div style={{ paddingLeft: '10vh', paddingTop: '10vh', paddingBottom: '8vh', paddingRight: '10vh' }}>

                <Card style={{
                    backgroundColor: 'white',
                    opacity: 0.8
                }} >
                    <Card.Body>


                        <Form onSubmit={sendData}>

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
                                    <Form.Label style={{ color: 'black' }}> contactNo : </Form.Label>
                                    <Form.Control type="text"  style={{ color: 'black' }}
                                        onChange={(e) => setcontactNo(e.target.value)} value={contactNo}
                                        placeholder=" Contact .." required />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}> Email : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setEmail(e.target.value)} value={Email}
                                        placeholder=" Email .." required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}>Description : </Form.Label>
                                    <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }} value={description}
                                        onChange={(e) => setdescription(e.target.value)}
                                        placeholder=" Description  .." required />
                                </Form.Group>


                            </div>

                            <div style={{ paddingLeft: "40%" }}>
                                <Button type="submit" > Create </Button>{' '} {' '}<Button variant="danger" onClick={refreshPage}> Clear </Button>

                            </div>
                        </Form>

                    </Card.Body>
                </Card>





            </div><br />


        </div>
    );
}