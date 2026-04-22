import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";


// 2nd approach setup for unique value using set-data structure
// map all data use new set for unique value(reduce to 1 each) and convert from object to array by spread operator
const allCategories = ['all', ...new Set(items.map((item)=>item.category))]
console.log(allCategories);



const Menus = () => {
  const [menuItems, setMenuItems] = useState(items); //manual approach
  const [category, setCategories] = useState(allCategories); //dynamic approach

  
  const filterItems = (category) => {
    //1st approach for all btn 
  if (category === 'all') {
    setMenuItems(items)
    return
  }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return (
    <main>
      <secion className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={category} filterItems={filterItems} />
        <Menu items={menuItems} />
      </secion>
    </main>
  );
};

export default Menus;
