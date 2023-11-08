import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

import "./Header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

//data
import menuItems from "../../data/menu";
import MenuItem from "./MenuItem/MenuItem";
import { useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import Dropdown from "./Dropdown/Dropdown";

export default function Header() {
  const [openSidebar, setOpensidebar] = useState(false);

  const handleSidebar = (open) => {
    setOpensidebar(open);
  };

  return (
    <header className="container header">
      <nav className="nav">
        <Logo />

        <ul className="nav-menu">
          {menuItems
            .filter((menu) => menu.category === "nav-menu")
            .map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
        </ul>

        <div className="hamburger-menu-wrapper">
          <HamburgerMenu onOpenSidebar={handleSidebar} />
        </div>

        <ul className="nav-menu nav-links">
          {menuItems
            .filter((item) => item.category === "nav-link")
            .map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
        </ul>

        {openSidebar && (
          <aside className="side-bar">
            {menuItems.map((item) => (
              <Dropdown key={item.id} {...item} />
            ))}
          </aside>
        )}
      </nav>
    </header>
  );
}
