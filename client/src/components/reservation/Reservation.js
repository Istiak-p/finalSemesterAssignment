import React, { useState } from 'react';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns';
import {useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Time from './Time';


const Reservation = () => {
    const [openDate, setOpenDate]=useState(false);
    const [date, setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection',
        }
    ]);

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleStartTimeSelect = (time) => {
        setStartTime(time);
    };
    const handleEndTimeSelect = (time) => {
        setEndTime(time);
    };
    
    const navigate=useNavigate ();
    const handleSend = ()=>{navigate('/reservationother',{state:{date,startTime,endTime}});
        };
    return (
        <>
           <Button style={{marginTop:'20px',marginLeft:'450px',padding:'15px',width:'400px',textAlign:'center'}} onClick={()=>setOpenDate(!openDate)}>
            {`${format(date[0].startDate,"dd/mm/yyy")}to${format(date[0].endDate,"dd/mm/yyy")}`}
            </Button>
            {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
             /> }
             <div>
             <p style={{ marginTop:'20px',fontSize:'15px', backgroundColor:'red',marginLeft:'450px',padding:'15px',width:'400px',textAlign:'center'}}>Selecte time range : </p>
             </div>

            <div>
            <h1 style={{backgroundColor:'red',marginLeft:'450px',padding:'15px',width:'400px',textAlign:'center'}}> {startTime} --  {endTime}</h1>
            
             <div style={{backgroundColor:'red',marginLeft:'450px',padding:'15px',width:'400px',textAlign:'center'}}>
             <Time  onTimeSelect={ handleStartTimeSelect} /><span> to </span><Time onTimeSelect={ handleEndTimeSelect} />
             </div>
            </div>
            
             
            <Button style={{backgroundColor:'red',marginLeft:'450px',padding:'15px',width:'400px',textAlign:'center'}} onClick={handleSend}>OK</Button>
                
        </>
    );
};

export default Reservation