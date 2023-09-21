import React from 'react';
import './TimeTable.css';

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

// Function to find the closest matching time slot
function findClosestTimeSlot(time) {
  // Add your logic here to find the closest time slot based on the provided time
  // For example, you can split the time string and compare it with the time slots
  // You may need to handle AM/PM logic as well
  // Return the closest time slot string
  // For now, let's assume a simple implementation
  return timeSlots.find((slot) => slot === time) || timeSlots[0];
}

function TimeTable({ data }) {
  // Group data by day and time
  const groupedData = data.reduce((acc, entry) => {
    const day = entry.time_table_block_day;
    const time = entry.time_table_block_time;
    if (!acc[day]) {
      acc[day] = {};
    }

    // Find the closest matching time slot
    const closestTimeSlot = findClosestTimeSlot(time);

    if (!acc[day][closestTimeSlot]) {
      acc[day][closestTimeSlot] = [];
    }

    acc[day][closestTimeSlot].push(entry);
    return acc;
  }, {});

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
                    groupedData[day][timeSlot].map((entry) => (
                      <div className="timetable-entry" key={entry.time_table_block_id}>
                        <p>{entry.time_table_block_subject}</p>
                        <p>{entry.time_table_block_faculty}</p>
                        <p>{entry.time_table_block_room_no}</p>
                      </div>
                    ))
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
