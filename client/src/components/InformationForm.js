import React, { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart';

const InformationForm = () => {
    const {emptyCart}=useCart();
    const[name,setName]=useState('');
    const[mobile,setMobile]=useState('');
    const[address,setAddress]=useState('');
    return (
        <>
           <Container>
            <InputGroup className="mb-3 w-75">
                    <InputGroup.Text>Full Name</InputGroup.Text>
                    <Form.Control
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                    />
            </InputGroup>
                
            <InputGroup className="mb-3 w-75">
                    <InputGroup.Text>Mobile</InputGroup.Text>
                    <Form.Control
                    placeholder="Mobile"
                    onChange={(e)=>setMobile(e.target.value)}
                    />
            </InputGroup>
               
            <InputGroup className="mb-3 w-75">
                <InputGroup.Text>With textarea</InputGroup.Text>
                    <Form.Control 
                    placeholder="Address"
                    onChange={(e)=>setAddress(e.target.value)}
                    />
            </InputGroup>
            
            
            <Link to='/successfull'onClick={()=>emptyCart()}><Button>Pleace Order</Button></Link> 
           </Container>
        </>
    );
};

export default InformationForm;