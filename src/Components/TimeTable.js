import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  return timeSlots.find((slot) => slot === time) || timeSlots[0];
}

function TimeTable({ data, timetableId }) {
  const timetableRef = useRef(null);

  const generatePDF = () => {
    const input = timetableRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust width and height as needed
      pdf.save('timetable.pdf');
    });
  };

  const filteredData = data.filter((entry) => entry.time_table_id === timetableId);
  const groupedData = filteredData.reduce((acc, entry) => {
    const day = entry.time_table_block_day;
    const time = entry.time_table_block_time;
    if (!acc[day]) {
      acc[day] = {};
    }

    const closestTimeSlot = findClosestTimeSlot(time);

    if (!acc[day][closestTimeSlot]) {
      acc[day][closestTimeSlot] = [];
    }

    acc[day][closestTimeSlot].push(entry);
    return acc;
  }, {});

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div>
      <button className="generate-pdf-button" onClick={generatePDF}>Generate PDF</button>
      <div className="timetable" ref={timetableRef}>
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
    </div>
  );
}

export default TimeTable;
