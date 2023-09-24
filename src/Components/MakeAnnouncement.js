import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './all.css';

function All_Students() {
  const [studentEmails, setStudentEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectedBccEmails, setSelectedBccEmails] = useState([]);
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [fromEmail, setFromEmail] = useState(localStorage.getItem('email'));
  const [secretKey, setSecretKey] = useState(''); // Initialize with an empty string

  const getStudentEmails = () => {
    axios.get('http://localhost:3001/student/getAllStudentEmails').then((response) => {
      setStudentEmails(response.data);
    });
  };

  useEffect(() => {
    getStudentEmails();
  }, []);

  const handleSelectEmailChange = (event) => {
    const email = event.target.value;
    setSelectedEmails((prevSelectedEmails) =>
      prevSelectedEmails.includes(email)
        ? prevSelectedEmails.filter((e) => e !== email)
        : [...prevSelectedEmails, email]
    );
  };

  const handleSelectBccChange = (event) => {
    const email = event.target.value;
    setSelectedBccEmails((prevSelectedBccEmails) =>
      prevSelectedBccEmails.includes(email)
        ? prevSelectedBccEmails.filter((e) => e !== email)
        : [...prevSelectedBccEmails, email]
    );
  };

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
        .post('http://localhost:3001/mail/make-announcement', emailData)
        .then((response) => {
          console.log('Email sent successfully:', response.data.message);
          alert('Email sent successfully');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          alert('Error sending email');
        });
    } else {
      console.error('Please select at least one student email.');
      alert('Please select at least one student email.');
    }
  };

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Students</div>
      <div className='grid place-items-center h-screen'>
        <div>
          <p>Select "To" Email(s):</p>
          {studentEmails.map((email) => (
            <label key={email}>
              <input
                type='checkbox'
                value={email}
                onChange={handleSelectEmailChange}
                checked={selectedEmails.includes(email)}
              />
              {email}
            </label>
          ))}
        </div>
        <div>
          <p>Select "BCC" Email(s):</p>
          {studentEmails.map((email) => (
            <label key={email}>
              <input
                type='checkbox'
                value={email}
                onChange={handleSelectBccChange}
                checked={selectedBccEmails.includes(email)}
              />
              {email}
            </label>
          ))}
        </div>
        <input
          type='text'
          placeholder='From (Your Email)'
          value={fromEmail}
          onChange={handleFromEmailChange}
        />
        <input
          type='text'
          placeholder='Secret Key'
          value={secretKey}
          onChange={handleSecretKeyChange}
        />
        <input
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={handleSubjectChange}
        />
        <textarea
          placeholder='Text'
          value={text}
          onChange={handleTextChange}
        />
        <button onClick={sendEmail} disabled={!selectedEmails.length || !subject || !text || !fromEmail || !secretKey}>
          Send Email
        </button>
      </div>
    </div>
  );
}

export default All_Students;
