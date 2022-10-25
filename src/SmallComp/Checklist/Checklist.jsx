import React from "react";
import { useState } from "react";
import "./checklist.scss";
import jQuery from "jquery";

const Checklist = () => {
  return (
    <div className="checklist__container">
      <div className="checklist__items">
        <span className="span__item tem1">Social Media</span>
        <span className="span__item tem2">Business Development</span>
        <span className="span__item tem3">Opportunity Finder</span>
        <span className="span__item tem4">E-commerce</span>
        <span className="span__item tem5">Strategic Growth</span>
        <span className="span__item tem6">Other</span>
      </div>
    </div>
  );
};

export default Checklist;
