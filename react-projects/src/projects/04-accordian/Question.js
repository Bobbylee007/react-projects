import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="">
      <header className="question">
        <h4>{title}</h4>
        <button
          className="btn-accordian question"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <CiCircleMinus className="icon" />
          ) : (
            <CiCirclePlus className="icon" />
          )}
        </button>
      </header>
      {showInfo && <p className="info">{info}</p>}
    </article>
  );
};

export default Question;
