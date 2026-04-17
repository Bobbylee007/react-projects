import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <CiCircleMinus /> : <CiCirclePlus />}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
