import { useRouter } from "next/router";
import styles from "./day.module.css";

const Day = ({ date, meetings }) => {
  const router = useRouter();

  return (
    <div
      className={styles.item}
      onDoubleClick={() => router.push("/form/" + date)}
    >
      <h1>{date}</h1>
      {meetings.map((meeting, index) => (
        <div
          key={index}
          className={styles.meeting}
          onClick={() => router.push("/meeting/" + meeting._id)}
        >
          <div className={styles.title}>{meeting.title}</div>
          <div>{meeting.time}</div>
        </div>
      ))}
    </div>
  );
};

export default Day;
