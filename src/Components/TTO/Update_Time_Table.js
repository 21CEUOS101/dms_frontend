import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update_Time_Table = () => {
  const { bid, ttid } = useParams();
  const [formData, setFormData] = useState({
    time_table_block_id: "",
    time_table_id: "",
    time_table_block_day: "",
    time_table_block_time: "",
    time_table_block_subject: "",
    time_table_block_faculty: "",
    time_table_block_room_no: "",
    time_table_block_department: "",
    time_table_block_semester: "",
    time_table_block_section: "",
    time_table_block_section_no: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const preData = async () => {
    console.log("bid:", bid);
    console.log("ttid:", ttid);
    axios.get(`https://dms2901.onrender.com/tto/getSpecificTimeTableSpecificBlockDetails/${bid}/${ttid}`).then((data) => {
        console.log(data?.data);
        setFormData(data?.data);
    },
        (error) => {
            console.log(error);
        }
    )
    }

    const updateData = async () => {
        await axios.patch(`https://dms2901.onrender.com/tto/updateTimeTableBlockDetails/${bid}/${ttid}`, formData).then((data) => {
            console.log(data?.data);
            setStatus(data?.data?.acknowledge);
            setTimeout(() => {
                setStatus("");
            }
            , 2000);
        },
            (error) => {
                console.log(error);
                setStatus(JSON.stringify(error));
            }
        )
    }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateData();
  };

  useEffect(() => {
    preData();
  }, []);

  return (
    <div className="container">
      <h1 className="mb-3">Update Time Table Block</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="time_table_block_id" className="form-label">
            Time Table Block ID:
          </label>
          <input
            type="text"
            id="time_table_block_id"
            name="time_table_block_id"
            value={formData.time_table_block_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_id" className="form-label">
            Time Table ID:
          </label>
          <input
            type="text"
            id="time_table_id"
            name="time_table_id"
            value={formData.time_table_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_day" className="form-label">
            Day:
          </label>
          <input
            type="text"
            id="time_table_block_day"
            name="time_table_block_day"
            value={formData.time_table_block_day}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_time" className="form-label">
            Time:
          </label>
          <input
            type="text"
            id="time_table_block_time"
            name="time_table_block_time"
            value={formData.time_table_block_time}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_subject" className="form-label">
            Subject:
          </label>
          <input
            type="text"
            id="time_table_block_subject"
            name="time_table_block_subject"
            value={formData.time_table_block_subject}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_faculty" className="form-label">
            Faculty:
          </label>
          <input
            type="text"
            id="time_table_block_faculty"
            name="time_table_block_faculty"
            value={formData.time_table_block_faculty}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_room_no" className="form-label">
            Room Number:
          </label>
          <input
            type="text"
            id="time_table_block_room_no"
            name="time_table_block_room_no"
            value={formData.time_table_block_room_no}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_department" className="form-label">
            Department:
          </label>
          <input
            type="text"
            id="time_table_block_department"
            name="time_table_block_department"
            value={formData.time_table_block_department}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_semester" className="form-label">
            Semester:
          </label>
          <input
            type="text"
            id="time_table_block_semester"
            name="time_table_block_semester"
            value={formData.time_table_block_semester}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_section" className="form-label">
            Section:
          </label>
          <input
            type="text"
            id="time_table_block_section"
            name="time_table_block_section"
            value={formData.time_table_block_section}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time_table_block_section_no" className="form-label">
            Section Number:
          </label>
          <input
            type="text"
            id="time_table_block_section_no"
            name="time_table_block_section_no"
            value={formData.time_table_block_section_no}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>

        {status !== "" && <p>{status}</p>}
        {error !== "" && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Update_Time_Table;
