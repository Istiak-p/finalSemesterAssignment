import React from 'react';
import {Navbar, Container,Nav} from 'react-bootstrap';
import {BiCart} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import {useCart} from 'react-use-cart';
import Googlelogin from '../registration/googlelogin/Googlelogin';
import Signout from '../registration/signout/Signout'
import s5 from '../../assets/5.jpg';


const Header = (props) => {
    const {isEmpty, totalItems}=useCart();
    return (
        <> 
            <Navbar bg="primary" className='sticky-top w-100'>
                <Container >
                    <Navbar.Brand >
                            <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/"><img src={s5}/></NavLink>
                        <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/">Pet Doctors</NavLink> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">  
                    <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/">Home</NavLink>   
                    <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/doctor">Doctors</NavLink>   
                    <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/vaccine">Vaccines</NavLink>   
                    <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/shop">Shop List</NavLink>   
                    <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/signup">Sing Up</NavLink>   
                     <NavLink style={{color:'black'}} className="p-4 text-decoration-none" to="/login">Sign In</NavLink> 
                     <Googlelogin></Googlelogin>
                     <Signout></Signout>
                     <Navbar.Text>
                     <span style={{ fontSize: '20px' }}>{props.name?`Welcome - ${props.name}`: "Login please"}</span>
                    </Navbar.Text>
                    <Navbar.Text>
                        <NavLink  to='/vaccinecart'>
                        <BiCart size='3rem'/>
                        {!isEmpty && <span style={{position:'relative', left:'-21'}}>{totalItems}</span>}
                        </NavLink>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;