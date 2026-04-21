import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const Accordian = () => {
    const [questions, setQuestions] = useState(data)
  return (
    <main className="accordian">
      <h3>questions and answers about login</h3>
      <section className="">
        {
            questions.map((question)=>{
                return <SingleQuestion key={question.id} {...question} /> 
            })
        }
        
      </section>
    </main>
  );
};

export default Accordian;
