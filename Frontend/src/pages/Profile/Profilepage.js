import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

import { Avatar } from 'antd';


export default function Profilepage() {
  let hasToken;
  if (localStorage.getItem("authToken")) {
    hasToken = localStorage.getItem("authToken");
  }
  function updateUser() {
    alert('Password Changed');
  }
  const [image, setimage] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [_id, setid] = useState([]);
  const logOutHandler = () => {
    localStorage.removeItem("authToken");
    window.location = "/";
  };
  //delete profile funtion
  function onDelete(_id) {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,

      },
    };
    console.log(_id);
    axios.delete("http://localhost:8070/api/profile/deleteprofile/" + _id, config).then((res) => {
      alert('Deleted Successfully');
      window.location = `/`;
    }).catch((err) => {
      alert(err.message);
    })
  }
  useEffect(() => {

    const GetProfile = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        await axios
          .get(
            "http://localhost:8070/profile/get",
            config
          )

          .then((res) => {
            console.log(res.data.profile);
            setusername(res.data.profile.username);
            setemail(res.data.profile.email);
            setimage(res.data.profile.profilePicture.imageSecURL);
            setrole(res.data.profile.role);
            setid(res.data.profile._id);
            setpassword(res.data.profile.password);
          })
          .catch((err) => {
            alert("Error occured!!! : " + err);
          });
      } catch (error) {
        alert("Error occured!!! : " + error);
      }
    };
    GetProfile();

  }, []);

  //Update 

  if (role === 'Explore Manager') {
    return (window.location='/profileudantha')
    
  }
  if (role === 'Blog Writer') {
    return (window.location='/manage')
    
  }
  if (role === 'Tour Guide Manager') {
    return (window.location='/homepage')
    
  }

  if (role === 'Hospitality Manager') {
    return (window.location='/Home')
    
  }

  if (role === 'Travel Manager') {
    return (window.location='/viewtravel')
    
  }



  return (
    <div  >
      <Row>


        <Col sm={2}>


        </Col>
        <Col sm={10}>
          <div style={{ float: 'right', paddingRight: '4vh', paddingTop: '2vh' }}>
            <Button onClick={logOutHandler} >Log Out</Button>
            {' '}
            <Button variant="danger" onClick={() => onDelete(_id)}>Delete Profile</Button>
          </div><br />
          {hasToken && (

            <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>


              {(() => {
                if (role === 'Tour Guide Manager') {
                  return ( 
                    <div>

                      <p style={{ fontSize: '30px' }}>
                        <Avatar size={140} icon={<img src={image} alt="post" />} />

                        &nbsp; {username}</p>
                      <h6>Tour Guide manager</h6>

                      <h6>Login email : {email}</h6>
                      <h6>Role: {role}</h6>

                      <div style={{ paddingTop: '2vh', paddingLeft: '25vh', paddingRight: '35vh' }}>

                   
                      </div>

                    </div>
                  )
                }
                else if (role === 'Blog Writer') {
                  return (
                    <div>

                      <p style={{ fontSize: '30px' }}>
                        <Avatar size={140} icon={<img src={image} alt="post" />} />

                        &nbsp; {username}</p>
                      <h6>Blog Writer</h6>

                      <h6>Login email : {email}</h6>
                      <h6>Role: {role}</h6>

                      <div style={{ paddingTop: '2vh', paddingLeft: '25vh', paddingRight: '35vh' }}>

               
                      </div>

                    </div>
                  )
                }
                else if (role === 'Hospitality Manager') {
                  return (
                    <div>

                      <p style={{ fontSize: '30px' }}>
                        <Avatar size={140} icon={<img src={image} alt="post" />} />

                        &nbsp; {username}</p>
                      <h6>Hospitality manager</h6>

                      <h6>Login email : {email}</h6>
                      <h6>Role: {role}</h6>

                      <div style={{ paddingTop: '2vh', paddingLeft: '25vh', paddingRight: '35vh' }}>

                      </div>

                    </div>
                  )
                }
                else if (role === 'Travel Manager') {
                  return (
                    <div>
                      <p style={{ fontSize: '30px' }}>
                        <Avatar size={140} icon={<img src={image} alt="post" />} />

                        &nbsp; {username}</p>
                      <h6>Travel manager</h6>
                      <h6>Login email : {email}</h6>
                      <h6>Role: {role}</h6>

                      <div style={{ paddingTop: '2vh', paddingLeft: '25vh', paddingRight: '35vh' }}>

        
                      </div>

                    </div>
                  )
                }
                return null;
              })()}




            </div>)}
          {!hasToken && (<div>
            <a href="/">
              Time Out Login again from here ...
            </a>
          </div>)}
        </Col>
      </Row>
    </div>
  );
}
