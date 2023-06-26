import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "../Banner/Banner.css";
import { Link } from 'react-router-dom'

function ViewAllBlog() {
    const [blog, setblog] = useState([]);
    const [_id, setid] = useState(" ");
    const [search, setSearch] = useState("");
    console.log(search);

    const parentToChild = (_id) => {
        setid(_id)
        localStorage.setItem("ID", _id);
        window.location = '/viewsingle'

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

    return (
        <div>
           

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
            }).map((blog) => {

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

                                    <Button primary onClick={() => parentToChild(blog._id)}>More</Button>

                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                );
            })}

        </div>
    );

}
export default ViewAllBlog;



