import React, { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import {user} from '../chatapp/Join';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

let socket;
const ENDPOINT = "http://localhost:5000/";
const Chat = () => {
    const [id,setId]=useState("");
    const [messages,setMessages]=useState([]);
    const send=()=>{
        const message=document.getElementById('cahtInput').value;
        socket.emit('message',{message,id});
        document.getElementById('cahtInput').value="";

    }
    useEffect(()=>{
        socket = socketIo(ENDPOINT,{transports:['websocket']});
        socket.on('connect',()=>{
            alert('Connected');
            setId(socket.id);
        });
        console.log(socket);
        socket.emit('joined',{user})
        socket.on('welcome',(data)=>{
            setMessages([...messages,data]);
            console.log(data.user,data.message);
        });
        socket.on('userJoined',(data)=>{
            setMessages([...messages,data])
            console.log(data.user,data.message);
        });
        socket.on('leave',(data)=>{
            setMessages([...messages,data]);
            console.log(data.user,data.message);
        });
        return()=>{
            socket.emit('disconnectt');
            socket.off();
        }
    },[]);
    useEffect(()=>{
        socket.on('sendMessage',(data)=>{
            setMessages([...messages,data]);
            console.log(data.user,data.message,data.id);
        });
        return()=>{socket.off();}
    },[messages]);
    return (
        <>
            <Container>
                <h1>Chat box</h1>
                <Row>
                    <ReactScrollToBottom >
                    <Row className="border border-primary" style={{height:"360px"}}>
                    
                    {messages.map((item, i) => <Message key={i} user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                    
                    </Row>
                    </ReactScrollToBottom>
                    <Row>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="write ur message"
                            id="cahtInput"
                            onKeyPress={(event) => event.key === 'Enter' ? send() : null}
                            />
                            <Button onClick={send}>Send</Button>
                        </InputGroup>
                        
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Chat;