import React, { useEffect, useState } from 'react';
function Practice() {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("");
  useEffect(()=>{
    console.log("useeffect called");
  },[counter])

  const handleIncrement = () =>{
    setCounter(counter +1);
  }

  const handleChange = (event) =>{
    setUsername(event.target.value);
  }
  return (
    <div>
      <input type="text" value={username} placeholder="Enter Your Name" onChange={handleChange}/>
      <p>{username}</p>
      <p>Counter value is : {counter}</p>
      <button onClick={handleIncrement}>Increase Counter</button>
      <button onClick={()=>setCounter(counter-1)}>Decrease Counter</button>
    </div>
  );
}

export default Practice;
