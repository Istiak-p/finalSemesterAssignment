import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsChatText } from 'react-icons/bs';
import { RiVideoChatLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
    let {name,username,email,phone,website,address,image} = props.data;
    const startChat=()=>{console.log('Button is clicked')}
    return (
        <div className="ms-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{username}</Card.Title>
                    <Card.Title>{email}</Card.Title>
                    <Card.Title>{phone}</Card.Title>
                    <Card.Title>{website}</Card.Title>
                    <Card.Text>{address.street}</Card.Text>
                    <Card.Text>{address.city}</Card.Text>
                    <Card.Text>{address.zipcode}</Card.Text>
                   <Link to="/join"> <Button onClick={()=>startChat()}><BsChatText size='1rem'/>Chat Now</Button></Link>{' '}
                    <Button onClick={()=>startChat()}><RiVideoChatLine size='1rem'/>Vedio Chat</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorCard;