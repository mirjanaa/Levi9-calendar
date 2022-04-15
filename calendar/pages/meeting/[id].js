import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Meeting = () => {
    const router = useRouter();
    const { id } = router.query;

    const [meeting, setMeeting] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/meetings/' + id)
            .then((res) => res.json())
            .then((data) => setMeeting(data));
    }, []);

    const deleteMeeting = () => {
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            query: JSON.stringify(id),
          };
      
          fetch('http://localhost:5000/api/meetings/' + id, options).then(
            router.back()
          );
    };

    return (
        <div>
            <h2>{meeting?.title}</h2>
            <p>{meeting?.description}</p>
            <p>{meeting?.time}</p>
            {meeting.participants?.length > 0 ? <h3>With: </h3> : <></>}
            <ul>
                {meeting.participants?.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
            <button onClick={() => deleteMeeting()}>
                Delete
            </button>
        </div>
    );
};

export default Meeting;