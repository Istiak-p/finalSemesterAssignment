import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let user;
const sendUser=()=>{
    user=document.getElementById('joinInput').value;
    console.log(user);
    document.getElementById('joinInput').value="";
}



const Join = () => {
    
    return (
        <>
            <Container>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Username"
                    id="joinInput"
                    
                    />
                </InputGroup>
                <Link to='/chat'><Button onClick={sendUser}>Start chat</Button></Link>
            </Container>
        </>
    );
};

export default Join;
export {user};