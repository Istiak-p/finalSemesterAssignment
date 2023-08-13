import React from 'react';
import {AiFillInstagram,AiFillFacebook,AiFillYoutube} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';

import { FaMapMarkerAlt,FaMobileAlt,FaGoogle,FaUserAlt } from "react-icons/fa";

import { Container, ListGroup, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className=' mt-3 w-100 mb-0  bg-black h-75'>
            <Container style={{backgroundColor: "#080808",height:"350px"}}className="d-flex justify-content-around align-items-start">
                <div style={{marginTop:'150px'}}>
                <h4 style={{color:'white'}}>Our soicial site link</h4>
                <div style={{display:'flex'}}>
                <NavLink to="http://www.youtube.com" style={{color: "red",fontSize:'30px',margin:'5px'}}><AiFillYoutube> </AiFillYoutube>  </NavLink>
                <NavLink to="http://www.instragram.com" style={{color: "#f5589c",fontSize:'30px',margin:'5px'}}><AiFillInstagram></AiFillInstagram> </NavLink>
               <NavLink to="http://www.telegram.com" style={{color: "blue",fontSize:'30px',margin:'5px'}}><BsTelegram></BsTelegram> </NavLink>
               <NavLink to="http://www.facebook.com" style={{color: "blue",fontSize:'30px',margin:'5px'}}><AiFillFacebook></AiFillFacebook></NavLink>
               </div> 
               </div>

                <div style={{color:'white',marginTop:'150px'}}>
                    <h4>Our Address</h4>
                    <p style={{color:'red'}}><FaMapMarkerAlt></FaMapMarkerAlt>Monnafer Mor, Boyalia, Rajsahahi</p>
                    <p style={{color:'red'}}><FaMobileAlt></FaMobileAlt>01717314076</p>
                    <p style={{color:'red'}}><FaGoogle></FaGoogle>istiakahemd11085@gmail.com</p>

                </div>
            

                <div style={{color:'white',marginTop:'150px'}}>
                    <h4>Company Owner</h4>
                    <p style={{color:'red'}}><FaUserAlt></FaUserAlt>Mr.X</p>
                    <p style={{color:'red'}}><FaUserAlt></FaUserAlt>Mr.Y</p>
                    <p style={{color:'red'}}><FaUserAlt></FaUserAlt>Mr.Z</p>

                </div>

            </Container>

        </Row>
    );
};

export default Footer;