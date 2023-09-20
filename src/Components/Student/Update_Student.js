// Update_Student.js
import React from "react";
import { useParams } from "react-router-dom";
import UpdateStudentDetails from "./UpdateStudentDetails"; // Import the new component
import UpdateGuardianInfo from "./UpdateGuardianInfo";

const Update_Student = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Update Student</h1>
      {/* Use the UpdateStudentDetails component with the student ID */}
      <UpdateStudentDetails id={id} />
      <UpdateGuardianInfo id={id} />
    </div>
  );
};

export default Update_Student;
