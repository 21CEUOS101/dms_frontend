import React, { useState } from "react";
import axios from "axios";
import Add_Student_Details from "./Add_Student_Details";
import Add_Student_Guardian from "./Add_Student_Guardian";
import Add_Student_Contact from "./Add_Student_Contact";
import Add_Student_AcademicInfo from "./Add_Student_Academics";
import Add_Student_OtherDetails from "./Add_Student_OtherDetails";
import Add_Student_FeesInfo from "./Add_Student_Fees";

const Student_Form = () => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    guardianInfo: {},
    contactInfo: {},
    academicInfo: {},
    feesInfo: {},
    otherDetails: {},
  });

  const updateFormData = (section, data) => {
    console.log("Hello " + data);
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    axios
      .post(`http://localhost:3001/admin/createStudent`, formData)
      .then((response) => {
        console.log("Response from server:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form>
      <h2>Add Student</h2>
      <Add_Student_Details onSubmit={(data) => updateFormData("personalInfo", data)} />
      <Add_Student_Guardian onSubmit={(data) => updateFormData("guardianInfo", data)} />
      <Add_Student_OtherDetails onSubmit={(data) => updateFormData("otherDetails", data)} />
      <Add_Student_Contact onSubmit={(data) => updateFormData("contactInfo", data)} />
      <Add_Student_AcademicInfo onSubmit={(data) => updateFormData("academicInfo", data)} />
      <Add_Student_FeesInfo onSubmit={(data) => updateFormData("feesInfo", data)} />
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Student_Form