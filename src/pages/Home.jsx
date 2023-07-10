import React from "react";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import Button from "../components/Button.jsx";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Pedro's Pizzeria </h1>
                <p> PIZZA TO FIT ANY TASTE</p>
                <Button/>
            </div>
        </div>
    );
}

export default Home;
