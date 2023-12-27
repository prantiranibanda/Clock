import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setSecond(new Date().getSeconds());
      setHour((new Date().getHours()>12) ? new Date().getHours()-12 : new Date().getHours());
      setMinute(new Date().getMinutes());
    },1000);
  }, []);

  return (
    <div className="text">
    {`${hour}:${minute}:${second}`}
    </div>
  );
}
export default App;
