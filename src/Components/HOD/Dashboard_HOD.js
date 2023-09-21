import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import BarChart from './BarChart';

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

  const getAllNumbers = async() => {
    
    await axios.get(`http://localhost:3001/${role}/getAllNumbers`).then((data) => {
      console.log(data?.data);
      setNo_of_students(data?.data?.no_of_students);
      setNo_of_tto(data?.data?.no_of_tto);
      setNo_of_hod(data?.data?.no_of_hod);
      setNo_of_faculty(data?.data?.no_of_faculty);
      setNo_of_subjects(data?.data?.no_of_subjects);
      setNo_of_tpo(data?.data?.no_of_tpo);
      setNo_of_companies(data?.data?.no_of_placement_companies);
      setNo_of_admins(data?.data?.no_of_admin);
    }
      , (error) => {
        console.log(error);
      }
    );

  }

  useEffect(() => {
    getAllNumbers();
  }, []);


  return (
    <div className=' grid grid-flow-row'>
      <div className='grid grid-cols-3 gap-y-4 gap-x-4 h-fit place-content-center'>
          <Card title={"No. of Students Currently Enrolled"} number={no_of_students}/>
          <Card title={"No. of Faculties"} number={no_of_faculty}/>
          <Card title={"No. of TTO"} number={no_of_tto}/>
          <Card title={"No. of TPO"} number={no_of_tpo}/>
          <Card title={"No. of HOD"} number={no_of_hod}/>
          <Card title={"No. of Admins"} number={no_of_admins} />
          <Card title={"No. of Subjects"} number={no_of_subjects} />
          <Card title={"No. of Companies came for placement"} number={no_of_companies} />
      </div>

      <div className='grid grid-cols-2'>
        <BarChart link={`http://localhost:3001/${role}/getStudentCountByDepartment/`} isYear={true}/>
        <BarChart link={`http://localhost:3001/${role}/getStudentNumberD2D/`} isYear={true}/>
      </div>
    </div>
  )
}

export default Dashboard_HOD