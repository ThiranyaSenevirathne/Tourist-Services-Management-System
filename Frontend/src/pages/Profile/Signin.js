import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import FileBase from "react-file-base64";

export default function Signin() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fileEnc, fileEncData] = useState(null);
    const [username, setusername] = useState("");
    const [role, setrole] = useState("");
    const [nic, setnic] = useState("");
    const [error, setError] = useState("");
    const regex = /\S+@\S+\.\S+/;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loginHandler = async (e) => {

        e.preventDefault();
        if (email.trim().length === 0 || password.trim().length === 0 || username.trim().length === 0 || fileEnc.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        } else if (password.trim().length < 6) {
            setTimeout(() => {
                setError("Time Out");
            }, 5000);
            return setError("Please use a valid password with at least 6 characters");
        }
        else if (!email.trim().match(regex)) {
            setTimeout(() => {
                setError("Time Out");
            }, 5000);
            return setError("Please provide valid email");
        }

        else {

            let postObject = { email, password, fileEnc, role, username, nic };

            await axios
                .post("http://localhost:8070/auth/reg", postObject)
                .then((res) => {
                    localStorage.setItem("authToken", res.data.token);
                    console.log('Registred');
                    console.log(role);
                    window.location='/login';
                })
                .catch((err) => {
                    setError(err.response.data.desc);
                    setTimeout(() => {
                        setError("");
                    }, 5000);
                });
        }

    };

    return (
        <div style={{
            backgroundImage: `url("https://i0.wp.com/travelsrilanka.org/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-07-at-08.53.11.jpeg?fit=1280%2C853&ssl=1")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500%'
        }}>
            <Container>

                <div >
                    <div style={{ paddingLeft: '5vh', paddingTop: '6vh', paddingBottom: '16vh' }}>
                        <Card style={{
                    backgroundColor: 'white',
                    opacity: 0.8
                }}>
                            <div style={{ paddingLeft: '5vh', paddingTop: '5vh', paddingBottom: '5vh', paddingRight: '5vh' }}>
                                <Form onSubmit={loginHandler}>
                                    {error && <span className="error-message" style={{ color: "red" }}>{error}</span>}
                                    <Form.Group as={Col} md={12} controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md={12} controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            minLength={6}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md={12} controlId="nic">
                                        <Form.Label>Nic</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="username"
                                            value={nic}
                                            onChange={(e) => setnic(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md={12} controlId="username">
                                        <Form.Label>username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="username"
                                            minLength={6}
                                            value={username}
                                            onChange={(e) => setusername(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} md={12} controlId="username">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            onChange={(e) => setrole(e.target.value)} >
                                            
                                            <option value="Explore Manager">        Explora Manager     </option> 
                                            <option value="Tour Guide Manager">     Tour Guide Manager  </option>                         
                                            <option value="Blog Writer">            Blog Writer         </option>
                                            <option value="Hospitality Manager">    Hospitality Manager </option>
                                            <option value="Travel Manager">         Travel Manager      </option>

                                        </Form.Select>

                                    </Form.Group>

                                    <Form.Group controlId="fileupload">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <h6>**Please do not exceed the amount of file size 25MB </h6>
                                        <FileBase
                                            type="file"
                                            multiple={false}
                                            onDone={({ base64 }) => {
                                                fileEncData(base64);
                                            }}
                                        />
                                    </Form.Group>
                                    <div>
                                        <div className="container">
                                            <div className="form-group">

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <br />

                                        <Form.Group as={Col} md={12} className="login-btn">
                                            <div className="d-grid gap-2">
                                                <Button style={{ backgroundColor: "red", border: "#5791b3" }} type="submit"  >
                                                    Create
                                                </Button>
                                                <a href="/login">
                                                <center> Alrady have an account </center>
                                                </a>

                                            </div>

                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>

                        </Card>

                    </div>

                </div>

            </Container>

        </div>
    );
}
