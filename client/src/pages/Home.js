import React from 'react';
import Slider from '../components/Slider';
import { Container } from 'react-bootstrap';
import s4 from '../assets/4.png';


const Home = () => {
    return (
        <>
        <Slider></Slider>
        <Container>
            <div>
               <span><img src={s4}/></span>
               <span>
               Help keep your pet happy and healthy so they can live their best life.
               </span></div>
        </Container>
        <Slider></Slider>
        
        
    </>
    );
};

export default Home;