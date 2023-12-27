import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      let date = new Date();
      setSecond(date.getSeconds());
      setHour((date.getHours()>12) ? date.getHours()-12 : date.getHours());
      setMinute(date.getMinutes());
    },1000);
  }, []);

  return (
    <div className="text">
    {`${(hour>=10)? `${hour}`:`0${hour}`}:${(minute>=10)? `${minute}`:`0${minute}`}:${(second>=10)? `${second}`:`0${second}`}`}
    </div>
  );
}
export default App;