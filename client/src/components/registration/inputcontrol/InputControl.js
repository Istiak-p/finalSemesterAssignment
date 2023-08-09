import React from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';

const InputControl = (props) => {
    return (
        <div><Container>
             <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">{props.label && <label>{props.label}</label>}</InputGroup.Text>
                <Form.Control
                    type="text"
                    {...props}
                />
             </InputGroup>
             </Container>
           

        </div>
    );
};

export default InputControl;