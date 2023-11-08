import "./Dropdown.css";

import { useState } from "react";
import { BsChevronDown, BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Dropdown({ id, name, link, category, subMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__head" onClick={() => setOpen((prev) => !prev)}>
        <Link to={link} className="dropdown__link">
          {name}
        </Link>
        <div className={`${subMenu?.length === 0 && "d-none"}`}>
          <BsChevronDown className={`arrow-down-icon ${open && "open"}`} />
        </div>
      </div>
      <div className={`dropdown__items ${open && "show"}`}>
        {subMenu?.map((item) => (
          <DropdownItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function DropdownItem({ id, title, subTitle, subLink }) {
  return (
    <Link to={subLink} className="dropdown__sub-link">
      <h2>{title}</h2>
      <span>{subTitle}</span>
    </Link>
  );
}
