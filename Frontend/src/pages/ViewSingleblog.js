import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
function ViewSingleblog() {
    const ID = ` ${localStorage.getItem("ID")}`
    console.log(ID);
    const [blogName, setblogName] = useState(false);
    const [authorName, setauthorName] = useState(false);
    const [location, setlocation] = useState(false);
    const [description, setdescription] = useState(false);
    const [imageURL, setimageURL] = useState(false);

    useEffect(() => {

        //get funtion
        function getallBlog() {
            console.log("http://localhost:8070/blog/get/" + ID)
            axios.get("http://localhost:8070/blog/get/" + ID).then((res) => {
                setblogName(res.data.blog.blogName);
                setauthorName(res.data.blog.authorName);
                setlocation(res.data.blog.location);
                setdescription(res.data.blog.description);
                setimageURL(res.data.blog.imageURL);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallBlog();
    }, [])
    return (
        <div>
            <div style={{paddingTop:'1vh',paddingLeft:'2vh',paddingBottom:'1vh'}}>
              <a href="/viewblog"><Button>Back</Button></a>  
            </div>
            <div style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
               
                <Card  >
                    <Card.Img variant="top" src={imageURL} style={{ height: '60vh', backgroundSize: 'cover', }} />
                    <Card.Body>
                        <Card.Title><h3>{blogName}</h3></Card.Title>
                        <Card.Text>
                           <div style={{paddingLeft:'4vh'}}>
                           <h5>Location : {location}</h5>
                            <h5>Author : {authorName}</h5>
                            <div style={{paddingLeft:'3vh',paddingRight:'3vh'}}>
                            <Card>
                              <div style={{paddingTop:'2vh',paddingLeft:'2vh',paddingRight:'2vh',paddingBottom:'2vh'}}>
                              {description}

                                </div>  
                            </Card>
                            </div>
                            

                           </div>
                           
                        </Card.Text>
                        <div style={{ float: 'right', paddingRight: '1vh' }}>


                        </div>


                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}
export default ViewSingleblog;
