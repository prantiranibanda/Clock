import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [isDisplaySec, setIsDisplaySec] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      let date = new Date();
      setSecond(date.getSeconds());
      setHour((date.getHours()>12) ? date.getHours()-12 : date.getHours());
      setMinute(date.getMinutes());
    },500);
  }, []);

  const handleClick = () =>{
    setIsDisplaySec((isDisplaySec)?false:true);
  }
  let time1 = `${(hour>=10)? `${hour}`:`0${hour}`}:${(minute>=10)? `${minute}`:`0${minute}`}:${(second>=10)? `${second}`:`0${second}`}`;
  let time2 = `${(hour>=10)? `${hour}`:`0${hour}`}:${(minute>=10)? `${minute}`:`0${minute}`}`
  return (
    <div>
      <div className="text">
        {(isDisplaySec)?time1:time2}
      </div>
      <div className="parentBox">
        <button className="box" onClick={handleClick}>{(isDisplaySec)?"SECOND:OFF":"SECOND:ON"}</button>
      </div>
      
    </div>
    
  );
}
export default App;