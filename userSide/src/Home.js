
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';




function Home() {


    // ===========  Get Product start ======================= // 

    const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/admintest/connection/dashbord/get_product.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const productId = () => {
    const ids = data.map(item => item.id);
  
    return ids.length;
  };
  
  const idCount = productId();

  console.log(`Number of IDs in data: ${idCount}`);


      // ===========  Get Product end ======================= // 



  
// ===========  Get Categorie start ======================= // 

  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/admintest/connection/dashbord/get_categories.php')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const categoriesId = () => {
    const ids = categories.map(item => item.id);
  
    return ids.length;
  };
  
  const idCountCategories = categoriesId();

  console.log(`Number of IDs in data: ${idCountCategories}`);
  
// ===========  Get Categorie end ======================= // 


// ===========  Get Users start ======================= // 


const [users, setUsers] = useState([]);
  

useEffect(() => {
  axios.get('http://localhost/admintest/connection/dashbord/get_users.php')
    .then(response => {
        setUsers(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


const usersId = () => {
  const ids = users.map(item => item.id);

  return ids.length;
};

const idCountUsers= usersId();

console.log(`Number of IDs in data: ${idCountUsers}`);


// ===========  Get Users end ======================= // 




// ===========  Get orders start ======================= // 



const [orders, setOrders] = useState([]);
  

useEffect(() => {
  axios.get('http://localhost/admintest/connection/orders/orders.php')
    .then(response => {
      setOrders(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);


const orderId = () => {
  const ids = orders.map(item => item.id);

  return ids.length;
};

const idOrderUsers= orderId();

console.log(`Number of IDs in data: ${idOrderUsers}`);

// ===========  Get Orders end ======================= // 

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{idCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{idCountCategories}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Users</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{idCountUsers}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{idOrderUsers}</h1>
            </div>
        </div>

        
    </main>
  )
}

export default Home