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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
           </Container>
        </>
    );
};

export default Slider;