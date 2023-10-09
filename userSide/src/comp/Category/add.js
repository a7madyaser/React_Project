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

        const url = 'http://localhost/admintest/connection/category/add.php';

        axios.post(url , inputs)


            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/categories');


                console.log(inputs)
            })
            .catch(error => {
                console.error("Error:", error);
            });

            // console.log("Request Data:", inputs);

    }
    
    return (
        <div id="ediCtmaindiv">
        <form id="form" onSubmit={submitData}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

               
                    
                    <tr>
                        
                        <td><input type="text" required name="name" onChange={changed} /></td>
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
