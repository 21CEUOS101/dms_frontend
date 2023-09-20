
import React, { useState } from "react";
import "./ViewAll.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ViewAll(props) {
  const value = props.data;
  const keys = value.length > 0 ? Object.keys(value[0]) : [];

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [sortBy, setSortBy] = useState(null); // State for sorting
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  // const role = localStorage.getItem("role");
  const role = `/hod`;
  const view_url = `/display${window.location.pathname.slice(4)}`;
  const update_url = `/update${window.location.pathname.slice(4)}`;
  const delete_url = `/delete${window.location.pathname.slice(4)}`;

  const Delete = async (id) => {
    await axios
      .delete(`http://localhost:3001${role}${delete_url}/${id}`)
      .then((data) => {
        console.log(data?.data);
        props.setRefresh(!props.refresh); // This is a hack to refresh the page
      });
  };

  const sortTable = (field) => {
    if (field === sortBy) {
      // Toggle sorting order
      const newOrder = sortOrder === "asc" ? "desc" : "asc";
      setSortOrder(newOrder);
      value.reverse();
    } else {
      setSortBy(field);
      setSortOrder("asc"); // Reset to ascending order
      value.sort((a, b) => {
        // Customize the sorting logic based on your data type
        return a[field].localeCompare(b[field]);
      });
    }
  };

  // Filter the data based on the search query
  const filteredData = value.filter((v) =>
    Object.values(v).some(
      (field) =>
        field &&
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="view-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="page-size-container">
        <span>Items per page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <table className="view-table">
        <thead>
          <tr>
            {keys.map((key, index) => {
              if (index !== 0) {
                return (
                  <th key={key} onClick={() => sortTable(key)}>
                    {key}
                    {sortBy === key && sortOrder === "asc" && " ▲"}
                    {sortBy === key && sortOrder === "desc" && " ▼"}
                  </th>
                );
              }
            })}
            <th>View</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((v, index) => {
            const id = v[keys[1]];
            return (
              <tr key={index}>
                {keys.map((key, i) => {
                  if (i !== 0) {
                    return <td key={key}>{v[key]}</td>;
                  }
                })}
                <td>
                  <Link className="view-button-view" to={`${view_url}/${id}`}>
                    View
                  </Link>
                </td>
                <td>
                  <Link className="view-button" to={`${update_url}/${id}`}>
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    className="view-button-delete"
                    onClick={() => Delete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ViewAll;
