import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/Header.css"
import Logo from '../assets/pizzaLogo.png'
const Header = () => {
    // const [openLinks, setOpenLinks] = useState(false);
    //
    // const toggleNavbar = () => {
    //     setOpenLinks(!openLinks);
    // };
    return (
        <div className="header" >
            <div className="leftside">
                <img className='logo-img' src={Logo} alt="logo"/>
            </div>
            <div className="rightside">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/menu" className="link">Menu</NavLink>
                <NavLink to="/about" className="link">About</NavLink>
                <NavLink to="/contact" className="link">Contact</NavLink>
            </div>

        </div>
    );
};

export default Header;