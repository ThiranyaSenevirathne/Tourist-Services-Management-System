import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table, Carousel, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Banner from "../Banner/Banner";

function Singlelocation() {
    const [location, setlocation] = useState([]);
    const data = localStorage.getItem("location");
    console.log(data);
    useEffect(() => {


        function setLocation() {
            axios.get("http://localhost:8070/location/get").then((res) => {
                setlocation(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        setLocation();
    }, [])





    return (
        <div>

            {location.filter(location => {
                if (location.name === data) {
                    return location
                }

                return null
            }).map((location) => (
                <div key={location._id}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={location.imgurl}
                                alt="First slide"
                                style={{ height: '65vh' }}
                            />
                            <Carousel.Caption>
                                <h3 style={{color:'black'}}>{location.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                    <div style={{ paddingLeft: '15vh', paddingRight: '15vh', paddingTop: '2vh', paddingBottom: '1vh' }}>
                    <h5>{location.name}</h5>
                    <h6>District : {location.district}</h6>
                    <h6>{location.desc}</h6>
                    <h6>Category : {location.category}</h6>

                    </div>
                </div>

            ))}





        </div>
    );

}
export default Singlelocation;



