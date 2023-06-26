import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Avatar } from 'antd';
// >>>>>>>>>

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import  {Modal,Table} from "react-bootstrap";

// >>>>>>>>>

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

  // >>>>>>>>>>

  const [district, setdistrict] = useState([]);
    // const [_id, setid] = useState(" ");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [ant, setant] = useState("");
    const [imgurl,setimageURL] = useState(" ");
    const [lat, setlat] = useState(" ");
    const [desc, setdesc] = useState(" ");

    const handleClose = () => setShow(false);
    const handleShow = (_id, name,
        desc,
        imgurl,
        ant,
        lat) => {
        setShow(true);
        setid(_id);
        setname(name);
        setdesc(desc);
        setimageURL(imgurl);
        setant(ant);
        setlat(lat);

    }


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

    //delete funtion
    function onDeleteDistrict(_id) {
        console.log(_id);
        axios.delete("http://localhost:8070/district/delete/" + _id).then((res) => {
            alert('District Deleted Successfully');
            window.location.reload();
        }).catch((err) => {
            alert(err.message);
        })
    }

    const updateUser2 = (e) => {
        e.preventDefault();
        updatedis(e)
    };

    function updatedis() {
        const newData = {
            name,
            desc,
            imgurl,
            ant,
            lat
        }

        axios.put("http://localhost:8070/district/update/" + _id, newData).then(() => {
            setname('');
            setant('');
            setimageURL('');
            setlat('');
            setdesc('');

            alert("Updated Successfully");
            window.location.reload();
        }).catch((err => {
            alert(err)
        }))


    }


  // >>>>>>>>>>
  // >>>>>>>>>>
    
  // >>>>>>>>>>



  return (
    <div  >
      <Row>


        <Col sm={2}>


        </Col>
        <Col sm={10}>
          <div style={{ float: 'right', paddingRight: '4vh', paddingTop: '2vh' }}>
            <a href="/signin">
          <Button>Add Admins</Button>
          </a>
          {' '}
            <Button onClick={logOutHandler} >Log Out</Button>
            {' '}
            <Button variant="danger" onClick={() => onDelete(_id)}>Delete Profile</Button>
          </div><br />
          {hasToken && (

            <div style={{ paddingLeft: '2vh', paddingTop: '2vh' }}>


              {(() => {
                if (role === 'Explore Manager') {
                  return (
                    <div>

                      <p style={{ fontSize: '30px' }}>
                        <Avatar size={140} icon={<img src={image} alt="post" />} />

                        &nbsp; {username}</p>
                      <h6>Explore Manager</h6>

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

      {/* >>>>>>>>>>>>> */}

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
        <input type="text" placeholder="  Search From 'District' " style={{
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
                <th>name</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>

            {district.filter(district => {
                if (district === "") {
                    return district
                }
                else if (district.name.toLowerCase().includes(search.toLowerCase())) {
                    return district
                }
                return null
            }).map((district) => {
                return (
                    <tr key={district._id}>
                        <td>{district.name}</td>

                        <td>
                            <Button variant="outline-success" onClick={() => handleShow(district._id, district.name, district.desc, district.imgurl, district.ant, district.lat)} ><FaPencilAlt /></Button>
                        </td>

                        <td>
                            <Button variant="outline-danger" onClick={() => onDeleteDistrict(district._id)}><FaTrashAlt /></Button>
                        </td>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>&nbsp; <b>Edit Details </b></Modal.Title>
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
                                        <Form.Label>Antitude : </Form.Label >
                                        <Form.Control placeholder="Ant."
                                            value={ant}
                                            onChange={(e) => setant(e.target.value)} />
                                    </div>

                                    <div >
                                        <Form.Label>Longitude : </Form.Label >
                                        <Form.Control placeholder="lat."
                                            value={lat}
                                            onChange={(e) => setlat(e.target.value)} />
                                    </div>
                                    <div >
                                        <Form.Label>Description : </Form.Label >
                                        <Form.Control placeholder="description."
                                            value={desc}
                                            onChange={(e) => setdesc(e.target.value)} />

                                    </div>
                                    <div style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>

                                        <Button variant="warning" type="submit" onClick={(e) => updatedis(e)}>Update</Button>
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

    <a href="./createdist">
        <Button style={{ backgroundColor: "white", borderColor: "black", color: 'black' }}>
            Add District
        </Button> </a> {' '}
        <a href="./manageloc">
        <Button style={{ backgroundColor: "white", borderColor: "black", color: 'black' }}>
            Locations
        </Button> </a> {' '}

</div>
</div>
          
      {/* >>>>>>>>>>>>>>>> */}

      {/* >>>>>>>>>>>>>>>> */}

      {/* >>>>>>>>>>>>>>>> */}
    </div>
  );
}
