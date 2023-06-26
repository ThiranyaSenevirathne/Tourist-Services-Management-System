import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Modal, Form } from "react-bootstrap";

function Viewsingletravel() {
    const ID = ` ${localStorage.getItem("TID")}`
    console.log(ID);
    const [partnerName, setpartnerName] = useState(false);
    const [address, setaddress] = useState(false);
    const [contactNumber, setcontactNumber] = useState(false);
    const [rate, setrate] = useState(false);
    const [imageURL, setimageURL] = useState(false);
    const [description, setdescription] = useState(false);
    const [show, setShow] = useState(false);
    const [Pick, setPick] = useState('');
    const [Desti, setDesti] = useState('');
    const [destance, setdestance] = useState('');
    const [price, setprice] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const calc = (e) => {
        console.log("Pick" + Pick);
        console.log("Dest" + Desti);
        if (Pick === 'Anuradhapura' && Desti === 'Badulla') {
            setdestance(207.1);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'Colombo') {
            setdestance(203.5);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'Galle') {
            setdestance(319.6);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'Gampaha') {
            setdestance(168.8);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'Jaffna') {
            setdestance(196.1);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'Kalutara') {
            setdestance(231.4);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'kandy') {
            setdestance(136.7);
        }
        else if (Pick === 'Anuradhapura' && Desti === 'Kurunagala') {
            setdestance(109.4);
        } else if (Pick === 'Anuradhapura' && Desti === 'Kegalle') {
            setdestance(115.3);
        } else if (Pick === 'Anuradhapura' && Desti === 'Matara') {
            setdestance(268.1);
        } else if (Pick === 'Anuradhapura' && Desti === 'Nuwara Eliya') {
            setdestance(137.5);
        } else if (Pick === 'Anuradhapura' && Desti === 'Polonnaruwa') {
            setdestance(56.8);
        } else if (Pick === 'Anuradhapura' && Desti === 'Ratnapura') {
            setdestance(175.1);
        } else if (Pick === 'Anuradhapura' && Desti === 'Trincomalee') {
            setdestance(94.4);
        } else if (Pick === 'Badulla' && Desti === 'Anuradhapura') {
            setdestance(207.1);
        } else if (Pick === 'Badulla' && Desti === 'Colombo') {
            setdestance(219.6);
        } else if (Pick === 'Badulla' && Desti === 'Galle') {
            setdestance(301.7);
        } else if (Pick === 'Badulla' && Desti === 'Gampaha') {
            setdestance(233.3);
        } else if (Pick === 'Badulla' && Desti === 'Jaffna') {
            setdestance(494.1);
        } else if (Pick === 'Badulla' && Desti === 'Kalutara') {
            setdestance(253.4);
        } else if (Pick === 'Badulla' && Desti === 'kandy') {
            setdestance(105.9);
        } else if (Pick === 'Badulla' && Desti === 'Kurunagala') {
            setdestance(198.4);
        } else if (Pick === 'Badulla' && Desti === 'Kegalle') {
            setdestance(180.3);
        } else if (Pick === 'Badulla' && Desti === 'Matara') {
            setdestance(191.0);
        } else if (Pick === 'Badulla' && Desti === 'Nuwara Eliya') {
            setdestance(52.5);
        } else if (Pick === 'Badulla' && Desti === 'Polonnaruwa') {
            setdestance(143.2);
        } else if (Pick === 'Badulla' && Desti === 'Ratnapura') {
            setdestance(130.7);
        } else if (Pick === 'Badulla' && Desti === 'Trincomalee') {
            setdestance(271.9);
        } else if (Pick === 'Colombo' && Desti === 'Anuradhapura') {
            setdestance(204.3);
        } else if (Pick === 'Colombo' && Desti === 'Badulla') {
            setdestance(221.1);
        } else if (Pick === 'Colombo' && Desti === 'Galle') {
            setdestance(116.7);
        } else if (Pick === 'Colombo' && Desti === 'Gampaha') {
            setdestance(24.6);
        } else if (Pick === 'Colombo' && Desti === 'Jaffna') {
            setdestance(386.3);
        } else if (Pick === 'Colombo' && Desti === 'Kalutara') {
            setdestance(43.6);
        } else if (Pick === 'Colombo' && Desti === 'Kandy') {
            setdestance(116.6);
        } else if (Pick === 'Colombo' && Desti === 'Kurunagala') {
            setdestance(93.1);
        } else if (Pick === 'Colombo' && Desti === 'Kegalle') {
            setdestance(64.3);
        } else if (Pick === 'Colombo' && Desti === 'Matara') {
            setdestance(156.4);
        } else if (Pick === 'Colombo' && Desti === 'Nuwara Eliya') {
            setdestance(163.1);
        } else if (Pick === 'Colombo' && Desti === 'Polonnaruwa') {
            setdestance(230.3);
        } else if (Pick === 'Colombo' && Desti === 'Ratnapura') {
            setdestance(70.4);
        } else if (Pick === 'Colombo' && Desti === 'Trincomalee') {
            setdestance(269.7);
        } else if (Pick === 'Galle' && Desti === 'Anuradhapura') {
            setdestance(230.7);
        } else if (Pick === 'Galle' && Desti === 'Badulla') {
            setdestance(252.3);
        } else if (Pick === 'Galle' && Desti === 'Colombo') {
            setdestance(116.8);
        } else if (Pick === 'Galle' && Desti === 'Gampaha') {
            setdestance(120.5);
        } else if (Pick === 'Galle' && Desti === 'Jaffna') {
            setdestance(553.9);
        } else if (Pick === 'Galle' && Desti === 'Kalutara') {
            setdestance(62.9);
        } else if (Pick === 'Galle' && Desti === 'Kandy') {
            setdestance(204.6);
        } else if (Pick === 'Galle' && Desti === 'Kurunagala') {
            setdestance(146.2);
        } else if (Pick === 'Galle' && Desti === 'Kegalle') {
            setdestance(119.1);
        } else if (Pick === 'Galle' && Desti === 'Matara') {
            setdestance(41.2);
        } else if (Pick === 'Galle' && Desti === 'Nuwara Eliya') {
            setdestance(235.6);
        } else if (Pick === 'Galle' && Desti === 'Polonnaruwa') {
            setdestance(335.2);
        } else if (Pick === 'Galle' && Desti === 'Ratnapura') {
            setdestance(98.6);
        } else if (Pick === 'Galle' && Desti === 'Trincomalee') {
            setdestance(410.1);
        } else if (Pick === 'Gampaha' && Desti === 'Anuradhapura') {
            setdestance(158.6);
        } else if (Pick === 'Gampaha' && Desti === 'Badulla') {
            setdestance(223.6);
        } else if (Pick === 'Gampaha' && Desti === 'Colombo') {
            setdestance(28.5);
        } else if (Pick === 'Gampaha' && Desti === 'Galle') {
            setdestance(124.9);
        } else if (Pick === 'Gampaha' && Desti === 'Hambantota') {
            setdestance(198.9);
        } else if (Pick === 'Gampaha' && Desti === 'Jaffna') {
            setdestance(378.8);
        } else if (Pick === 'Gampaha' && Desti === 'Kalutara') {
            setdestance(48.8);
        } else if (Pick === 'Gampaha' && Desti === 'kandy') {
            setdestance(103.3);
        } else if (Pick === 'Gampaha' && Desti === 'Kurunagala') {
            setdestance(50.9);
        } else if (Pick === 'Gampaha' && Desti === 'Kegalle') {
            setdestance(30.2);
        } else if (Pick === 'Gampaha' && Desti === 'Matara') {
            setdestance(151.6);
        } else if (Pick === 'Gampaha' && Desti === 'Matale') {
            setdestance(97.4);
        } else if (Pick === 'Gampaha' && Desti === 'Nuwara Eliya') {
            setdestance(143.3);
        } else if (Pick === 'Gampaha' && Desti === 'Polonnaruwa') {
            setdestance(190.3);
        } else if (Pick === 'Gampaha' && Desti === 'Ratnapura') {
            setdestance(85.6);
        } else if (Pick === 'Gampaha' && Desti === 'Trincomalee') {
            setdestance(261.8);
        } else if (Pick === 'Gampaha' && Desti === 'Vavuniya') {
            setdestance(247.9);
        } else if (Pick === 'Jaffna' && Desti === 'Anuradhapura') {
            setdestance(288.1); // distance between Jaffna and Anuradhapura in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Badulla') {
            setdestance(503.5); // distance between Jaffna and Badulla in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Colombo') {
            setdestance(396.6); // distance between Jaffna and Colombo in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Galle') {
            setdestance(584.6); // distance between Jaffna and Galle in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Gampaha') {
            setdestance(363.1); // distance between Jaffna and Gampaha in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Hambantota') {
            setdestance(705.9); // distance between Jaffna and Hambantota in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Kalutara') {
            setdestance(446.8); // distance between Jaffna and Kalutara in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Kandy') {
            setdestance(307.1); // distance between Jaffna and Kandy in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Kurunagala') {
            setdestance(353.2); // distance between Jaffna and Kurunagala in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Kegalle') {
            setdestance(363.4); // distance between Jaffna and Kegalle in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Matara') {
            setdestance(611.1); // distance between Jaffna and Matara in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Nuwara Eliya') {
            setdestance(314.8); // distance between Jaffna and Nuwara Eliya in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Polonnaruwa') {
            setdestance(308.8); // distance between Jaffna and Polonnaruwa in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Ratnapura') {
            setdestance(516.2); // distance between Jaffna and Ratnapura in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Trincomalee') {
            setdestance(206.4); // distance between Jaffna and Trincomalee in km
        }
        else if (Pick === 'Jaffna' && Desti === 'Vavuniya') {
            setdestance(91.6); // distance between Jaffna and Vavuniya in km
        } else if (Pick === 'Kalutara' && Desti === 'Anuradhapura') {
            setdestance(225.2);
        } else if (Pick === 'Kalutara' && Desti === 'Badulla') {
            setdestance(224.2);
        } else if (Pick === 'Kalutara' && Desti === 'Colombo') {
            setdestance(42.8);
        } else if (Pick === 'Kalutara' && Desti === 'Galle') {
            setdestance(32.9);
        } else if (Pick === 'Kalutara' && Desti === 'Gampaha') {
            setdestance(65.9);
        } else if (Pick === 'Kalutara' && Desti === 'Jaffna') {
            setdestance(399.1);
        } else if (Pick === 'Kalutara' && Desti === 'Kandy') {
            setdestance(129.6);
        } else if (Pick === 'Kalutara' && Desti === 'Kegalle') {
            setdestance(61.2);
        } else if (Pick === 'Kalutara' && Desti === 'Kurunagala') {
            setdestance(94.5);
        } else if (Pick === 'Kalutara' && Desti === 'Matara') {
            setdestance(54.1);
        } else if (Pick === 'Kalutara' && Desti === 'Nuwara Eliya') {
            setdestance(161.8);
        } else if (Pick === 'Kalutara' && Desti === 'Polonnaruwa') {
            setdestance(217.4);
        } else if (Pick === 'Kalutara' && Desti === 'Ratnapura') {
            setdestance(30.6);
        } else if (Pick === 'Kalutara' && Desti === 'Trincomalee') {
            setdestance(300.6);
        } else if (Pick === 'Kalutara' && Desti === 'Vavuniya') {
            setdestance(272.4);
        } else if (Pick === 'kandy' && Desti === 'Anuradhapura') {
            setdestance(111.7);
        } else if (Pick === 'kandy' && Desti === 'Badulla') {
            setdestance(78.8);
        } else if (Pick === 'kandy' && Desti === 'Colombo') {
            setdestance(115.7);
        } else if (Pick === 'kandy' && Desti === 'Galle') {
            setdestance(227.2);
        } else if (Pick === 'kandy' && Desti === 'Gampaha') {
            setdestance(99.5);
        } else if (Pick === 'kandy' && Desti === 'Jaffna') {
            setdestance(396.9);
        } else if (Pick === 'kandy' && Desti === 'Kalutara') {
            setdestance(133.9);
        } else if (Pick === 'kandy' && Desti === 'Kurunagala') {
            setdestance(56.1);
        } else if (Pick === 'kandy' && Desti === 'Kegalle') {
            setdestance(61.3);
        } else if (Pick === 'kandy' && Desti === 'Matara') {
            setdestance(235.5);
        } else if (Pick === 'kandy' && Desti === 'Nuwara Eliya') {
            setdestance(38.5);
        } else if (Pick === 'kandy' && Desti === 'Polonnaruwa') {
            setdestance(126.3);
        } else if (Pick === 'kandy' && Desti === 'Ratnapura') {
            setdestance(102.3);
        } else if (Pick === 'kandy' && Desti === 'Trincomalee') {
            setdestance(190.2);
        } else if (Pick === 'Kurunagala' && Desti === 'Anuradhapura') {
            setdestance(100.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Badulla') {
            setdestance(231.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Colombo') {
            setdestance(94.5);
        } else if (Pick === 'Kurunagala' && Desti === 'Galle') {
            setdestance(165.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Gampaha') {
            setdestance(47.3);
        } else if (Pick === 'Kurunagala' && Desti === 'Jaffna') {
            setdestance(390.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Kalutara') {
            setdestance(72.6);
        } else if (Pick === 'Kurunagala' && Desti === 'Kandy') {
            setdestance(37.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Kegalle') {
            setdestance(56.5);
        } else if (Pick === 'Kurunagala' && Desti === 'Matara') {
            setdestance(184.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Nuwara Eliya') {
            setdestance(61.5);
        } else if (Pick === 'Kurunagala' && Desti === 'Polonnaruwa') {
            setdestance(148.5);
        } else if (Pick === 'Kurunagala' && Desti === 'Ratnapura') {
            setdestance(102.7);
        } else if (Pick === 'Kurunagala' && Desti === 'Trincomalee') {
            setdestance(234.9);
        } else if (Pick === 'Kurunagala' && Desti === 'Vavuniya') {
            setdestance(191.2);
        } else if (Pick === 'Kegalle' && Desti === 'Anuradhapura') {
            setdestance(122.2);
        } else if (Pick === 'Kegalle' && Desti === 'Badulla') {
            setdestance(191.6);
        } else if (Pick === 'Kegalle' && Desti === 'Colombo') {
            setdestance(83.8);
        } else if (Pick === 'Kegalle' && Desti === 'Galle') {
            setdestance(112.9);
        } else if (Pick === 'Kegalle' && Desti === 'Gampaha') {
            setdestance(58.5);
        } else if (Pick === 'Kegalle' && Desti === 'Jaffna') {
            setdestance(398.4);
        } else if (Pick === 'Kegalle' && Desti === 'Kalutara') {
            setdestance(69.7);
        } else if (Pick === 'Kegalle' && Desti === 'kandy') {
            setdestance(56.1);
        } else if (Pick === 'Kegalle' && Desti === 'Kurunagala') {
            setdestance(34.5);
        } else if (Pick === 'Kegalle' && Desti === 'Matara') {
            setdestance(142.2);
        } else if (Pick === 'Kegalle' && Desti === 'Nuwara Eliya') {
            setdestance(94.1);
        } else if (Pick === 'Kegalle' && Desti === 'Polonnaruwa') {
            setdestance(139.7);
        } else if (Pick === 'Kegalle' && Desti === 'Ratnapura') {
            setdestance(50.1);
        } else if (Pick === 'Kegalle' && Desti === 'Trincomalee') {
            setdestance(240.3);
        } else if (Pick === 'Kegalle' && Desti === 'Vavuniya') {
            setdestance(188.7);
        } else if (Pick === 'Matara' && Desti === 'Anuradhapura') {
            setdestance(273.2);
        } else if (Pick === 'Matara' && Desti === 'Badulla') {
            setdestance(234.3);
        } else if (Pick === 'Matara' && Desti === 'Batticaloa') {
            setdestance(357.6);
        } else if (Pick === 'Matara' && Desti === 'Colombo') {
            setdestance(160.6);
        } else if (Pick === 'Matara' && Desti === 'Galle') {
            setdestance(42.9);
        } else if (Pick === 'Matara' && Desti === 'Gampaha') {
            setdestance(152.7);
        } else if (Pick === 'Matara' && Desti === 'Hambantota') {
            setdestance(72.1);
        } else if (Pick === 'Matara' && Desti === 'Jaffna') {
            setdestance(502.5);
        } else if (Pick === 'Matara' && Desti === 'Kalutara') {
            setdestance(92.6);
        } else if (Pick === 'Matara' && Desti === 'kandy') {
            setdestance(200.6);
        } else if (Pick === 'Matara' && Desti === 'Kurunagala') {
            setdestance(160.1);
        } else if (Pick === 'Matara' && Desti === 'Kegalle') {
            setdestance(130.8);
        } else if (Pick === 'Matara' && Desti === 'Nuwara Eliya') {
            setdestance(287.9);
        } else if (Pick === 'Matara' && Desti === 'Polonnaruwa') {
            setdestance(357.1);
        } else if (Pick === 'Matara' && Desti === 'Ratnapura') {
            setdestance(123.8);
        } else if (Pick === 'Matara' && Desti === 'Trincomalee') {
            setdestance(411.2);
        } else if (Pick === 'Matara' && Desti === 'Vavuniya') {
            setdestance(403.8);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Anuradhapura') {
            setdestance(230.9);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Badulla') {
            setdestance(31.5);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Colombo') {
            setdestance(157.2);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Galle') {
            setdestance(212.5);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Gampaha') {
            setdestance(137.3);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Jaffna') {
            setdestance(416.3);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Kalutara') {
            setdestance(176.2);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Kandy') {
            setdestance(50.2);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Kurunagala') {
            setdestance(105.6);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Kegalle') {
            setdestance(77.6);
        } else if (Pick === 'Nuwara Eliya' && Desti === 'Matara') {
            setdestance(235.1);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Anuradhapura') {
            setdestance(95.8);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Badulla') {
            setdestance(240.1);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Colombo') {
            setdestance(229.7);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Galle') {
            setdestance(296.2);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Gampaha') {
            setdestance(211.1);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Jaffna') {
            setdestance(286.5);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Kalutara') {
            setdestance(233.7);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Kandy') {
            setdestance(103.3);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Kurunegala') {
            setdestance(141.9);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Kegalle') {
            setdestance(121.1);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Matara') {
            setdestance(321.9);
        } else if (Pick === 'Polonnaruwa' && Desti === 'Nuwara Eliya') {
            setdestance(157.9);
        } else if (Pick === 'Ratnapura' && Desti === 'Anuradhapura') {
            setdestance(259.6);
        } else if (Pick === 'Ratnapura' && Desti === 'Badulla') {
            setdestance(98.8);
        } else if (Pick === 'Ratnapura' && Desti === 'Colombo') {
            setdestance(103.4);
        } else if (Pick === 'Ratnapura' && Desti === 'Galle') {
            setdestance(91.1);
        } else if (Pick === 'Ratnapura' && Desti === 'Gampaha') {
            setdestance(79.1);
        } else if (Pick === 'Ratnapura' && Desti === 'Jaffna') {
            setdestance(447.2);
        } else if (Pick === 'Ratnapura' && Desti === 'Kalutara') {
            setdestance(67.6);
        } else if (Pick === 'Ratnapura' && Desti === 'Kandy') {
            setdestance(116.1);
        } else if (Pick === 'Ratnapura' && Desti === 'Kegalle') {
            setdestance(54.7);
        } else if (Pick === 'Ratnapura' && Desti === 'Matara') {
            setdestance(107.6);
        } else if (Pick === 'Ratnapura' && Desti === 'Nuwara Eliya') {
            setdestance(135.2);
        } else if (Pick === 'Ratnapura' && Desti === 'Polonnaruwa') {
            setdestance(210.9);
        }
        console.log(destance);
        const pd=destance*rate;
        console.log(pd);
        setprice(pd.toFixed(2));
    };

    const clean = () => {
        setdestance('')
        setPick('')
        setDesti('')
        setprice('')
    }

    useEffect(() => {

        //get funtion
        function getallBlog() {
            console.log("http://localhost:8070/travel/get/" + ID)
            axios.get("http://localhost:8070/travel/get/" + ID).then((res) => {
                console.log(res.data.travel)
                setpartnerName(res.data.travel.partnerName);
                setaddress(res.data.travel.address);
                setcontactNumber(res.data.travel.contactNumber);
                setrate(res.data.travel.rate);
                setimageURL(res.data.travel.imageURL);
                setdescription(res.data.travel.description);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getallBlog();
    }, [])
    return (
        <div>
            <div style={{ paddingTop: '1vh', paddingLeft: '2vh', paddingBottom: '1vh' }}>
                <a href="/viewtravel"><Button>Back</Button></a>
            </div>
            <div style={{ paddingTop: '2vh', paddingLeft: '3vh', paddingRight: '3vh', paddingBottom: '1vh' }}>

                <Card  >
                    <Card.Img variant="top" src={imageURL} style={{ height: '70vh', backgroundSize: 'cover', }} />
                    <Card.Body>
                        <Card.Text>
                            <div style={{ paddingLeft: '4vh' }}>
                                <h5>Partner Name : {partnerName}</h5>
                                <h5>Address : {address}</h5>
                                <h5>Contact Number : {contactNumber}</h5>
                                <h5>Rate/Km : {rate}</h5>
                                <h5>About Us : {description}</h5>
                            </div>

                        </Card.Text>
                        <center>
                            <div style={{ paddingRight: '1vh', paddingTop: '2vh' }}>
                                <Button onClick={handleShow} style={{ backgroundColor: '#29AB87', borderColor: '#29AB87' }}>Get Quote</Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Quotation</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Label>Select Pick-Up District : </Form.Label >
                                            <Form.Select aria-label="Default select example"
                                                onChange={(e) => setPick(e.target.value)}
                                            >
                                                <option  >select</option>

                                                <option value="Anuradhapura" >Anuradhapura</option>
                                                <option value="Badulla" >Badulla</option>
                                                <option value="Colombo" >Colombo</option>
                                                <option value="Galle" >Galle</option>
                                                <option value="Gampaha" >Gampaha</option>
                                                <option value="Jaffna" >Jaffna</option>
                                                <option value="Kalutara" >Kalutara</option>
                                                <option value="kandy" >kandy</option>
                                                <option value="Kurunagala" >Kurunagala</option>
                                                <option value="Kegalle" >Kegalle</option>
                                                <option value="Matara" >Matara</option>
                                                <option value="Nuwara Eliya" >Nuwara Eliya</option>
                                                <option value="Polonnaruwa" >Polonnaruwa</option>
                                                <option value="Ratnapura" >Ratnapura</option>

                                            </Form.Select>

                                            <br />

                                            <Form.Label>Select Destination District : </Form.Label >
                                            <Form.Select aria-label="Default select example"
                                                onChange={(e) => setDesti(e.target.value)}
                                            >
                                                <option  >select</option>

                                                <option value="Anuradhapura" >Anuradhapura</option>
                                                <option value="Badulla" >Badulla</option>
                                                <option value="Batticaloa" >Batticaloa</option>
                                                <option value="Colombo" >Colombo</option>
                                                <option value="Galle" >Galle</option>
                                                <option value="Gampaha" >Gampaha</option>
                                                <option value="Hambantota" >Hambantota</option>
                                                <option value="Jaffna" >Jaffna</option>
                                                <option value="Kalutara" >Kalutara</option>
                                                <option value="kandy" >kandy</option>
                                                <option value="Kurunagala" >Kurunagala</option>
                                                <option value="Kegalle" >Kegalle</option>
                                                <option value="Matara" >Matara</option>
                                                <option value="Matale" >Matale</option>
                                                <option value="Nuwara Eliya" >Nuwara Eliya</option>
                                                <option value="Polonnaruwa" >Polonnaruwa</option>
                                                <option value="Ratnapura" >Ratnapura</option>
                                                <option value="Trincomalee" >Trincomalee</option>
                                                <option value="Vavuniya" >Vavuniya</option>



                                            </Form.Select>
                                            <br />
                                            <center>
                                                <Button style={{ backgroundColor: '#29AB87', borderColor: '#29AB87' }} onClick={(e) => calc(e)}>Calculate</Button>
                                            </center>
                                        </Form>

                                        <br />
                                        <h5>Approximation</h5>
                                        <span>{destance} Km</span> <br/>
                                        <span>Rs.{price}</span>

                                        <center>
                                            <Button style={{ backgroundColor: '#29AB87', borderColor: '#29AB87' }} onClick={(e) => clean(e)}>Clear</Button>
                                        </center>
                                        <br />

                                    </Modal.Body>

                                </Modal>

                            </div>
                        </center>

                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}
export default Viewsingletravel;
