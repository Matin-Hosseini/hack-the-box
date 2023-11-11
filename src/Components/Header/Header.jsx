import { useState } from "react";

//third-party components
import { Link } from "react-router-dom";

//local-files
import "./Header.css";
import Logo from "../Logo/Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import MenuItem from "./MenuItem/MenuItem";
import Dropdown from "./Dropdown/Dropdown";

//hooks
import useScrollDirection from "../../hooks/useScrollDirection";

//data
import menuItems from "../../data/menu";

export default function Header() {
  const [openSidebar, setOpensidebar] = useState(false);
  const scrollDirection = useScrollDirection();

  const handleSidebar = (open) => {
    setOpensidebar(open);
  };

  return (
    <header
      className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className="container-lg">
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
      </div>
    </header>
  );
}
