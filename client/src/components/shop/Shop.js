import React, { useEffect, useState } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import SearchFilter from 'react-filter-search';
import ShopCard from './ShopCard';

const Shop= () => {
    const [searchInput,setSearchInput]=useState('');
    const [shopData,setShopData]=useState([]);
    useEffect(()=>{
        fetch('./shop.JSON')
        .then(res=>res.json())
        .then(data=>setShopData(data));
         },[]);
         console.log(shopData);
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
                    data={shopData}
                    renderResults={results=>(
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            {results.map(shop=>(
                                <ShopCard data={shop} key={shop.id}></ShopCard>
                            ))}
                        </div>
                    )}
                />
            </Container>
        </>
    );
};

export default Shop;