import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const menuData = [
  {
    id: 1,
    title: "Pancakes",
    category: "Breakfast",
    price: 8.99,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Omelette",
    category: "Breakfast",
    price: 7.5,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Burger",
    category: "Lunch",
    price: 12.99,
    img: "https://via.placeholder.com/150",
  },
    {
    id: 4,
    title: "Grilled Chicken",
    category: "Lunch",
    price: 14.25,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Vanilla Shake",
    category: "Shakes",
    price: 5.99,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Chocolate Shake",
    category: "Shakes",
    price: 6.5,
    img: "https://via.placeholder.com/150",
  },
];

function App() {
  const [items, setItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setItems(menuData);
      return;
    }
    setItems(menuData.filter((item) => item.category === category));
  };

  return (
    <div id="main">
      <h1>Menu</h1>

      <div className="btn-container">
        <button
          id="filter-btn-1"
          onClick={() => filterItems("Breakfast")}
        >
          Breakfast
        </button>

        <button
          id="filter-btn-2"
          onClick={() => filterItems("Lunch")}
        >
          Lunch
        </button>

        <button
          id="filter-btn-3"
          onClick={() => filterItems("Shakes")}
        >
          Shakes
        </button>

        <button
          id="filter-btn-all"
          onClick={() => filterItems("All")}
        >
          All
        </button>
      </div>

      <Menu items={items} />
    </div>
  );
}

export default App;

