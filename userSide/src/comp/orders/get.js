import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';




function GetOrders() {


  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/admintest/connection/orders/orders.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);



  const sentid = (id) => {
    
    axios.post('http://localhost/admintest/connection/users/getuser.php',  id )
      .then(response => {
        // Handle the response, e.g., redirect to the edit page
        console.log('this the php :'+response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  
  return (
    <div id="mainOdiv">
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Total products</th>
            <th>Total price</th>
            <th>Payment status</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.user_id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.total_products}</td>
              <td>{item.total_price}</td>
              <td>{item.payment_status}</td>
              <td>{item.address}</td>
              
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default GetOrders;

