import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import data from "./data";

const Slider = () => {
  const [people, setpeople] = useState(data);
  // set index that will change when click slider buttin
  const [index, setIndex] = useState(0);
  //useEffect to hold functionality that will change dynamically

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
       if (index > lastIndex) {
         setIndex(0);
       }
  }, [index, people]);

  useEffect(()=>{
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);

    return () => clearInterval(slider)

  },[index])
  
  return (
    <section className="slider-content">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="slider-center">
        {people.map((person, personIndex) => {
          const { id, img, name, title, quote } = person;
          //more stuff coming up
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={img} alt={name} className="slider-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="slider-icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
