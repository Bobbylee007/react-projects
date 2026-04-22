import React from "react";

//this breakfast btn has 2approach
// 1. no btn fall
// 2. we not in-sync with our that means if they are change in our orignal data

// now we iterate or map the catergories. for each categories display button

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container item-inline">
      {/*       
      REMOVAL OF MANUAL BUTTONS:

      <button
        className="filter-btn"
        onClick={() => {
          filterItems("all");
        }}
      >
        all
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        breakfast
      </button> */}

      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
