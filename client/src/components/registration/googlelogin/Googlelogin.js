import React from 'react';
import { Nav } from 'react-bootstrap';
import {FcGoogle} from 'react-icons/fc';
import { getAuth, signInWithPopup,GoogleAuthProvider, updateProfile } from "firebase/auth";


const Googlelogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
   

    const handelGoogleSignIn = () =>{

        signInWithPopup(auth, provider)
          .then(async(result) => { 
            const user = result.user;
            await updateProfile(user,{displayName: user.displayName});
            console.log(user)
           
          }).catch((error) => {
            console.log('error.')
          });

          }


    return (
        <>
            <Nav.Link  className="p-4" onClick={handelGoogleSignIn}><FcGoogle></FcGoogle></Nav.Link>
        </>
    );
};

export default Googlelogin;