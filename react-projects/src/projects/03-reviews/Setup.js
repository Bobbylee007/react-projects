import React from "react";
import "./styles.css";
import Review from './Review'

const Setup = () => {
  return (
    <>
      <main>
        <section>
             <div className="container">
            <div className="title">
                <h2>our reviews</h2>
                <div className="underline"></div>
            </div>
        </div>
        <Review />
        </section>
       
       
      </main>
    </>
  );
};

export default Setup;
