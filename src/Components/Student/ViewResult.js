import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExamResult from '../ExamResult';
import { useParams } from 'react-router-dom';

function ViewResult() {
    const { id } = useParams();
    const [data, setData] = useState();

    const getData = () => {
        axios.get(`https://dms2901.onrender.com/student/getStudentExamResult/${id}`).then((data) => {
            console.log(data?.data);
            setData(data?.data);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    // Inline CSS styles for the main container
    const containerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    // Inline CSS styles for the box
    const boxStyle = {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
        <div style={containerStyle}>
            <div style={boxStyle}>
                <div style={titleStyle}>View Result</div>
                <div>
                    {data !== undefined && <ExamResult data={data} />}
                </div>
            </div>
        </div>
    );
}

export default ViewResult;
