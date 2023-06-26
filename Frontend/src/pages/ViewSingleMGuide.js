import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
function ViewSingleMGuide() {
    const ID = ` ${localStorage.getItem("ID")}`
    console.log(ID);
    const [fullName, setfullName] = useState(false);
    const [location, setlocation] = useState(false);
    const [languages, setlanguages] = useState(false);
    const [description, setdescription] = useState(false);
    const [contactNo, setcontactNo] = useState(false);
    const [Email, setEmail] = useState(false);

    useEffect(() => {

        //get funtion
        function getallguide() {
            axios.get("http://localhost:8070/guide/get/" + ID).then((res) => {
                console.log("fyhh",res.data);
                setfullName(res.data.guide.fullName);
                setlocation(res.data.guide.location);
                setlanguages(res.data.guide.languages);
                setdescription(res.data.guide.description);
                setcontactNo(res.data.guide.contactNo);
                setEmail(res.data.guide.Email);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallguide();
    }, [])
    return (
        <div>
            <div style={{paddingTop:'1vh',paddingLeft:'2vh',paddingBottom:'1vh'}}>
            <a href="/ViewAllGuide"><Button>Back</Button></a>  
            </div>
            <div style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>
            
                <Card  >
                    
                    <Card.Body>
                        <Card.Title><h3>{fullName}</h3></Card.Title>
                        <Card.Text>
                        <div style={{paddingLeft:'4vh'}}>
                        <h5>Location : {location}</h5>
                        <h5>Languages : {languages}</h5>
                        <h5>Contact No : {contactNo}</h5>
                        <h5>Email : {Email}</h5>
                        
                            <div style={{paddingLeft:'3vh',paddingRight:'3vh'}}>
                            <Card>
                            <div style={{paddingTop:'2vh',paddingRight:'2vh',paddingBottom:'2vh'}}>
                            <h5>Description : {description} </h5>

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
export default ViewSingleMGuide;
