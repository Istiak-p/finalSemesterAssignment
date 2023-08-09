
const Time = ({ onTimeSelect }) => {
  

  const handleTimeChange = (event) => {
    onTimeSelect(event.target.value);
  };
  return (
    <>
       <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" onChange={handleTimeChange} />
    </>
  );
};

export default Time;
