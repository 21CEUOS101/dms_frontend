import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Dashboard_HOD.css';
import BarChart from './BarChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChalkboardTeacher,
  faUserTie,
  faBook,
  faBuilding,
  faUserFriends,
  faBriefcase,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  const cardStyle = {
    backgroundColor: 'rgba(245, 245, 245, 0.9)', // Reduced opacity (0.9)
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.1s, box-shadow 0.3s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    flex: '30%', // 30% of the card width
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    flex: '70%', // 70% of the card width
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', // Align the title to the left
    transition: 'color 0.3s',
    margin: '0', // Remove margin to center the text
  };

  const numberStyle = {
    fontSize: '24px',
    color: '#4a90e2',
    textAlign: 'center', // Center the number
    transition: 'color 0.3s',
  };

  const iconSize = '48px';

  const hoverStyles = {
    cardHover: {
      backgroundColor: '#4a90e2',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
    },
    titleHover: {
      color: '#fff',
    },
    numberHover: {
      color: '#fff',
    },
    iconHover: {
      color: '#fff',
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getIconForTitle = (title) => {
    switch (title) {
      case "No. of Student":
        return faUser;
      case "No. of Faculties":
        return faChalkboardTeacher;
      case "No. of TTO":
        return faUserTie;
      case "No. of TPO":
        return faBuilding;
      case "No. of HOD":
        return faUserSecret;
      case "No. of Admins":
        return faUserFriends;
      case "No. of Subjects":
        return faBook;
      case "No. of Companies placement":
        return faBriefcase;
      default:
        return null;
    }
  };

  const icon = getIconForTitle(props.title);

  return (
    <div
      style={{
        ...cardStyle,
        ...(isHovered && hoverStyles.cardHover),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={iconStyle}>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            style={{
              ...iconStyle,
              fontSize: iconSize,
              ...(isHovered && hoverStyles.iconHover),
            }}
          />
        )}
      </div>
      <div style={contentStyle}>
        <h3 style={{ ...titleStyle, ...(isHovered && hoverStyles.titleHover) }}>
          {props.title}
        </h3>
        <p style={{ ...numberStyle, ...(isHovered && hoverStyles.numberHover) }}>
          {props.number}
        </p>
      </div>
    </div>
  );
}



function Dashboard_HOD() {
  const [no_of_students, setNo_of_students] = useState(0);
  const [no_of_tto, setNo_of_tto] = useState(0);
  const [no_of_hod, setNo_of_hod] = useState(0);
  const [no_of_faculty, setNo_of_faculty] = useState(0);
  const [no_of_subjects, setNo_of_subjects] = useState(0);
  const [no_of_tpo, setNo_of_tpo] = useState(0);
  const [no_of_companies, setNo_of_companies] = useState(0);
  const [no_of_admins, setNo_of_admins] = useState(0);

  const role = localStorage.getItem("role");

  const getAllNumbers = async () => {
    await axios.get(`http://localhost:3001/${role}/getAllNumbers`).then(
      (data) => {
        console.log(data?.data);
        setNo_of_students(data?.data?.no_of_students);
        setNo_of_tto(data?.data?.no_of_tto);
        setNo_of_hod(data?.data?.no_of_hod);
        setNo_of_faculty(data?.data?.no_of_faculty);
        setNo_of_subjects(data?.data?.no_of_subjects);
        setNo_of_tpo(data?.data?.no_of_tpo);
        setNo_of_companies(data?.data?.no_of_placement_companies);
        setNo_of_admins(data?.data?.no_of_admin);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <div className='grid grid-flow-row'>
      <div className='grid grid-cols-3 gap-y-4 gap-x-4 h-fit place-content-center'>
        <Card title={"No. of Student"} number={no_of_students} />
        <Card title={"No. of Faculties"} number={no_of_faculty} />
        <Card title={"No. of TTO"} number={no_of_tto} />
        <Card title={"No. of TPO"} number={no_of_tpo} />
        <Card title={"No. of HOD"} number={no_of_hod} />
        <Card title={"No. of Admins"} number={no_of_admins} />
        <Card title={"No. of Subjects"} number={no_of_subjects} />
        <Card title={"No. of Companies placement"} number={no_of_companies} />
      </div>

      <div className='flex flex-row space-x-10'>
        <div className='w-3/6'><BarChart link={`http://localhost:3001/${role}/getStudentCountByDepartment/`} isYear={true}/></div>
        <div className='w-3/6'><BarChart link={`http://localhost:3001/${role}/getStudentNumberD2D/`} isYear={true}/></div>
      </div>
    </div>
  );
}

export default Dashboard_HOD;
