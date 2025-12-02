import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const dishes = [
  {
    id: 1,
    title: "Pancakes",
    category: "Breakfast",
    price: "$8.99",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Omelette",
    category: "Breakfast",
    price: "$7.99",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Burger",
    category: "Lunch",
    price: "$12.99",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    title: "Sandwich",
    category: "Lunch",
    price: "$10.99",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    title: "Chocolate Shake",
    category: "Shakes",
    price: "$5.99",
    img: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    title: "Vanilla Shake",
    category: "Shakes",
    price: "$5.49",
    img: "https://via.placeholder.com/150"
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <div id="main">
      <h1 className="title">Menu</h1>

      {/* Category Buttons */}
      <div className="btn-container">
        <button
          id="filter-btn-1"
          onClick={() => handleFilter("Breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          onClick={() => handleFilter("Lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          onClick={() => handleFilter("Shakes")}
        >
          Shakes
        </button>
      </div>

      <Menu items={dishes} activeCategory={activeCategory} />
    </div>
  );
}

export default App;
