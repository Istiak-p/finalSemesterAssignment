import React from 'react';
import {GrLocation} from 'react-icons/gr';
import {AiFillPhone} from 'react-icons/ai';
import {CgMail} from 'react-icons/cg';
import {BsTelegram} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import { Container, ListGroup, NavLink, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className=' mt-3 w-100 mb-0  bg-black h-75'>
            <Container style={{backgroundColor: "gray",height:"350px"}}className="d-flex justify-content-around align-items-start">

            <ListGroup.Item style={{backgroundColor: "gray",fontSize:"30px",marginTop:"50px"}} >
                <span><NavLink to="http://www.youtube.com" style={{color: "red",display:"flex"}}><AiFillYoutube></AiFillYoutube> Youtube  </NavLink></span>
                <span><NavLink to="http://www.instragram.com" style={{color: "#f5589c"}}><AiFillInstagram></AiFillInstagram> Instragram</NavLink></span>
                <span><NavLink to="http://www.telegram.com" style={{color: "blue"}}><BsTelegram></BsTelegram> Telegram </NavLink></span>
                <span><NavLink to="http://www.facebook.com" style={{color: "blue"}}><AiFillFacebook></AiFillFacebook> Facebook</NavLink></span></ListGroup.Item>
             
                
            
            <ListGroup style={{}} className='mt-3 h-50'>
                <ListGroup.Item style={{backgroundColor: "gray",fontSize:"30px",marginTop:"50px"}} ><span><GrLocation></GrLocation>  </span>KadirGanj Rajshahi</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: "gray",fontSize:"30px"}}><span><AiFillPhone></AiFillPhone> </span>013xxxxxxxx</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: "gray",fontSize:"30px"}} ><span><CgMail></CgMail> </span>istiak@gmail.com</ListGroup.Item>
            </ListGroup>
            </Container>

        </Row>
    );
};

export default Footer;