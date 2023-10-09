import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


function Edit() {

    const {id}  = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({});

   

    useEffect(() => {
        axios.get('http://localhost/admintest/connection/users/getuser.php')
            .then(response => {
                console.log(response); 
                setData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    const [inputs , setInputs ] = useState({});

    const changed = (e) => {
        const name = e.target.name;
        const fileInput = e.target;
    
        if (name === "photo") {
            // Extract just the filename from the full path
            const fileName = fileInput.value.split("\\").pop();
            // Add the path before the filename
            const filePath = "/img/" + fileName;
    
            // Create a new object to update the state
            const updatedInputs = { ...inputs, [name]: filePath };
            setInputs(updatedInputs);
        } else {
            // For other input fields, directly set the value in the state
            setInputs((values) => ({ ...values, [name]: e.target.value }));
        }
    };
    
    const submit = (e) =>{
        e.preventDefault();

       const url = `http://localhost/admintest/connection/products/edit.php?id=${id}`;
        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/products');
            })
            .catch(error => {
                console.error("Error:", error);
            });


            console.log(inputs);
            
    }

   
   
   // ...
return (
    <div id="editPmaindiv">
        <form id="form" onSubmit={submit}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Id</th>
            <th>Name </th>
            <th>Price</th>
            <th>Details	</th>
            <th>Photo</th>
            <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                
                    
                    <tr>
                        <td><input type="text" value="" name="id" onChange={changed} /></td>
                        <td><input type="text" required placeholder= "" name="name" onChange={changed} /></td>
                        <td><input type="text" required placeholder= "" name="price" onChange={changed} /></td>
                        <td><input type="text" required placeholder= "" name="details" onChange={changed} /></td>
                        <td><input type="file" required placeholder= "" name="photo" onChange={changed} /></td>
                        <td>
                            <button type="submit" className="btn btn-info add-new">Save</button>
                        </td>
                    </tr>
              
                </tbody>
            </table>
        </form>
    </div>
);
// ...

}

export default Edit ;
