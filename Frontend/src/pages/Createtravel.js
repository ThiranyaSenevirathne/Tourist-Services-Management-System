import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import axios from "axios";


export default function Createtravel() {
    const [partnerName, setpartnerName] = useState("");
    const [address, setaddress] = useState("");
    const [imageURL, setimageURL] = useState(" ");
    const [contactNumber, setcontactNumber] = useState(" ");
    const [rate, setrate] = useState(" ");
    const [description, setdescription] = useState(" ");


    function sendData(e) {


        e.preventDefault();

        const newBlog = {
            partnerName,
            address,
            contactNumber,
            rate,
            imageURL,
            description

        }

        axios.post("http://localhost:8070/travel/add", newBlog).then(() => {
            ("Travel Data Added")
            setpartnerName('');
            setaddress('');
            setimageURL('');
            setcontactNumber('');
            setrate('');
            setdescription('');


            alert("Travel Data added ..");
            window.location = './viewtravel'

        }).catch((err) => {
            alert("error");
        })
    }
    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div style={{
            backgroundImage: `url("https://res.cloudinary.com/iplus/image/upload/v1681579557/pexels-marina-hinic-730778_jhvmqg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120%'
        }}>

            <div style={{ paddingLeft: '10vh', paddingTop: '4vh', paddingBottom: '8vh', paddingRight: '10vh' }}>

                <Card style={{
                    backgroundColor: 'white',
                    opacity: 0.8
                }} >
                    <Card.Body>


                        <Form onSubmit={sendData}>

                            <br />
                            <div >

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label style={{ color: 'black' }}>Partner Name:</Form.Label>
                                    <Form.Control type="text" name='name' style={{ color: 'black' }}
                                        onChange={(e) => setpartnerName(e.target.value)}
                                        placeholder=" Partner Name  .." required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="userid">
                                    <Form.Label style={{ color: 'black' }}>Address : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
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
                                        onChange={(e) => setcontactNumber(e.target.value)}
                                        placeholder=" Contact Number  .." required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}>Rate : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setrate(e.target.value)}
                                        placeholder=" Rate  .." required />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}> Description : </Form.Label>
                                    <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }}
                                        onChange={(e) => setdescription(e.target.value)}
                                        placeholder=" Description .." required />
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
