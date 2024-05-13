import { Link } from "react-router-dom";
import "./Logo.css";
import logo from './../../assets/images/logo/logo.svg'

export default function Logo() {
  return (
    <h2 className="logo">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </h2>
  );
}
