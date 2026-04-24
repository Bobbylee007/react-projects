import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import data from "./data";

const Slider = () => {
  const [people, setpeople] = useState(data);
  // set index that will change when click slider buttin
  const [index, setIndex] = useState(0);
  //useEffect to hold functionality that will change dynamically

  return (
    <section className="slider-content">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="slider-center">
        {people.map((person, index) => {
          const { id, img, name, title, quote } = person;
          //more stuff coming up
          return (
            <article key={id} className="slider">
              <img src={img} alt={name} className="slider-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="slider-icon" />
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
