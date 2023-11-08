import { useEffect, useState } from "react";

import "./HamburgerMenu.css";

export default function HamburgerMenu({ onOpenSidebar }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onOpenSidebar(open);
  }, [open]);

  return (
    <div
      className={`hamburger-menu ${open && "open"}`}
      onClick={() => setOpen((prev) => !prev)}>
      <span className="hamburger-menu__link"></span>
    </div>
  );
}
