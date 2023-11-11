import "./FooterMenu.css"

import { Link } from "react-router-dom";

export default function FooterMenu({ header, menu }) {
  return (
    <div className="footer-menu">
      <span className="footer-menu__header">{header}</span>
      {menu.map((item) => (
        <Link key={item.id} to={`/${item.to}`} className="footer-menu__link">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
