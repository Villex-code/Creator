import React from "react";
import "./header.scss";
import { BsClipboardData } from "react-icons/bs";
import { ImDatabase } from "react-icons/im";
import { MdDataExploration, Md4GMobiledata } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Video from "../../assets/bg.mp4";
import { Link } from "react-router-dom";
import Animated from "../../SmallComp/AnimatedBG/Animated";

const Header = () => {
  return (
    <section className="header__section">
      <Animated className="animated__adjusted" />
      <div className="header__inside">
        <h4>
          We analyse your data <br /> & take data-driven decisions that
          <br />
          help you grow{" "}
        </h4>
        <h5>
          Co-Found by Vasilis D. and Kostantinos P. <br />
          Currently doing business worldwide
        </h5>
        <Link to="/work">
          <button className="header__button">Check out our Work</button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
