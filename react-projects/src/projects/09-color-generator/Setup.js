import React, { useState } from "react";
import Palletes from "./Palletes";
import Values from "values.js";

const Setup = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)

    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container"></section>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
          className={`${error?'error': null}`}
        />
        <button className="btn" type="submit">
          submit
        </button>
      </form>
      <section className="colors">
        {list.map((color, index)=>{
        
            return <Palletes key={index} {...color} index={index} hexColor={color.hex}/>;
        })}
      </section>
    </>
  );
};

export default Setup;
