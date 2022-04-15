import { useRouter } from 'next/router';
import styles from './day.module.css';

const Day = ({date, meetings, openForm}) => {
    const router = useRouter();

    return (
        <div onDoubleClick={() => router.push('/form/' + date)}>
            <h1>{date}</h1>
            <div>
                {meetings.map((meeting, index) => (
                    <div key={index}  onClick={() => router.push('/meeting/' + meeting._id)}>
                        {meeting.time} {meeting.title}
                    </div>
            ))}
            </div>
            
        </div>
    );
};

export default Day;