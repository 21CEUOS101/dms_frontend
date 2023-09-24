import React, { useEffect, useState } from "react";
import axios from "axios";
import "./all.css";
import Swal from "sweetalert2";

function All_Students() {
  const [studentEmails, setStudentEmails] = useState([]);
  const [facultyEmails, setFacultyEmails] = useState([]);
  const [hodEmails, setHodEmails] = useState([]);
  const [tpoEmails, setTpoEmails] = useState([]);
  const [ttoEmails, setTtoEmails] = useState([]);
  const [adminEmails, setAdminEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectedBccEmails, setSelectedBccEmails] = useState([]);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [fromEmail, setFromEmail] = useState(localStorage.getItem("email"));
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem("secretKey") || ""
  );

  const handleSelectStudent = async (event) => {
    const value = event.target.value;

    if (value === "select") {
      setSelectedEmails([]);
      setStudentEmails([]);
    } else if (value === "all_student") {
      await getStudentEmails();
    } else if (value === "branch_wise") {
      const branch = await Swal.fire({
        title: "Select Branch",
        input: "select",
        inputOptions: {
          CSE: "CSE",
          IT: "IT",
          ECE: "ECE",
          EE: "EE",
          ME: "ME",
          CE: "CE",
        },
        inputPlaceholder: "Select Branch",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select branch");
            }
          });
        },
      });
      if (branch.isConfirmed) {
        await getStudentEmails();
        const filteredEmails = studentEmails.filter((email) =>
          email.includes(branch.value)
        );
        setSelectedEmails([]);
        setStudentEmails(filteredEmails);
      }
    } else if (value === "year_wise") {
      const year = await Swal.fire({
        title: "Select Year",
        input: "select",
        inputOptions: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
        },
        inputPlaceholder: "Select Year",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select year");
            }
          });
        },
      });
      if (year.isConfirmed) {
        await getStudentEmails();
        const filteredEmails = studentEmails.filter((email) =>
          email.includes(year.value)
        );
        setSelectedEmails([]);
        setStudentEmails(filteredEmails);
      }
    } else if (value === "semester_wise") {
      const semester = await Swal.fire({
        title: "Select Semester",
        input: "select",
        inputOptions: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
        },
        inputPlaceholder: "Select Semester",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select semester");
            }
          });
        },
      });
      if (semester.isConfirmed) {
        await getStudentEmailsBySemester(semester.value);
      }
    }
  };

  const handleSelectFaculty = async (event) => {
    const value = event.target.value;

    if (value === "select") {
      setSelectedEmails([]);
      setFacultyEmails([]);
    } else if (value === "all_faculty") {
      await getFacultyEmails();
    } else if (value === "branch_wise") {
      const branch = await Swal.fire({
        title: "Select Branch",
        input: "select",
        inputOptions: {
          CSE: "CSE",
          IT: "IT",
          ECE: "ECE",
          EE: "EE",
          ME: "ME",
          CE: "CE",
        },
        inputPlaceholder: "Select Branch",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select branch");
            }
          });
        },
      });
      if (branch.isConfirmed) {
        await getFacultyEmails();
        const filteredEmails = facultyEmails.filter((email) =>
          email.includes(branch.value)
        );
        setSelectedEmails([]);
        setFacultyEmails(filteredEmails);
      }
    }
  };

  const handleSelectHod = async (event) => {
    const value = event.target.value;

    if (value === "select") {
      setSelectedEmails([]);
      setHodEmails([]);
    } else if (value === "all_hod") {
      await getHodEmails();
    } else if (value === "branch_wise") {
      const branch = await Swal.fire({
        title: "Select Branch",
        input: "select",
        inputOptions: {
          CSE: "CSE",
          IT: "IT",
          ECE: "ECE",
          EE: "EE",
          ME: "ME",
          CE: "CE",
        },
        inputPlaceholder: "Select Branch",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select branch");
            }
          });
        },
      });
      if (branch.isConfirmed) {
        await getHodEmails();
        const filteredEmails = hodEmails.filter((email) =>
          email.includes(branch.value)
        );
        setSelectedEmails([]);
        setHodEmails(filteredEmails);
      }
    }
  };

  const handleSelectTpo = async (event) => {
    const value = event.target.value;

    if (value === "select") {
      setSelectedEmails([]);
      setTpoEmails([]);
    } else if (value === "all_tpo") {
      await getTpoEmails();
    } else if (value === "branch_wise") {
      const branch = await Swal.fire({
        title: "Select Branch",
        input: "select",
        inputOptions: {
          CSE: "CSE",
          IT: "IT",
          ECE: "ECE",
          EE: "EE",
          ME: "ME",
          CE: "CE",
        },
        inputPlaceholder: "Select Branch",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select branch");
            }
          });
        },
      });
      if (branch.isConfirmed) {
        await getTpoEmails();
        const filteredEmails = tpoEmails.filter((email) =>
          email.includes(branch.value)
        );
        setSelectedEmails([]);
        setTpoEmails(filteredEmails);
      }
    }
  };

  const handleSelectTto = async (event) => {
    const value = event.target.value;

    if (value === "select") {
      setSelectedEmails([]);
      setTtoEmails([]);
    } else if (value === "all_tto") {
      await getTtoEmails();
    } else if (value === "branch_wise") {
      const branch = await Swal.fire({
        title: "Select Branch",
        input: "select",
        inputOptions: {
          CSE: "CSE",
          IT: "IT",
          ECE: "ECE",
          EE: "EE",
          ME: "ME",
          CE: "CE",
        },
        inputPlaceholder: "Select Branch",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select branch");
            }
          });
        },
      });
      if (branch.isConfirmed) {
        await getTtoEmails();
        const filteredEmails = ttoEmails.filter((email) =>
          email.includes(branch.value)
        );
        setSelectedEmails([]);
        setTtoEmails(filteredEmails);
      }
    }
  };

  const handleSelectAdmin = async (event) => {
    const value = event.target.value;

    if (value === "select") {
      setSelectedEmails([]);
      setAdminEmails([]);
    } else if (value === "all_admin") {
      await getAdminEmails();
    } else if (value === "branch_wise") {
      const branch = await Swal.fire({
        title: "Select Branch",
        input: "select",
        inputOptions: {
          CSE: "CSE",
          IT: "IT",
          ECE: "ECE",
          EE: "EE",
          ME: "ME",
          CE: "CE",
        },
        inputPlaceholder: "Select Branch",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select branch");
            }
          });
        },
      });
      if (branch.isConfirmed) {
        await getAdminEmails();
        const filteredEmails = adminEmails.filter((email) =>
          email.includes(branch.value)
        );
        setSelectedEmails([]);
        setAdminEmails(filteredEmails);
      }
    }
  };

  const CombineMails = () => {
    const allEmails = [
      ...studentEmails,
      ...facultyEmails,
      ...hodEmails,
      ...tpoEmails,
      ...ttoEmails,
      ...adminEmails,
    ];
    setSelectedEmails(allEmails);
  };

  const getStudentEmailsBySemester = async (semester) => {
    await axios
      .get(
        `http://localhost:3001/student/getAllStudentEmailsBySemester/${semester}`
      )
      .then((response) => {
        setStudentEmails(response?.data);
      });
  };

  const getStudentEmails = async () => {
    await axios
      .get("http://localhost:3001/student/getAllStudentEmails")
      .then((response) => {
        setStudentEmails(response.data);
      });
  };

  const getFacultyEmails = async () => {
    await axios
      .get("http://localhost:3001/faculty/getAllFacultyEmails")
      .then((response) => {
        setFacultyEmails(response.data);
      });
  };

  const getHodEmails = async () => {
    await axios
      .get("http://localhost:3001/hod/getAllHODEmails")
      .then((response) => {
        setHodEmails(response.data);
      });
  };

  const getTpoEmails = async () => {
    await axios
      .get("http://localhost:3001/tpo/getAllTPOEmails")
      .then((response) => {
        setTpoEmails(response.data);
      });
  };

  const getTtoEmails = async () => {
    await axios
      .get("http://localhost:3001/tto/getAllTTOEmails")
      .then((response) => {
        setTtoEmails(response.data);
      });
  };

  const getAdminEmails = async () => {
    await axios
      .get("http://localhost:3001/admin/getAllAdminEmails")
      .then((response) => {
        setAdminEmails(response.data);
      });
  };

  useEffect(() => {
    setSelectedEmails([]);
  }, []);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFromEmailChange = (event) => {
    setFromEmail(event.target.value);
  };

  const handleSecretKeyChange = (event) => {
    setSecretKey(event.target.value);
  };

  const sendEmail = () => {
    if (selectedEmails.length > 0) {
      // Send email to selected email addresses
      const emailData = {
        from: fromEmail,
        students: selectedEmails,
        bcc: selectedBccEmails,
        subject: subject,
        text: text,
        secretKey: secretKey, // Include the secretKey in the emailData
      };

      axios
        .post("http://localhost:3001/mail/make-announcement", emailData)
        .then((response) => {
          console.log("Email sent successfully:", response.data.message);
          alert("Email sent successfully");
          localStorage.setItem("secretKey", secretKey);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Error sending email");
        });
    } else {
      console.error("Please select at least one student email.");
      alert("Please select at least one student email.");
    }
  };

  return (
    <div className="divStyle grid place-items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="textStyle">Make Announcement</div>
      <div className="grid place-items-center h-screen w-full mx-5">
        <div className="grid grid-cols-2 gap-1 font-mono">
          <label className="block">
            <p className="mb-2">Students</p>
            <select name="student" id="student" onChange={handleSelectStudent}>
              <option value="select" selected>
                Select
              </option>
              <option value="all_student">All Students</option>
              <option value="branch_wise">Branch Wise</option>
              <option value="year_wise">Year Wise</option>
              <option value="semester_wise">Semester Wise</option>
            </select>
          </label>
          <label className="block">
            <p className="mb-2">Faculty</p>
            <select name="faculty" id="faculty" onChange={handleSelectFaculty}>
              <option value="select" selected>
                Select
              </option>
              <option value="all_faculty">All Faculty</option>
              <option value="branch_wise">Branch Wise</option>
            </select>
          </label>
          <label className="block">
            <p className="mb-2">HOD</p>
            <select name="hod" id="hod" onChange={handleSelectHod}>
              <option value="select" selected>
                Select
              </option>
              <option value="all_hod">All HOD</option>
              <option value="branch_wise">Branch Wise</option>
            </select>
          </label>
          <label className="block">
            <p className="mb-2">TPO</p>
            <select name="tpo" id="tpo" onChange={handleSelectTpo}>
              <option value="select" selected>
                Select
              </option>
              <option value="all_tpo">All TPO</option>
              <option value="branch_wise">Branch Wise</option>
            </select>
          </label>
          <label className="block">
            <p className="mb-2">TTO</p>
            <select name="tto" id="tto" onChange={handleSelectTto}>
              <option value="select" selected>
                Select
              </option>
              <option value="all_tto">All TTO</option>
              <option value="branch_wise">Branch Wise</option>
            </select>
          </label>
          <label className="block">
            <p className="mb-2">Admin</p>
            <select name="admin" id="admin" onChange={handleSelectAdmin}>
              <option value="select" selected>
                Select
              </option>
              <option value="all_admin">All Admin</option>
              <option value="branch_wise">Branch Wise</option>
            </select>
          </label>
        </div>
        <div>
          <button onClick={CombineMails}>Confirm Selected Mails</button>
        </div>
        <div>
          {selectedEmails.length > 0 && (
            <div className="textStyle">Selected Emails</div>
          )}
          {selectedEmails.length > 0 &&
            selectedEmails?.map((email) => <div key={email}>{email}</div>)}
        </div>
        <input
          type="text"
          placeholder="From (Your Email)"
          value={fromEmail}
          onChange={handleFromEmailChange}
        />
        <input
          type="text"
          placeholder="Secret Key"
          value={secretKey}
          onChange={handleSecretKeyChange}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubjectChange}
        />
        <textarea placeholder="Text" value={text} onChange={handleTextChange} />
        <button
          onClick={sendEmail}
          disabled={
            !selectedEmails.length ||
            !subject ||
            !text ||
            !fromEmail ||
            !secretKey
          }
        >
          Send Email
        </button>
      </div>
    </div>
  );
}

export default All_Students;
