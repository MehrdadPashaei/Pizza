import React from "react";
import '../styles/MenuItems.css'
import {Link} from "react-router-dom";

function MenuItems ({id, image, name, price }) {

    return (
        <Link to={`/menu/${id}`}>
        <div className="menuItem">
            <img className='image' src={image} alt="items"/>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
        </Link>
    );
}

export default MenuItems;