import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function BarChart(props) {

    const [data, setData] = useState();
    const [year, setYear] = useState(new Date().getFullYear());
    
    const url = props.link + (props.isYear ? `${year}` : "");
    console.log(url);

    const getData = async () => {

        await axios.get(url).then((data) => {
        console.log(data?.data);
        setData(data?.data);
    },
        (error) => {
        console.log(error);
        }
    );
    }

    useEffect(() => {
    getData();
    }, [year]);

    const dropdown = [];
    for(let i = 2000 ; i < new Date().getFullYear() ; i++)
    {
        dropdown.push(<option value={i}>{i}</option>);
    }
    
  return (
    <div className=' h-fit px-2 py-2 border-2 shadow-md'>
        <select className="form-select" aria-label="Default select example" onChange={(e) => setYear(e.target.value)}>
          <option value={new Date().getFullYear()} selected> {new Date().getFullYear()} </option>
          {dropdown}
        </select>
      <Bar data={{
        labels: data?.map((item) => item._id), datasets: [{
          label: "No. of Students", data: data?.map((item) => item.count), backgroundColor: "rgba(74,144,226,0.3)",
          borderColor: "rgba(74,144,226,1)", borderWidth: 1
        }]
      }} options={{ indexAxis: 'x', aspectRatio: 1  , }} />
    </div>
  )
}

export default BarChart