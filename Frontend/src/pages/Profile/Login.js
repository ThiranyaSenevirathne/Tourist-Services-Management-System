import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async (e) => {
        e.preventDefault();
        if (email.trim().length === 0 || password.trim().length === 0) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Please fill all the fields");
        } else if (password.trim().length < 6) {
            setTimeout(() => {
                setError("");
            }, 5000);
            return alert("Please use a valid password");
        } else {
            let postObject = { email, password };

            await axios
                .post("http://localhost:8070/auth/login", postObject)
                .then((res) => {
                    localStorage.setItem("authToken", res.data.token);
                    console.log('Loged');
                    window.location='/profile';
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
        <div  style={{
            backgroundImage: `url("https://wallpaperforu.com/wp-content/uploads/2020/09/tropical-wallpaper-2009041341349.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400%'
        }}>
            <div style={{paddingTop:'35vh',paddingLeft:'35vh',paddingRight:'35vh',paddingBottom:'35vh'}} >
                <Card  style={{
                    backgroundColor: 'white',
                    opacity: 0.8
                }}>
                    <div style={{ paddingLeft: '10vh', paddingRight: '10vh', paddingTop: '5vh', paddingBottom: '5vh' }}>
                        <Form onSubmit={login}>
                            {error && <span className="error-message" style={{ color: "red" }}>{error}</span>}

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type="email" placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password"
                                    minLength={6}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <div style={{ paddingLeft: '3vh', paddingRight: '3vh' }}>
                                <div className="d-grid gap-2">
                                    <Button size="lg" style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }} type="submit" >
                                        Login
                                    </Button>
                                    <a href="/signin">
                                    <center> Need an account Sign in</center>
                                    </a>
                                </div>
                            </div>

                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    );
}
