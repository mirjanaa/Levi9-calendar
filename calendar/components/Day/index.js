import { useRouter } from 'next/router';
import styles from './day.module.css';

const Day = ({date, meetings, openForm}) => {
    const router = useRouter();

    return (
        <div>
            <h1>{date}</h1>
            {meetings.map((meeting, index) => {
                <div key={index}>
                    {meeting.time} {meeting.title}
                </div>
            })}
        </div>
    );
};

export default Day;