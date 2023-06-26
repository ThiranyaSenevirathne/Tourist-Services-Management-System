import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table, Carousel, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import WeatherCard from '../pages/components/WeatherCard';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
function Singledictrict() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '7ad07aac9b0943040a4abdd2c23dfc4e',
        lat: '6.9271',
        lon: '79.8612',
        lang: 'en',
        unit: 'metric',
    });
    const [district, setdistrict] = useState([]);
    const [location, setlocation] = useState([]);
    const datas = localStorage.getItem("district");
    console.log(data);
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
        function setLocation() {
            axios.get("http://localhost:8070/location/get").then((res) => {
                setlocation(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        setLocation();
        setDistrict();
    }, [])


    const handleShow = ( name
        ) => {
    console.log(name);
    window.localStorage.setItem("location", name);
    window.location='/singlelocation';
    }


    return (
        <div>

            {district.filter(district => {
                        if (district.name === datas) {
                            return district
                        }

                        return null
                    }).map((district) => (
                <div key={district._id}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={district.imgurl}
                                alt="First slide"
                                style={{height:'65vh'}}
                            />
                            <Carousel.Caption>
                                <h3>{district.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                    <div style={{paddingLeft: '15vh', paddingRight: '15vh', paddingTop: '2vh', paddingBottom: '1vh'}}>
                    <h4>{district.name}</h4>
                    <h6>{district.desc}</h6>
                    <h6>Latitude: {district.lat}  &   Altitude: {district.ant}</h6>

                    </div>
                </div>
                
            ))}

<div>
            <section id="home">
                <div style={{paddingLeft: '15vh', paddingTop: '2vh'}}>
                    <div  style={{paddingTop:' 3vh',paddingBottom:'4vh'}}>
                    <div  style={{paddingBottom:'2vh'}}>
                    <h4>Weather Application</h4>
                    </div>

                        <Row>
                            <Col>
                            <div  >
                            <ReactWeather
                                    isLoading={isLoading}
                                    errorMessage={errorMessage}
                                    data={data}
                                    lang="en"
                                    locationLabel= {`${datas} LK`}
                                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                                    showForecast
                                />
                            </div>
                               
                            </Col>
                            <Col>
                            <div >
                                <WeatherCard />
                            </div>
                            </Col>
                        </Row>


                    </div>
                </div>
            </section>

        </div>

            <div style={{ paddingLeft: '15vh', paddingRight: '15vh', paddingTop: '2vh', paddingBottom: '1vh' }}>
                <Row xs={1} md={3} className="g-4">
                    {location.filter(location => {
                        if (location.district === datas) {
                            return district
                        }

                        return null
                    }).map((location) => (
                        <Col key={location._id}>
                            <Card onClick={() => handleShow(location.name)}>
                                <Card.Img variant="top" style={{ height: '25vh' }} src={location.imgurl} />
                                <Card.Body>
                                    <Card.Title>{location.name}</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );

}
export default Singledictrict;



