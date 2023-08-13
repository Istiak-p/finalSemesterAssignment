import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import {DateRange} from 'react-date-range';

const ReservationOther = () => {
     
    const location = useLocation();
    const [date, setDate]=useState(location.state.date);
    const {startTime,endTime}=location.state;
    const [openDate,setOpenDate]=useState(false);
    return (
        <>
          <label style={{backgroundColor:'red',marginLeft:'450px',padding:'15px',width:'400px',textAlign:'center',fontSize:'20px'}}>Your appointment or booking time is: </label>  <br/><br/><br/>
          
          <span style={{backgroundColor:'red',marginLeft:'520px',padding:'15px',width:'400px',textAlign:'center',fontSize:'20px'}} onClick = {()=>setOpenDate(!openDate)}>
            {`${format(date[0].startDate,"dd/MM/yyy")}to${format(date[0].endDate,"dd/MM/yyy")}`}
          </span>
          {openDate&&(
            <DateRange
            onChange={(item)=>setDate([item.selection])}
            minDate={new Date()}
            range={date}
            />
          )}

          
        
        </>
    );
};

export default ReservationOther;