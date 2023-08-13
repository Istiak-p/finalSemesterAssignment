import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsChatText } from 'react-icons/bs';
import { RiVideoChatLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BsFillPersonFill,BsGlobe2,BsGoogle,BsTelephoneFill,BsGeoAltFill } from "react-icons/bs";

const DoctorCard = (props) => {
    let {name,username,email,phone,website,address,image} = props.data;
    const startChat=()=>{console.log('Button is clicked')}
    return (
        <div className="ms-5">
            <Card style={{ width: '20rem' ,marginTop:'15px'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body >
                    <Card.Title style={{margin:'5px'}}><BsFillPersonFill></BsFillPersonFill> {name}</Card.Title>
                    <Card.Title style={{margin:'5px'}}><BsFillPersonFill></BsFillPersonFill> {username}</Card.Title>
                    <Card.Title style={{margin:'5px'}}><BsGoogle></BsGoogle> {email}</Card.Title>
                    <Card.Title style={{margin:'5px'}}><BsTelephoneFill></BsTelephoneFill> {phone}</Card.Title>
                    <Card.Title style={{margin:'5px'}}><BsGlobe2></BsGlobe2> {website}</Card.Title>
                    <Card.Text style={{margin:'5px'}}><BsGeoAltFill></BsGeoAltFill> {address.street}</Card.Text>
                    <Card.Text style={{margin:'5px'}}><BsGeoAltFill></BsGeoAltFill> {address.city}</Card.Text>
                   <Link to="/join"> <Button onClick={()=>startChat()}><BsChatText size='1rem'/>Chat Now</Button></Link>{' '}
                    <Link to="/joinpage"><Button onClick={()=>startChat()}><RiVideoChatLine size='1rem'/>Vedio Chat</Button></Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorCard;