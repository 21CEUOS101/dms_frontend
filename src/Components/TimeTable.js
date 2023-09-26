import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './TimeTable.css';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

function findClosestTimeSlot(time) {
  return timeSlots.find((slot) => slot === time) || timeSlots[0];
}

function TimeTable({ data, timetableId, onEditClick }) {
  const tableRef = useRef(null);

  const filteredData = data.filter((entry) => entry.time_table_block_semester === timetableId);

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

  const tableColumns = [['Time', ...days]]; // Define tableColumns here

  function downloadExcel() {
    const wsData = [['Time', ...days]];

    timeSlots.forEach((timeSlot) => {
      const rowData = [timeSlot];
      days.forEach((day) => {
        if (groupedData[day] && groupedData[day][timeSlot]) {
          const entries = groupedData[day][timeSlot];
          const cellData = entries.map((entry) => `${entry.time_table_block_subject} - ${entry.time_table_block_faculty}`);
          rowData.push(cellData.join('\n'));
        } else {
          rowData.push('');
        }
      });
      wsData.push(rowData);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'Timetable');
    XLSX.writeFile(wb, 'timetable.xlsx');
  }

  function downloadPDF() {
    const doc = new jsPDF();

    const tableData = timeSlots.map((timeSlot) => {
      const rowData = [timeSlot];
      days.forEach((day) => {
        if (groupedData[day] && groupedData[day][timeSlot]) {
          const entries = groupedData[day][timeSlot];
          const cellData = entries.map((entry) => `${entry.time_table_block_subject} - ${entry.time_table_block_faculty}`);
          rowData.push(cellData.join('\n'));
        } else {
          rowData.push('');
        }
      });
      return rowData;
    });

    doc.autoTable({
      head: tableColumns,
      body: tableData,
      startY: 20,
      styles: {
        cellPadding: 4,
        fontSize: 10,
        halign: 'center',
      },
      columnStyles: {
        0: { fontStyle: 'bold' },
      },
      margin: { top: 30 },
    });

    doc.save('timetable.pdf');
  }
  const role = localStorage.getItem("role");
  return (
      <div className=' grid place-items-center'>
        <div className="timetable">
          <table ref={tableRef}>
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
                            {role === "tto" && <Link
                              to={`/update-timetable/${entry.time_table_block_id}/${entry.time_table_id}`}
                            >
                              Edit
                            </Link>}
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
        <div className="mb-4 space-y-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mx-2"
            onClick={() => {
              downloadPDF()
            }}
          >
            Download PDF
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            onClick={() => {
              downloadExcel()
            }}
          >
            Download Excel
          </button>
        </div>
      </div>
    );
}

export default TimeTable;
