import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./meeting.module.css";

const Meeting = () => {
  const router = useRouter();
  const { id } = router.query;

  const [meeting, setMeeting] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/meetings/" + id)
      .then((res) => res.json())
      .then((data) => setMeeting(data));
  }, []);

  const deleteMeeting = () => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      query: JSON.stringify(id),
    };

    fetch("http://localhost:5000/api/meetings/" + id, options).then(
      router.back
    );
  };

  return (
    <div className={styles.info}>
      <h2>{meeting?.title}</h2>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Description:</td>
            <td>{meeting?.description}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{meeting?.time}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => deleteMeeting()} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Meeting;
