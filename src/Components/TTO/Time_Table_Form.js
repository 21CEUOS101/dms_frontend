import React, { useState, useEffect } from 'react';
import '../form.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function TimeTableBlockForm() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('');
  const [error, setError] = useState();

  const schema = yup.object().shape({
    time_table_block_id: yup.string().required('ID is required'),
    time_table_id: yup.string().required('Time Table ID is required'),
    time_table_block_day: yup.string().required('Day is required'),
    time_table_block_time: yup.string().required('Time is required'),
    time_table_block_subject: yup.string().required('Subject is required'),
    time_table_block_faculty: yup.string().required('Faculty is required'),
    time_table_block_room_no: yup.string().required('Room Number is required'),
    time_table_block_department: yup.string().required('Department is required'),
    time_table_block_semester: yup.string().required('Semester is required'),
    time_table_block_section: yup.string().required('Section is required'),
    time_table_block_section_no: yup.string().required('Section Number is required'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
    reset();
  };

  const createTimeTableBlock = async () => {
    console.log('createTimeTableBlock');
    await axios.post('http://localhost:3001/tto/addTimeTableBlockDetails', data).then(
      (data) => {
        console.log(data?.data);
        if (data?.data?.message?.errors !== undefined) {
          setError(data?.data?.message?._message);
        } else {
          setStatus(data?.data?.message);
          setTimeout(() => {
            setStatus('');
          }, 2000);
        }
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  };

  useEffect(() => {
    if (data !== undefined && data !== null) {
      console.log(JSON.stringify(data));
      createTimeTableBlock();
    }
  }, [data]);

  return (
    <div className="col-xxl grid place-items-center">
      <div className="card mb-4 h-auto w-fit" style={{ width: '80%', padding: '20px' }}>
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Time Table Block Form</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            {/* Add form fields here */}
            {/* ID */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_id">Time Table Block ID</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_id" name="time_table_block_id" required {...register('time_table_block_id')} />
                <p className="text-danger">{errors?.time_table_block_id?.message}</p>
              </div>
            </div>
            {/* Time Table ID */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_id">Time Table ID</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_id" name="time_table_id" required {...register('time_table_id')} />
                <p className="text-danger">{errors?.time_table_id?.message}</p>
              </div>
            </div>
            {/* Day */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_day">Day</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_day" name="time_table_block_day" required {...register('time_table_block_day')} />
                <p className="text-danger">{errors?.time_table_block_day?.message}</p>
              </div>
            </div>
            {/* Time */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_time">Time</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_time" name="time_table_block_time" required {...register('time_table_block_time')} />
                <p className="text-danger">{errors?.time_table_block_time?.message}</p>
              </div>
            </div>
            {/* Subject */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_subject">Subject</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_subject" name="time_table_block_subject" required {...register('time_table_block_subject')} />
                <p className="text-danger">{errors?.time_table_block_subject?.message}</p>
              </div>
            </div>
            {/* Faculty */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_faculty">Faculty</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_faculty" name="time_table_block_faculty" required {...register('time_table_block_faculty')} />
                <p className="text-danger">{errors?.time_table_block_faculty?.message}</p>
              </div>
            </div>
            {/* Room Number */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_room_no">Room Number</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_room_no" name="time_table_block_room_no" required {...register('time_table_block_room_no')} />
                <p className="text-danger">{errors?.time_table_block_room_no?.message}</p>
              </div>
            </div>
            {/* Department */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_department">Department</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_department" name="time_table_block_department" required {...register('time_table_block_department')} />
                <p className="text-danger">{errors?.time_table_block_department?.message}</p>
              </div>
            </div>
            {/* Semester */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_semester">Semester</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_semester" name="time_table_block_semester" required {...register('time_table_block_semester')} />
                <p className="text-danger">{errors?.time_table_block_semester?.message}</p>
              </div>
            </div>
            {/* Section */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_section">Section</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_section" name="time_table_block_section" required {...register('time_table_block_section')} />
                <p className="text-danger">{errors?.time_table_block_section?.message}</p>
              </div>
            </div>
            {/* Section Number */}
            <div className="row mb-3">
              <div className="col-sm-4" style={{ textAlign: 'left' }}>
                <label htmlFor="time_table_block_section_no">Section Number</label>
              </div>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="time_table_block_section_no" name="time_table_block_section_no" required {...register('time_table_block_section_no')} />
                <p className="text-danger">{errors?.time_table_block_section_no?.message}</p>
              </div>
            </div>
            {/* Submit Button */}
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
            {/* Status and Error Messages */}
            {status !== '' && <p>{status}</p>}
            {error !== '' && <p className="text-danger">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default TimeTableBlockForm;