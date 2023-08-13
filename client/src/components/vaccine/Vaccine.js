import React, { useEffect, useState, } from 'react';
import {InputGroup,Form, Container } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import SearchFilter from 'react-filter-search';
import VaccineCard from '../vaccine/VaccineCard';

const Vaccine = () => {
    const [searchInput,setSearchInput]=useState('');
    const [vaccineData,setVaccineData]=useState([]);
    //https://fakestoreapi.com/products
    useEffect(()=>{
         fetch('./vacc.JSON')
        .then(res=>res.json())
        .then(data=> setVaccineData( data));
          },[]);
          
    return (
        <>
            <Container >
            <InputGroup className="mb-3">
                <InputGroup.Text><BsSearch size='2.5rem'/></InputGroup.Text>
                <Form.Control
                placeholder="Search"
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)}
                /> </InputGroup>
                
                <SearchFilter
                value={searchInput}
                data={vaccineData}
                renderResults={results=>(
                    <div  style={{display:'flex',flexWrap:'wrap'}} >
                        {
                            results.map(item=>(
                                <VaccineCard data={item} key={item.id}></VaccineCard>
                        ))}
                    </div>
                )}
                />
            </Container>
        </>
    );
};

export default Vaccine;