import { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/meetings')
      .then((res) => res.json())
      .then((data) => setMeetings(data));
  }, []);
  
  return <Calendar meetings={meetings}/>;
}
