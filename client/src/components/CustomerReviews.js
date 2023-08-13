import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import s9 from "../assets/8.jpg";
import s10 from '../assets/9.jpeg';
import s11 from '../assets/10.jpg';
import s12 from '../assets/11.jpeg';

const CustomerReviews =()=>{

    return(
        <>
           <Container className="mt-4" style={{width:'400px'}}>
                    <Carousel fade >
                        <Carousel.Item style={{height:'500px', backgroundColor:'#b9c9be',boxShadow:'0px 0px 12px 0px rgba(9,10,9,0.78) inset'}}>
                            <img 
                            style={{borderRadius:'50%',height:'50%',width:'50%',marginLeft:'100px',marginTop:'15px'}}
                            src={s9}
                            alt=""
                            />
                            <Carousel.Caption>
                            <h3 style={{color:'black'}}>Donald Trump</h3>
                            <p style={{color:'black'}}>This is very good company . I appreciate this company </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item style={{height:'500px', backgroundColor:'#b9c9be',boxShadow:'0px 0px 12px 0px rgba(9,10,9,0.78) inset'}}>
                            <img 
                            style={{borderRadius:'50%',height:'50%',width:'50%',marginLeft:'100px',marginTop:'15px'}}
                            src={s10}
                            alt=""
                            />
                            <Carousel.Caption>
                            <h3 style={{color:'black'}}>Hasina</h3>
                            <p style={{color:'black'}}>Good site and trusted site.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{height:'500px', backgroundColor:'#b9c9be',boxShadow:'0px 0px 12px 0px rgba(9,10,9,0.78) inset'}}>
                            <img 
                            style={{borderRadius:'50%',height:'50%',width:'50%',marginLeft:'100px',marginTop:'15px'}}
                            src={s11}
                            alt=""
                            />
                            <Carousel.Caption>
                            <h3 style={{color:'black'}}>Modi</h3>
                            <p style={{color:'black'}}>Good vaccine service.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={{height:'500px', backgroundColor:'#b9c9be',boxShadow:'0px 0px 12px 0px rgba(9,10,9,0.78) inset'}}>
                            <img 
                            style={{borderRadius:'50%',height:'50%',width:'50%',marginLeft:'100px',marginTop:'15px'}}
                            src={s12}
                            alt=""
                            />
                            <Carousel.Caption>
                            <h3 style={{color:'black'}}>Kader</h3>
                            <p style={{color:'black'}}>This site is good for doctor service.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
           </Container>
        </>
    );
}


export default CustomerReviews;