import React, { useState, useEffect } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import axios from "axios";


export default function CreateLocation() {
    const [name, setname] = useState("");
    const [district, setdistrict] = useState("");
    const [imgurl, setimageURL] = useState(" ");
    const [category, setcategory] = useState(" ");
    const [desc, setdesc] = useState(" ");
    const [districtss, setdistrictss] = useState([]);


    useEffect(() => {

        //get funtion
        function setDistrict() {
            axios.get("http://localhost:8070/district/get").then((res) => {
                setdistrictss(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        setDistrict();
    }, [])



    function sendData(e) {


        e.preventDefault();

        const newLoc = {
            district,
        name,
        desc,
        category,
        imgurl,

        }

        axios.post("http://localhost:8070/location/add", newLoc).then(() => {
            ("location  added")
            setname('');
            setcategory('');
            setimageURL('');
            setdistrict('');
            setdesc('');

            alert("Location added ..");
            window.location='/manageloc';
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
                                    <Form.Label style={{ color: 'black' }}>District Name:</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                                            onChange={(e) => setdistrict(e.target.value)} >
                                                            {districtss.map((districtss) => {
                                                                return (
                                                                    <option Key={districtss._id} value={districtss.name}>{districtss.name}</option>

                                                                )
                                                            })}

                                                        </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}>Location Name : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setname(e.target.value)}
                                        placeholder=" Location Name  .." required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="userid">
                                    <Form.Label style={{ color: 'black' }}>category : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setcategory(e.target.value)}
                                        placeholder=" Location type .." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}> Description : </Form.Label>
                                    <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }}
                                        onChange={(e) => setdesc(e.target.value)}
                                        placeholder=" Description .." required />
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
