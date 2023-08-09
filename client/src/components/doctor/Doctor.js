import React, { useEffect, useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import SearchFilter from 'react-filter-search';
import DoctorCard from '../doctor/DoctorCard'

const Doctor = () => {
    const [searchInput,setSearchInput]=useState('');
    const [doctorData,setDoctorData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setDoctorData(data));
         },[]);
        // console.log(doctorData);
    return (
        <>
            <Container>
                <InputGroup className="mb-3">
                    <InputGroup.Text><BsSearch size="3rem"/></InputGroup.Text>
                    <Form.Control
                    placeholder="search"
                    onChange={(e)=>setSearchInput(e.target.value)}
                    />
                </InputGroup>
                <SearchFilter
                    value={searchInput}
                    data={doctorData}
                    renderResults={results=>(
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            {results.map(doctor=>(
                                <DoctorCard data={doctor} key={doctor.id}></DoctorCard>
                            ))}
                        </div>
                    )}
                />
            </Container>
        </>
    );
};

export default Doctor;