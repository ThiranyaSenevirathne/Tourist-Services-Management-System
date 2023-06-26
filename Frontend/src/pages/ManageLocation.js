import React, { useState, useEffect } from "react";
import {  Button, Modal, Form, Table, Carousel } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function ManageLocation() {
    const [location, setlocation] = useState([]);
    const [_id, setid] = useState(" ");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [district, setdistrict] = useState("");
    const [imgurl, setimageURL] = useState(" ");
    const [category, setcategory] = useState(" ");
    const [desc, setdesc] = useState(" ");

    const handleClose = () => setShow(false);
    const handleShow = (_id, district,
        name,
        desc,
        category,
        imgurl,) => {
        setShow(true);
        setid(_id);
        setdistrict(district);
        setname(name);
        setdesc(desc);
        setcategory(category);
        setimageURL(imgurl);

    }


    useEffect(() => {

        //get funtion
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

    //delete funtion
    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:8070/location/delete/" + _id).then((res) => {
            alert('Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }

    const updateUser = (e) => {
        e.preventDefault();
        update(e)
    };

    function update() {
        const newData = {
            district,
            name,
            desc,
            category,
            imgurl,
        }

        axios.put("http://localhost:8070/location/update/" + _id, newData).then(() => {
            setname('');
            setcategory('');
            setimageURL('');
            setdistrict('');
            setdesc('');

            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))
    }

    return (
        <div>


            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.freecreatives.com/wp-content/uploads/2016/03/Watercolor-Dark-Blue-Grunge-Background.jpg"
                        alt="First slide"
                        height='390'
                    />
                </Carousel.Item>
            </Carousel> */}


            <div style={{ paddingBottom: "1vh", paddingTop: "3vh", paddingLeft: '3vh', opacity: 0.5, color: 'black' }}>
                <center>
                    <input type="text" placeholder="  Search From 'Location' " style={{
                        width: '66vh', borderRadius: '25px', border: '2px', color: 'black', paddingLeft: '2vh', paddingTop: '1vh', paddingBottom: '1vh', borderColor: 'black'
                    }}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }} />
                </center>

            </div>



            <div style={{ paddingLeft: '15vh', paddingRight: '15vh' }}>
                <Table striped bordered hover size="sm" variant="light" >

                    <thead>
                        <tr>
                            <th>Location name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {location.filter(location => {
                            if (location === "") {
                                return location
                            }
                            else if (location.name.toLowerCase().includes(search.toLowerCase())) {
                                return location
                            }
                            return null
                        }).map((location) => {
                            return (
                                <tr key={location._id}>
                                    <td>{location.name}</td>

                                    <td>
                                        <Button variant="outline-success" onClick={() => handleShow(location._id, location.district,location.name,location.desc, location.category,location.imgurl)} ><FaPencilAlt /></Button>
                                    </td>

                                    <td>
                                        <Button variant="outline-danger" onClick={() => onDelete(location._id)}><FaTrashAlt /></Button>
                                    </td>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>&nbsp; <b>Edit location </b></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form >
                                                <div >
                                                    <Form.Label>Name :</Form.Label>
                                                    <Form.Control placeholder="Name"
                                                        value={name}
                                                        onChange={(e) => setname(e.target.value)} />
                                                </div>

                                                <div >
                                                    <Form.Label>Image Url : </Form.Label >
                                                    <Form.Control placeholder="Image"
                                                        value={imgurl}
                                                        onChange={(e) => setimageURL(e.target.value)} />
                                                </div>


                                                <div >
                                                    <Form.Label>Category : </Form.Label >
                                                    <Form.Control placeholder="Ant."
                                                        value={category}
                                                        onChange={(e) => setcategory(e.target.value)} />
                                                </div>

                                                <div >
                                                    <Form.Label>District : </Form.Label >
                                                    <Form.Control placeholder="lat."
                                                        value={district}
                                                        onChange={(e) => setdistrict(e.target.value)} />
                                                </div>
                                                <div >
                                                    <Form.Label>Description : </Form.Label >
                                                    <Form.Control placeholder="description."
                                                        value={desc}
                                                        onChange={(e) => setdesc(e.target.value)} />

                                                </div>
                                                <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                                                    <Button variant="warning" type="submit" onClick={(e) => updateUser(e)}>Update</Button>
                                                    {' '}<Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                </div >

                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                </tr>
                            );
                        })}

                    </tbody>

                </Table >
            </div>
            <div style={{ paddingRight: '1px', paddingBottom: '1px', paddingTop: '1px', paddingLeft: '87%' }}>

                <a href="./createlocat">
                    <Button style={{ backgroundColor: "white", borderColor: "black", color: 'black' }}>
                        Add Location
                    </Button> </a> {' '}

            </div>
        </div >
    );

}
export default ManageLocation;



