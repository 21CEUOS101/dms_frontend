import React from "react";
import "./ViewAll.css";
import { Link } from "react-router-dom";

function ViewAll(props) {
  const value = props.data;
  const keys = value.length > 0 ? Object.keys(value[0]) : [];
  const url = `/update${window.location.pathname.slice(4)}`;
  console.log(url);
  return (
    <div className="view-container">
      <table className="view-table">
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
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {value.map((v, index) => {
            const id = v[keys[1]];
            return (<tr key={index}>
              {
                keys.map((key,i) => {
                  if (i !== 0)
                  {
                    return (<td key={key}>{v[key]}</td>);
                  }
                })
              }
              <td><Link className="view-button" to={`${url}/${id}`}>Update</Link></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAll;
