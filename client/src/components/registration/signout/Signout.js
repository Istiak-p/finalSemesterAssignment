import React from 'react';
import {  Nav } from 'react-bootstrap';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Signout = () => {
    
    
        const auth = getAuth();
        
   
        const signout = () =>{

        onAuthStateChanged(auth, (user) => {
            //console.log(auth);
           if(user){
            signOut(auth);
           } else{
            
           }
           
           
          })
          }
    return (
        <>
            
            <Nav.Link href="/login" className="p-4" onClick={signout}>Signout</Nav.Link>
        </>
    );
};

export default Signout;