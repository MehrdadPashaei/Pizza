
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
                            key={menuItems.id}
                            id={menuItems.id}
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