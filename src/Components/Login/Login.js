import React, { useContext, useEffect, useState } from 'react'
import './login.css';
import 'boxicons/css/boxicons.min.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppContext } from '../../App';
import axios from 'axios';

function Login() {

    const [data, setData] = useState();
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const schema = yup.object().shape(
        {
            id: yup.string().required("Id is required").min(5),
            password: yup.string().required("Password is required").test((value) => {
                return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
            }),
            role : yup.string().required("Role is required").oneOf(["student","faculty","hod","tto","tpo","admin"]),
            isRemember : yup.boolean(),
        }
    )

    const { register, handleSubmit , formState : {errors} } = useForm({
            resolver : yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        setData(data);
    } 

    const login = (user_id , role , password) => {
        const data = {
            user_id: user_id,
            role: role,
            password : password
        }
        axios.post('http://localhost:3001/login' , data).then((data) => {
            if (data.data.status == "success")
            {
                setIsLoggedIn(true);
                localStorage.setItem("user", JSON.stringify({
                    user_id: user_id,
                    role: role,
                    password: password
                }));
            }
            else
            {
                setIsLoggedIn(false);
            }
        })
    } 

    useEffect(() => {
        login(data?.id, data?.role, data?.password);
    }, [data]);
  return (
      <>
        <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
            <div className="card">
                <div className="card-body">
                
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="mb-3">
                    <label htmlFor="id" className="form-label  d-flex justify-content-between">Login</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        placeholder="User Id"
                        autoFocus
                        {...register("id")}
                    />
                    <p className='form-error'>{errors?.id?.message}</p>
                    </div>
                    <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <a href="auth-forgot-password-basic.html">
                        <small>Forgot Password?</small>
                        </a>
                    </div>
                    <div className="input-group input-group-merge">
                        <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="dd/mm/yyyy"
                        aria-describedby="password"
                        {...register("password")}
                        />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                    </div>
                    <p className='form-error'>{errors?.password?.message}</p>
                    <div className="mb-3 ">
                            <label htmlFor="role" className="form-label d-flex justify-content-between">Role</label>
                            <select
                                {...register("role")}
                                id="role"
                                name="role"
                                className="form-select"
                                >
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                                <option value="hod">HOD</option>
                                <option value="tto">TTO</option>
                                <option value="tpo">TPO</option>
                                <option value="admin">Admin</option>
                            </select>
                    </div>
                    <p className='form-error'>{errors?.role?.message}</p>
                    </div>
                    <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-me" {...register("isRemember")} />
                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                    </div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
          </div>
          
          <p>{isLoggedIn && "Login Successful"}</p>
      </>
  )
}

export default Login