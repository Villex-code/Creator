import React from "react";
import Logo from "../../assets/logo.png";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Cbutton from "../../SmallComp/confetti/Confetti";

const Nav = () => {
  return (
    <nav className="nav__container container">
      <Link to="/">
        <img src={Logo} alt="Picture of Logo" className="nav__logo" />
      </Link>

      <div className="nav__icons">
        <AiOutlinePhone className="nav__icons-single icon__phone" />
        <Link to="/about">
          <TbGridDots className="nav__icons-single icon__dots" />
        </Link>
        <AiOutlineMail className="nav__icons-single icon__mail" />
      </div>

      <div className="nav__socials">
        <AiFillTwitterCircle />
        <FaLinkedin />
        <AiFillInstagram />
      </div>

      <div className="nav__words">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/work">
          <h4>Work</h4>
        </Link>
        <Link to="/about">
          <h4>About us</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact us</h4>
        </Link>
      </div>

      {/* The h3 should change depending on the section of the page */}
      <Link to="/contact">
        <Cbutton name="Contact" />
      </Link>
    </nav>
  );
};

export default Nav;
