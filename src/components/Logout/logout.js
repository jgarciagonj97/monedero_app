import React from "react";
import "./styles.css";
import { useHistory, useState } from "react-router-dom";


const Logout = () => {

    //Función para deslogarte de la aplicación y redirigir a la Home
    const history = useHistory();
    const handleClick = () => {
        localStorage.removeItem('token');
        history.push("/");
        document.body.classList.remove("background");
    }

    return (
        <div>
            <button className="btn btn-small btn-primary logout" onClick={handleClick}>
                Logout
            </button>
        </div>
    );
};

export default Logout;