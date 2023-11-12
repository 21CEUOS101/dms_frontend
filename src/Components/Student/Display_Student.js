import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../Profile";

function Display_Student() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios
      .get(`https://dms2901.onrender.com/student/getStudentByRollNumber/${id}`)
      .then((response) => {
        console.log(response?.data);
        setData(response?.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const studentDetails = data?.studentDetails[0];
  const studentGuardianInfo = data?.studentGuardianInfo[0];
  const studentOtherDetails = data?.studentOtherDetails[0];

  return (
    <div className="w-full text-center bg-gray-200 p-4">
      <div
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        STUDENT PROFILE
      </div>
      <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
      <div className="grid grid-row-3">
        {data !== undefined && (
          <>
            <h1>Student Details</h1>
            <Profile data={studentDetails !== undefined && studentDetails} />
          </>
        )}
        {data !== undefined && (
          <>
            <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
            <h1>Guardian Information</h1>
            <Profile
              data={studentGuardianInfo !== undefined && studentGuardianInfo}
            />
          </>
        )}
        {data !== undefined && (
          <>
            <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
            <h1>Other Details</h1>
            <Profile
              data={studentOtherDetails !== undefined && studentOtherDetails}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Display_Student;
