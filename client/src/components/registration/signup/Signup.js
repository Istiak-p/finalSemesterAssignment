import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import { auth } from '../../../firebase';

import InputControl from '../inputcontrol/InputControl';

const Signup = () => {
    const navigate=useNavigate();
    const [values, setValues] = useState({
        name:"",
        email:"",
        pass:""
    });
    const [errorMsg, setErrorMsg]=useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false);


    const handleSubmission=()=>{
        if(!values.name||!values.email||!values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        createUserWithEmailAndPassword(auth,values.email, values.pass)
        .then((res)=>{
            setSubmitButtonDisabled(true);
            const user = res.user;
             updateProfile(user,{displayName: values.name});
            navigate("/");
        })
        .catch((err) =>{
            setSubmitButtonDisabled(false);
            setErrorMsg(err.massage);
        });


    };
    return (
        <>
             <Container fluid>
                <Row>
                    <InputControl label="Name" placeholder="Enter your name"
                    onChange={(event)=>
                     setValues((prev)=>({...prev, name: event.target.value}))}
                    />
                </Row>
                <Row>
                    <InputControl label="Email" placeholder="Enter Email address"
                    onChange={(event)=>
                     setValues((prev)=>({...prev, email: event.target.value}))}
                    />
                </Row>
                <Row>
                    <InputControl label="Password" placeholder="Enter Password"
                     onChange={(event)=>
                        setValues((prev)=>({...prev, pass: event.target.value}))}
                    />
                </Row>
                <Row className=''>
                    <Button  onClick={handleSubmission} disabled={submitButtonDisabled}>Signup</Button>
                </Row>
                <Row style={{color:"red"}}>{errorMsg}</Row>
                <Row style={{marginLeft:"700px"}}>
                    <p>
                        allredy Have an account?{ "   " }<span><Link to="/login">Login</Link></span>
                    </p>
                </Row>
            </Container>
        </>
    );
};

export default Signup;