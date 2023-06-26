import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import axios from "axios";


export default function Createblog() {
    const [blogName, setblogName] = useState("");
    const [authorName, setauthorName] = useState("");
    const [imageURL, setimageURL] = useState(" ");
    const [location, setlocation] = useState(" ");
    const [description, setdescription] = useState(" ");


    function sendData(e) {


        e.preventDefault();

        const newBlog = {
            blogName,
            authorName,
            imageURL,
            location,
            description,

        }

        axios.post("http://localhost:8070/blog/add", newBlog).then(() => {
            ("Blog  added")
            setblogName('');
            setauthorName('');
            setimageURL('');
            setlocation('');
            setdescription('');


            alert("Blog added ..");
            window.location = './manage'

        }).catch((err) => {
            alert("error");
        })
    }
    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div style={{
            backgroundImage: `url("https://res.cloudinary.com/iplus/image/upload/v1681532998/formbackground_azuf3e.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '120%'
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
                                    <Form.Label style={{ color: 'black' }}>Blog Name:</Form.Label>
                                    <Form.Control type="text" name='name' style={{ color: 'black' }}
                                        onChange={(e) => setblogName(e.target.value)}
                                        placeholder=" Blog Name  .." required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="userid">
                                    <Form.Label style={{ color: 'black' }}>Author Name : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setauthorName(e.target.value)}
                                        placeholder=" Author Name .." />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }} > Image URL: </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setimageURL(e.target.value)}
                                        placeholder=" Image URL .." required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: 'black' }}>Location : </Form.Label>
                                    <Form.Control type="text" style={{ color: 'black' }}
                                        onChange={(e) => setlocation(e.target.value)}
                                        placeholder=" Location  .." required />
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
