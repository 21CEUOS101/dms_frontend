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
    <div className="w-full text-center">

      <h1>Update Student</h1>
      <div className="grid grid-cols-3">  
        <div className="h-full">
          <UpdateStudentDetails id={id} />
        </div>
        <div className="h-full">
          <UpdateGuardianInfo id={id} />
        </div>
        <div className="h-full">
          <UpdateContactInfo id={id} />
        </div>
        <div className="h-full">
          <UpdateFeesInfo id={id} />
        </div>
        <div className="h-full">
          <UpdateAcademicsInfo id={id} />
        </div>
        <div className="h-full">
          <UpdateOtherInfo id={id} />
        </div>
      </div>
    </div>
  );
  
};

export default Update_Student;
