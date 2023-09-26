import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ViewAll(props) {
  const value = props.data;
  const keys = value.length > 0 ? Object.keys(value[0]) : [];
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [sortBy, setSortBy] = useState(null); // State for sorting
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  const role = localStorage.getItem("role");

  const view_url = `/display${window.location.pathname.slice(4)}`;
  const update_url = `/update${window.location.pathname.slice(4)}`;
  const delete_url = `/delete${window.location.pathname.slice(4)}`;
  const result_url = `/sem-result`;
  const check = window.location.pathname.slice(5) === "student";
  const check2 =
    window.location.pathname.slice(5) === "hod" ||
    window.location.pathname.slice(5) === "admin";
  const check3 = window.location.pathname.slice(5) === "placement-company";

  const Delete = async (id) => {
    // Show a confirmation dialog before deleting
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        try {
          await axios
            .delete(`http://localhost:3001/${role}${delete_url}/${id}`)
            .then(
              () => {
                props.setRefresh(!props.refresh); // Refresh the page
                Swal.fire("Deleted!", "The item has been deleted.", "success");
              },
              (error) => {
                console.log(error);
              }
            );
        } catch (error) {
          Swal.fire(
            "Error",
            "An error occurred while deleting the item.",
            "error"
          );
        }
      }
    });
  };

  // Function to handle the update link click
  const handleUpdateClick = (e, id) => {
    e.preventDefault();
    // Show a confirmation dialog before navigating to the update page
    Swal.fire({
      title: "Are you sure?",
      text: "You want to go to the update page?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, navigate to the update page
        const updatePageUrl = `${update_url}/${id}`;
        navigate(updatePageUrl);
      }
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
    <div className="bg-white shadow-md rounded my-6">
      <div className="bg-gray-100 py-4 px-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="page-size-container">
        <span>Show:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="ml-2 px-2 py-1 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value={5} className="bg-white text-gray-900">5</option>
          <option value={10} className="bg-white text-gray-900">10</option>
          <option value={15} className="bg-white text-gray-900">15</option>
        </select>
      </div>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {keys.map((key, index) => {
              if (index !== 0) {
                return (
                  <th
                    key={key}
                    onClick={() => sortTable(key)}
                    className="cursor-pointer px-6 py-3 text-left"
                  >
                    {key}
                    {sortBy === key && sortOrder === "asc" && " ▲"}
                    {sortBy === key && sortOrder === "desc" && " ▼"}
                  </th>
                );
              }
            })}
            <th className="px-6 py-3">Actions</th>
            {(["admin"].includes(role) && !check2) ||
            (check2 && ["hod"].includes(role)) ||
            (check3 && ["tpo"].includes(role)) ? (
              <>
                <th className="px-6 py-3">Update</th>
                <th className="px-6 py-3">Delete</th>
              </>
            ) : null}
            {["admin", "faculty", "hod"].includes(role) && check ? (
              <th className="px-6 py-3">Result</th>
            ) : null}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {paginatedData.map((v, index) => {
            const id = v[keys[1]];
            return (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                {keys.map((key, i) => {
                  if (i !== 0) {
                    return (
                      <td key={key} className="px-6 py-4 whitespace-nowrap">
                        {v[key]}
                      </td>
                    );
                  }
                })}
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    to={`${view_url}/${id}`}
                  >
                    View
                  </Link>
                </td>
                {(["admin"].includes(role) && !check2) ||
                (check2 && ["hod"].includes(role)) ||
                (check3 && ["tpo"].includes(role)) ? (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        className="text-blue-500 hover:text-blue-800"
                        to="#"
                        onClick={(e) => handleUpdateClick(e, id)}
                      >
                        Update
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        
                        onClick={() => Delete(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                ) : null}
                {["admin", "faculty", "hod"].includes(role) && check ? (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      className="text-green-500 hover:text-green-800"
                      to={`${result_url}/${id}`}
                    >
                      Result
                    </Link>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-gray-100 py-3 px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex justify-between items-center sm:hidden">
            <button
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage > 1 ? prevPage - 1 : prevPage
                )
              }
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage < totalPages ? prevPage + 1 : prevPage
                )
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-gray-700">
                Showing{" "}
                <span className="font-medium">
                  {itemsPerPage * (currentPage - 1) + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {currentPage === totalPages
                    ? filteredData.length
                    : itemsPerPage * currentPage}
                </span>{" "}
                of{" "}
                <span className="font-medium">{filteredData.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      prevPage > 1 ? prevPage - 1 : prevPage
                    )
                  }
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.293 5.293a1 1 0 011.414 0L15 9.586V10a1 1 0 01-2 0v-.086l-4.293-4.293a1 1 0 10-1.414 1.414L11.586 10l-3.293 3.293a1 1 0 101.414 1.414L15 11.414V11a1 1 0 112 0v.086l4.293 4.293a1 1 0 11-1.414 1.414L13.586 12l3.293-3.293a1 1 0 010-1.414l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  {currentPage}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      prevPage < totalPages ? prevPage + 1 : prevPage
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 14.293a1 1 0 01-1.414 0L5 10.586V10a1 1 0 112 0v.086l4.293 4.293a1 1 0 001.414-1.414L8.414 10l3.293-3.293a1 1 0 00-1.414-1.414L5 9.586V9a1 1 0 112 0v.086l4.293 4.293a1 1 0 001.414 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
