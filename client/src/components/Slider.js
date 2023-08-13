import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import s1 from '../assets/1.jpg';
import s2 from '../assets/2.jpg';
import s3 from '../assets/3.jpg';

const Slider = () => {
    return (
        <>
           <Container className="mt-4">
                    <Carousel fade >
                        <Carousel.Item >
                            <img 
                            style={{height:'500px'}}
                            className=" w-100"
                            src={s1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 style={{fontSize:'50px'}}>Happy animal</h3>
                            <p style={{fontSize:'30px'}}>Pets need special attention to keep them happy and healthy. We provide the best service.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            style={{height:'500px'}}
                            className=" w-100"
                            src={s2}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 style={{fontSize:'50px'}}>Services for various pets</h3>
                            <p style={{fontSize:'30px'}}>We care for a wide variety of animals. We offer all the services that animals need together.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            style={{height:'500px'}}
                            className=" w-100"
                            src={s3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 style={{fontSize:'50px'}}>Pet friendly environment</h3>
                            <p style={{fontSize:'30px'}}>
                            Pets need a friendly environment, which we provide. We are always ready to serve pets.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
           </Container>
        </>
    );
};

export default Slider;