import React from 'react';
import { Container } from 'react-bootstrap';
import gif from '../assets/graphics-success-905465.gif';

const Successfull = () => {
    return (
        <div>
            <Container>
                <img className="rounded mx-auto d-block" src={gif} alt=""/>
            </Container>
        </div>
    );
};

export default Successfull;