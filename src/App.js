import React, {useState, useEffect} from "react";

export default function App() {
  const [time, setTime] = useState(new Date().toString());
  
  useEffect(()=>{
    setTimeout(()=>{
      setTime(new Date().toString());
    },1000);
  })
  return (
    <div className = "container">
      <div className="card text-white bg-success mb-3"> 
        <div className="card-header">Timer</div>
          <div className="card-body">
          <p className="card-text">{time}</p>
        </div>
      </div>
    </div>
    
  );
}
