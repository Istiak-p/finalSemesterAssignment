import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import InputControl from '../inputcontrol/InputControl';

const Login = () => {
    const navigate=useNavigate();
    const [values, setValues] = useState({
        email:"",
        pass:""
    });
    const [errorMsg, setErrorMsg]=useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false);


    const handleSubmission=()=>{
        if(!values.email||!values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        signInWithEmailAndPassword(auth,values.email, values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(true);
            
            navigate("/");
        })
        .catch((err) =>{
            setSubmitButtonDisabled(true);
            setErrorMsg(err.massage);
        });


    };
    return (
        <>
             <Container fluid>
                <Row>
                    <InputControl label="Email" placeholder="Enter Email address"
                    onChange={(event)=>
                        setValues((prev)=>({...prev, email: event.target.value}))}/>
                </Row>
                <Row>
                    <InputControl label="Password" placeholder="Enter Password"
                    onChange={(event)=>
                        setValues((prev)=>({...prev, pass: event.target.value}))}/>
                </Row>
                <Row style={{color:"red"}}>{errorMsg}</Row>
                <Row>
                    <Button onClick={handleSubmission} disabled={submitButtonDisabled}>Login</Button>
                </Row>
                <Row style={{marginLeft:"700px"}}>
                    <p>
                         Have no account?{ "    " }<span><Link to="/signup">Sign Up</Link></span>
                    </p>
                </Row>
            </Container>
        </>
    );
};

export default Login;