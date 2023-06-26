import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table, Carousel, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Banner from "../Banner/Banner";

function Alldistrict() {
    const [district, setdistrict] = useState([]);

    useEffect(() => {

        //get funtion
        function setDistrict() {
            axios.get("http://localhost:8070/district/get").then((res) => {
                setdistrict(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        setDistrict();
    }, [])


 const handleShow = ( name
    ) => {
console.log(name);
window.localStorage.setItem("district", name);
window.location='/singledistrict';
}

    return (
        <div>


            <Banner />




            <div style={{ paddingLeft: '15vh', paddingRight: '15vh', paddingTop: '2vh' }}>
                <h4>Sri Lanka</h4>
                <h6>
                    Sri Lanka has a population of approximately 22 million people and is home to many cultures, languages, and ethnicities. The Sinhalese people form the majority of the nation's population, followed by the Tamils, who are the largest minority group and are concentrated in northern Sri Lanka; both groups have played an influential role in the island's history.

                </h6>
                <h6>
                    Sri Lanka has roughly 22,156,000 people and an annual population growth rate of 0.5%. The birth rate is 13.8 births per 1,000 people, and the death rate is 6.0 deaths per 1,000 people.[264] Population density is highest in western Sri Lanka, especially in and around the capital. Sinhalese constitute the largest ethnic group in the country, with 74.8% of the total population.[300] Sri Lankan Tamils are the second major ethnic group in the island, with a percentage of 11.2%. Moors comprise 9.2%.
                </h6>
            </div>


            <div style={{ paddingLeft: '15vh', paddingRight: '15vh', paddingTop: '2vh',paddingBottom:'1vh' }}>
                <Row xs={1} md={3} className="g-4">
                    {district.map((district) => (
                        <Col key={district._id}>
                            <Card onClick={() => handleShow(district.name)}>
                                <Card.Img variant="top" style={{height:'25vh'}} src={district.imgurl} />
                                <Card.Body>
                                    <Card.Title>{district.name}</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );

}
export default Alldistrict;



