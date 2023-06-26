import React, { useState } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import axios from "axios";


export default function Createdistrict() {
    const [name, setname] = useState("");
    const [ant, setant] = useState("");
    const [imgurl, setimageURL] = useState(" ");
    const [lat, setlat] = useState(" ");
    const [desc, setdesc] = useState(" ");


    function sendData(e) {


        e.preventDefault();

        const newDistrict = {
            name,
            desc,
            imgurl,
            ant,
            lat

        }

        axios.post("http://localhost:8070/district/add", newDistrict).then(() => {
            ("District  added")
            setname('');
            setant('');
            setimageURL('');
            setlat('');
            setdesc('');


            alert("District added ..");
            window.location='/profile';
        }).catch((err) => {
            alert("error");
        })
    }
    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div >

            <div style={{ paddingLeft: '10vh', paddingTop: '10vh', paddingBottom: '8vh', paddingRight: '10vh' }}>

                <Card style={{
                    backgroundColor: 'white',
                    borderColor:'black'

                }} >
                    <Card.Body>


                        <Form onSubmit={sendData}>

                            <br />
                            <div >

                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label style={{ color: 'black' }}>District :</Form.Label>
                                    <Form.Control type="text" name='name' style={{ color: 'black' }}
                                        onChange={(e) => setname(e.target.value)}
                                        placeholder=" District Name  .." required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}> Description : </Form.Label>
                                    <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }}
                                        onChange={(e) => setdesc(e.target.value)}
                                        placeholder=" Description .." required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="userid">
                                    <Form.Label style={{ color: 'black' }}>Latitude : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setlat(e.target.value)}
                                        placeholder=" Latitude .." />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}>Longitude : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setant(e.target.value)}
                                        placeholder=" Longitude  .." required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }} > Image URL: </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setimageURL(e.target.value)}
                                        placeholder=" .." required />
                                </Form.Group>

                            </div>

                            <div style={{ paddingLeft: "40%" }}>
                                <Button variant="outline-primary" type="submit" > Create </Button>{' '} {' '}<Button variant="outline-danger" onClick={refreshPage}> Clear </Button>

                            </div>
                        </Form>

                    </Card.Body>
                </Card>


            </div><br />


        </div>
    );
}
