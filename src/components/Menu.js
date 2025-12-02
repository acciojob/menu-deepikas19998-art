import React from "react";

function Menu({ items, activeCategory }) {
  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-container">
      {filtered.map((dish) => {
        const testId =
          dish.category === "Breakfast"
            ? "menu-item-breakfast"
            : dish.category === "Lunch"
            ? "menu-item-lunch"
            : "menu-item-shakes";

        return (
          <div className="menu-item" key={dish.id} data-test-id={testId}>
            <img src={dish.img} alt={dish.title} />
            <div className="menu-info">
              <h3>{dish.title}</h3>
              <p>{dish.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
