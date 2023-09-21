// Update_Student.js
import React from "react";
import { useParams } from "react-router-dom";
import UpdateStudentDetails from "./Update_Student_Details"; // Import the new component
import UpdateGuardianInfo from "./Update_Guardian_Info";
import UpdateOtherInfo from "./Update_Student_Other_Details";
import UpdateContactInfo from "./Update_Student_Contact_Info";
import UpdateFeesInfo from "./Update_Student_Fee_Info"
import UpdateAcademicsInfo from "./Update_Academics_Info";

const Update_Student = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Update Student</h1>
      <UpdateStudentDetails id={id} />
      <UpdateGuardianInfo id={id} />
      <UpdateContactInfo id={id} />
      <UpdateFeesInfo id={id} />
      <UpdateAcademicsInfo id={id} />
      <UpdateOtherInfo id={id} />
    </div>
  );
};

export default Update_Student;
