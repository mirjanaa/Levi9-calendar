import Day from '../Day';
import styles from './calendar.module.css'

const month = [
    ['','', '01', '02', '03', '04', '05'],
    ['06', '07', '08', '09', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18', '19'],
    ['20', '21', '22', '23', '24', '25', '26'],
    ['27', '28', '29', '30', '', '', ''],
    ['', '', '', '', '', '', '']
];

const Calendar = ({meetings}) => {    
    return (
        <div className={styles.page}>
            <h2>Calendar for the month of June</h2>
            <table>
                <thead>
                    <tr>
                        <td className={styles.header}>MONDAY</td>
                        <td className={styles.header}>TUESDAY</td>
                        <td className={styles.header}>WEDNESDAY</td>
                        <td className={styles.header}>THURSDAY</td>
                        <td className={styles.header}>FRIDAY</td>
                        <td className={styles.header}>SATURDAY</td>
                        <td className={styles.header}>SUNDAY</td>
                    </tr>
                </thead>
                <tbody>
                    {month.map((week, index) => (
                        <tr key={index}>
                            {week.map((day, index) => (
                                <td key={index}>
                                {day == '' ? (<></>) : (<Day
                                                         date={day}
                                                         meetings={meetings.filter((meeting) => (
                                                             meeting.day  == day
                                                         ))}
                                                        />)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
};

export default Calendar;
