import React from "react";
import data from "./data";
import List from "./List";

import ".//index.css";

function App() {
  return (
    <main>
        <section className="container">
            <h3>0 birthdays today</h3>
            <List className='item'/>
        </section>
     
    </main>
  );
}

export default App;
