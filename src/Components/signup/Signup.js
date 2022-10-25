import React from "react";
import "./signup.scss";
import Checklist from "../../SmallComp/Checklist/Checklist";
import ChecklistItem from "../../SmallComp/ChecklistItem/ChecklistItem";

const Signup = () => {
  return (
    <section className="signup__section">
      <div className="contact__form">
        <h1>Hire us</h1>
        <div className="contact__fill-in">
          <p>
            Hello, My name is <input type="text" placeholder="  your name" />{" "}
            and I want to discuss a potential project. <br />
            <br /> You can email me at{" "}
            <input type="text" placeholder="  your email" /> or reach me on{" "}
            <input type="text" placeholder="  your phone" /> .
            <br />
            <br />I am intrested in:
            <div className="in_here_checklist">
              <ChecklistItem details="Business Development" />
              <ChecklistItem details="Opportunity Finder" />
              <ChecklistItem details="Social Media" />

              <ChecklistItem details="Sales Management" />

              <ChecklistItem details="Strategic Growth" />

              <ChecklistItem details="Other" />
            </div>
            A little something about my project:
            <br />
            <br />
            <textarea name="message" id="message" cols="30" rows="4"></textarea>
          </p>
          <button className="contact__button">Submit and Reserve</button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
