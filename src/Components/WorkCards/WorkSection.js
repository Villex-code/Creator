import React from "react";
import "./worksection.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const WorkSection = () => {
  return (
    <section className="work__container">
      <div className="all__items">
        <article className="work__item">
          <img src={IMG1} alt="work image" />
          <h3>This is a portfolio item title</h3>
          <div className="work__cta">
            <a href="/work">Check it out</a>
            <a href="/work">Get contact</a>
          </div>
        </article>
        <article className="work__item">
          <img src={IMG2} alt="work image" />
          <h3>This is a portfolio item title</h3>
          <div className="work__cta">
            <a href="/work">Check it out</a>
            <a href="/work">Get contact</a>
          </div>
        </article>
        <article className="work__item">
          <img src={IMG3} alt="work image" />
          <h3>This is a portfolio item title</h3>
          <div className="work__cta">
            <a href="/work">Check it out</a>
            <a href="/work">Get contact</a>
          </div>
        </article>
        <article className="work__item">
          <img src={IMG4} alt="work image" />
          <h3>This is a portfolio item title</h3>
          <div className="work__cta">
            <a href="/work">Check it out</a>
            <a href="/work">Get contact</a>
          </div>
        </article>
        <article className="work__item">
          <img src={IMG5} alt="work image" />
          <h3>This is a portfolio item title</h3>
          <div className="work__cta">
            <a href="/work">Check it out</a>
            <a href="/work">Get contact</a>
          </div>
        </article>
        <article className="work__item">
          <img src={IMG6} alt="work image" />

          <h3>This is a portfolio item title</h3>
          <div className="work__cta">
            <a href="/work">Check it out</a>
            <a href="/work">Get contact</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkSection;
