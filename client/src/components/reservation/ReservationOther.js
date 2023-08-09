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
          <label>Your appointment or booking time is: </label>  <br/><br/><br/>
          <span onClick = {()=>setOpenDate(!openDate)}>
            {`${format(date[0].startDate,"dd/MM/yyy")}to${format(date[0].endDate,"dd/MM/yyy")}`}
          </span>
          {openDate&&(
            <DateRange
            onChange={(item)=>setDate([item.selection])}
            minDate={new Date()}
            range={date}
            />
          )}
          <p>{startTime} to {endTime}</p>
          
        
        </>
    );
};

export default ReservationOther;