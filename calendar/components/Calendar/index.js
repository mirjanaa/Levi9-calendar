import { useState } from 'react';
import Day from '../Day'
import Form from '../Form';


const month = [
    ['','', '01', '02', '03', '04', '05'],
    ['06', '07', '08', '09', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18', '19'],
    ['20', '21', '22', '23', '24', '25', '26'],
    ['27', '28', '29', '30', '', '', ''],
    ['', '', '', '', '', '', '']
];

const Calendar = ({meetings}) => {
    const [selectedDate, setSelectedDate] = useState([]);
    
    return (
        <div>
            <h1>Calendar for the month of June</h1>
            <table>
                <thead>
                    <tr>
                        <td>MONDAY</td>
                        <td>TUESDAY</td>
                        <td>WEDNESDAY</td>
                        <td>THURSDAY</td>
                        <td>FRIDAY</td>
                        <td>SATURDAY</td>
                        <td>SUNDAY</td>
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
                                                         ></Day>)}
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
