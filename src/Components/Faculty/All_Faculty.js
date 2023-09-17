import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAll from '../ViewAll';

function All_Faculty() {
  const [data, setData] = useState();

  const getData = () => {
    axios.get(`http://localhost:3001/faculty/getAllFacultyDetails`).then((data) => {
      console.log(data?.data);
      setData(data?.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  // Inline CSS styles for the <div>All_Faculty</div> element
  const divStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    textAlign: 'center',
  };

  // Inline CSS styles for the title
  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  return (
    <div style={divStyle}>
      <div style={titleStyle}>All_Faculty</div>
      <div>
        {data !== undefined && <ViewAll data={data} />}
      </div>
    </div>
  );
}

export default All_Faculty;
