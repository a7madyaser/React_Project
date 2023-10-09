import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('the id: ' + id);
    useEffect(() => {
        const url = `http://localhost/admintest/connection/users/delete.php?id=${id}`;
        axios.delete(url)
            .then(response => {
                console.log("User deleted:", response.data);
                navigate('/users');

            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);

    return (
        <div>
            Deleting User...
        </div>
    );
}

export default Delete;
