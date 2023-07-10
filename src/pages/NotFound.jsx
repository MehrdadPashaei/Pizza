import React from 'react';
import PageNotFond from '../assets/404-error-page-not-found-pizza.jpg'
import '../styles/NotFound.css'
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();
    const clickHandler = (e) =>{
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="notFound">
            <img className="img-notFound" src={PageNotFond} alt="404"/>
            <button className="btn" onClick={clickHandler}>Back To Home</button>
        </div>
    );
};

export default NotFound;