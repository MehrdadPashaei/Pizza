import React from 'react';
import {MenuList} from "../helpers/MenuList.js";
import {useParams} from "react-router-dom";
import '../styles/ItemDetails.css'

const ItemDetails = () => {
    const {id} = useParams();
    const name = MenuList[id-1].name
    const image = MenuList[id-1].image;
    const price = MenuList[id-1].price;
    const detail = MenuList[id-1].detail;
    return (
        <div className="item-details">
            <img src={image} alt="items"/>
            <h1>{name}</h1>
            <h3>$ {price}</h3>
            <p>{detail}</p>
        </div>
    );
};

export default ItemDetails;