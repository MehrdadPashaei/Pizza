// import React from 'react';
// import {Link} from "react-router-dom";
//
// const Menu = () => {
//     return (
//         <div>
//             <h1>Menu</h1>
//             <ul>
//                <li><Link to="/products/1">Item1</Link></li>
//                <li><Link to="/products/2">Item2</Link></li>
//                <li><Link to="/products/3">Item3</Link></li>
//             </ul>
//         </div>
//     );
// };
//
// export default Menu;

import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItems from "../components/MenuItems";
import "../styles/Menu.css";

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItems, key) => {
                    return (
                        <MenuItems
                            key={key}
                            image={menuItems.image}
                            name={menuItems.name}
                            price={menuItems.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;