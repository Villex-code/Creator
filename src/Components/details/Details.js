import React from "react";
import "./details.scss";
import { BsClipboardData } from "react-icons/bs";
import { ImDatabase } from "react-icons/im";

const Details = () => {
  return (
    <section className="mysectionlol">
      <div className="details__text">
        <h1>About us</h1>
        <p>
          Creator Portal is a startup aimed to <strong>assist</strong>{" "}
          businesses in the <strong>marketing</strong> and{" "}
          <strong>decision making</strong> sector. As a distributed team, we
          have gathered a lot of resources in our team to make this possible
          <br />
          <br />
          We believe in the power of <strong>Data</strong> , in order to create{" "}
          data-driven decisions while avoiding biases and giving a very
          well-rounded view to the business owner in order to make the right
          advancements.
          <br />
          <br />
          Does that sound <strong>interesting</strong> ?
        </p>
        <button className="details__cta">Let's Talk</button>
      </div>
    </section>
  );
};

export default Details;
