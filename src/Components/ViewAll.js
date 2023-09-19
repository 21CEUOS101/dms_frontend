import React from "react";
import "./ViewAll.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ViewAll(props) {
  const value = props.data;
  const keys = value.length > 0 ? Object.keys(value[0]) : [];

  // Put the role here
  const role = "/admin";
  const view_url = `/display${window.location.pathname.slice(4)}`;
  const update_url = `/update${window.location.pathname.slice(4)}`;
  const delete_url = `/delete${window.location.pathname.slice(4)}`;
  console.log(update_url);
  console.log(delete_url);

  const Delete = async (id) => {
    await axios.delete(`http://localhost:3001${role}${delete_url}/${id}`).then((data) => {
      console.log(data?.data);
      props.setRefresh(!props.refresh); // This is a hack to refresh the page
    });
  }

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
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
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
              <td><Link className="view-button-view" to={`${view_url}/${id}`}>View</Link></td>
              <td><Link className="view-button" to={`${update_url}/${id}`}>Update</Link></td>
              <td><button className="view-button-delete" onClick={() => Delete(id)}>Delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAll;
