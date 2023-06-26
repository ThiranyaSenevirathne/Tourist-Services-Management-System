import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import Banner from "../Banner/Banner"
function ManageBlog() {
    const [blog, setblog] = useState([]);
    const [_id, setid] = useState(" ");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [blogName, setblogName] = useState(false);
    const [authorName, setauthorName] = useState(false);
    const [location, setlocation] = useState(false);
    const [description, setdescription] = useState(false);
    const [imageURL, setimageURL] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (_id, blogName,
        authorName,
        location,
        description, imageURL) => {
        setShow(true);
        setid(_id);
        setblogName(blogName);
        setauthorName(authorName);
        setlocation(location);
        setdescription(description);
        setimageURL(imageURL);

    }


    useEffect(() => {

        //get funtion
        function getallBlog() {
            axios.get("http://localhost:8070/blog/").then((res) => {
                setblog(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallBlog();
    }, [])

    //delete funtion
    function onDelete(_id) {
        console.log(_id);
        axios.delete("http://localhost:8070/blog/delete/" + _id).then((res) => {
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
            blogName,
            authorName,
            imageURL,
            location,
            description,
        }

        axios.put("http://localhost:8070/blog/update/" + _id, newData).then(() => {
            setblogName('');
            setauthorName('');
            setimageURL('');
            setlocation('');
            setdescription('');

            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))


    }

    return (
        <div>
            <div style={{ paddingRight: '1px', paddingBottom: '1px', paddingTop: '1px', paddingLeft: '87%' }}>

                <a href="./createblog">
                    <Button style={{ backgroundColor: "#1dbf99", border: "#1dbf99", opacity: 0.7, color: 'black' }}>
                        Create Blog
                    </Button> </a> {' '}
                <a href="./report"><Button style={{ backgroundColor: "#1dbf99", border: "#1dbf99", opacity: 0.7, color: 'black' }}>
                    Report
                </Button></a>
            </div>
            <div className="video-container">
                <video autoPlay loop muted>
                    <source
                        src="https://res.cloudinary.com/iplus/video/upload/v1681533428/video_gtlnnk.mp4"
                        type="video/mp4"

                    />
                </video>

                <div className="content">

                    <div style={{ paddingBottom: "1vh", paddingTop: "35vh", paddingLeft: '3vh', opacity: 0.5, color: 'black' }}>
                        <center>
                            <input type="text" placeholder="  Search For 'Blogs' " style={{
                                width: '66vh', borderRadius: '25px', border: '2px', color: 'black', paddingLeft: '2vh', paddingTop: '1vh', paddingBottom: '1vh'
                            }}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }} />
                        </center>

                    </div>

                    <center>

                        <i> <h4 style={{ color: "#1dbf99" }}>
                            #Visit Sri Lanka
                        </h4></i>
                    </center>

                </div>

            </div>

            {blog.filter(blog => {
                if (search === "") {
                    return blog
                }
                else if (blog.blogName.toLowerCase().includes(search.toLowerCase())) {
                    return blog
                }
            }).
                map((blog) => {

                    return (
                        <div key={blog._id} style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
                            <Card  >
                                <Card.Img variant="top" src={blog.imageURL} style={{ height: '60vh', backgroundSize: 'cover', }} />
                                <Card.Body>
                                    <Card.Title>{blog.blogName}</Card.Title>
                                    <Card.Text>
                                        {blog.description}
                                    </Card.Text>
                                    <div style={{ float: 'right', paddingRight: '1vh' }}>
                                        <Button variant="primary" onClick={() => handleShow(blog._id, blog.blogName,
                                            blog.authorName,
                                            blog.location,
                                            blog.description, blog.imageURL)}>Edit</Button>{' '}
                                        <Button onClick={() => onDelete(blog._id)}>Delete</Button> {' '}

                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                        <div style={{ paddingLeft: '10vh', paddingTop: '10vh', paddingBottom: '8vh', paddingRight: '10vh' }}>

                                            <Card style={{
                                                backgroundColor: 'white',
                                                opacity: 0.8
                                            }} >
                                                <Card.Body>


                                                    <Form >

                                                        <br />
                                                        <div >

                                                            <Form.Group className="mb-3" controlId="name">
                                                                <Form.Label style={{ color: 'black' }}>Blog Name:</Form.Label>
                                                                <Form.Control type="text" name='name' style={{ color: 'black' }} value={blogName}
                                                                    onChange={(e) => setblogName(e.target.value)}
                                                                    placeholder=" Blog Name  .." required />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="userid">
                                                                <Form.Label style={{ color: 'black' }}>Author Name : </Form.Label>
                                                                <Form.Control type="text" style={{ color: 'black' }} value={authorName}
                                                                    onChange={(e) => setauthorName(e.target.value)}
                                                                    placeholder=" Author Name .." />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }} > Image URL: </Form.Label>
                                                                <Form.Control type="text" style={{ color: 'black' }} value={imageURL}
                                                                    onChange={(e) => setimageURL(e.target.value)}
                                                                    placeholder=" Image URL .." required />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }}>Location : </Form.Label>
                                                                <Form.Control type="text" style={{ color: 'black' }} value={location}
                                                                    onChange={(e) => setlocation(e.target.value)}
                                                                    placeholder=" Location  .." required />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label style={{ color: 'black' }}> Description : </Form.Label>
                                                                <Form.Control type="text" as="textarea" rows={4} style={{ color: 'black' }}
                                                                    onChange={(e) => setdescription(e.target.value)} value={description}
                                                                    placeholder=" Description .." required />
                                                            </Form.Group>

                                                        </div>

                                                        <div style={{ paddingLeft: "40%" }}>
                                                            <Button type="submit" onClick={(e) => updateUser(e)} > Update </Button>
                                                            {' '} <Button variant="secondary" onClick={handleClose}>Close
                                                            </Button>

                                                        </div>
                                                    </Form>

                                                </Card.Body>
                                            </Card>





                                        </div>
                                    </Modal>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}

        </div>
    );

}
export default ManageBlog;



