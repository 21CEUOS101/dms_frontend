import React from "react";
import "./ViewAll.css";

function ViewAll(props) {
  const faculties = props.data;
  const keys = faculties.length > 0 ? Object.keys(faculties[0]) : [];

  return (
    <div className="view-container">
      <table className="faculty-table">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td key={key}>{faculty[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAll;
