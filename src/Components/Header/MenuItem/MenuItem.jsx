import "./MenuItem.css";

import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

export default function MenuItem({ id, name, link, subMenu, primaryBtn }) {
  return (
    <>
      <li className="nav-menu__item">
        <Link
          to={link}
          className={`nav-menu__link ${primaryBtn && "btn-primary"}`}>
          {name}
        </Link>
        {subMenu?.length > 0 && (
          <ul className="sub-menu">
            {subMenu.map((menu) => (
              <SubMenu key={menu.id} {...menu} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export function SubMenu({ id, subLink, title, subTitle }) {
  return (
    <li className="sub-menu__item">
      <Link to={subLink} className="sub-menu__link">
        <h2>
          {title}
          <BsArrowRight className="arrow-right" />
        </h2>
        <span>{subTitle}</span>
      </Link>
    </li>
  );
}
