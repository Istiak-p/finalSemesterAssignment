import React from 'react';
import {useCart} from 'react-use-cart';
import { Button, Card } from 'react-bootstrap';

const VaccineCard = (props) => {
    let {title,price,image,description} = props.data;
    const {addItem}=useCart();
    const addToCart=()=>{addItem(props.data)}
    return (
        <div className="ms-5">
            <Card style={{ width:"300px",height:"500px",margin:"10px" }}>
                <Card.Img style={{width:"295px",height:"250px"}} variant="top" src={image} />
                <Card.Body style={{}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{price} Tk</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={()=>addToCart()}>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default VaccineCard;