import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';
import '../all.css';

// Shorter Alias Mapping
const aliasMapping = {
  subject_code: 'Sub Code',
      subject_name: 'Sub Name',
      subject_credit: 'Sub Cred',
      subject_alias: 'Sub Alias',
      semester: 'Sem',
      theory_min_passing_marks: 'Theory Min',
      theory_min_passing_marks2: 'Theory M2',
      theory_total_marks: 'Theory Tot',
      sessional_min_passing_marks: 'Sessional Min',
      sessional_min_passing_marks2: 'Sessional M2',
      sessional_total_marks: 'Sessional Tot',
      practical_min_passing_marks: 'Prac Min',
      practical_min_passing_marks2: 'Prac M2',
      practical_total_marks: 'Prac Tot',
      isElective: 'Is Elective',
};

function All_Courses() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get(`http://localhost:3001/student/getAllCourseDetails`)
      .then((response) => {
        const fetchedData = response?.data?.courseDetails || [];
        // Apply alias mapping to each data item
        const mappedData = fetchedData.map((item) => {
          const mappedItem = {};
          for (const key in item) {
            if (key in aliasMapping) {
              mappedItem[aliasMapping[key]] = item[key];
            }
          }
          return mappedItem;
        });
        setData(mappedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <div className='divStyle'>
      <div className='textStyle'>All_Courses</div>
      <div className='grid place-items-center h-screen'>
        {data.length > 0 && <ViewAll data={data} setRefresh={setRefresh} refresh={refresh} />}
      </div>
    </div>
  );
}

export default All_Courses;
