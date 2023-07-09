import React from "react";
import '../styles/Menu.css'

function MenuItems ({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> ${name} </h1>
            <p> ${price} </p>
        </div>
    );
}

export default MenuItems;