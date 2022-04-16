import { useRouter } from 'next/router';

const Day = ({date, meetings}) => {
    const router = useRouter();

    return (
        <div onDoubleClick={() => router.push('/form/' + date)}>
            <h1>{date}</h1>
            {meetings.map((meeting, index) => (
                <div key={index}  onClick={() => router.push('/meeting/' + meeting._id)}>
                    {meeting.time} {meeting.title}
                </div>
            ))}
        </div>
    );
};

export default Day;