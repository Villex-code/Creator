import { useState } from "react";
import React from "react";
import "./checklistitem.scss";

const ChecklistItem = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="clitem__container">
      <button
        className={
          clicked ? "clitem__button-clicked" : "clitem__button-not-clicked"
        }
        onClick={() => setClicked(!clicked)}
      >
        {props.details}
      </button>
    </div>
  );
};

export default ChecklistItem;
