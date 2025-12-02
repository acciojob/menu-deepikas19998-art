import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

import "../styles/App.css";

const allCategories = ["all", ...new Set(items.map(item => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (categoryName) => {
    setMenuItems(
      categoryName === "all"
        ? items
        : items.filter(item => item.category === categoryName)
    );
  };

  return (
    <main id="main">      
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
