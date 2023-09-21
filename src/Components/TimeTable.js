import React from 'react';
import './TimeTable.css';

function TimeTable({ data }) {
  // Group data by day and time
  const groupedData = data.reduce((acc, entry) => {
    const day = entry.time_table_block_day;
    const time = entry.time_table_block_time;
    if (!acc[day]) {
      acc[day] = {};
    }
    acc[day][time] = entry;
    return acc;
  }, {});

  // Define time slots
  const timeSlots = [
    '8:30 AM - 9:30 AM',
    '9:30 AM - 10:30 AM',
    '10:30 AM - 11:30 AM',
    '11:30 AM - 12:30 PM',
    '12:30 PM - 1:30 PM',
    '1:30 PM - 2:30 PM',
    '2:30 PM - 3:30 PM',
    '3:30 PM - 4:30 PM',
    '4:30 PM - 5:30 PM',
  ];

  // Define days
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="timetable">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot, index) => (
            <tr key={index}>
              <td>{timeSlot}</td>
              {days.map((day) => (
                <td key={day}>
                  {groupedData[day] && groupedData[day][timeSlot] ? (
                    <div className="timetable-entry">
                      <p>{groupedData[day][timeSlot].time_table_block_subject}</p>
                      <p>{groupedData[day][timeSlot].time_table_block_faculty}</p>
                      <p>{groupedData[day][timeSlot].time_table_block_room_no}</p>
                    </div>
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimeTable;
