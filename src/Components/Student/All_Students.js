import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

function All_Students() {
    const [data, setData] = useState();
    const [refresh, setRefresh] = useState(false);

    const formate_student = (data) => {
        let formated_data = [];
        data.forEach((element) => {
            let temp = {
                _id : element._id,
                student_id: element.student_id,
                full_name: element.full_name,
                student_roll_number: element.student_roll_number,
                date_of_birth: element.date_of_birth,
                gender: element.gender,
            };
        formated_data.push(temp);
        });
        return formated_data;
    };

  const getData = () => {
      axios.get(`http://localhost:3001/student/getAllStudents`).then((data) => {
      console.log(formate_student(data?.data?.studentDetails));
      setData(formate_student(data?.data?.studentDetails));
    });
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Students</div>
      <div className='grid place-items-center h-screen'>
        {data !== undefined && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh}x/>}
      </div>
    </div>
  );
}
export default All_Students;
