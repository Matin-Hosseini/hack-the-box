import LogoWhite from "../Logo/Logo-white/Logo-white";
import "./Footer.css";

import { Link } from "react-router-dom";

//icons
import {
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoDiscordAlt,
} from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsTiktok } from "react-icons/bs";
import { LuRss } from "react-icons/lu";

//data
import footerMenu from "../../data/footer-menu";
import FooterMenu from "./FooterMenu/FooterMenu";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <div className="footer__primary">
              <LogoWhite />
              <div className="footer__primary-menu">
                <Link to={"/"}>HACKER</Link>
                <Link to={"/"}>BUSiNESS</Link>
                <Link to={"/"}>UNIVERSITY</Link>
              </div>
              <div className="footer__icons">
                <Link to={"/"}>
                  <BiLogoLinkedin />
                </Link>
                <Link to={"/"}>
                  <RiTwitterXLine />
                </Link>
                <Link to={"/"}>
                  <BsTiktok />
                </Link>
                <Link to={"/"}>
                  <BiLogoInstagram />
                </Link>
                <Link to={"/"}>
                  <BiLogoFacebook />
                </Link>
                <Link to={"/"}>
                  <BiLogoYoutube />
                </Link>
                <Link to={"/"}>
                  <BiLogoDiscordAlt />
                </Link>
                <Link to={"/"}>
                  <LuRss />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <FooterMenu {...footerMenu.products} />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <FooterMenu {...footerMenu.company} />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <FooterMenu {...footerMenu.resources} />
          </div>
          <div className="footer-bottom">
            <span>© 2023 Hack The Box</span>
            <Link to={"/"} className="footer-bottom__link">
              Lega & Compliance
            </Link>
            <Link to={"/"} className="footer-bottom__link">
              Acceptable Use Policy
            </Link>
            <Link to={"/"} className="footer-bottom__link">
              Website T&Cs
            </Link>
            <Link to={"/"} className="footer-bottom__link">
              Privacy Notice
            </Link>
            <Link to={"/"} className="footer-bottom__link">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
