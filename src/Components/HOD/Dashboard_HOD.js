import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Dashboard_HOD() {

  const [no_of_students, setNo_of_students] = useState(0);
  const [no_of_tto, setNo_of_tto] = useState(0);
  const [no_of_hod, setNo_of_hod] = useState(0);
  const [no_of_faculty, setNo_of_faculty] = useState(0);
  const [no_of_subjects, setNo_of_subjects] = useState(0);
  const [no_of_tpo, setNo_of_tpo] = useState(0);
  const [no_of_companies, setNo_of_companies] = useState(0);
  const [no_of_admins, setNo_of_admins] = useState(0);
  const [studentByDepartment, setStudentByDepartment] = useState();
  const [year , setYear] = useState(new Date().getFullYear());

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

  const getStudentsByDepartment = async () => {

    await axios.get(`http://localhost:3001/${role}/getStudentCountByDepartment/${year}`).then((data) => {
      console.log(data?.data);
      setStudentByDepartment(data?.data);
    },
      (error) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    getStudentsByDepartment();
  }, [year]);

  const dropdown = [];
  for(let i = 2000 ; i < new Date().getFullYear() ; i++)
  {
    dropdown.push(<option value={i}>{i}</option>);
  }


  return (
    <div className=' grid grid-flow-row'>
      <div className='grid grid-cols-3 gap-y-4 gap-x-4 h-fit place-content-center'>
          <Card title={"No. of Students"} number={no_of_students}/>
          <Card title={"No. of Faculties"} number={no_of_faculty}/>
          <Card title={"No. of TTO"} number={no_of_tto}/>
          <Card title={"No. of TPO"} number={no_of_tpo}/>
          <Card title={"No. of HOD"} number={no_of_hod}/>
          <Card title={"No. of Admins"} number={no_of_admins} />
          <Card title={"No. of Subjects"} number={no_of_subjects} />
          <Card title={"No. of Companies came for placement"} number={no_of_companies} />
      </div>

      <div className=' h-fit px-2 py-2 w-2/3'>
        <select className="form-select" aria-label="Default select example" onChange={(e) => setYear(e.target.value)}>
          <option value={new Date().getFullYear()} selected> {new Date().getFullYear()} </option>
          {dropdown}
        </select>
        <Bar data={{ labels: studentByDepartment?.map((item) => item._id), datasets: [{ label: "No. of Students", data: studentByDepartment?.map((item) => item.count), backgroundColor: "rgba(255, 99, 132, 0.2)", borderColor: "rgba(255, 99, 132, 1)", borderWidth: 1 }] }} options={{ indexAxis: 'x'}} />
      </div>
    </div>
  )
}

export default Dashboard_HOD