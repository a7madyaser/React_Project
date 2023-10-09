import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';





function Add() {

    const navigate = useNavigate();

    const [inputs , setInputs ] = useState({});

    const changed = (e) =>{
        const name  = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values , [name]: value}));
    
    }
    
    const submitData = (e) =>{
        e.preventDefault();

        console.log("Form Data:", inputs);

        const url = 'http://localhost/admintest/connection/users/add.php';

        axios.post(url , inputs)


            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/users');
                console.log(inputs)
            })
            .catch(error => {
                console.error("Error:", error);
            });

            // console.log("Request Data:", inputs);

    }
    
    return (
        <div id="editUmaindiv">
        <form id="form" onSubmit={submitData}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                       
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

               
                    
                    <tr>
                        
                        <td><input type="text" required name="fname" onChange={changed} /></td>
                        <td><input type="text" required name="lname" onChange={changed} /></td>
                        <td><input type="text" required name="email" onChange={changed} /></td>
                        <td><input type="text" required name="password" onChange={changed} /></td>
                        <td>
                            <button type="submit" className="btn btn-info add-new">Add</button>
                        </td>
                    </tr>
                 
                </tbody>
            </table>
        </form>
    </div>
    );
}

export default Add ;
