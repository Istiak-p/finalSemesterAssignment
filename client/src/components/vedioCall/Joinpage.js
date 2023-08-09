import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Joinpage = () =>{
    const [roomID,setRoomID]=useState();
    const navigate = useNavigate();
    const handleJoin=()=>{
        navigate(`/room/${roomID}`)
    }
    return(
        <>
           <input placeholder="Enter Room ID" type="text" value={roomID} onChange={(e)=>setRoomID(e.target.value)}></input>
           <button onClick={handleJoin}>Join</button>
        </>
    );
}

export default Joinpage;