import React from "react";
import "./ViewAll.css";

function ViewAll(props) {
  const value = props.data;
  const keys = value.length > 0 ? Object.keys(value[0]) : [];

  
  return (
    <div className="view-container">
      <table className="faculty-table">
        <thead>
          <tr>
            {
              keys.map((key, index) => {
                if (index !== 0)
                {
                  return (
                    <th key={key}>{key}</th>
                  );
                }
              })
            }
          </tr>
        </thead>
        <tbody>
          {value.map((value, index) => {
            return (<tr key={index}>
              {
                keys.map((key,i) => {
                  if (i !== 0)
                  {
                    return (<td key={key}>{value[key]}</td>);
                  }
              })
              }
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAll;
