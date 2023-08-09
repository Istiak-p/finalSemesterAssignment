import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart';

const VaccineCart = (props) => {
    const {isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart}=useCart();
    return (
        <>
            <h1>{isEmpty?'Your cart is empty':'The cart is'}</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                    {
                        items.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                       <div className="img-thumbnail" >
                                        <img style={{width:"200px",height:"200px"}} src={item.image}/>
                                        </div> 
                                    </td>
                                    <td>
                                        <h6>{item.title}</h6>
                                    </td>
                                    <td>Tk.{item.price}</td>
                                    <td>Quantity({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</Button>
                                        <Button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</Button>
                                        <Button onClick={()=>removeItem(item.id)}>Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })
                    } 
                    {!isEmpty &&
                        <tr className='sticky-bottom w-100 '>
                            <td className='p-4'><h4>Total price : Tk.{cartTotal}</h4></td>
                            <td ><Button onClick={()=>emptyCart()}><BsCartX size="2rem"/>Clear Cart</Button> </td>
                            <td><Link to='/informationform'><Button ><BsCartCheck size="2rem"/>Conform Order</Button></Link></td> 
                        </tr>
                    }
                </tbody>
            </Table>
        </>
    );
};

export default VaccineCart;